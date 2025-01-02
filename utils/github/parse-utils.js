/**
 * Decode a base64 Buffer to a string,
 * and parse that string into JSON
 */
export function decodeJSONBufferString(buffer) {
  return JSON.parse(Buffer.from(buffer, "base64").toString("utf-8"));
}

/**
 * Stringify a JSON object with proper formatting,
 * and encode that string as a Buffer
 */
export function encodeJSONToString(data) {
  return Buffer.from(JSON.stringify(data, null, 2).concat("\n")).toString(
    "base64"
  );
}
