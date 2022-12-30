import styled from 'styled-components'
import { IIconProps } from '../../interfaces/buttonInterface'



export const Container = styled.div<IIconProps>`
  height: ${(props) => (props.size === 'sm' ? '32px' : '104px')};
  width: ${(props) => (props.size === 'sm' ? '32px' : '104px')};
  border-radius: 50%;
  background-color: ${(props) => props.theme.colors[props.color]};
  color: ${(props) => props.theme.colors.whiteFixed};
  font-size: ${(props) => (props.size === 'sm' ? '1rem' : '2.25rem')};
  line-height: ${(props) => (props.size === 'sm' ? '32px' : '104px')};
  text-align: center;
  span {
    margin: auto;
  }
`
