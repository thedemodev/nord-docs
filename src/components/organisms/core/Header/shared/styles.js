/*
 * Copyright (C) 2018-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (C) 2018-present Sven Greb <development@svengreb.de>
 *
 * Project:    Nord Docs
 * Repository: https://github.com/arcticicestudio/nord-docs
 * License:    MIT
 */

/**
 * @file Provides shared component styles.
 * @author Arctic Ice Studio <development@arcticicestudio.com>
 * @author Sven Greb <development@svengreb.de>
 * @since 0.3.0
 */

import { rgba } from "polished";

import { colors, themedMode, MODE_BRIGHT_SNOW_FLURRY, MODE_DARK_NIGHT_FROST } from "styles/theme";

import {
  baseBackgroundColor,
  primaryBackgroundColor,
  secondaryBackgroundColor,
  tertiaryBackgroundColor
} from "../../../shared/styles";

const backgroundColorVariants = {
  base: baseBackgroundColor,
  primary: primaryBackgroundColor,
  secondary: secondaryBackgroundColor,
  tertiary: tertiaryBackgroundColor
};

/**
 * The factor with which the branding logo is multiplied by the height of the header based on the pin mode.
 *
 * @type {number}
 */
const HEADER_BRAND_LOGO_SHRINK_FACTOR = 0.45;

/**
 * The default height (in `px`) of the header when in unpinned mode.
 *
 * @type {number}
 */
const HEADER_HEIGHT = 80;

/**
 * The default height (in `px`) of the header for the pinned mode in pixels.
 *
 * @type {number}
 */
const HEADER_HEIGHT_PINNED = 56;

const linkBackgroundColorHoverVariants = {
  base: themedMode({
    [MODE_BRIGHT_SNOW_FLURRY]: rgba(colors.nord6, 0.4),
    [MODE_DARK_NIGHT_FROST]: rgba(colors.nord3, 0.8)
  }),
  primary: themedMode({
    [MODE_BRIGHT_SNOW_FLURRY]: rgba(colors.nord6, 0.6),
    [MODE_DARK_NIGHT_FROST]: colors.nord3
  }),
  secondary: themedMode({
    [MODE_BRIGHT_SNOW_FLURRY]: rgba(colors.nord6, 0.8),
    [MODE_DARK_NIGHT_FROST]: rgba(colors.nord3, 0.6)
  }),
  tertiary: themedMode({
    [MODE_BRIGHT_SNOW_FLURRY]: rgba(colors.nord5, 0.75),
    [MODE_DARK_NIGHT_FROST]: rgba(colors.nord3, 0.5)
  })
};

export {
  backgroundColorVariants,
  linkBackgroundColorHoverVariants,
  HEADER_BRAND_LOGO_SHRINK_FACTOR,
  HEADER_HEIGHT,
  HEADER_HEIGHT_PINNED
};
