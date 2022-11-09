import styled from 'styled-components'
import { theme } from '../../styles/theme'
import { IButtonProps, IButtonStyle } from '../../interfaces/buttonInterface'


const textColors: IButtonStyle<string> = {
  brand1: `${theme.colors.whiteFixed}`,
  grey1: `${theme.colors.whiteFixed}`,
  negative: `${theme.colors.grey2}`,
  disable: `${theme.colors.whiteFixed}`,
  light: `${theme.colors.grey1}`,
  outline1: `${theme.colors.grey0}`,
  brandOpacity: `${theme.colors.brand1}`,
  outlineLight: `${theme.colors.grey10}`,
  outline2: `${theme.colors.grey0}`,
  outlineBrand1: `${theme.colors.brand1}`,
  link: `${theme.colors.grey0}`,
  alert: `${theme.colors.alert1}`,
  success: `${theme.colors.sucess1}`,
  brandDisable: `${theme.colors.brand4}`,
}

const hoverTextColors: IButtonStyle<string> = {
  brand1: `${theme.colors.whiteFixed}`,
  grey1: `${theme.colors.whiteFixed}`,
  negative: `${theme.colors.grey2}`,
  disable: `${theme.colors.whiteFixed}`,
  light: `${theme.colors.grey1}`,
  brandOpacity: `${theme.colors.brand1}`,
  outlineLight: `${theme.colors.grey1}`,
  outline1: `${theme.colors.grey10}`,
  outline2: `${theme.colors.grey10}`,
  outlineBrand1: `${theme.colors.brand1}`,
  link: `${theme.colors.grey0}`,
  alert: `${theme.colors.alert1}`,
  success: `${theme.colors.sucess1}`,
  brandDisable: `${theme.colors.brand4}`,
}

const backgroundColors: IButtonStyle<string> = {
  brand1: `${theme.colors.brand1}`,
  grey1: `${theme.colors.grey0}`,
  negative: `${theme.colors.grey6}`,
  disable: `${theme.colors.grey5}`,
  light: `${theme.colors.grey10}`,
  brandOpacity: `${theme.colors.brand4}`,
  outlineLight: `transparent`,
  outline1: `transparent`,
  outline2: `transparent`,
  outlineBrand1: `transparent`,
  link: `transparent`,
  alert: `${theme.colors.alert3}`,
  success: `${theme.colors.sucess3}`,
  brandDisable: `${theme.colors.brand3}`,
}

const hoverBackgroundColors: IButtonStyle<string> = {
  brand1: `${theme.colors.brand2}`,
  grey1: `${theme.colors.grey1}`,
  negative: `${theme.colors.grey5}`,
  disable: `${theme.colors.grey5}`,
  light: `${theme.colors.grey10}`,
  brandOpacity: `${theme.colors.brand4}`,
  outlineLight: `${theme.colors.grey10}`,
  outline1: `${theme.colors.grey1}`,
  outline2: `${theme.colors.grey1}`,
  outlineBrand1: `${theme.colors.brand4}`,
  link: `${theme.colors.grey8}`,
  alert: `${theme.colors.alert2}`,
  success: `${theme.colors.sucess2}`,
  brandDisable: `${theme.colors.brand3}`,
}

const borderColors: IButtonStyle<string> = {
  brand1: `${theme.colors.brand1}`,
  grey1: `${theme.colors.grey0}`,
  negative: `${theme.colors.grey6}`,
  disable: `${theme.colors.grey5}`,
  light: `${theme.colors.grey10}`,
  brandOpacity: `${theme.colors.brand4}`,
  outlineLight: `${theme.colors.grey10}`,
  outline1: `${theme.colors.grey1}`,
  outline2: `${theme.colors.grey4}`,
  outlineBrand1: `${theme.colors.brand1}`,
  link: `transparent`,
  alert: `${theme.colors.alert3}`,
  success: `${theme.colors.sucess3}`,
  brandDisable: `${theme.colors.brand3}`,
}

const hoverBorderColors: IButtonStyle<string> = {
  brand1: `${theme.colors.brand1}`,
  grey1: `${theme.colors.grey0}`,
  negative: `${theme.colors.grey6}`,
  disable: `${theme.colors.grey5}`,
  light: `${theme.colors.grey10}`,
  brandOpacity: `${theme.colors.brand4}`,
  outlineLight: `${theme.colors.grey10}`,
  outline1: `${theme.colors.grey1}`,
  outline2: `${theme.colors.grey2}`,
  outlineBrand1: `${theme.colors.brand1}`,
  link: `transparent`,
  alert: `${theme.colors.alert2}`,
  success: `${theme.colors.sucess2}`,
  brandDisable: `${theme.colors.brand3}`,
}

export const StyledButton = styled.button<IButtonProps>`
  padding: ${(props) => props.theme.button[props.size].padding};
  font-size: ${(props) => props.theme.button[props.size].fontSize};
  background-color: ${({ design }) => backgroundColors[design]};
  font-family: 'Inter';
  font-weight: 600;
  color: ${({ design }) => textColors[design]};
  border-radius: 4px;
  cursor: pointer;
  border: 1.5px solid ${({ design }) => borderColors[design]};
  &:hover {
    color: ${({ design }) => hoverTextColors[design]};
    background-color: ${({ design }) => hoverBackgroundColors[design]};
    border: 1.5px solid ${({ design }) => hoverBorderColors[design]};
  }
`
