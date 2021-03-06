/*
 * Copyright (C) 2018-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (C) 2018-present Sven Greb <development@svengreb.de>
 *
 * Project:    Nord Docs
 * Repository: https://github.com/arcticicestudio/nord-docs
 * License:    MIT
 */

import styled from "styled-components";
import { em } from "polished";

import { motion } from "styles/theme";

import { backgroundColorVariants } from "../shared/styles";

/**
 * A spacing container to prevent content from slipping under the header.
 * It inherits the dynamic size of the header through the `height` prop to match the expanded and collapsed states.
 *
 * @author Arctic Ice Studio <development@arcticicestudio.com>
 * @author Sven Greb <development@svengreb.de>
 * @since 0.3.0
 */
const TopContentPusher = styled.div`
  height: ${({ height }) => em(height)};
  position: relative;
  background-color: ${({ variant }) => backgroundColorVariants[variant]};
  transition: background-color ${motion.speed.duration.transition.base.themeModeSwitch}ms ease-in-out;
`;

export default TopContentPusher;
