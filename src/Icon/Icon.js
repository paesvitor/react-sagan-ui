import React from 'react'
import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'
import makeColor from 'utils/colors/makeColor'
import { spacing } from 'config/theme'
import toRem from 'utils/shared/toRem'

const SaganIcon = styled.div`
    ${props => css`
        display: flex;
        align-items: center;
        flex-direction: column;
        display: flex;
        ${props.size === 'xs' && css`font-size: ${toRem(spacing.xs)};`}
        ${props.size === 'sm' && css`font-size: ${toRem(spacing.sm)};`}
        ${props.size === 'md' && css`font-size: ${toRem(spacing.md)};`}
        ${props.size === 'lg' && css`font-size: ${toRem(spacing.lg)};`}
        ${props.size === 'xl' && css`font-size: ${toRem(spacing.xl)};`}
        ${props.size === 'xxl' && css`font-size: ${toRem(spacing.xxl)};`}
        color: ${(props.type && makeColor(props)) || props.color};
    `}
`

const Icon = (props) => <SaganIcon {...props}>
  {props.icon}
</SaganIcon>

Icon.propTypes = {
  /**
   * Component Icon (Uses any library you want)
   */
  icon: PropTypes.element,
  /**
   * Colours the icon based on default colors
   */
  type: PropTypes.oneOf([
    'primary',
    'secondary',
    'success',
    'danger',
    'warning',
    'info'
  ]),
  /**
   * Custom color
   */
  color: PropTypes.string,
  /**
   * Icon Size
   */
  size: PropTypes.oneOf([
    'xs',
    'sm',
    'md',
    'lg',
    'xl',
    'xxl'
  ])
}

export default Icon
