import fs from "fs";

const getDirectoryFiles = (directory) => {
  return fs.readdirSync(directory, { recursive: true }).filter((file) => {
    const isBase = file.endsWith("base.json");
    const isBrand = file.endsWith("canvas.json");
    const isColor = file.includes("sys/color");
    const isSystem =
      file.includes("sys/") &&
      !file.includes("sys/brand") &&
      !file.includes("sys/color");

    return file.endsWith(".json") && isBase;
  });
};

const fillMdSwatch = (token, color, colorLabel) => {
  const label = colorLabel.replaceAll(" ", "%20");
  return `<img valign='middle' alt='${token} color swatch' src='https://md-color-swatches.vercel.app/${color}?top=24&left=48&text=${label}&tc=59636e&style=round'/>`;
};

const getContent = (filename) => {
  const content = fs.readFileSync(`${filename}`, "utf8");
  if (content) {
    return JSON.parse(content);
  }
};

const getOklchString = (value, { withComma = false } = {}) => {
  return withComma
    ? `oklch(${value.components.join(",")},${value.alpha})`
    : `oklch(${value.components.join(" ")} / ${value.alpha})`;
};

const generateNewChanges = (tokens, token) => {
  if ("value" in tokens) {
    const { value } = tokens;

    if (typeof value === "object" && value.colorSpace === "oklch") {
      return [
        {
          token,
          newColor: getOklchString(value, { withComma: true }),
          newColorLabel: getOklchString(value),
          prevColor: "",
          prevColorLabel: "",
        },
      ];
    }
  }

  return [];
};

const checkOklchColors = (newToken, baselineToken) => {
  const newColor = getOklchString(newToken.value);
  const prevColor = getOklchString(baselineToken.value);

  if (newColor !== prevColor) {
    return {
      newColor: getOklchString(newToken.value, { withComma: true }),
      newColorLabel: getOklchString(newToken.value),
      prevColor: getOklchString(baselineToken.value, { withComma: true }),
      prevColorLabel: getOklchString(baselineToken.value),
    };
  }
};

const diffTokens = (newTokens, baselineTokens, token = "") => {
  const newTokensKeys = Object.keys(newTokens);
  if ("value" in newTokens) {
    if (
      typeof newTokens.value === "object" &&
      newTokens.value.colorSpace === "oklch"
    ) {
      const checkResult = checkOklchColors(newTokens, baselineTokens);

      if (checkResult) {
        return [{ token, ...checkResult }];
      }
    }

    return [];
  }

  return newTokensKeys
    .reduce((acc, key) => {
      const newTokenName = token ? `${token}.${key}` : key;
      if (baselineTokens[key]) {
        return [
          ...acc,
          ...diffTokens(newTokens[key], baselineTokens[key], newTokenName),
        ];
      } else {
        return [...acc, generateNewChanges(newTokens[key], newTokenName)];
      }
    }, [])
    .flat();
};

const createComment = (result) => {
  return result.reduce((acc, { filename, diff }) => {
    return (
      `${acc}\n\n### ${filename}\n\n` +
      "| Token name | Old value | New value |\n" +
      "| --- | --- | --- |" +
      diff.reduce(
        (
          acc,
          { token, newColor, newColorLabel, prevColor, prevColorLabel }
        ) => {
          const oldTokenColumnText = prevColor
            ? fillMdSwatch(token, prevColor, prevColorLabel)
            : "none";

          const newTokenColumnText = fillMdSwatch(
            token,
            newColor,
            newColorLabel
          );

          return `${acc}\n| \`${token}\` | ${oldTokenColumnText} | ${newTokenColumnText} |`;
        },
        ""
      )
    );
  }, "## Visual Regression\n\n");
};

function generateReport() {
  // const baselineTokensFiles = getDirectoryFiles("tokens-base");
  const newTokensFiles = getDirectoryFiles("tokens");

  const result = newTokensFiles.reduce((acc, filename) => {
    const newTokens = getContent(`tokens/${filename}`);
    const baselineTokens = getContent(`tokens-base/${filename}`);

    const diff = diffTokens(newTokens, baselineTokens);

    return diff ? [...acc, { filename, diff }] : acc;
  }, []);

  return createComment(result);
}

console.log(generateReport());
