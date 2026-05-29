# Theme vs Tokens Comparison Report

> **Scope:** `theme/tokens/{base,sys}` compared to `tokens/{base,sys}`  
> **Excluded:** `tokens/deprecated/`, `theme/tokens/sys/color/dark.json`  
> **Mapping:** `sys/color/light.json` ↔ `sys/color/color.json`  
> **Generated:** 2026-05-29

---

## Summary

| Metric | Count |
|--------|------:|
| Theme tokens | 1618 |
| Tokens tokens | 722 |
| Unchanged (same path + value) | 504 |
| Value changed (same path) | 214 |
| Renamed (path changed) | 0 |
| New (theme only) | 900 |
| Removed (tokens only) | 4 |

### Brand anchors (`base/palette.json`)

All **15** brand anchors match between theme and tokens (verified ✓).

| Path | Anchor | Hex |
|------|--------|-----|
| `palette.amber.25` | Keyboard | `#fcf8e8` ✓ |
| `palette.amber.100` | Highlighter | `#fff3a8` ✓ |
| `palette.amber.200` | Pencil | `#fde65e` ✓ |
| `palette.amber.300` | Lunch | `#fec10b` ✓ |
| `palette.azure.500` | Water | `#1c98e8` ✓ |
| `palette.blue.700` | Ballpoint | `#0057ae` ✓ |
| `palette.blue.900` | Ink | `#0f2e66` ✓ |
| `palette.blue.950` | Afterhours | `#022043` ✓ |
| `palette.coral.400` | Rubberband | `#fe7b50` ✓ |
| `palette.coral.500` | Thumbtack | `#fc5b05` ✓ |
| `palette.magenta.200` | Eraser | `#ffc2fd` ✓ |
| `palette.neutral.0` | Paper | `#ffffff` ✓ |
| `palette.orange.400` | Happyhour | `#fd7e00` ✓ |
| `palette.purple.500` | Smoothie | `#ab65d0` ✓ |
| `palette.teal.300` | Tack | `#6fc9d3` ✓ |

---

## By file

| File | Theme | Tokens | Same | Value Δ | Renamed | New | Removed |
|------|------:|-------:|-----:|--------:|--------:|----:|--------:|
| `base/base.json` | 2 | 2 | 2 | 0 | 0 | 0 | 0 |
| `base/motion.json` | 26 | 26 | 26 | 0 | 0 | 0 | 0 |
| `base/opacity.json` | 10 | 10 | 10 | 0 | 0 | 0 | 0 |
| `base/palette.json` | 885 | 256 | 158 | 98 | 0 | 629 | 0 |
| `base/shadow.json` | 28 | 24 | 24 | 0 | 0 | 4 | 0 |
| `base/size.json` | 32 | 25 | 25 | 0 | 0 | 7 | 0 |
| `base/typography.json` | 20 | 11 | 1 | 6 | 0 | 13 | 4 |
| `sys/brand/canvas.json` | 289 | 107 | 73 | 34 | 0 | 182 | 0 |
| `sys/breakpoint.json` | 6 | 5 | 4 | 1 | 0 | 1 | 0 |
| `sys/color/light.json` | 157 | 105 | 44 | 61 | 0 | 52 | 0 |
| `sys/depth.json` | 6 | 6 | 0 | 6 | 0 | 0 | 0 |
| `sys/motion.json` | 6 | 6 | 6 | 0 | 0 | 0 | 0 |
| `sys/opacity.json` | 12 | 12 | 12 | 0 | 0 | 0 | 0 |
| `sys/shape.json` | 9 | 8 | 5 | 3 | 0 | 1 | 0 |
| `sys/size.json` | 8 | 8 | 8 | 0 | 0 | 0 | 0 |
| `sys/space.json` | 15 | 15 | 15 | 0 | 0 | 0 | 0 |
| `sys/type.json` | 107 | 96 | 91 | 5 | 0 | 11 | 0 |

**Fully unchanged files:** `base/base.json`, `base/motion.json`, `base/opacity.json`, `sys/motion.json`, `sys/opacity.json`, `sys/size.json`, `sys/space.json`

---

## 1. Value changed (214)

Tokens with the same path but different values.

### `base/palette.json` (98)

Most differences are alpha steps (e.g. `palette.*.A25`) where theme intentionally diverges. **141** overlapping OKLCH tokens were restored to tokens values where colors were very similar (|ΔL| ≤ 0.001, |ΔC| ≤ 0.0015, |ΔH| ≤ 0.25°, or same hex).

**Top groups:**

| Group | Count |
|-------|------:|
| `palette.slate` | 26 |
| `palette.neutral` | 19 |
| `palette.white` | 13 |
| `palette.red` | 5 |
| `palette.amber` | 4 |
| `palette.coral` | 4 |
| `palette.green` | 4 |
| `palette.indigo` | 4 |

<details>
<summary>All value changes</summary>

| Path | Theme | Tokens |
|------|-------|--------|
| `palette.amber.A25` | `#DEB10017` | `#E1B9191A` |
| `palette.amber.A50` | `#F6DB0138` | `#F6DB0038` |
| `palette.amber.A100` | `#FFDC0157` | `#FFDD0659` |
| `palette.amber.A200` | `#FCD700A1` | `#FCD803A3` |
| `palette.azure.A25` | `#00BBFF0F` | `#05BCFF0F` |
| `palette.azure.A50` | `#00B6FF23` | `#05B8FF24` |
| `palette.blue.A25` | `#007FFF12` | `#1E8FFF14` |
| `palette.blue.A50` | `#007FFF1C` | `#0080FF1C` |
| `palette.blue.A100` | `#007CFF29` | `#0E83FF2B` |
| `palette.coral.A25` | `#FF4D000A` | `#FF50050A` |
| `palette.coral.A50` | `#FF360013` | `#FF441214` |
| `palette.coral.A100` | `#FF370025` | `#FF3E0826` |
| `palette.coral.A200` | `#FF3C005A` | `#FF3F055C` |
| `palette.green.A25` | `#00FF1D12` | `#1EFF3714` |
| `palette.green.A50` | `#00FF2A25` | `#0FFF3726` |
| `palette.green.A100` | `#00F12E49` | `#03F1304A` |
| `palette.green.A200` | `#00E33E98` | `#02E33F99` |
| `palette.indigo.A25` | `#0000FF0B` | `#2323FF0D` |
| `palette.indigo.A50` | `#0019FF14` | `#051EFF14` |
| `palette.indigo.A100` | `#0010FF1F` | `#1120FF21` |
| `palette.indigo.A200` | `#0015FF3B` | `#091EFF3D` |
| `palette.magenta.A25` | `#FF00FF0B` | `#FF23FF0D` |
| `palette.magenta.A50` | `#FF00FF13` | `#FF12FF14` |
| `palette.magenta.A100` | `#FF00E527` | `#FF0BE629` |
| `palette.neutral.300` | `#bfbfbf` | `#bebebe` |
| `palette.neutral.400` | `#a5a5a5` | `#a4a4a4` |
| `palette.neutral.700` | `#525252` | `#555555` |
| `palette.neutral.800` | `#323232` | `#3b3b3b` |
| `palette.neutral.900` | `#212121` | `#2b2b2b` |
| `palette.neutral.950` | `#1c1c1c` | `#1d1d1d` |
| `palette.neutral.975` | `#151515` | `#0d0d0d` |
| `palette.neutral.A25` | `#00000005` | `#05050505` |
| `palette.neutral.A50` | `#0000000A` | `#0505050A` |
| `palette.neutral.A100` | `#00000013` | `#12121214` |
| `palette.neutral.A200` | `#0000002B` | `#0202022B` |
| `palette.neutral.A300` | `#00000040` | `#05050542` |
| `palette.neutral.A400` | `#0000005A` | `#0202025C` |
| `palette.neutral.A500` | `#00000078` | `#0505057A` |
| `palette.neutral.A700` | `#000000AD` | `#010101AB` |
| `palette.neutral.A800` | `#000000CD` | `#000000C4` |
| `palette.neutral.A900` | `#000000DE` | `#030303D6` |
| `palette.neutral.A950` | `#000000E3` | `#010101E3` |
| `palette.neutral.A975` | `#000000EA` | `#000000F2` |
| `palette.orange.A25` | `#F57A0019` | `#F57D051A` |
| `palette.orange.A50` | `#FF8C012A` | `#FF8F082B` |
| `palette.orange.A100` | `#FF82003F` | `#FF830340` |
| `palette.orange.A200` | `#FF7E0075` | `#FF7F0175` |
| `palette.purple.A25` | `#9900FF0A` | `#9B05FF0A` |
| `palette.purple.A50` | `#9700FF16` | `#9B0BFF17` |
| `palette.purple.A100` | `#AA00FF2A` | `#AD08FF2B` |
| `palette.purple.A200` | `#B900FF3E` | `#BB07FF40` |
| `palette.red.25` | `#fff5f4` | `#fff0ef` |
| `palette.red.A25` | `#FF17000B` | `#FF05050A` |
| `palette.red.A50` | `#FF160017` | `#FF2D191A` |
| `palette.red.A100` | `#FF1A0027` | `#FF240B29` |
| `palette.red.A200` | `#FF200058` | `#FF230459` |
| `palette.slate.25` | `#f9fafc` | `#f9fafb` |
| `palette.slate.50` | `#f3f5f8` | `#f3f5f7` |
| `palette.slate.100` | `#e9edf1` | `#eaedf0` |
| `palette.slate.200` | `#ced5df` | `#e0e4e9` |
| `palette.slate.300` | `#b6c0cd` | `#cbd0d7` |
| `palette.slate.400` | `#9ba6b4` | `#a8b0bb` |
| `palette.slate.500` | `#7d8896` | `#7e8a9a` |
| `palette.slate.600` | `#5d6774` | `#5d6775` |
| `palette.slate.700` | `#4a535f` | `#4d5662` |
| `palette.slate.800` | `#2d3238` | `#38404b` |
| `palette.slate.900` | `#1d2126` | `#232930` |
| `palette.slate.950` | `#171b20` | `#1c2127` |
| `palette.slate.975` | `#111519` | `#0f1215` |
| `palette.slate.A25` | `#002A8006` | `#375D8508` |
| `palette.slate.A50` | `#002A6A0C` | `#0837660D` |
| `palette.slate.A100` | `#002E5D16` | `#18385817` |
| `palette.slate.A200` | `#00245831` | `#112F5621` |
| `palette.slate.A300` | `#00235049` | `#081F4036` |
| `palette.slate.A400` | `#001C4064` | `#061D3C59` |
| `palette.slate.A500` | `#00163182` | `#021A3982` |
| `palette.slate.A600` | `#001024A2` | `#021127A3` |
| `palette.slate.A700` | `#000D1EB5` | `#010E1FB3` |
| `palette.slate.A800` | `#00060DD2` | `#030D1BC9` |
| `palette.slate.A900` | `#00050AE2` | `#020911DE` |
| `palette.slate.A950` | `#00040AE8` | `#03080FE6` |
| `palette.slate.A975` | `#000409EE` | `#020609F2` |
| `palette.teal.A25` | `#00F3FF15` | `#16F4FF17` |
| `palette.teal.A50` | `#00E3FA2E` | `#0DE5FA30` |
| `palette.teal.A200` | `#00B6C95E` | `#01B6C95E` |
| `palette.white.A25` | `#FFFFFF06` | `#FFFFFF05` |
| `palette.white.A50` | `#FFFFFF0B` | `#FFFFFF08` |
| `palette.white.A100` | `#FFFFFF1E` | `#FFFFFF14` |
| `palette.white.A200` | `#FFFFFF40` | `#FFFFFF29` |
| `palette.white.A300` | `#FFFFFF5F` | `#FFFFFF42` |
| `palette.white.A400` | `#FFFFFF7D` | `#FFFFFF5C` |
| `palette.white.A500` | `#FFFFFF97` | `#FFFFFF78` |
| `palette.white.A600` | `#FFFFFFB2` | `#FFFFFF99` |
| `palette.white.A700` | `#FFFFFFC9` | `#FFFFFFAB` |
| `palette.white.A800` | `#FFFFFFDC` | `#FFFFFFC4` |
| `palette.white.A900` | `#FFFFFFEB` | `#FFFFFFD4` |
| `palette.white.A950` | `#FFFFFFF1` | `#FFFFFFE3` |
| `palette.white.A975` | `#FFFFFFF8` | `#FFFFFFF2` |

</details>

### `base/typography.json` (6)

| Path | Theme | Tokens |
|------|-------|--------|
| `font-family.50` | `Sana Sans LCG 05 VF` | `Roboto` |
| `font-family.100` | `IBM Plex Mono` | `Roboto Mono` |
| `font-weight.300` | `300` | `Light` |
| `font-weight.400` | `400` | `Regular` |
| `font-weight.500` | `500` | `Medium` |
| `font-weight.700` | `700` | `Bold` |

### `sys/brand/canvas.json` (34)

Primary pattern: `brand.neutral.*` references changed from `{palette.slate.*}` to `{palette.neutral.*}`.

<details>
<summary>All value changes</summary>

| Path | Theme | Tokens |
|------|-------|--------|
| `brand.neutral.25` | `{palette.neutral.25}` | `{palette.slate.25}` |
| `brand.neutral.50` | `{palette.neutral.50}` | `{palette.slate.50}` |
| `brand.neutral.100` | `{palette.neutral.100}` | `{palette.slate.100}` |
| `brand.neutral.200` | `{palette.neutral.200}` | `{palette.slate.200}` |
| `brand.neutral.300` | `{palette.neutral.300}` | `{palette.slate.300}` |
| `brand.neutral.400` | `{palette.neutral.400}` | `{palette.slate.400}` |
| `brand.neutral.500` | `{palette.neutral.500}` | `{palette.slate.500}` |
| `brand.neutral.600` | `{palette.neutral.600}` | `{palette.slate.600}` |
| `brand.neutral.700` | `{palette.neutral.700}` | `{palette.slate.700}` |
| `brand.neutral.800` | `{palette.neutral.800}` | `{palette.slate.800}` |
| `brand.neutral.900` | `{palette.neutral.900}` | `{palette.slate.900}` |
| `brand.neutral.950` | `{palette.neutral.950}` | `{palette.slate.950}` |
| `brand.neutral.975` | `{palette.neutral.975}` | `{palette.slate.975}` |
| `brand.neutral.A25` | `{palette.neutral.A25}` | `{palette.slate.A25}` |
| `brand.neutral.A50` | `{palette.neutral.A50}` | `{palette.slate.A50}` |
| `brand.neutral.A100` | `{palette.neutral.A100}` | `{palette.slate.A100}` |
| `brand.neutral.A200` | `{palette.neutral.A200}` | `{palette.slate.A200}` |
| `brand.neutral.A300` | `{palette.neutral.A300}` | `{palette.slate.A300}` |
| `brand.neutral.A400` | `{palette.neutral.A400}` | `{palette.slate.A400}` |
| `brand.neutral.A500` | `{palette.neutral.A500}` | `{palette.slate.A500}` |
| `brand.neutral.A600` | `{palette.neutral.A600}` | `{palette.slate.A600}` |
| `brand.neutral.A700` | `{palette.neutral.A700}` | `{palette.slate.A700}` |
| `brand.neutral.A800` | `{palette.neutral.A800}` | `{palette.slate.A800}` |
| `brand.neutral.A900` | `{palette.neutral.A900}` | `{palette.slate.A900}` |
| `brand.neutral.A950` | `{palette.neutral.A950}` | `{palette.slate.A950}` |
| `brand.neutral.A975` | `{palette.neutral.A975}` | `{palette.slate.A975}` |
| `brand.action.base` | `{brand.neutral.975}` | `{palette.blue.600}` |
| `brand.action.lightest` | `{brand.neutral.25}` | `{palette.blue.25}` |
| `brand.action.light` | `{brand.neutral.200}` | `{palette.blue.200}` |
| `brand.action.darkest` | `{brand.neutral.975}` | `{palette.blue.950}` |
| `brand.action.dark` | `{brand.neutral.975}` | `{palette.blue.700}` |
| `brand.action.accent` | `{palette.white.$root}` | `{palette.neutral.0}` |
| `brand.action.darker` | `{brand.neutral.975}` | `{palette.blue.800}` |
| `brand.action.lighter` | `{brand.neutral.100}` | `{palette.blue.50}` |

</details>

### `sys/breakpoint.json` (1)

| Path | Theme | Tokens |
|------|-------|--------|
| `breakpoints.md` | `{base.baseline} * 95.875` | `{base.baseline} * 96` |

### `sys/color/light.json` (61)

**Patterns:**

- `neutral` → `slate` (16 tokens)
- `white` → `neutral` (13 tokens)
- `palette.*` → `brand.*` for brand-scoped tokens (23 tokens)
- `black` → `slate` for shadows/overlay

<details>
<summary>All value changes</summary>

| Path | Theme | Tokens |
|------|-------|--------|
| `color.bg.default` | `{palette.white.$root}` | `{palette.neutral.0}` |
| `color.bg.alt.default` | `{palette.neutral.50}` | `{palette.slate.50}` |
| `color.surface.default` | `{palette.white.$root}` | `{palette.neutral.0}` |
| `color.surface.inverse` | `{palette.white.$root}` | `{palette.neutral.0}` |
| `color.surface.raised` | `{palette.neutral.A25}` | `{palette.slate.A25}` |
| `color.surface.overlay.hover.default` | `{palette.neutral.A50}` | `{palette.slate.A50}` |
| `color.surface.overlay.pressed.default` | `{palette.neutral.A100}` | `{palette.slate.A100}` |
| `color.surface.overlay.mixin` | `{palette.black.$root}` | `{palette.slate.500}` |
| `color.surface.alt.default` | `{palette.neutral.A50}` | `{palette.slate.A50}` |
| `color.surface.alt.strong` | `{palette.neutral.A100}` | `{palette.slate.A100}` |
| `color.surface.loading` | `{palette.neutral.A50}` | `{palette.slate.A200}` |
| `color.surface.modal` | `{palette.white.$root}` | `{palette.neutral.0}` |
| `color.surface.navigation` | `{palette.neutral.50}` | `{palette.slate.50}` |
| `color.surface.popover` | `{palette.white.$root}` | `{palette.neutral.0}` |
| `color.surface.transparent` | `{palette.white.A0}` | `{palette.neutral.A0}` |
| `color.accent.muted.default` | `{palette.neutral.600}` | `{palette.slate.600}` |
| `color.accent.muted.soft` | `{palette.neutral.400}` | `{palette.slate.400}` |
| `color.accent.overlay.hover` | `{palette.white.A100}` | `{palette.neutral.A200}` |
| `color.accent.overlay.pressed` | `{palette.white.A200}` | `{palette.neutral.A400}` |
| `color.accent.overlay.mixin` | `{palette.white.$root}` | `{palette.neutral.1000}` |
| `color.fg.muted.default` | `{palette.neutral.A600}` | `{palette.slate.A600}` |
| `color.fg.muted.strong` | `{palette.neutral.A700}` | `{palette.slate.A700}` |
| `color.fg.disabled` | `{palette.neutral.A400}` | `{palette.slate.A400}` |
| `color.fg.danger.strong` | `{brand.critical.700}` | `{palette.red.700}` |
| `color.fg.inverse` | `{palette.white.$root}` | `{palette.neutral.0}` |
| `color.border.default` | `{palette.neutral.A100}` | `{palette.slate.A200}` |
| `color.border.strong` | `{palette.neutral.A200}` | `{palette.slate.A300}` |
| `color.border.inverse.default` | `{palette.white.$root}` | `{palette.neutral.0}` |
| `color.border.input.default` | `{palette.neutral.A500}` | `{palette.slate.A500}` |
| `color.border.input.hover` | `{palette.neutral.A700}` | `{palette.slate.A700}` |
| `color.border.transparent` | `{palette.white.A0}` | `{palette.neutral.A0}` |
| `color.focus.inverse` | `{palette.white.$root}` | `{palette.neutral.0}` |
| `color.shadow.ambient` | `{palette.black.A50}` | `{palette.slate.A100}` |
| `color.shadow.base` | `{palette.black.A25}` | `{palette.slate.A200}` |
| `color.brand.focus.caution.inner` | `{palette.amber.400}` | `{brand.caution.400}` |
| `color.brand.focus.caution.outer` | `{palette.amber.500}` | `{brand.caution.500}` |
| `color.brand.focus.critical` | `{palette.red.500}` | `{brand.critical.500}` |
| `color.brand.focus.primary` | `{palette.blue.500}` | `{brand.primary.500}` |
| `color.brand.surface.caution.default` | `{palette.amber.A25}` | `{brand.caution.A25}` |
| `color.brand.surface.caution.strong` | `{palette.amber.A50}` | `{brand.caution.A50}` |
| `color.brand.surface.critical.default` | `{palette.red.A25}` | `{brand.critical.A25}` |
| `color.brand.surface.critical.strong` | `{palette.red.A50}` | `{brand.critical.A50}` |
| `color.brand.surface.positive.default` | `{palette.green.A25}` | `{brand.positive.A25}` |
| `color.brand.surface.positive.strong` | `{palette.green.A50}` | `{brand.positive.A50}` |
| `color.brand.surface.primary.default` | `{palette.neutral.A25}` | `{brand.primary.A25}` |
| `color.brand.surface.primary.strong` | `{palette.neutral.A50}` | `{brand.primary.A50}` |
| `color.brand.surface.selected` | `{palette.neutral.A100}` | `{brand.primary.A50}` |
| `color.brand.accent.caution` | `{palette.amber.400}` | `{brand.caution.400}` |
| `color.brand.accent.critical` | `{palette.red.600}` | `{brand.critical.600}` |
| `color.brand.accent.positive` | `{palette.green.600}` | `{brand.positive.600}` |
| `color.brand.accent.primary` | `{palette.neutral.975}` | `{brand.primary.600}` |
| `color.brand.accent.action` | `{palette.neutral.975}` | `{brand.primary.600}` |
| `color.brand.border.caution` | `{palette.amber.500}` | `{brand.caution.500}` |
| `color.brand.border.critical` | `{palette.red.500}` | `{brand.critical.500}` |
| `color.brand.border.primary` | `{palette.blue.500}` | `{brand.primary.500}` |
| `color.brand.fg.primary.default` | `{palette.neutral.A900}` | `{brand.primary.600}` |
| `color.brand.fg.primary.strong` | `{palette.neutral.A950}` | `{brand.primary.700}` |
| `color.brand.fg.critical.default` | `{palette.red.600}` | `{brand.critical.600}` |
| `color.brand.fg.caution.default` | `{palette.amber.600}` | `{brand.caution.600}` |
| `color.brand.fg.positive.default` | `{palette.green.600}` | `{brand.positive.600}` |
| `color.brand.fg.selected` | `{palette.neutral.A900}` | `{brand.primary.700}` |

</details>

### `sys/depth.json` (6)

| Path | Theme | Tokens |
|------|-------|--------|
| `depth.1` | `[{"x":"0","y":"{shadow.1.100.y}","blur":"{shadow.1.100.blur}","spre...` | `[{"x":"0","y":"{shadow.1.100.y}","blur":"{shadow.1.100.blur}","spre...` |
| `depth.2` | `[{"x":"0","y":"{shadow.2.100.y}","blur":"{shadow.2.100.blur}","spre...` | `[{"x":"0","y":"{shadow.2.100.y}","blur":"{shadow.2.100.blur}","spre...` |
| `depth.3` | `[{"x":"0","y":"{shadow.3.100.y}","blur":"{shadow.3.100.blur}","spre...` | `[{"x":"0","y":"{shadow.3.100.y}","blur":"{shadow.3.100.blur}","spre...` |
| `depth.4` | `[{"x":"0","y":"{shadow.4.100.y}","blur":"{shadow.4.100.blur}","spre...` | `[{"x":"0","y":"{shadow.4.100.y}","blur":"{shadow.4.100.blur}","spre...` |
| `depth.5` | `[{"x":"0","y":"{shadow.5.100.y}","blur":"{shadow.5.100.blur}","spre...` | `[{"x":"0","y":"{shadow.5.100.y}","blur":"{shadow.5.100.blur}","spre...` |
| `depth.6` | `[{"x":"0","y":"{shadow.6.100.y}","blur":"{shadow.6.100.blur}","spre...` | `[{"x":"0","y":"{shadow.6.100.y}","blur":"{shadow.6.100.blur}","spre...` |

### `sys/shape.json` (3)

| Path | Theme | Tokens |
|------|-------|--------|
| `shape.sm` | `{size.75}` | `{size.50}` |
| `shape.xxl` | `{size.250}` | `{size.300}` |
| `shape.xxxl` | `{size.350}` | `{size.400}` |

### `sys/type.json` (5)

| Path | Theme | Tokens |
|------|-------|--------|
| `line-height.body.md` | `{size.300}` | `{size.350}` |
| `letter-spacing.subtext.sm` | `0.12999999523162842` | `{letter-spacing.50}` |
| `letter-spacing.subtext.md` | `0.11999999731779099` | `{letter-spacing.100}` |
| `letter-spacing.subtext.lg` | `0.10999999940395355` | `{letter-spacing.150}` |
| `letter-spacing.body.sm` | `0.10000000149011612` | `{letter-spacing.200}` |

---

## 2. Renamed (0)

Path changes between theme and tokens (detected by matching values or structural patterns).

_No unresolved renames — theme paths have been aligned with tokens._

---

## 3. Unchanged (504)

Same token path and same value.

| File | Count |
|------|------:|
| `base/base.json` | 2 |
| `base/motion.json` | 26 |
| `base/opacity.json` | 10 |
| `base/palette.json` | 158 |
| `base/shadow.json` | 24 |
| `base/size.json` | 25 |
| `base/typography.json` | 1 |
| `sys/brand/canvas.json` | 73 |
| `sys/breakpoint.json` | 4 |
| `sys/color/light.json` | 44 |
| `sys/motion.json` | 6 |
| `sys/opacity.json` | 12 |
| `sys/shape.json` | 5 |
| `sys/size.json` | 8 |
| `sys/space.json` | 15 |
| `sys/type.json` | 91 |

<details>
<summary>Full unchanged token list</summary>

| File | Path | Value |
|------|------|-------|
| `base/base.json` | `base.fontSize` | `16` |
| `base/base.json` | `base.baseline` | `{base.fontSize} / 2` |
| `base/motion.json` | `duration.50` | `50` |
| `base/motion.json` | `duration.100` | `100` |
| `base/motion.json` | `duration.150` | `150` |
| `base/motion.json` | `duration.200` | `200` |
| `base/motion.json` | `duration.250` | `250` |
| `base/motion.json` | `duration.300` | `300` |
| `base/motion.json` | `duration.350` | `350` |
| `base/motion.json` | `duration.400` | `400` |
| `base/motion.json` | `duration.450` | `450` |
| `base/motion.json` | `duration.500` | `500` |
| `base/motion.json` | `duration.550` | `550` |
| `base/motion.json` | `duration.600` | `600` |
| `base/motion.json` | `duration.650` | `650` |
| `base/motion.json` | `duration.700` | `700` |
| `base/motion.json` | `duration.750` | `750` |
| `base/motion.json` | `duration.800` | `800` |
| `base/motion.json` | `duration.850` | `850` |
| `base/motion.json` | `duration.900` | `900` |
| `base/motion.json` | `duration.950` | `950` |
| `base/motion.json` | `duration.1000` | `1000` |
| `base/motion.json` | `easing.a-100` | `cubic-bezier(0.2, 0, 0.2, 1)` |
| `base/motion.json` | `easing.a-200` | `cubic-bezier(0.4, 0, 0.95, 0.8)` |
| `base/motion.json` | `easing.a-300` | `cubic-bezier(0.05, 0.4, 0.3, 1)` |
| `base/motion.json` | `easing.b-100` | `cubic-bezier(0.35, 0, 0.05, 1)` |
| `base/motion.json` | `easing.b-200` | `cubic-bezier(0.4, 0, 0.8, 0.3)` |
| `base/motion.json` | `easing.b-300` | `cubic-bezier(0, 0.4, 0.2, 1)` |
| `base/opacity.json` | `opacity.0` | `0` |
| `base/opacity.json` | `opacity.80` | `0.08` |
| `base/opacity.json` | `opacity.100` | `0.1` |
| `base/opacity.json` | `opacity.120` | `0.12` |
| `base/opacity.json` | `opacity.180` | `0.18` |
| `base/opacity.json` | `opacity.200` | `0.2` |
| `base/opacity.json` | `opacity.360` | `0.36` |
| `base/opacity.json` | `opacity.400` | `0.4` |
| `base/opacity.json` | `opacity.640` | `0.64` |
| `base/opacity.json` | `opacity.840` | `0.84` |
| `base/palette.json` | `palette.amber.25` | `#fcf8e8` |
| `base/palette.json` | `palette.amber.50` | `#fdf7c7` |
| `base/palette.json` | `palette.amber.100` | `#fff3a8` |
| `base/palette.json` | `palette.amber.200` | `#fde65e` |
| `base/palette.json` | `palette.amber.300` | `#fec10b` |
| `base/palette.json` | `palette.amber.400` | `#ffa400` |
| `base/palette.json` | `palette.amber.500` | `#d47800` |
| `base/palette.json` | `palette.amber.600` | `#b15300` |
| `base/palette.json` | `palette.amber.700` | `#993f00` |
| `base/palette.json` | `palette.amber.800` | `#802d00` |
| `base/palette.json` | `palette.amber.900` | `#5a1c00` |
| `base/palette.json` | `palette.amber.950` | `#3e1000` |
| `base/palette.json` | `palette.amber.975` | `#320b00` |
| `base/palette.json` | `palette.azure.25` | `#f0fbff` |
| `base/palette.json` | `palette.azure.50` | `#dcf5ff` |
| `base/palette.json` | `palette.azure.100` | `#ccefff` |
| `base/palette.json` | `palette.azure.200` | `#94dcff` |
| `base/palette.json` | `palette.azure.300` | `#79c7fb` |
| `base/palette.json` | `palette.azure.400` | `#4cb0f6` |
| `base/palette.json` | `palette.azure.500` | `#1c98e8` |
| `base/palette.json` | `palette.azure.600` | `#006eaa` |
| `base/palette.json` | `palette.azure.700` | `#005e90` |
| `base/palette.json` | `palette.azure.800` | `#004b6d` |
| `base/palette.json` | `palette.azure.900` | `#003953` |
| `base/palette.json` | `palette.azure.950` | `#002537` |
| `base/palette.json` | `palette.azure.975` | `#001c2b` |
| `base/palette.json` | `palette.azure.A100` | `#00AFFF33` |
| `base/palette.json` | `palette.azure.A200` | `#00ACFF6B` |
| `base/palette.json` | `palette.blue.25` | `#edf6ff` |
| `base/palette.json` | `palette.blue.50` | `#e3f1ff` |
| `base/palette.json` | `palette.blue.100` | `#d6eaff` |
| `base/palette.json` | `palette.blue.200` | `#b0d6ff` |
| `base/palette.json` | `palette.blue.300` | `#88c0ff` |
| `base/palette.json` | `palette.blue.400` | `#59a2ff` |
| `base/palette.json` | `palette.blue.500` | `#007df6` |
| `base/palette.json` | `palette.blue.600` | `#0065cc` |
| `base/palette.json` | `palette.blue.700` | `#0057ae` |
| `base/palette.json` | `palette.blue.800` | `#114288` |
| `base/palette.json` | `palette.blue.900` | `#0f2e66` |
| `base/palette.json` | `palette.blue.950` | `#022043` |
| `base/palette.json` | `palette.blue.975` | `#001737` |
| `base/palette.json` | `palette.blue.A200` | `#007BFF4F` |
| `base/palette.json` | `palette.coral.25` | `#fff8f5` |
| `base/palette.json` | `palette.coral.50` | `#fff0ec` |
| `base/palette.json` | `palette.coral.100` | `#ffe2da` |
| `base/palette.json` | `palette.coral.200` | `#ffbaa5` |
| `base/palette.json` | `palette.coral.300` | `#ff916e` |
| `base/palette.json` | `palette.coral.400` | `#fe7b50` |
| `base/palette.json` | `palette.coral.500` | `#fc5b05` |
| `base/palette.json` | `palette.coral.600` | `#c13600` |
| `base/palette.json` | `palette.coral.700` | `#9f2500` |
| `base/palette.json` | `palette.coral.800` | `#811800` |
| `base/palette.json` | `palette.coral.900` | `#5b0b00` |
| `base/palette.json` | `palette.coral.950` | `#3f0400` |
| `base/palette.json` | `palette.coral.975` | `#320704` |
| `base/palette.json` | `palette.green.25` | `#edffef` |
| `base/palette.json` | `palette.green.50` | `#daffe0` |
| `base/palette.json` | `palette.green.100` | `#b6fbc3` |
| `base/palette.json` | `palette.green.200` | `#67ee8c` |
| `base/palette.json` | `palette.green.300` | `#39d973` |
| `base/palette.json` | `palette.green.400` | `#19be52` |
| `base/palette.json` | `palette.green.500` | `#00a831` |
| `base/palette.json` | `palette.green.600` | `#007b22` |
| `base/palette.json` | `palette.green.700` | `#006715` |
| `base/palette.json` | `palette.green.800` | `#00561d` |
| `base/palette.json` | `palette.green.900` | `#003f0c` |
| `base/palette.json` | `palette.green.950` | `#002c06` |
| `base/palette.json` | `palette.green.975` | `#002004` |
| `base/palette.json` | `palette.indigo.25` | `#f4f4ff` |
| `base/palette.json` | `palette.indigo.50` | `#ebedff` |
| `base/palette.json` | `palette.indigo.100` | `#e0e2ff` |
| `base/palette.json` | `palette.indigo.200` | `#c4c9ff` |
| `base/palette.json` | `palette.indigo.300` | `#a4a8ff` |
| `base/palette.json` | `palette.indigo.400` | `#9195ff` |
| `base/palette.json` | `palette.indigo.500` | `#736bff` |
| `base/palette.json` | `palette.indigo.600` | `#5f4ae6` |
| `base/palette.json` | `palette.indigo.700` | `#4e3ec2` |
| `base/palette.json` | `palette.indigo.800` | `#34299c` |
| `base/palette.json` | `palette.indigo.900` | `#272077` |
| `base/palette.json` | `palette.indigo.950` | `#181353` |
| `base/palette.json` | `palette.indigo.975` | `#0f0f33` |
| `base/palette.json` | `palette.magenta.25` | `#fff4ff` |
| `base/palette.json` | `palette.magenta.50` | `#ffecff` |
| `base/palette.json` | `palette.magenta.100` | `#ffd8fb` |
| `base/palette.json` | `palette.magenta.200` | `#ffc2fd` |
| `base/palette.json` | `palette.magenta.300` | `#ff94ec` |
| `base/palette.json` | `palette.magenta.400` | `#f96fcd` |
| `base/palette.json` | `palette.magenta.500` | `#e251a9` |
| `base/palette.json` | `palette.magenta.600` | `#b03286` |
| `base/palette.json` | `palette.magenta.700` | `#92276e` |
| `base/palette.json` | `palette.magenta.800` | `#742458` |
| `base/palette.json` | `palette.magenta.900` | `#4b1439` |
| `base/palette.json` | `palette.magenta.950` | `#380428` |
| `base/palette.json` | `palette.magenta.975` | `#2b051d` |
| `base/palette.json` | `palette.magenta.A200` | `#FF01F73D` |
| `base/palette.json` | `palette.neutral.0` | `#ffffff` |
| `base/palette.json` | `palette.neutral.25` | `#fafafa` |
| `base/palette.json` | `palette.neutral.50` | `#f5f5f5` |
| `base/palette.json` | `palette.neutral.100` | `#ececec` |
| `base/palette.json` | `palette.neutral.200` | `#d4d4d4` |
| `base/palette.json` | `palette.neutral.500` | `#878787` |
| `base/palette.json` | `palette.neutral.600` | `#666666` |
| `base/palette.json` | `palette.neutral.1000` | `#000000` |
| `base/palette.json` | `palette.neutral.A0` | `#00000000` |
| `base/palette.json` | `palette.neutral.A600` | `#00000099` |
| `base/palette.json` | `palette.orange.25` | `#fef2e6` |
| `base/palette.json` | `palette.orange.50` | `#ffecd5` |
| `base/palette.json` | `palette.orange.100` | `#ffe0c0` |
| `base/palette.json` | `palette.orange.200` | `#ffc48a` |
| `base/palette.json` | `palette.orange.300` | `#ff9f33` |
| `base/palette.json` | `palette.orange.400` | `#fd7e00` |
| `base/palette.json` | `palette.orange.500` | `#ec6200` |
| `base/palette.json` | `palette.orange.600` | `#b63f00` |
| `base/palette.json` | `palette.orange.700` | `#9a3400` |
| `base/palette.json` | `palette.orange.800` | `#822500` |
| `base/palette.json` | `palette.orange.900` | `#5f1700` |
| `base/palette.json` | `palette.orange.950` | `#3e0b00` |
| `base/palette.json` | `palette.orange.975` | `#320800` |
| `base/palette.json` | `palette.purple.25` | `#fbf5ff` |
| `base/palette.json` | `palette.purple.50` | `#f6e9ff` |
| `base/palette.json` | `palette.purple.100` | `#f1d5ff` |
| `base/palette.json` | `palette.purple.200` | `#eec1ff` |
| `base/palette.json` | `palette.purple.300` | `#e4a4ff` |
| `base/palette.json` | `palette.purple.400` | `#d086ed` |
| `base/palette.json` | `palette.purple.500` | `#ab65d0` |
| `base/palette.json` | `palette.purple.600` | `#8945a8` |
| `base/palette.json` | `palette.purple.700` | `#7b3a99` |
| `base/palette.json` | `palette.purple.800` | `#69307f` |
| `base/palette.json` | `palette.purple.900` | `#431e54` |
| `base/palette.json` | `palette.purple.950` | `#2a1136` |
| `base/palette.json` | `palette.purple.975` | `#1e0a28` |
| `base/palette.json` | `palette.red.50` | `#ffeae8` |
| `base/palette.json` | `palette.red.100` | `#ffdcd8` |
| `base/palette.json` | `palette.red.200` | `#ffb2a7` |
| `base/palette.json` | `palette.red.300` | `#ff8778` |
| `base/palette.json` | `palette.red.400` | `#ff5a47` |
| `base/palette.json` | `palette.red.500` | `#ff3623` |
| `base/palette.json` | `palette.red.600` | `#cd0600` |
| `base/palette.json` | `palette.red.700` | `#a40007` |
| `base/palette.json` | `palette.red.800` | `#7d000c` |
| `base/palette.json` | `palette.red.900` | `#580007` |
| `base/palette.json` | `palette.red.950` | `#3f0005` |
| `base/palette.json` | `palette.red.975` | `#2f0307` |
| `base/palette.json` | `palette.teal.25` | `#eafeff` |
| `base/palette.json` | `palette.teal.50` | `#d1fafe` |
| `base/palette.json` | `palette.teal.100` | `#c7f3f8` |
| `base/palette.json` | `palette.teal.200` | `#a1e4eb` |
| `base/palette.json` | `palette.teal.300` | `#6fc9d3` |
| `base/palette.json` | `palette.teal.400` | `#46b5c2` |
| `base/palette.json` | `palette.teal.500` | `#009eac` |
| `base/palette.json` | `palette.teal.600` | `#007581` |
| `base/palette.json` | `palette.teal.700` | `#006570` |
| `base/palette.json` | `palette.teal.800` | `#00515b` |
| `base/palette.json` | `palette.teal.900` | `#00363e` |
| `base/palette.json` | `palette.teal.950` | `#00252b` |
| `base/palette.json` | `palette.teal.975` | `#001b20` |
| `base/palette.json` | `palette.teal.A100` | `#00C8DF38` |
| `base/palette.json` | `palette.white.A0` | `#FFFFFF00` |
| `base/shadow.json` | `shadow.1.100.y` | `1` |
| `base/shadow.json` | `shadow.1.100.blur` | `{size.50}` |
| `base/shadow.json` | `shadow.1.200.y` | `{shadow.1.100.y} * 2` |
| `base/shadow.json` | `shadow.1.200.blur` | `{size.100}` |
| `base/shadow.json` | `shadow.2.100.y` | `2` |
| `base/shadow.json` | `shadow.2.100.blur` | `{size.100}` |
| `base/shadow.json` | `shadow.2.200.y` | `{shadow.2.100.y} * 2` |
| `base/shadow.json` | `shadow.2.200.blur` | `{size.200}` |
| `base/shadow.json` | `shadow.3.100.y` | `3` |
| `base/shadow.json` | `shadow.3.100.blur` | `{size.150}` |
| `base/shadow.json` | `shadow.3.200.y` | `{shadow.3.100.y} * 2` |
| `base/shadow.json` | `shadow.3.200.blur` | `{size.300}` |
| `base/shadow.json` | `shadow.4.100.y` | `4` |
| `base/shadow.json` | `shadow.4.100.blur` | `{size.200}` |
| `base/shadow.json` | `shadow.4.200.y` | `{shadow.4.100.y} * 2` |
| `base/shadow.json` | `shadow.4.200.blur` | `{size.400}` |
| `base/shadow.json` | `shadow.5.100.y` | `5` |
| `base/shadow.json` | `shadow.5.100.blur` | `{size.250}` |
| `base/shadow.json` | `shadow.5.200.y` | `{shadow.5.100.y} * 2` |
| `base/shadow.json` | `shadow.5.200.blur` | `{size.500}` |
| `base/shadow.json` | `shadow.6.100.y` | `6` |
| `base/shadow.json` | `shadow.6.100.blur` | `{size.300}` |
| `base/shadow.json` | `shadow.6.200.y` | `{shadow.6.100.y} * 2` |
| `base/shadow.json` | `shadow.6.200.blur` | `{size.600}` |
| `base/size.json` | `size.0` | `0` |
| `base/size.json` | `size.25` | `{base.baseline} * 0.25` |
| `base/size.json` | `size.50` | `{base.baseline} * 0.50` |
| `base/size.json` | `size.75` | `{base.baseline} * 0.75` |
| `base/size.json` | `size.100` | `{base.baseline} * 1.00` |
| `base/size.json` | `size.125` | `{base.baseline} * 1.25` |
| `base/size.json` | `size.150` | `{base.baseline} * 1.50` |
| `base/size.json` | `size.175` | `{base.baseline} * 1.75` |
| `base/size.json` | `size.200` | `{base.baseline} * 2.00` |
| `base/size.json` | `size.225` | `{base.baseline} * 2.25` |
| `base/size.json` | `size.250` | `{base.baseline} * 2.50` |
| `base/size.json` | `size.300` | `{base.baseline} * 3.00` |
| `base/size.json` | `size.350` | `{base.baseline} * 3.50` |
| `base/size.json` | `size.400` | `{base.baseline} * 4.00` |
| `base/size.json` | `size.450` | `{base.baseline} * 4.50` |
| `base/size.json` | `size.500` | `{base.baseline} * 5.00` |
| `base/size.json` | `size.600` | `{base.baseline} * 6.00` |
| `base/size.json` | `size.700` | `{base.baseline} * 7.00` |
| `base/size.json` | `size.800` | `{base.baseline} * 8.00` |
| `base/size.json` | `size.900` | `{base.baseline} * 9.00` |
| `base/size.json` | `size.1000` | `{base.baseline} * 10.00` |
| `base/size.json` | `size.1100` | `{base.baseline} * 11.00` |
| `base/size.json` | `size.1200` | `{base.baseline} * 12.00` |
| `base/size.json` | `size.1300` | `{base.baseline} * 13.00` |
| `base/size.json` | `size.1400` | `{base.baseline} * 14.00` |
| `base/typography.json` | `font-family.200` | `Noto Sans` |
| `sys/brand/canvas.json` | `brand.primary.25` | `{palette.blue.25}` |
| `sys/brand/canvas.json` | `brand.primary.50` | `{palette.blue.50}` |
| `sys/brand/canvas.json` | `brand.primary.100` | `{palette.blue.100}` |
| `sys/brand/canvas.json` | `brand.primary.200` | `{palette.blue.200}` |
| `sys/brand/canvas.json` | `brand.primary.300` | `{palette.blue.300}` |
| `sys/brand/canvas.json` | `brand.primary.400` | `{palette.blue.400}` |
| `sys/brand/canvas.json` | `brand.primary.500` | `{palette.blue.500}` |
| `sys/brand/canvas.json` | `brand.primary.600` | `{palette.blue.600}` |
| `sys/brand/canvas.json` | `brand.primary.700` | `{palette.blue.700}` |
| `sys/brand/canvas.json` | `brand.primary.800` | `{palette.blue.800}` |
| `sys/brand/canvas.json` | `brand.primary.900` | `{palette.blue.900}` |
| `sys/brand/canvas.json` | `brand.primary.950` | `{palette.blue.950}` |
| `sys/brand/canvas.json` | `brand.primary.975` | `{palette.blue.975}` |
| `sys/brand/canvas.json` | `brand.primary.A25` | `{palette.blue.A25}` |
| `sys/brand/canvas.json` | `brand.primary.A50` | `{palette.blue.A50}` |
| `sys/brand/canvas.json` | `brand.primary.A100` | `{palette.blue.A100}` |
| `sys/brand/canvas.json` | `brand.primary.A200` | `{palette.blue.A200}` |
| `sys/brand/canvas.json` | `brand.critical.25` | `{palette.red.25}` |
| `sys/brand/canvas.json` | `brand.critical.50` | `{palette.red.50}` |
| `sys/brand/canvas.json` | `brand.critical.100` | `{palette.red.100}` |
| `sys/brand/canvas.json` | `brand.critical.200` | `{palette.red.200}` |
| `sys/brand/canvas.json` | `brand.critical.300` | `{palette.red.300}` |
| `sys/brand/canvas.json` | `brand.critical.400` | `{palette.red.400}` |
| `sys/brand/canvas.json` | `brand.critical.500` | `{palette.red.500}` |
| `sys/brand/canvas.json` | `brand.critical.600` | `{palette.red.600}` |
| `sys/brand/canvas.json` | `brand.critical.700` | `{palette.red.700}` |
| `sys/brand/canvas.json` | `brand.critical.800` | `{palette.red.800}` |
| `sys/brand/canvas.json` | `brand.critical.900` | `{palette.red.900}` |
| `sys/brand/canvas.json` | `brand.critical.950` | `{palette.red.950}` |
| `sys/brand/canvas.json` | `brand.critical.975` | `{palette.red.975}` |
| `sys/brand/canvas.json` | `brand.critical.A25` | `{palette.red.A25}` |
| `sys/brand/canvas.json` | `brand.critical.A50` | `{palette.red.A50}` |
| `sys/brand/canvas.json` | `brand.critical.A100` | `{palette.red.A100}` |
| `sys/brand/canvas.json` | `brand.critical.A200` | `{palette.red.A200}` |
| `sys/brand/canvas.json` | `brand.caution.25` | `{palette.amber.25}` |
| `sys/brand/canvas.json` | `brand.caution.50` | `{palette.amber.50}` |
| `sys/brand/canvas.json` | `brand.caution.100` | `{palette.amber.100}` |
| `sys/brand/canvas.json` | `brand.caution.200` | `{palette.amber.200}` |
| `sys/brand/canvas.json` | `brand.caution.300` | `{palette.amber.300}` |
| `sys/brand/canvas.json` | `brand.caution.400` | `{palette.amber.400}` |
| `sys/brand/canvas.json` | `brand.caution.500` | `{palette.amber.500}` |
| `sys/brand/canvas.json` | `brand.caution.600` | `{palette.amber.600}` |
| `sys/brand/canvas.json` | `brand.caution.700` | `{palette.amber.700}` |
| `sys/brand/canvas.json` | `brand.caution.800` | `{palette.amber.800}` |
| `sys/brand/canvas.json` | `brand.caution.900` | `{palette.amber.900}` |
| `sys/brand/canvas.json` | `brand.caution.950` | `{palette.amber.950}` |
| `sys/brand/canvas.json` | `brand.caution.975` | `{palette.amber.975}` |
| `sys/brand/canvas.json` | `brand.caution.A25` | `{palette.amber.A25}` |
| `sys/brand/canvas.json` | `brand.caution.A50` | `{palette.amber.A50}` |
| `sys/brand/canvas.json` | `brand.caution.A100` | `{palette.amber.A100}` |
| `sys/brand/canvas.json` | `brand.caution.A200` | `{palette.amber.A200}` |
| `sys/brand/canvas.json` | `brand.positive.25` | `{palette.green.25}` |
| `sys/brand/canvas.json` | `brand.positive.50` | `{palette.green.50}` |
| `sys/brand/canvas.json` | `brand.positive.100` | `{palette.green.100}` |
| `sys/brand/canvas.json` | `brand.positive.200` | `{palette.green.200}` |
| `sys/brand/canvas.json` | `brand.positive.300` | `{palette.green.300}` |
| `sys/brand/canvas.json` | `brand.positive.400` | `{palette.green.400}` |
| `sys/brand/canvas.json` | `brand.positive.500` | `{palette.green.500}` |
| `sys/brand/canvas.json` | `brand.positive.600` | `{palette.green.600}` |
| `sys/brand/canvas.json` | `brand.positive.700` | `{palette.green.700}` |
| `sys/brand/canvas.json` | `brand.positive.800` | `{palette.green.800}` |
| `sys/brand/canvas.json` | `brand.positive.900` | `{palette.green.900}` |
| `sys/brand/canvas.json` | `brand.positive.950` | `{palette.green.950}` |
| `sys/brand/canvas.json` | `brand.positive.975` | `{palette.green.975}` |
| `sys/brand/canvas.json` | `brand.positive.A25` | `{palette.green.A25}` |
| `sys/brand/canvas.json` | `brand.positive.A50` | `{palette.green.A50}` |
| `sys/brand/canvas.json` | `brand.positive.A100` | `{palette.green.A100}` |
| `sys/brand/canvas.json` | `brand.positive.A200` | `{palette.green.A200}` |
| `sys/brand/canvas.json` | `brand.common.focus` | `{brand.primary.500}` |
| `sys/brand/canvas.json` | `brand.common.critical` | `{brand.critical.500}` |
| `sys/brand/canvas.json` | `brand.common.caution.inner` | `{brand.caution.400}` |
| `sys/brand/canvas.json` | `brand.common.caution.outer` | `{brand.caution.500}` |
| `sys/brand/canvas.json` | `brand.gradient.primary` | `linear-gradient(90deg, {brand.primary.base} 0%, {brand.primary.dark} 100%)` |
| `sys/breakpoint.json` | `breakpoints.zero` | `0` |
| `sys/breakpoint.json` | `breakpoints.sm` | `{base.baseline} * 40` |
| `sys/breakpoint.json` | `breakpoints.lg` | `{base.baseline} * 128` |
| `sys/breakpoint.json` | `breakpoints.xl` | `{base.baseline} * 180` |
| `sys/color/light.json` | `color.surface.overlay.hover.inverse` | `{palette.white.A200}` |
| `sys/color/light.json` | `color.surface.overlay.pressed.inverse` | `{palette.white.A300}` |
| `sys/color/light.json` | `color.surface.overlay.scrim` | `{palette.neutral.A400}` |
| `sys/color/light.json` | `color.surface.ai.default` | `{palette.blue.A100}` |
| `sys/color/light.json` | `color.surface.ai.hover` | `{palette.blue.A200}` |
| `sys/color/light.json` | `color.surface.ai.pressed` | `{palette.blue.400}` |
| `sys/color/light.json` | `color.surface.contrast.default` | `{palette.neutral.A900}` |
| `sys/color/light.json` | `color.surface.contrast.strong` | `{palette.neutral.A950}` |
| `sys/color/light.json` | `color.surface.danger.default` | `{palette.red.A25}` |
| `sys/color/light.json` | `color.surface.danger.strong` | `{palette.red.A50}` |
| `sys/color/light.json` | `color.surface.info.default` | `{palette.blue.A25}` |
| `sys/color/light.json` | `color.surface.info.strong` | `{palette.blue.A50}` |
| `sys/color/light.json` | `color.surface.success.default` | `{palette.green.A25}` |
| `sys/color/light.json` | `color.surface.success.strong` | `{palette.green.A50}` |
| `sys/color/light.json` | `color.surface.warning.default` | `{palette.amber.A25}` |
| `sys/color/light.json` | `color.surface.warning.strong` | `{palette.amber.A50}` |
| `sys/color/light.json` | `color.accent.ai` | `{palette.blue.950}` |
| `sys/color/light.json` | `color.accent.danger` | `{palette.red.600}` |
| `sys/color/light.json` | `color.accent.info` | `{palette.blue.600}` |
| `sys/color/light.json` | `color.accent.success` | `{palette.green.600}` |
| `sys/color/light.json` | `color.accent.warning` | `{palette.amber.400}` |
| `sys/color/light.json` | `color.accent.contrast` | `{palette.neutral.A900}` |
| `sys/color/light.json` | `color.fg.default` | `{palette.neutral.A800}` |
| `sys/color/light.json` | `color.fg.strong` | `{palette.neutral.A900}` |
| `sys/color/light.json` | `color.fg.stronger` | `{palette.neutral.A950}` |
| `sys/color/light.json` | `color.fg.danger.default` | `{palette.red.600}` |
| `sys/color/light.json` | `color.fg.warning.default` | `{palette.amber.600}` |
| `sys/color/light.json` | `color.fg.warning.strong` | `{palette.amber.700}` |
| `sys/color/light.json` | `color.fg.success.default` | `{palette.green.600}` |
| `sys/color/light.json` | `color.fg.success.strong` | `{palette.green.700}` |
| `sys/color/light.json` | `color.fg.info.default` | `{palette.blue.600}` |
| `sys/color/light.json` | `color.fg.info.strong` | `{palette.blue.700}` |
| `sys/color/light.json` | `color.fg.ai` | `{palette.blue.950}` |
| `sys/color/light.json` | `color.fg.contrast.default` | `{palette.neutral.A900}` |
| `sys/color/light.json` | `color.fg.contrast.strong` | `{palette.neutral.A950}` |
| `sys/color/light.json` | `color.border.inverse.strong` | `{palette.white.A700}` |
| `sys/color/light.json` | `color.border.contrast.default` | `{palette.neutral.A900}` |
| `sys/color/light.json` | `color.border.danger` | `{palette.red.500}` |
| `sys/color/light.json` | `color.border.warning` | `{palette.amber.400}` |
| `sys/color/light.json` | `color.border.info.default` | `{palette.blue.500}` |
| `sys/color/light.json` | `color.focus.contrast` | `{palette.neutral.A900}` |
| `sys/color/light.json` | `color.brand.fg.critical.strong` | `{brand.critical.700}` |
| `sys/color/light.json` | `color.brand.fg.caution.strong` | `{brand.caution.700}` |
| `sys/color/light.json` | `color.brand.fg.positive.strong` | `{brand.positive.700}` |
| `sys/motion.json` | `motion.easing.quick.standard` | `{easing.a-100}` |
| `sys/motion.json` | `motion.easing.quick.acceleration` | `{easing.a-200}` |
| `sys/motion.json` | `motion.easing.quick.deceleration` | `{easing.a-300}` |
| `sys/motion.json` | `motion.easing.purposeful.standard` | `{easing.b-100}` |
| `sys/motion.json` | `motion.easing.purposeful.acceleration` | `{easing.b-200}` |
| `sys/motion.json` | `motion.easing.purposeful.deceleration` | `{easing.b-300}` |
| `sys/opacity.json` | `opacity.zero` | `{opacity.0}` |
| `sys/opacity.json` | `opacity.disabled` | `{opacity.400}` |
| `sys/opacity.json` | `opacity.overlay` | `{opacity.640}` |
| `sys/opacity.json` | `opacity.contrast` | `{opacity.840}` |
| `sys/opacity.json` | `opacity.full` | `1` |
| `sys/opacity.json` | `opacity.shadow.first` | `{opacity.120}` |
| `sys/opacity.json` | `opacity.shadow.second` | `{opacity.80}` |
| `sys/opacity.json` | `opacity.surface.hover` | `{opacity.100}` |
| `sys/opacity.json` | `opacity.surface.pressed` | `{opacity.180}` |
| `sys/opacity.json` | `opacity.accent.hover` | `{opacity.180}` |
| `sys/opacity.json` | `opacity.accent.pressed` | `{opacity.360}` |
| `sys/opacity.json` | `layer-opacity.disabled` | `{opacity.400} * 100` |
| `sys/shape.json` | `shape.none` | `{size.0}` |
| `sys/shape.json` | `shape.md` | `{size.100}` |
| `sys/shape.json` | `shape.lg` | `{size.150}` |
| `sys/shape.json` | `shape.xl` | `{size.200}` |
| `sys/shape.json` | `shape.full` | `{size.75} * 100` |
| `sys/size.json` | `size.xxxs` | `{size.200}` |
| `sys/size.json` | `size.xxs` | `{size.250}` |
| `sys/size.json` | `size.xs` | `{size.300}` |
| `sys/size.json` | `size.sm` | `{size.400}` |
| `sys/size.json` | `size.md` | `{size.500}` |
| `sys/size.json` | `size.lg` | `{size.600}` |
| `sys/size.json` | `size.xl` | `{size.700}` |
| `sys/size.json` | `size.xxl` | `{size.800}` |
| `sys/space.json` | `padding.none` | `{size.0}` |
| `sys/space.json` | `padding.xxs` | `{size.50}` |
| `sys/space.json` | `padding.xs` | `{size.100}` |
| `sys/space.json` | `padding.sm` | `{size.150}` |
| `sys/space.json` | `padding.md` | `{size.200}` |
| `sys/space.json` | `padding.lg` | `{size.250}` |
| `sys/space.json` | `padding.xl` | `{size.300}` |
| `sys/space.json` | `padding.xxl` | `{size.400}` |
| `sys/space.json` | `gap.none` | `{size.0}` |
| `sys/space.json` | `gap.xs` | `{size.50}` |
| `sys/space.json` | `gap.sm` | `{size.100}` |
| `sys/space.json` | `gap.md` | `{size.200}` |
| `sys/space.json` | `gap.lg` | `{size.300}` |
| `sys/space.json` | `gap.xl` | `{size.400}` |
| `sys/space.json` | `gap.xxl` | `{size.800}` |
| `sys/type.json` | `font-family.default` | `{font-family.50}` |
| `sys/type.json` | `font-family.mono` | `{font-family.100}` |
| `sys/type.json` | `font-family.global` | `{font-family.200}` |
| `sys/type.json` | `font-size.subtext.sm` | `{size.125}` |
| `sys/type.json` | `font-size.subtext.md` | `{size.150}` |
| `sys/type.json` | `font-size.subtext.lg` | `{size.175}` |
| `sys/type.json` | `font-size.body.sm` | `{size.200}` |
| `sys/type.json` | `font-size.body.md` | `{size.225}` |
| `sys/type.json` | `font-size.body.lg` | `{size.250}` |
| `sys/type.json` | `font-size.heading.sm` | `{size.300}` |
| `sys/type.json` | `font-size.heading.md` | `{size.350}` |
| `sys/type.json` | `font-size.heading.lg` | `{size.400}` |
| `sys/type.json` | `font-size.title.sm` | `{size.500}` |
| `sys/type.json` | `font-size.title.md` | `{size.600}` |
| `sys/type.json` | `font-size.title.lg` | `{size.700}` |
| `sys/type.json` | `line-height.subtext.sm` | `{size.200}` |
| `sys/type.json` | `line-height.subtext.md` | `{size.200}` |
| `sys/type.json` | `line-height.subtext.lg` | `{size.250}` |
| `sys/type.json` | `line-height.body.sm` | `{size.300}` |
| `sys/type.json` | `line-height.body.lg` | `{size.350}` |
| `sys/type.json` | `line-height.heading.sm` | `{size.400}` |
| `sys/type.json` | `line-height.heading.md` | `{size.450}` |
| `sys/type.json` | `line-height.heading.lg` | `{size.500}` |
| `sys/type.json` | `line-height.title.sm` | `{size.600}` |
| `sys/type.json` | `line-height.title.md` | `{size.700}` |
| `sys/type.json` | `line-height.title.lg` | `{size.800}` |
| `sys/type.json` | `font-weight.light` | `{font-weight.300}` |
| `sys/type.json` | `font-weight.normal` | `{font-weight.400}` |
| `sys/type.json` | `font-weight.medium` | `{font-weight.500}` |
| `sys/type.json` | `font-weight.bold` | `{font-weight.700}` |
| `sys/type.json` | `type.subtext.sm` | `{"fontFamily":"{font-family.default}","fontWeight":"{font-weight.no...` |
| `sys/type.json` | `type.subtext.md` | `{"fontFamily":"{font-family.default}","fontWeight":"{font-weight.no...` |
| `sys/type.json` | `type.subtext.lg` | `{"fontFamily":"{font-family.default}","fontWeight":"{font-weight.no...` |
| `sys/type.json` | `type.body.sm` | `{"fontFamily":"{font-family.default}","fontWeight":"{font-weight.no...` |
| `sys/type.json` | `type.body.md` | `{"fontFamily":"{font-family.default}","fontWeight":"{font-weight.no...` |
| `sys/type.json` | `type.body.lg` | `{"fontFamily":"{font-family.default}","fontWeight":"{font-weight.no...` |
| `sys/type.json` | `type.heading.sm` | `{"fontFamily":"{font-family.default}","fontWeight":"{font-weight.bo...` |
| `sys/type.json` | `type.heading.md` | `{"fontFamily":"{font-family.default}","fontWeight":"{font-weight.bo...` |
| `sys/type.json` | `type.heading.lg` | `{"fontFamily":"{font-family.default}","fontWeight":"{font-weight.bo...` |
| `sys/type.json` | `type.title.sm` | `{"fontFamily":"{font-family.default}","fontWeight":"{font-weight.bo...` |
| `sys/type.json` | `type.title.md` | `{"fontFamily":"{font-family.default}","fontWeight":"{font-weight.bo...` |
| `sys/type.json` | `type.title.lg` | `{"fontFamily":"{font-family.default}","fontWeight":"{font-weight.bo...` |
| `sys/type.json` | `More styles.Subtext.Subtext S - (500) Medium` | `{"fontFamily":"{font-family.default}","fontWeight":"{font-weight.md...` |
| `sys/type.json` | `More styles.Subtext.Subtext S - (700) Bold` | `{"fontFamily":"{font-family.default}","fontWeight":"{font-weight.bo...` |
| `sys/type.json` | `More styles.Subtext.Subtext S Link - (400) Regular` | `{"fontFamily":"{font-family.default}","fontWeight":"{font-weight.no...` |
| `sys/type.json` | `More styles.Subtext.Subtext S Link - (500) Medium` | `{"fontFamily":"{font-family.default}","fontWeight":"{font-weight.md...` |
| `sys/type.json` | `More styles.Subtext.Subtext S Link - (700) Bold` | `{"fontFamily":"{font-family.default}","fontWeight":"{font-weight.bo...` |
| `sys/type.json` | `More styles.Subtext.Subtext S Mono - (400) Regular` | `{"fontFamily":"{font-family.mono}","fontWeight":"{font-weight.norma...` |
| `sys/type.json` | `More styles.Subtext.Subtext S Mono - (500) Medium` | `{"fontFamily":"{font-family.mono}","fontWeight":"{font-weight.md}",...` |
| `sys/type.json` | `More styles.Subtext.Subtext S Mono - (700) Bold` | `{"fontFamily":"{font-family.mono}","fontWeight":"{font-weight.bold}...` |
| `sys/type.json` | `More styles.Subtext.Subtext M - (500) Medium` | `{"fontFamily":"{font-family.default}","fontWeight":"{font-weight.md...` |
| `sys/type.json` | `More styles.Subtext.Subtext M - (700) Bold` | `{"fontFamily":"{font-family.default}","fontWeight":"{font-weight.bo...` |
| `sys/type.json` | `More styles.Subtext.Subtext M Link - (400) Regular` | `{"fontFamily":"{font-family.default}","fontWeight":"{font-weight.no...` |
| `sys/type.json` | `More styles.Subtext.Subtext M Link - (500) Medium` | `{"fontFamily":"{font-family.default}","fontWeight":"{font-weight.md...` |
| `sys/type.json` | `More styles.Subtext.Subtext M Link - (700) Bold` | `{"fontFamily":"{font-family.default}","fontWeight":"{font-weight.bo...` |
| `sys/type.json` | `More styles.Subtext.Subtext M Mono - (400) Regular` | `{"fontFamily":"{font-family.mono}","fontWeight":"{font-weight.norma...` |
| `sys/type.json` | `More styles.Subtext.Subtext M Mono - (500) Medium` | `{"fontFamily":"{font-family.mono}","fontWeight":"{font-weight.md}",...` |
| `sys/type.json` | `More styles.Subtext.Subtext M Mono - (700) Bold` | `{"fontFamily":"{font-family.mono}","fontWeight":"{font-weight.bold}...` |
| `sys/type.json` | `More styles.Subtext.Subtext L - (500) Medium` | `{"fontFamily":"{font-family.default}","fontWeight":"{font-weight.md...` |
| `sys/type.json` | `More styles.Subtext.Subtext L - (700) Bold` | `{"fontFamily":"{font-family.default}","fontWeight":"{font-weight.bo...` |
| `sys/type.json` | `More styles.Subtext.Subtext L Link - (400) Regular` | `{"fontFamily":"{font-family.default}","fontWeight":"{font-weight.no...` |
| `sys/type.json` | `More styles.Subtext.Subtext L Link - (500) Medium` | `{"fontFamily":"{font-family.default}","fontWeight":"{font-weight.md...` |
| `sys/type.json` | `More styles.Subtext.Subtext L Link - (700) Bold` | `{"fontFamily":"{font-family.default}","fontWeight":"{font-weight.bo...` |
| `sys/type.json` | `More styles.Subtext.Subtext L Mono - (400) Regular` | `{"fontFamily":"{font-family.mono}","fontWeight":"{font-weight.norma...` |
| `sys/type.json` | `More styles.Subtext.Subtext L Mono - (500) Medium` | `{"fontFamily":"{font-family.mono}","fontWeight":"{font-weight.md}",...` |
| `sys/type.json` | `More styles.Subtext.Subtext L Mono - (700) Bold` | `{"fontFamily":"{font-family.mono}","fontWeight":"{font-weight.bold}...` |
| `sys/type.json` | `More styles.Body.Body S - (500) Medium` | `{"fontFamily":"{font-family.default}","fontWeight":"{font-weight.md...` |
| `sys/type.json` | `More styles.Body.Body S - (700) Bold` | `{"fontFamily":"{font-family.default}","fontWeight":"{font-weight.bo...` |
| `sys/type.json` | `More styles.Body.Body S Link - (400) Regular` | `{"fontFamily":"{font-family.default}","fontWeight":"{font-weight.no...` |
| `sys/type.json` | `More styles.Body.Body S Link - (500) Medium` | `{"fontFamily":"{font-family.default}","fontWeight":"{font-weight.md...` |
| `sys/type.json` | `More styles.Body.Body S Link - (700) Bold` | `{"fontFamily":"{font-family.default}","fontWeight":"{font-weight.bo...` |
| `sys/type.json` | `More styles.Body.Body S Mono - (400) Regular` | `{"fontFamily":"{font-family.mono}","fontWeight":"{font-weight.norma...` |
| `sys/type.json` | `More styles.Body.Body M - (500) Medium` | `{"fontFamily":"{font-family.default}","fontWeight":"{font-weight.md...` |
| `sys/type.json` | `More styles.Body.Body M - (700) Bold` | `{"fontFamily":"{font-family.default}","fontWeight":"{font-weight.bo...` |
| `sys/type.json` | `More styles.Body.Body M Link - (400) Regular` | `{"fontFamily":"{font-family.default}","fontWeight":"{font-weight.no...` |
| `sys/type.json` | `More styles.Body.Body M Link - (500) Medium` | `{"fontFamily":"{font-family.default}","fontWeight":"{font-weight.md...` |
| `sys/type.json` | `More styles.Body.Body M Link - (700) Bold` | `{"fontFamily":"{font-family.default}","fontWeight":"{font-weight.bo...` |
| `sys/type.json` | `More styles.Body.Body L - (500) Medium` | `{"fontFamily":"{font-family.default}","fontWeight":"{font-weight.md...` |
| `sys/type.json` | `More styles.Body.Body L - (700) Bold` | `{"fontFamily":"{font-family.default}","fontWeight":"{font-weight.bo...` |
| `sys/type.json` | `More styles.Body.Body L Link - (400) Regular` | `{"fontFamily":"{font-family.default}","fontWeight":"{font-weight.no...` |
| `sys/type.json` | `More styles.Body.Body L Link - (500) Medium` | `{"fontFamily":"{font-family.default}","fontWeight":"{font-weight.md...` |
| `sys/type.json` | `More styles.Body.Body L Link - (700) Bold` | `{"fontFamily":"{font-family.default}","fontWeight":"{font-weight.bo...` |
| `sys/type.json` | `More styles.Heading.Heading S - (500) Medium` | `{"fontFamily":"{font-family.default}","fontWeight":"{font-weight.md...` |
| `sys/type.json` | `More styles.Heading.Heading M - (500) Medium` | `{"fontFamily":"{font-family.default}","fontWeight":"{font-weight.md...` |
| `sys/type.json` | `More styles.Heading.Heading L - (500) Medium` | `{"fontFamily":"{font-family.default}","fontWeight":"{font-weight.md...` |
| `sys/type.json` | `More styles.Title.Title S - (300) Light` | `{"fontFamily":"{font-family.default}","fontWeight":"{font-weight.li...` |
| `sys/type.json` | `More styles.Title.Title S - (500) Medium` | `{"fontFamily":"{font-family.default}","fontWeight":"{font-weight.md...` |
| `sys/type.json` | `More styles.Title.Title M - (300) Light` | `{"fontFamily":"{font-family.default}","fontWeight":"{font-weight.li...` |
| `sys/type.json` | `More styles.Title.Title M - (500) Medium` | `{"fontFamily":"{font-family.default}","fontWeight":"{font-weight.md...` |
| `sys/type.json` | `More styles.Title.Title L - (300) Light` | `{"fontFamily":"{font-family.default}","fontWeight":"{font-weight.li...` |
| `sys/type.json` | `More styles.Title.Title L - (500) Medium` | `{"fontFamily":"{font-family.default}","fontWeight":"{font-weight.md...` |

</details>

---

## 4. New tokens (900)

Present in theme only.

### `base/palette.json` (629)

| Group | Count |
|-------|------:|
| `dark.palette` | 424 |
| `palette.tenant-airbnb` | 26 |
| `palette.tenant-discord` | 26 |
| `palette.tenant-spotify` | 26 |
| `palette.black` | 17 |
| `palette.amber` | 9 |
| `palette.azure` | 9 |
| `palette.blue` | 9 |
| `palette.coral` | 9 |
| `palette.green` | 9 |

<details>
<summary>All new tokens</summary>

| Path | Value |
|------|-------|
| `palette.amber.A300` | `#FEBE00F3` |
| `palette.amber.A400` | `#FFA300FC` |
| `palette.amber.A500` | `#D47700FC` |
| `palette.amber.A600` | `#B05100FC` |
| `palette.amber.A700` | `#983D00FC` |
| `palette.amber.A800` | `#7F2B00FC` |
| `palette.amber.A900` | `#581A00FC` |
| `palette.amber.A950` | `#3C0E00FC` |
| `palette.amber.A975` | `#300900FC` |
| `palette.azure.A300` | `#0094F786` |
| `palette.azure.A400` | `#008EF2B3` |
| `palette.azure.A500` | `#008BE5E3` |
| `palette.azure.A600` | `#006DA9FC` |
| `palette.azure.A700` | `#005C8FFC` |
| `palette.azure.A800` | `#00496CFC` |
| `palette.azure.A900` | `#003751FC` |
| `palette.azure.A950` | `#002335FC` |
| `palette.azure.A975` | `#001A29FC` |
| `palette.blue.A300` | `#0078FF77` |
| `palette.blue.A400` | `#0070FFA6` |
| `palette.blue.A500` | `#007CF6FC` |
| `palette.blue.A600` | `#0063CBFC` |
| `palette.blue.A700` | `#0055ADFC` |
| `palette.blue.A800` | `#003480EE` |
| `palette.blue.A900` | `#00215CF0` |
| `palette.blue.A950` | `#001E41FC` |
| `palette.blue.A975` | `#001535FC` |
| `palette.coral.A300` | `#FF3E0091` |
| `palette.coral.A400` | `#FE3F00AF` |
| `palette.coral.A500` | `#FC5800FA` |
| `palette.coral.A600` | `#C03400FC` |
| `palette.coral.A700` | `#9E2300FC` |
| `palette.coral.A800` | `#801600FC` |
| `palette.coral.A900` | `#590900FC` |
| `palette.coral.A950` | `#3D0100FC` |
| `palette.coral.A975` | `#2F0300FB` |
| `palette.green.A300` | `#00CE4BC6` |
| `palette.green.A400` | `#00B73FE6` |
| `palette.green.A500` | `#00A72FFC` |
| `palette.green.A600` | `#007A20FC` |
| `palette.green.A700` | `#006513FC` |
| `palette.green.A800` | `#00541BFC` |
| `palette.green.A900` | `#003D0AFC` |
| `palette.green.A950` | `#002A03FC` |
| `palette.green.A975` | `#001E01FC` |
| `palette.indigo.A300` | `#000BFF5B` |
| `palette.indigo.A400` | `#0009FF6E` |
| `palette.indigo.A500` | `#0E00FF94` |
| `palette.indigo.A600` | `#1E00DCB5` |
| `palette.indigo.A700` | `#1500AEC1` |
| `palette.indigo.A800` | `#0D0089D6` |
| `palette.indigo.A900` | `#080064DF` |
| `palette.indigo.A950` | `#050045EC` |
| `palette.indigo.A975` | `#000026F0` |
| `palette.magenta.A300` | `#FF00D26B` |
| `palette.magenta.A400` | `#F400A690` |
| `palette.magenta.A500` | `#D40081AE` |
| `palette.magenta.A600` | `#9D0069CD` |
| `palette.magenta.A700` | `#7E0054D8` |
| `palette.magenta.A800` | `#5D003DDB` |
| `palette.magenta.A900` | `#3C0028EB` |
| `palette.magenta.A950` | `#350025FB` |
| `palette.magenta.A975` | `#270018FA` |
| `palette.neutral.150` | `#e0e0e0` |
| `palette.neutral.850` | `#252525` |
| `palette.neutral.A150` | `#0000001F` |
| `palette.neutral.A850` | `#000000DA` |
| `palette.orange.A300` | `#FF8700CC` |
| `palette.orange.A400` | `#FD7D01FC` |
| `palette.orange.A500` | `#EC6000FC` |
| `palette.orange.A600` | `#B53D00FC` |
| `palette.orange.A700` | `#993200FC` |
| `palette.orange.A800` | `#812300FC` |
| `palette.orange.A900` | `#5D1500FC` |
| `palette.orange.A950` | `#3C0900FC` |
| `palette.orange.A975` | `#300600FC` |
| `palette.purple.A300` | `#B300FF5B` |
| `palette.purple.A400` | `#9C00D979` |
| `palette.purple.A500` | `#7400B19A` |
| `palette.purple.A600` | `#5D0088BA` |
| `palette.purple.A700` | `#54007BC5` |
| `palette.purple.A800` | `#460061CF` |
| `palette.purple.A900` | `#2A003DE1` |
| `palette.purple.A950` | `#1B0028EE` |
| `palette.purple.A975` | `#15001FF5` |
| `palette.red.A300` | `#FF1C0087` |
| `palette.red.A400` | `#FF1A00B8` |
| `palette.red.A500` | `#FF1600DC` |
| `palette.red.A600` | `#CD0300FC` |
| `palette.red.A700` | `#A30005FC` |
| `palette.red.A800` | `#7C000AFC` |
| `palette.red.A900` | `#560004FC` |
| `palette.red.A950` | `#3D0002FC` |
| `palette.red.A975` | `#2D0004FC` |
| `palette.slate.150` | `#dce1e8` |
| `palette.slate.850` | `#22262b` |
| `palette.slate.A150` | `#00245723` |
| `palette.slate.A850` | `#00050ADD` |
| `palette.teal.A300` | `#009FB190` |
| `palette.teal.A400` | `#0099ABB9` |
| `palette.teal.A500` | `#009DABFC` |
| `palette.teal.A600` | `#007480FC` |
| `palette.teal.A700` | `#00636FFC` |
| `palette.teal.A800` | `#004F59FC` |
| `palette.teal.A900` | `#00343CFC` |
| `palette.teal.A950` | `#002329FC` |
| `palette.teal.A975` | `#00191EFC` |
| `palette.white.$root` | `#ffffff` |
| `palette.white.A150` | `#FFFFFF2F` |
| `palette.white.A850` | `#FFFFFFE3` |
| `palette.black.$root` | `#000000` |
| `palette.black.A0` | `#00000000` |
| `palette.black.A25` | `#00000006` |
| `palette.black.A50` | `#0000000B` |
| `palette.black.A100` | `#0000001E` |
| `palette.black.A150` | `#0000002F` |
| `palette.black.A200` | `#00000040` |
| `palette.black.A300` | `#0000005F` |
| `palette.black.A400` | `#0000007D` |
| `palette.black.A500` | `#00000097` |
| `palette.black.A600` | `#000000B2` |
| `palette.black.A700` | `#000000C9` |
| `palette.black.A800` | `#000000DC` |
| `palette.black.A850` | `#000000E3` |
| `palette.black.A900` | `#000000EB` |
| `palette.black.A950` | `#000000F1` |
| `palette.black.A975` | `#000000F8` |
| `palette.tenant-airbnb.25` | `#fcf2f3` |
| `palette.tenant-airbnb.50` | `#fce9e9` |
| `palette.tenant-airbnb.100` | `#ffd5d6` |
| `palette.tenant-airbnb.200` | `#feaaae` |
| `palette.tenant-airbnb.300` | `#ff7c87` |
| `palette.tenant-airbnb.400` | `#ff3a5d` |
| `palette.tenant-airbnb.500` | `#e51247` |
| `palette.tenant-airbnb.600` | `#b30e35` |
| `palette.tenant-airbnb.700` | `#930027` |
| `palette.tenant-airbnb.800` | `#6f001a` |
| `palette.tenant-airbnb.900` | `#4c000d` |
| `palette.tenant-airbnb.950` | `#3a0008` |
| `palette.tenant-airbnb.975` | `#320007` |
| `palette.tenant-airbnb.A25` | `#C400140D` |
| `palette.tenant-airbnb.A50` | `#DC000016` |
| `palette.tenant-airbnb.A100` | `#FF00062A` |
| `palette.tenant-airbnb.A200` | `#FC000C55` |
| `palette.tenant-airbnb.A300` | `#FF001683` |
| `palette.tenant-airbnb.A400` | `#FF002DC5` |
| `palette.tenant-airbnb.A500` | `#E30039ED` |
| `palette.tenant-airbnb.A600` | `#AF0029F1` |
| `palette.tenant-airbnb.A700` | `#920025FC` |
| `palette.tenant-airbnb.A800` | `#6E0018FC` |
| `palette.tenant-airbnb.A900` | `#4A000BFC` |
| `palette.tenant-airbnb.A950` | `#380006FC` |
| `palette.tenant-airbnb.A975` | `#300005FC` |
| `palette.tenant-discord.25` | `#f6f8ff` |
| `palette.tenant-discord.50` | `#edf1ff` |
| `palette.tenant-discord.100` | `#d8e0fd` |
| `palette.tenant-discord.200` | `#b5c4ff` |
| `palette.tenant-discord.300` | `#90a4fd` |
| `palette.tenant-discord.400` | `#7085ff` |
| `palette.tenant-discord.500` | `#5966f3` |
| `palette.tenant-discord.600` | `#4348d4` |
| `palette.tenant-discord.700` | `#342fbc` |
| `palette.tenant-discord.800` | `#270f9c` |
| `palette.tenant-discord.900` | `#18026f` |
| `palette.tenant-discord.950` | `#130059` |
| `palette.tenant-discord.975` | `#0e004f` |
| `palette.tenant-discord.A25` | `#0039FF09` |
| `palette.tenant-discord.A50` | `#0039FF12` |
| `palette.tenant-discord.A100` | `#0034F227` |
| `palette.tenant-discord.A200` | `#0034FF4A` |
| `palette.tenant-discord.A300` | `#002EFA6F` |
| `palette.tenant-discord.A400` | `#0025FF8F` |
| `palette.tenant-discord.A500` | `#0014EDA6` |
| `palette.tenant-discord.A600` | `#0007C5BC` |
| `palette.tenant-discord.A700` | `#0600ADD0` |
| `palette.tenant-discord.A800` | `#1A0096F0` |
| `palette.tenant-discord.A900` | `#16006EFC` |
| `palette.tenant-discord.A950` | `#110057FC` |
| `palette.tenant-discord.A975` | `#0C004DFC` |
| `palette.tenant-spotify.25` | `#f3fff4` |
| `palette.tenant-spotify.50` | `#dfffe3` |
| `palette.tenant-spotify.100` | `#b0feba` |
| `palette.tenant-spotify.200` | `#66ef83` |
| `palette.tenant-spotify.300` | `#20d762` |
| `palette.tenant-spotify.400` | `#15ba53` |
| `palette.tenant-spotify.500` | `#099e44` |
| `palette.tenant-spotify.600` | `#017b37` |
| `palette.tenant-spotify.700` | `#006129` |
| `palette.tenant-spotify.800` | `#05441d` |
| `palette.tenant-spotify.900` | `#002d11` |
| `palette.tenant-spotify.950` | `#00220b` |
| `palette.tenant-spotify.975` | `#001d06` |
| `palette.tenant-spotify.A25` | `#00FF160C` |
| `palette.tenant-spotify.A50` | `#00FF2020` |
| `palette.tenant-spotify.A100` | `#00FC214F` |
| `palette.tenant-spotify.A200` | `#00E43099` |
| `palette.tenant-spotify.A300` | `#00D14CDF` |
| `palette.tenant-spotify.A400` | `#00B444EA` |
| `palette.tenant-spotify.A500` | `#009A3DF6` |
| `palette.tenant-spotify.A600` | `#007A35FC` |
| `palette.tenant-spotify.A700` | `#005F27FC` |
| `palette.tenant-spotify.A800` | `#004019FA` |
| `palette.tenant-spotify.A900` | `#002B0FFC` |
| `palette.tenant-spotify.A950` | `#002009FC` |
| `palette.tenant-spotify.A975` | `#001B03FC` |
| `dark.palette.amber.25` | `#2e1005` |
| `dark.palette.amber.50` | `#391508` |
| `dark.palette.amber.100` | `#53230f` |
| `dark.palette.amber.200` | `#763519` |
| `dark.palette.amber.300` | `#8d4621` |
| `dark.palette.amber.400` | `#a35929` |
| `dark.palette.amber.500` | `#c57c37` |
| `dark.palette.amber.600` | `#eda548` |
| `dark.palette.amber.700` | `#efbf51` |
| `dark.palette.amber.800` | `#f2e07b` |
| `dark.palette.amber.900` | `#f6ecb2` |
| `dark.palette.amber.950` | `#f5f0ca` |
| `dark.palette.amber.975` | `#f4f1e5` |
| `dark.palette.amber.A25` | `#350F00CC` |
| `dark.palette.amber.A50` | `#4B1500AD` |
| `dark.palette.amber.A100` | `#B3380066` |
| `dark.palette.amber.A200` | `#FF61196B` |
| `dark.palette.amber.A300` | `#FF742984` |
| `dark.palette.amber.A400` | `#FF84339C` |
| `dark.palette.amber.A500` | `#FF9E41C0` |
| `dark.palette.amber.A600` | `#FFB14CEC` |
| `dark.palette.amber.A700` | `#FFCB55EE` |
| `dark.palette.amber.A800` | `#FFEC81F1` |
| `dark.palette.amber.A900` | `#FFF5B8F5` |
| `dark.palette.amber.A950` | `#FFFAD2F4` |
| `dark.palette.amber.A975` | `#FFFCEFF3` |
| `dark.palette.azure.25` | `#061c28` |
| `dark.palette.azure.50` | `#0a2533` |
| `dark.palette.azure.100` | `#12384d` |
| `dark.palette.azure.200` | `#1a4a65` |
| `dark.palette.azure.300` | `#225c84` |
| `dark.palette.azure.400` | `#296c9b` |
| `dark.palette.azure.500` | `#4195d4` |
| `dark.palette.azure.600` | `#61abe3` |
| `dark.palette.azure.700` | `#85c1ea` |
| `dark.palette.azure.800` | `#9dd5f1` |
| `dark.palette.azure.900` | `#cce8f4` |
| `dark.palette.azure.950` | `#daeef6` |
| `dark.palette.azure.975` | `#ebf4f7` |
| `dark.palette.azure.A25` | `#001F2FAE` |
| `dark.palette.azure.A50` | `#00375079` |
| `dark.palette.azure.A100` | `#0EB0FF3A` |
| `dark.palette.azure.A200` | `#28B5FF54` |
| `dark.palette.azure.A300` | `#33AEFF77` |
| `dark.palette.azure.A400` | `#3AAFFF90` |
| `dark.palette.azure.A500` | `#4CB2FFCF` |
| `dark.palette.azure.A600` | `#6CC0FFE0` |
| `dark.palette.azure.A700` | `#90D2FFE8` |
| `dark.palette.azure.A800` | `#A6E1FFEF` |
| `dark.palette.azure.A900` | `#D5F3FFF3` |
| `dark.palette.azure.A950` | `#E2F7FFF5` |
| `dark.palette.azure.A975` | `#F3FCFFF6` |
| `dark.palette.blue.25` | `#051832` |
| `dark.palette.blue.50` | `#0a213d` |
| `dark.palette.blue.100` | `#17305c` |
| `dark.palette.blue.200` | `#1f437a` |
| `dark.palette.blue.300` | `#20589c` |
| `dark.palette.blue.400` | `#2666b7` |
| `dark.palette.blue.500` | `#317edc` |
| `dark.palette.blue.600` | `#669fe9` |
| `dark.palette.blue.700` | `#8fbbed` |
| `dark.palette.blue.800` | `#b2d0f1` |
| `dark.palette.blue.900` | `#d4e3f4` |
| `dark.palette.blue.950` | `#dfeaf6` |
| `dark.palette.blue.975` | `#e8eff7` |
| `dark.palette.blue.A25` | `#00193BBC` |
| `dark.palette.blue.A50` | `#002E6579` |
| `dark.palette.blue.A100` | `#2172FF4A` |
| `dark.palette.blue.A200` | `#2F82FF6C` |
| `dark.palette.blue.A300` | `#2A8BFF91` |
| `dark.palette.blue.A400` | `#2F8BFFAF` |
| `dark.palette.blue.A500` | `#3691FFD8` |
| `dark.palette.blue.A600` | `#6FAEFFE7` |
| `dark.palette.blue.A700` | `#9AC9FFEB` |
| `dark.palette.blue.A800` | `#BCDCFFEF` |
| `dark.palette.blue.A900` | `#DEEDFFF3` |
| `dark.palette.blue.A950` | `#E7F3FFF5` |
| `dark.palette.blue.A975` | `#F0F7FFF6` |
| `dark.palette.coral.25` | `#2e0d09` |
| `dark.palette.coral.50` | `#3a0d07` |
| `dark.palette.coral.100` | `#53180d` |
| `dark.palette.coral.200` | `#762717` |
| `dark.palette.coral.300` | `#91351e` |
| `dark.palette.coral.400` | `#b04628` |
| `dark.palette.coral.500` | `#e7693a` |
| `dark.palette.coral.600` | `#ea8361` |
| `dark.palette.coral.700` | `#ed9579` |
| `dark.palette.coral.800` | `#f0b9a8` |
| `dark.palette.coral.900` | `#f5ddd7` |
| `dark.palette.coral.950` | `#f6eae7` |
| `dark.palette.coral.975` | `#f7f2ef` |
| `dark.palette.coral.A25` | `#3D0900A3` |
| `dark.palette.coral.A50` | `#490A00B8` |
| `dark.palette.coral.A100` | `#981B007A` |
| `dark.palette.coral.A200` | `#FF40146B` |
| `dark.palette.coral.A300` | `#FF512388` |
| `dark.palette.coral.A400` | `#FF5F30AA` |
| `dark.palette.coral.A500` | `#FF733EE5` |
| `dark.palette.coral.A600` | `#FF8E68E8` |
| `dark.palette.coral.A700` | `#FFA081EC` |
| `dark.palette.coral.A800` | `#FFC4B2EF` |
| `dark.palette.coral.A900` | `#FFE6DFF4` |
| `dark.palette.coral.A950` | `#FFF2EFF5` |
| `dark.palette.coral.A975` | `#FFFAF7F6` |
| `dark.palette.green.25` | `#061f09` |
| `dark.palette.green.50` | `#0b2b0e` |
| `dark.palette.green.100` | `#123d17` |
| `dark.palette.green.200` | `#1b5327` |
| `dark.palette.green.300` | `#216326` |
| `dark.palette.green.400` | `#297533` |
| `dark.palette.green.500` | `#3ba047` |
| `dark.palette.green.600` | `#48b561` |
| `dark.palette.green.700` | `#5ecf7f` |
| `dark.palette.green.800` | `#7ee396` |
| `dark.palette.green.900` | `#bbf1c5` |
| `dark.palette.green.950` | `#d9f6de` |
| `dark.palette.green.975` | `#e9f7eb` |
| `dark.palette.green.A25` | `#002402AE` |
| `dark.palette.green.A50` | `#01470070` |
| `dark.palette.green.A100` | `#0DFF0E2C` |
| `dark.palette.green.A200` | `#31FF4E44` |
| `dark.palette.green.A300` | `#3DFF4055` |
| `dark.palette.green.A400` | `#48FF5869` |
| `dark.palette.green.A500` | `#56FF6697` |
| `dark.palette.green.A600` | `#60FF82AE` |
| `dark.palette.green.A700` | `#71FF99CB` |
| `dark.palette.green.A800` | `#8DFFA7E0` |
| `dark.palette.green.A900` | `#C6FFD0F0` |
| `dark.palette.green.A950` | `#E1FFE6F5` |
| `dark.palette.green.A975` | `#F1FFF3F6` |
| `dark.palette.indigo.25` | `#10122e` |
| `dark.palette.indigo.50` | `#19194a` |
| `dark.palette.indigo.100` | `#272769` |
| `dark.palette.indigo.200` | `#34328a` |
| `dark.palette.indigo.300` | `#4d47ac` |
| `dark.palette.indigo.400` | `#5d54cc` |
| `dark.palette.indigo.500` | `#7271e4` |
| `dark.palette.indigo.600` | `#9095e9` |
| `dark.palette.indigo.700` | `#a2a6ec` |
| `dark.palette.indigo.800` | `#c1c5f0` |
| `dark.palette.indigo.900` | `#dbddf4` |
| `dark.palette.indigo.950` | `#e5e7f5` |
| `dark.palette.indigo.975` | `#eeeef7` |
| `dark.palette.indigo.A25` | `#00029E28` |
| `dark.palette.indigo.A50` | `#2F28FF36` |
| `dark.palette.indigo.A100` | `#4D49FF59` |
| `dark.palette.indigo.A200` | `#5650FF7D` |
| `dark.palette.indigo.A300` | `#6E63FFA3` |
| `dark.palette.indigo.A400` | `#7266FFC6` |
| `dark.palette.indigo.A500` | `#7F7DFFE1` |
| `dark.palette.indigo.A600` | `#9DA3FFE7` |
| `dark.palette.indigo.A700` | `#AFB3FFEA` |
| `dark.palette.indigo.A800` | `#CDD1FFEE` |
| `dark.palette.indigo.A900` | `#E5E7FFF3` |
| `dark.palette.indigo.A950` | `#EFF1FFF4` |
| `dark.palette.indigo.A975` | `#F6F6FFF6` |
| `dark.palette.magenta.25` | `#280a1c` |
| `dark.palette.magenta.50` | `#340c26` |
| `dark.palette.magenta.100` | `#461b37` |
| `dark.palette.magenta.200` | `#6b2d54` |
| `dark.palette.magenta.300` | `#873569` |
| `dark.palette.magenta.400` | `#a2427f` |
| `dark.palette.magenta.500` | `#d05fa1` |
| `dark.palette.magenta.600` | `#e77ac2` |
| `dark.palette.magenta.700` | `#ef9adf` |
| `dark.palette.magenta.800` | `#f2c2f0` |
| `dark.palette.magenta.900` | `#f4d5f1` |
| `dark.palette.magenta.950` | `#f6e7f6` |
| `dark.palette.magenta.975` | `#f7eef7` |
| `dark.palette.magenta.A25` | `#3B001F86` |
| `dark.palette.magenta.A50` | `#6000376D` |
| `dark.palette.magenta.A100` | `#FF31A437` |
| `dark.palette.magenta.A200` | `#FF55B75F` |
| `dark.palette.magenta.A300` | `#FF56BC7D` |
| `dark.palette.magenta.A400` | `#FF5FC19B` |
| `dark.palette.magenta.A500` | `#FF71C3CC` |
| `dark.palette.magenta.A600` | `#FF85D5E5` |
| `dark.palette.magenta.A700` | `#FFA4EDEE` |
| `dark.palette.magenta.A800` | `#FFCCFDF1` |
| `dark.palette.magenta.A900` | `#FFDEFCF3` |
| `dark.palette.magenta.A950` | `#FFEFFFF5` |
| `dark.palette.magenta.A975` | `#FFF6FFF6` |
| `dark.palette.neutral.25` | `#161616` |
| `dark.palette.neutral.50` | `#1d1d1d` |
| `dark.palette.neutral.100` | `#212121` |
| `dark.palette.neutral.150` | `#262626` |
| `dark.palette.neutral.200` | `#323232` |
| `dark.palette.neutral.300` | `#515151` |
| `dark.palette.neutral.400` | `#646464` |
| `dark.palette.neutral.500` | `#848484` |
| `dark.palette.neutral.600` | `#a1a1a1` |
| `dark.palette.neutral.700` | `#bababa` |
| `dark.palette.neutral.800` | `#cfcfcf` |
| `dark.palette.neutral.850` | `#dbdbdb` |
| `dark.palette.neutral.900` | `#e6e6e6` |
| `dark.palette.neutral.950` | `#eeeeef` |
| `dark.palette.neutral.975` | `#f3f3f3` |
| `dark.palette.neutral.A25` | `#2C1D001F` |
| `dark.palette.neutral.A50` | `#FFD2770B` |
| `dark.palette.neutral.A100` | `#FFDFA00F` |
| `dark.palette.neutral.A150` | `#FFE8BB15` |
| `dark.palette.neutral.A200` | `#FFF2D722` |
| `dark.palette.neutral.A300` | `#FFF9EE43` |
| `dark.palette.neutral.A400` | `#FFFBF458` |
| `dark.palette.neutral.A500` | `#FFFDF97A` |
| `dark.palette.neutral.A600` | `#FFFEFB99` |
| `dark.palette.neutral.A700` | `#FFFEFDB4` |
| `dark.palette.neutral.A800` | `#FFFEFECB` |
| `dark.palette.neutral.A850` | `#FFFFFED8` |
| `dark.palette.neutral.A900` | `#FFFFFEE4` |
| `dark.palette.neutral.A950` | `#FEFEFFED` |
| `dark.palette.neutral.A975` | `#FFFFFFF2` |
| `dark.palette.orange.25` | `#2e0e05` |
| `dark.palette.orange.50` | `#391207` |
| `dark.palette.orange.100` | `#57200f` |
| `dark.palette.orange.200` | `#772f18` |
| `dark.palette.orange.300` | `#8d3e1f` |
| `dark.palette.orange.400` | `#a74a27` |
| `dark.palette.orange.500` | `#d96c37` |
| `dark.palette.orange.600` | `#e9853f` |
| `dark.palette.orange.700` | `#eda156` |
| `dark.palette.orange.800` | `#f1c295` |
| `dark.palette.orange.900` | `#f4dbc2` |
| `dark.palette.orange.950` | `#f5e6d4` |
| `dark.palette.orange.975` | `#f6ece3` |
| `dark.palette.orange.A25` | `#350C00CC` |
| `dark.palette.orange.A50` | `#481100B8` |
| `dark.palette.orange.A100` | `#BD310066` |
| `dark.palette.orange.A200` | `#FF52176C` |
| `dark.palette.orange.A300` | `#FF642584` |
| `dark.palette.orange.A400` | `#FF6A2FA0` |
| `dark.palette.orange.A500` | `#FF7D3DD6` |
| `dark.palette.orange.A600` | `#FF9143E7` |
| `dark.palette.orange.A700` | `#FFAD5BEC` |
| `dark.palette.orange.A800` | `#FFCD9DF0` |
| `dark.palette.orange.A900` | `#FFE5CAF3` |
| `dark.palette.orange.A950` | `#FFEFDCF4` |
| `dark.palette.orange.A975` | `#FFF5EBF5` |
| `dark.palette.purple.25` | `#1d0e25` |
| `dark.palette.purple.50` | `#281532` |
| `dark.palette.purple.100` | `#40234d` |
| `dark.palette.purple.200` | `#633774` |
| `dark.palette.purple.300` | `#74428c` |
| `dark.palette.purple.400` | `#814d9a` |
| `dark.palette.purple.500` | `#a16bbf` |
| `dark.palette.purple.600` | `#c48bdc` |
| `dark.palette.purple.700` | `#d8a6ee` |
| `dark.palette.purple.800` | `#e3c0f1` |
| `dark.palette.purple.900` | `#e8d2f3` |
| `dark.palette.purple.950` | `#eee4f5` |
| `dark.palette.purple.975` | `#f4eff7` |
| `dark.palette.purple.A25` | `#31003D55` |
| `dark.palette.purple.A50` | `#D415FF1C` |
| `dark.palette.purple.A100` | `#DA53FF3A` |
| `dark.palette.purple.A200` | `#DD6BFF65` |
| `dark.palette.purple.A300` | `#D56FFF80` |
| `dark.palette.purple.A400` | `#D779FF8F` |
| `dark.palette.purple.A500` | `#D88CFFB8` |
| `dark.palette.purple.A600` | `#E4A0FFD8` |
| `dark.palette.purple.A700` | `#E8B2FFEC` |
| `dark.palette.purple.A800` | `#F0CBFFEF` |
| `dark.palette.purple.A900` | `#F4DCFFF2` |
| `dark.palette.purple.A950` | `#F8EDFFF4` |
| `dark.palette.purple.A975` | `#FCF7FFF6` |
| `dark.palette.red.25` | `#2b090b` |
| `dark.palette.red.50` | `#3a0a0b` |
| `dark.palette.red.100` | `#501111` |
| `dark.palette.red.200` | `#721b1a` |
| `dark.palette.red.300` | `#952620` |
| `dark.palette.red.400` | `#ba3327` |
| `dark.palette.red.500` | `#e8523f` |
| `dark.palette.red.600` | `#ea6958` |
| `dark.palette.red.700` | `#ec8d80` |
| `dark.palette.red.800` | `#f0b2a9` |
| `dark.palette.red.900` | `#f4d8d5` |
| `dark.palette.red.950` | `#f6e5e3` |
| `dark.palette.red.975` | `#f7efee` |
| `dark.palette.red.A25` | `#3D000192` |
| `dark.palette.red.A50` | `#5901008F` |
| `dark.palette.red.A100` | `#D2090052` |
| `dark.palette.red.A200` | `#FF241C67` |
| `dark.palette.red.A300` | `#FF34268C` |
| `dark.palette.red.A400` | `#FF3F2DB4` |
| `dark.palette.red.A500` | `#FF5943E6` |
| `dark.palette.red.A600` | `#FF715EE8` |
| `dark.palette.red.A700` | `#FF9889EA` |
| `dark.palette.red.A800` | `#FFBDB3EF` |
| `dark.palette.red.A900` | `#FFE2DEF3` |
| `dark.palette.red.A950` | `#FFEDEBF5` |
| `dark.palette.red.A975` | `#FFF7F6F6` |
| `dark.palette.slate.25` | `#131519` |
| `dark.palette.slate.50` | `#191c1f` |
| `dark.palette.slate.100` | `#1e2126` |
| `dark.palette.slate.150` | `#23262a` |
| `dark.palette.slate.200` | `#2e3237` |
| `dark.palette.slate.300` | `#4b525c` |
| `dark.palette.slate.400` | `#5d656f` |
| `dark.palette.slate.500` | `#7c8590` |
| `dark.palette.slate.600` | `#99a2ad` |
| `dark.palette.slate.700` | `#b3bbc5` |
| `dark.palette.slate.800` | `#cad0d8` |
| `dark.palette.slate.850` | `#d7dbe1` |
| `dark.palette.slate.900` | `#e4e6ea` |
| `dark.palette.slate.950` | `#edeff1` |
| `dark.palette.slate.975` | `#f2f3f5` |
| `dark.palette.slate.A25` | `#13151903` |
| `dark.palette.slate.A50` | `#DCFFE208` |
| `dark.palette.slate.A100` | `#D6E9FF0E` |
| `dark.palette.slate.A150` | `#EBFBFF13` |
| `dark.palette.slate.A200` | `#E2F3FF21` |
| `dark.palette.slate.A300` | `#D3E6FF4A` |
| `dark.palette.slate.A400` | `#D9EBFF5F` |
| `dark.palette.slate.A500` | `#DEEDFF84` |
| `dark.palette.slate.A600` | `#E3F0FFA4` |
| `dark.palette.slate.A700` | `#E9F3FFBF` |
| `dark.palette.slate.A800` | `#EFF6FFD4` |
| `dark.palette.slate.A850` | `#F4F9FFDE` |
| `dark.palette.slate.A900` | `#F9FBFFE8` |
| `dark.palette.slate.A950` | `#FBFDFFEF` |
| `dark.palette.slate.A975` | `#FCFDFFF4` |
| `dark.palette.teal.25` | `#061b1f` |
| `dark.palette.teal.50` | `#092429` |
| `dark.palette.teal.100` | `#10353b` |
| `dark.palette.teal.200` | `#1b4e56` |
| `dark.palette.teal.300` | `#24626a` |
| `dark.palette.teal.400` | `#2a717a` |
| `dark.palette.teal.500` | `#3b98a3` |
| `dark.palette.teal.600` | `#5daeb8` |
| `dark.palette.teal.700` | `#7dc1c9` |
| `dark.palette.teal.800` | `#a8dce1` |
| `dark.palette.teal.900` | `#c8ebef` |
| `dark.palette.teal.950` | `#d2f2f5` |
| `dark.palette.teal.975` | `#e7f6f7` |
| `dark.palette.teal.A25` | `#001E22AE` |
| `dark.palette.teal.A50` | `#00313786` |
| `dark.palette.teal.A100` | `#00E0F028` |
| `dark.palette.teal.A200` | `#31ECFF44` |
| `dark.palette.teal.A300` | `#43F0FF5A` |
| `dark.palette.teal.A400` | `#49EFFF6C` |
| `dark.palette.teal.A500` | `#55EFFF99` |
| `dark.palette.teal.A600` | `#7EF2FFB0` |
| `dark.palette.teal.A700` | `#9DF6FFC3` |
| `dark.palette.teal.A800` | `#BEFAFFDE` |
| `dark.palette.teal.A900` | `#D5FBFFED` |
| `dark.palette.teal.A950` | `#DBFCFFF4` |
| `dark.palette.teal.A975` | `#EFFEFFF6` |
| `dark.palette.tenant-airbnb.25` | `#2e070b` |
| `dark.palette.tenant-airbnb.50` | `#36080d` |
| `dark.palette.tenant-airbnb.100` | `#460b13` |
| `dark.palette.tenant-airbnb.200` | `#651520` |
| `dark.palette.tenant-airbnb.300` | `#86212f` |
| `dark.palette.tenant-airbnb.400` | `#a32e3d` |
| `dark.palette.tenant-airbnb.500` | `#d13d51` |
| `dark.palette.tenant-airbnb.600` | `#e95465` |
| `dark.palette.tenant-airbnb.700` | `#ec848a` |
| `dark.palette.tenant-airbnb.800` | `#eeabad` |
| `dark.palette.tenant-airbnb.900` | `#f5d1d2` |
| `dark.palette.tenant-airbnb.950` | `#f3e4e4` |
| `dark.palette.tenant-airbnb.975` | `#f4eded` |
| `dark.palette.tenant-airbnb.A25` | `#3C0004AA` |
| `dark.palette.tenant-airbnb.A50` | `#4C00069E` |
| `dark.palette.tenant-airbnb.A100` | `#7E000C79` |
| `dark.palette.tenant-airbnb.A200` | `#FF152D59` |
| `dark.palette.tenant-airbnb.A300` | `#FF2E467C` |
| `dark.palette.tenant-airbnb.A400` | `#FF3E549C` |
| `dark.palette.tenant-airbnb.A500` | `#FF475FCD` |
| `dark.palette.tenant-airbnb.A600` | `#FF5B6DE7` |
| `dark.palette.tenant-airbnb.A700` | `#FF8E94EA` |
| `dark.palette.tenant-airbnb.A800` | `#FFB7B9ED` |
| `dark.palette.tenant-airbnb.A900` | `#FFD9DAF4` |
| `dark.palette.tenant-airbnb.A950` | `#FFEFEFF2` |
| `dark.palette.tenant-airbnb.A975` | `#FFF8F7F3` |
| `dark.palette.tenant-discord.25` | `#0d0944` |
| `dark.palette.tenant-discord.50` | `#120c4d` |
| `dark.palette.tenant-discord.100` | `#181460` |
| `dark.palette.tenant-discord.200` | `#262388` |
| `dark.palette.tenant-discord.300` | `#353ba5` |
| `dark.palette.tenant-discord.400` | `#4550bc` |
| `dark.palette.tenant-discord.500` | `#5c6bd9` |
| `dark.palette.tenant-discord.600` | `#7386e6` |
| `dark.palette.tenant-discord.700` | `#91a2e8` |
| `dark.palette.tenant-discord.800` | `#b3c0f2` |
| `dark.palette.tenant-discord.900` | `#d4dbf1` |
| `dark.palette.tenant-discord.950` | `#e7ebf7` |
| `dark.palette.tenant-discord.975` | `#f0f2f7` |
| `dark.palette.tenant-discord.A25` | `#09006492` |
| `dark.palette.tenant-discord.A50` | `#1100926D` |
| `dark.palette.tenant-discord.A100` | `#2312FF4F` |
| `dark.palette.tenant-discord.A200` | `#3A32FF7B` |
| `dark.palette.tenant-discord.A300` | `#4B53FF9B` |
| `dark.palette.tenant-discord.A400` | `#5A68FFB5` |
| `dark.palette.tenant-discord.A500` | `#6A7CFFD5` |
| `dark.palette.tenant-discord.A600` | `#7F94FFE3` |
| `dark.palette.tenant-discord.A700` | `#9FB2FFE5` |
| `dark.palette.tenant-discord.A800` | `#BDCAFFF1` |
| `dark.palette.tenant-discord.A900` | `#E0E8FFEF` |
| `dark.palette.tenant-discord.A950` | `#EFF3FFF6` |
| `dark.palette.tenant-discord.A975` | `#F8FAFFF6` |
| `dark.palette.tenant-spotify.25` | `#041c0a` |
| `dark.palette.tenant-spotify.50` | `#07210f` |
| `dark.palette.tenant-spotify.100` | `#0b2c16` |
| `dark.palette.tenant-spotify.200` | `#174223` |
| `dark.palette.tenant-spotify.300` | `#1f5d31` |
| `dark.palette.tenant-spotify.400` | `#2a7640` |
| `dark.palette.tenant-spotify.500` | `#399651` |
| `dark.palette.tenant-spotify.600` | `#46b161` |
| `dark.palette.tenant-spotify.700` | `#53cc72` |
| `dark.palette.tenant-spotify.800` | `#7de38f` |
| `dark.palette.tenant-spotify.900` | `#b6f4be` |
| `dark.palette.tenant-spotify.950` | `#def7e0` |
| `dark.palette.tenant-spotify.975` | `#eef8ef` |
| `dark.palette.tenant-spotify.A25` | `#001E06C9` |
| `dark.palette.tenant-spotify.A50` | `#002809A1` |
| `dark.palette.tenant-spotify.A100` | `#004C126B` |
| `dark.palette.tenant-spotify.A200` | `#27FF4D31` |
| `dark.palette.tenant-spotify.A300` | `#3AFF674E` |
| `dark.palette.tenant-spotify.A400` | `#4AFF776A` |
| `dark.palette.tenant-spotify.A500` | `#58FF7F8D` |
| `dark.palette.tenant-spotify.A600` | `#5FFF85AA` |
| `dark.palette.tenant-spotify.A700` | `#65FF8BC7` |
| `dark.palette.tenant-spotify.A800` | `#8BFF9FE0` |
| `dark.palette.tenant-spotify.A900` | `#BEFFC6F3` |
| `dark.palette.tenant-spotify.A950` | `#E5FFE7F6` |
| `dark.palette.tenant-spotify.A975` | `#F5FFF6F7` |

</details>

### `sys/brand/canvas.json` (182)

| Group | Count |
|-------|------:|
| `dark.brand.neutral` | 30 |
| `dark.brand.caution` | 26 |
| `dark.brand.critical` | 26 |
| `dark.brand.positive` | 26 |
| `dark.brand.primary` | 26 |
| `dark.brand.action` | 8 |
| `brand.primary.A300` | 1 |
| `brand.primary.A400` | 1 |
| `brand.primary.A500` | 1 |
| `brand.primary.A600` | 1 |

<details>
<summary>All new tokens</summary>

| Path | Value |
|------|-------|
| `brand.primary.A300` | `{palette.blue.A300}` |
| `brand.primary.A400` | `{palette.blue.A400}` |
| `brand.primary.A500` | `{palette.blue.A500}` |
| `brand.primary.A600` | `{palette.blue.A600}` |
| `brand.primary.A700` | `{palette.blue.A700}` |
| `brand.primary.A800` | `{palette.blue.A800}` |
| `brand.primary.A900` | `{palette.blue.A900}` |
| `brand.primary.A950` | `{palette.blue.A950}` |
| `brand.primary.A975` | `{palette.blue.A975}` |
| `brand.critical.A300` | `{palette.red.A300}` |
| `brand.critical.A400` | `{palette.red.A400}` |
| `brand.critical.A500` | `{palette.red.A500}` |
| `brand.critical.A600` | `{palette.red.A600}` |
| `brand.critical.A700` | `{palette.red.A700}` |
| `brand.critical.A800` | `{palette.red.A800}` |
| `brand.critical.A900` | `{palette.red.A900}` |
| `brand.critical.A950` | `{palette.red.A950}` |
| `brand.critical.A975` | `{palette.red.A975}` |
| `brand.caution.A300` | `{palette.amber.A300}` |
| `brand.caution.A400` | `{palette.amber.400}` |
| `brand.caution.A500` | `{palette.amber.500}` |
| `brand.caution.A600` | `{palette.amber.600}` |
| `brand.caution.A700` | `{palette.amber.700}` |
| `brand.caution.A800` | `{palette.amber.800}` |
| `brand.caution.A900` | `{palette.amber.900}` |
| `brand.caution.A950` | `{palette.amber.950}` |
| `brand.caution.A975` | `{palette.amber.975}` |
| `brand.positive.A300` | `{palette.green.A300}` |
| `brand.positive.A400` | `{palette.green.A400}` |
| `brand.positive.A500` | `{palette.green.500}` |
| `brand.positive.A600` | `{palette.green.600}` |
| `brand.positive.A700` | `{palette.green.700}` |
| `brand.positive.A800` | `{palette.green.800}` |
| `brand.positive.A900` | `{palette.green.900}` |
| `brand.positive.A950` | `{palette.green.950}` |
| `brand.positive.A975` | `{palette.green.975}` |
| `brand.neutral.150` | `{palette.neutral.150}` |
| `brand.neutral.850` | `{palette.neutral.850}` |
| `brand.neutral.A150` | `{palette.neutral.A150}` |
| `brand.neutral.A850` | `{palette.neutral.A850}` |
| `dark.brand.action.accent` | `{palette.black.$root}` |
| `dark.brand.action.base` | `{dark.brand.neutral.975}` |
| `dark.brand.action.dark` | `{dark.brand.neutral.975}` |
| `dark.brand.action.darker` | `{dark.brand.neutral.975}` |
| `dark.brand.action.darkest` | `{dark.brand.neutral.950}` |
| `dark.brand.action.light` | `{dark.brand.neutral.200}` |
| `dark.brand.action.lighter` | `{dark.brand.neutral.100}` |
| `dark.brand.action.lightest` | `{dark.brand.neutral.25}` |
| `dark.brand.caution.25` | `{dark.palette.amber.25}` |
| `dark.brand.caution.50` | `{dark.palette.amber.50}` |
| `dark.brand.caution.100` | `{dark.palette.amber.100}` |
| `dark.brand.caution.200` | `{dark.palette.amber.200}` |
| `dark.brand.caution.300` | `{dark.palette.amber.300}` |
| `dark.brand.caution.400` | `{dark.palette.amber.400}` |
| `dark.brand.caution.500` | `{dark.palette.amber.500}` |
| `dark.brand.caution.600` | `{dark.palette.amber.600}` |
| `dark.brand.caution.700` | `{dark.palette.amber.700}` |
| `dark.brand.caution.800` | `{dark.palette.amber.800}` |
| `dark.brand.caution.900` | `{dark.palette.amber.900}` |
| `dark.brand.caution.950` | `{dark.palette.amber.950}` |
| `dark.brand.caution.975` | `{dark.palette.amber.975}` |
| `dark.brand.caution.A25` | `{dark.palette.amber.A25}` |
| `dark.brand.caution.A50` | `{dark.palette.amber.A50}` |
| `dark.brand.caution.A100` | `{dark.palette.amber.A100}` |
| `dark.brand.caution.A200` | `{dark.palette.amber.A200}` |
| `dark.brand.caution.A300` | `{dark.palette.amber.A300}` |
| `dark.brand.caution.A400` | `{dark.palette.amber.A400}` |
| `dark.brand.caution.A500` | `{dark.palette.amber.A500}` |
| `dark.brand.caution.A600` | `{dark.palette.amber.A600}` |
| `dark.brand.caution.A700` | `{dark.palette.amber.A700}` |
| `dark.brand.caution.A800` | `{dark.palette.amber.A800}` |
| `dark.brand.caution.A900` | `{dark.palette.amber.A900}` |
| `dark.brand.caution.A950` | `{dark.palette.amber.A950}` |
| `dark.brand.caution.A975` | `{dark.palette.amber.A975}` |
| `dark.brand.critical.25` | `{dark.palette.red.25}` |
| `dark.brand.critical.50` | `{dark.palette.red.50}` |
| `dark.brand.critical.100` | `{dark.palette.red.100}` |
| `dark.brand.critical.200` | `{dark.palette.red.200}` |
| `dark.brand.critical.300` | `{dark.palette.red.300}` |
| `dark.brand.critical.400` | `{dark.palette.red.400}` |
| `dark.brand.critical.500` | `{dark.palette.red.500}` |
| `dark.brand.critical.600` | `{dark.palette.red.600}` |
| `dark.brand.critical.700` | `{dark.palette.red.700}` |
| `dark.brand.critical.800` | `{dark.palette.red.800}` |
| `dark.brand.critical.900` | `{dark.palette.red.900}` |
| `dark.brand.critical.950` | `{dark.palette.red.950}` |
| `dark.brand.critical.975` | `{dark.palette.red.975}` |
| `dark.brand.critical.A25` | `{dark.palette.red.A25}` |
| `dark.brand.critical.A50` | `{dark.palette.red.A50}` |
| `dark.brand.critical.A100` | `{dark.palette.red.A100}` |
| `dark.brand.critical.A200` | `{dark.palette.red.A200}` |
| `dark.brand.critical.A300` | `{dark.palette.red.A300}` |
| `dark.brand.critical.A400` | `{dark.palette.red.A400}` |
| `dark.brand.critical.A500` | `{dark.palette.red.A500}` |
| `dark.brand.critical.A600` | `{dark.palette.red.A600}` |
| `dark.brand.critical.A700` | `{dark.palette.red.A700}` |
| `dark.brand.critical.A800` | `{dark.palette.red.A800}` |
| `dark.brand.critical.A900` | `{dark.palette.red.A900}` |
| `dark.brand.critical.A950` | `{dark.palette.red.A950}` |
| `dark.brand.critical.A975` | `{dark.palette.red.A975}` |
| `dark.brand.neutral.25` | `{dark.palette.neutral.25}` |
| `dark.brand.neutral.50` | `{dark.palette.neutral.50}` |
| `dark.brand.neutral.100` | `{dark.palette.neutral.100}` |
| `dark.brand.neutral.150` | `{dark.palette.neutral.150}` |
| `dark.brand.neutral.200` | `{dark.palette.neutral.200}` |
| `dark.brand.neutral.300` | `{dark.palette.neutral.300}` |
| `dark.brand.neutral.400` | `{dark.palette.neutral.400}` |
| `dark.brand.neutral.500` | `{dark.palette.neutral.500}` |
| `dark.brand.neutral.600` | `{dark.palette.neutral.600}` |
| `dark.brand.neutral.700` | `{dark.palette.neutral.700}` |
| `dark.brand.neutral.800` | `{dark.palette.neutral.800}` |
| `dark.brand.neutral.850` | `{dark.palette.neutral.850}` |
| `dark.brand.neutral.900` | `{dark.palette.neutral.900}` |
| `dark.brand.neutral.950` | `{dark.palette.neutral.950}` |
| `dark.brand.neutral.975` | `{dark.palette.neutral.975}` |
| `dark.brand.neutral.A25` | `{dark.palette.neutral.A25}` |
| `dark.brand.neutral.A50` | `{dark.palette.neutral.A50}` |
| `dark.brand.neutral.A100` | `{dark.palette.neutral.A100}` |
| `dark.brand.neutral.A150` | `{dark.palette.neutral.A150}` |
| `dark.brand.neutral.A200` | `{dark.palette.neutral.A200}` |
| `dark.brand.neutral.A300` | `{dark.palette.neutral.A300}` |
| `dark.brand.neutral.A400` | `{dark.palette.neutral.A400}` |
| `dark.brand.neutral.A500` | `{dark.palette.neutral.A500}` |
| `dark.brand.neutral.A600` | `{dark.palette.neutral.A600}` |
| `dark.brand.neutral.A700` | `{dark.palette.neutral.A700}` |
| `dark.brand.neutral.A800` | `{dark.palette.neutral.A800}` |
| `dark.brand.neutral.A850` | `{dark.palette.neutral.A850}` |
| `dark.brand.neutral.A900` | `{dark.palette.neutral.A900}` |
| `dark.brand.neutral.A950` | `{dark.palette.neutral.A950}` |
| `dark.brand.neutral.A975` | `{dark.palette.neutral.A975}` |
| `dark.brand.positive.25` | `{dark.palette.green.25}` |
| `dark.brand.positive.50` | `{dark.palette.green.50}` |
| `dark.brand.positive.100` | `{dark.palette.green.100}` |
| `dark.brand.positive.200` | `{dark.palette.green.200}` |
| `dark.brand.positive.300` | `{dark.palette.green.300}` |
| `dark.brand.positive.400` | `{dark.palette.green.400}` |
| `dark.brand.positive.500` | `{dark.palette.green.500}` |
| `dark.brand.positive.600` | `{dark.palette.green.600}` |
| `dark.brand.positive.700` | `{dark.palette.green.700}` |
| `dark.brand.positive.800` | `{dark.palette.green.800}` |
| `dark.brand.positive.900` | `{dark.palette.green.900}` |
| `dark.brand.positive.950` | `{dark.palette.green.950}` |
| `dark.brand.positive.975` | `{dark.palette.green.975}` |
| `dark.brand.positive.A25` | `{dark.palette.green.A25}` |
| `dark.brand.positive.A50` | `{dark.palette.green.A50}` |
| `dark.brand.positive.A100` | `{dark.palette.green.A100}` |
| `dark.brand.positive.A200` | `{dark.palette.green.A200}` |
| `dark.brand.positive.A300` | `{dark.palette.green.A300}` |
| `dark.brand.positive.A400` | `{dark.palette.green.A400}` |
| `dark.brand.positive.A500` | `{dark.palette.green.A500}` |
| `dark.brand.positive.A600` | `{dark.palette.green.A600}` |
| `dark.brand.positive.A700` | `{dark.palette.green.A700}` |
| `dark.brand.positive.A800` | `{dark.palette.green.A800}` |
| `dark.brand.positive.A900` | `{dark.palette.green.A900}` |
| `dark.brand.positive.A950` | `{dark.palette.green.A950}` |
| `dark.brand.positive.A975` | `{dark.palette.green.A975}` |
| `dark.brand.primary.25` | `{dark.palette.blue.25}` |
| `dark.brand.primary.50` | `{dark.palette.blue.50}` |
| `dark.brand.primary.100` | `{dark.palette.blue.100}` |
| `dark.brand.primary.200` | `{dark.palette.blue.200}` |
| `dark.brand.primary.300` | `{dark.palette.blue.300}` |
| `dark.brand.primary.400` | `{dark.palette.blue.400}` |
| `dark.brand.primary.500` | `{dark.palette.blue.500}` |
| `dark.brand.primary.600` | `{dark.palette.blue.600}` |
| `dark.brand.primary.700` | `{dark.palette.blue.700}` |
| `dark.brand.primary.800` | `{dark.palette.blue.800}` |
| `dark.brand.primary.900` | `{dark.palette.blue.900}` |
| `dark.brand.primary.950` | `{dark.palette.blue.950}` |
| `dark.brand.primary.975` | `{dark.palette.blue.975}` |
| `dark.brand.primary.A25` | `{dark.palette.blue.A25}` |
| `dark.brand.primary.A50` | `{dark.palette.blue.A50}` |
| `dark.brand.primary.A100` | `{dark.palette.blue.A100}` |
| `dark.brand.primary.A200` | `{dark.palette.blue.A200}` |
| `dark.brand.primary.A300` | `{dark.palette.blue.A300}` |
| `dark.brand.primary.A400` | `{dark.palette.blue.A400}` |
| `dark.brand.primary.A500` | `{dark.palette.blue.A500}` |
| `dark.brand.primary.A600` | `{dark.palette.blue.A600}` |
| `dark.brand.primary.A700` | `{dark.palette.blue.A700}` |
| `dark.brand.primary.A800` | `{dark.palette.blue.A800}` |
| `dark.brand.primary.A900` | `{dark.palette.blue.A900}` |
| `dark.brand.primary.A950` | `{dark.palette.blue.A950}` |
| `dark.brand.primary.A975` | `{dark.palette.blue.A975}` |

</details>

### `sys/color/light.json` (52)

<details>
<summary>All new tokens</summary>

| Path | Value |
|------|-------|
| `color.surface.overlay.raised` | `{palette.white.A400}` |
| `color.border.ai` | `{palette.blue.950}` |
| `color.chart.diverging.azure.coral.1` | `{palette.azure.900}` |
| `color.chart.diverging.azure.coral.2` | `{palette.azure.800}` |
| `color.chart.diverging.azure.coral.3` | `{palette.azure.700}` |
| `color.chart.diverging.azure.coral.4` | `{palette.azure.600}` |
| `color.chart.diverging.azure.coral.5` | `{palette.azure.500}` |
| `color.chart.diverging.azure.coral.6` | `{palette.azure.400}` |
| `color.chart.diverging.azure.coral.7` | `{palette.azure.300}` |
| `color.chart.diverging.azure.coral.8` | `{palette.azure.200}` |
| `color.chart.diverging.azure.coral.9` | `{palette.azure.100}` |
| `color.chart.diverging.azure.coral.10` | `{palette.azure.50}` |
| `color.chart.diverging.azure.coral.11` | `{palette.azure.25}` |
| `color.chart.diverging.azure.coral.12` | `{palette.white.$root}` |
| `color.chart.diverging.azure.coral.13` | `{palette.coral.25}` |
| `color.chart.diverging.azure.coral.14` | `{palette.coral.50}` |
| `color.chart.diverging.azure.coral.15` | `{palette.coral.100}` |
| `color.chart.diverging.azure.coral.16` | `{palette.coral.200}` |
| `color.chart.diverging.azure.coral.17` | `{palette.coral.300}` |
| `color.chart.diverging.azure.coral.18` | `{palette.coral.400}` |
| `color.chart.diverging.azure.coral.19` | `{palette.coral.500}` |
| `color.chart.diverging.azure.coral.20` | `{palette.coral.600}` |
| `color.chart.diverging.azure.coral.21` | `{palette.coral.700}` |
| `color.chart.diverging.azure.coral.22` | `{palette.coral.800}` |
| `color.chart.diverging.azure.coral.23` | `{palette.coral.900}` |
| `color.chart.categorical.1` | `{palette.teal.500}` |
| `color.chart.categorical.2` | `{palette.blue.800}` |
| `color.chart.categorical.3` | `{palette.orange.500}` |
| `color.chart.categorical.4` | `{palette.azure.500}` |
| `color.chart.categorical.5` | `{palette.magenta.600}` |
| `color.chart.categorical.6` | `{palette.green.600}` |
| `color.chart.categorical.7` | `{palette.purple.500}` |
| `color.chart.categorical.8` | `{palette.amber.500}` |
| `color.chart.categorical.9` | `{palette.teal.700}` |
| `color.chart.categorical.10` | `{palette.indigo.600}` |
| `color.chart.categorical.11` | `{palette.orange.700}` |
| `color.chart.categorical.12` | `{palette.azure.700}` |
| `color.chart.categorical.13` | `{palette.purple.700}` |
| `color.chart.categorical.14` | `{palette.coral.600}` |
| `color.chart.categorical.15` | `{palette.green.800}` |
| `color.chart.categorical.16` | `{palette.amber.700}` |
| `color.chart.sequential.1` | `{palette.teal.25}` |
| `color.chart.sequential.2` | `{palette.teal.50}` |
| `color.chart.sequential.3` | `{palette.teal.100}` |
| `color.chart.sequential.4` | `{palette.teal.200}` |
| `color.chart.sequential.5` | `{palette.teal.300}` |
| `color.chart.sequential.6` | `{palette.teal.400}` |
| `color.chart.sequential.7` | `{palette.teal.500}` |
| `color.chart.sequential.8` | `{palette.teal.600}` |
| `color.chart.sequential.9` | `{palette.teal.700}` |
| `color.chart.sequential.10` | `{palette.teal.800}` |
| `color.chart.sequential.11` | `{palette.teal.900}` |

</details>

### `base/typography.json` (13)

| Group | Count |
|-------|------:|
| `letter-spacing.1` | 1 |
| `letter-spacing.2` | 1 |
| `letter-spacing.3` | 1 |
| `letter-spacing.4` | 1 |
| `letter-spacing.5` | 1 |
| `letter-spacing.6` | 1 |
| `letter-spacing.7` | 1 |
| `letter-spacing.8` | 1 |
| `letter-spacing.9` | 1 |
| `letter-spacing.10` | 1 |

<details>
<summary>All new tokens</summary>

| Path | Value |
|------|-------|
| `letter-spacing.1` | `0.13` |
| `letter-spacing.2` | `0.12` |
| `letter-spacing.3` | `0.11` |
| `letter-spacing.4` | `0.1` |
| `letter-spacing.5` | `0` |
| `letter-spacing.6` | `-0.1` |
| `letter-spacing.7` | `-0.3` |
| `letter-spacing.8` | `-0.34` |
| `letter-spacing.9` | `-0.38` |
| `letter-spacing.10` | `-0.46` |
| `letter-spacing.11` | `-0.54` |
| `letter-spacing.12` | `-0.62` |
| `font-weight.600` | `600` |

</details>

### `sys/type.json` (11)

| Group | Count |
|-------|------:|
| `font-family.fallback` | 1 |
| `letter-spacing.body.md` | 1 |
| `letter-spacing.body.lg` | 1 |
| `letter-spacing.heading.sm` | 1 |
| `letter-spacing.heading.md` | 1 |
| `letter-spacing.heading.lg` | 1 |
| `letter-spacing.title.sm` | 1 |
| `letter-spacing.title.md` | 1 |
| `letter-spacing.title.lg` | 1 |
| `font-weight.regular` | 1 |

<details>
<summary>All new tokens</summary>

| Path | Value |
|------|-------|
| `font-family.fallback` | `-apple-system, BlinkMacSystemFont, "Sana Serif", Roboto, Inter, system-ui, sans-serif, Avenir, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"` |
| `letter-spacing.body.md` | `0` |
| `letter-spacing.body.lg` | `-0.10000000149011612` |
| `letter-spacing.heading.sm` | `-0.30000001192092896` |
| `letter-spacing.heading.md` | `-0.3400000035762787` |
| `letter-spacing.heading.lg` | `-0.3799999952316284` |
| `letter-spacing.title.sm` | `-0.46000000834465027` |
| `letter-spacing.title.md` | `-0.5400000214576721` |
| `letter-spacing.title.lg` | `-0.6200000047683716` |
| `font-weight.regular` | `{font-weight.400}` |
| `font-weight.semibold` | `{font-weight.600}` |

</details>

### `base/size.json` (7)

| Group | Count |
|-------|------:|
| `size.1600` | 1 |
| `size.1800` | 1 |
| `size.2000` | 1 |
| `size.2400` | 1 |
| `size.2800` | 1 |
| `size.3200` | 1 |
| `size.px` | 1 |

<details>
<summary>All new tokens</summary>

| Path | Value |
|------|-------|
| `size.1600` | `{base.baseline} * 16.00` |
| `size.1800` | `{base.baseline} * 18.00` |
| `size.2000` | `{base.baseline} * 20.00` |
| `size.2400` | `{base.baseline} * 24.00` |
| `size.2800` | `{base.baseline} * 28.00` |
| `size.3200` | `{base.baseline} * 32.00` |
| `size.px` | `1px` |

</details>

### `base/shadow.json` (4)

<details>
<summary>All new tokens</summary>

| Path | Value |
|------|-------|
| `shadow.5.100.spread` | `-4` |
| `shadow.5.200.spread` | `-3` |
| `shadow.6.100.spread` | `-4` |
| `shadow.6.200.spread` | `-12` |

</details>

### `sys/breakpoint.json` (1)

<details>
<summary>All new tokens</summary>

| Path | Value |
|------|-------|
| `breakpoints.xxl` | `{base.baseline} * 272.5` |

</details>

### `sys/shape.json` (1)

<details>
<summary>All new tokens</summary>

| Path | Value |
|------|-------|
| `shape.xs` | `{size.50}` |

</details>

---

## 5. Removed from tokens (4)

Present in tokens only (not in theme).

| File | Path | Value |
|------|------|-------|
| `base/typography.json` | `letter-spacing.50` | `0.4` |
| `base/typography.json` | `letter-spacing.100` | `0.32` |
| `base/typography.json` | `letter-spacing.150` | `0.24` |
| `base/typography.json` | `letter-spacing.200` | `0.16` |

---

## Key themes

1. **Palette expansion** — dark palette (`dark.palette.*`), tenant palettes, black scale, extended hue steps
2. **Typography overhaul** — Sana Sans + IBM Plex Mono; numeric font weights; letter-spacing rescale (`50/100/150/200`)
3. **Color restructure** — chart tokens, brand namespace under `color.brand.*`, palette family swaps (slate ↔ neutral)
4. **Shape scale** — new `shape.xs`; adjusted sm/xxl/xxxl size references
5. **Stable foundations** — motion, opacity, space, sys size unchanged
