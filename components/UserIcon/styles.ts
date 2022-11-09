import styled from 'styled-components'
import { IIconProps } from '../../interfaces/buttonInterface'



export const Container = styled.div<IIconProps>`
  height: 32px;
  width: 32px;
  border-radius: 50%;
  background-color: ${(props) => props.theme.colors[props.color]};
  color: ${(props) => props.theme.colors.whiteFixed};
  text-align: center;
  line-height: 32px;
`
