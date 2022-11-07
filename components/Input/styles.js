import styled from 'styled-components'
import { theme } from '../../styles/theme'

const textColors = {
  brand1: `${theme.colors.whiteFixed}`,
  grey1: `${theme.colors.whiteFixed}`,
  negative: `${theme.colors.grey2}`,
  disable: `${theme.colors.whiteFixed}`,
  light: `${theme.colors.grey1}`,
  outline1: `${theme.colors.grey0}`,
  brandOpacity: `${theme.colors.brand1}`,
  outlineLight: `${theme.colors.grey10}`,
  outline1: `${theme.colors.grey0}`,
  outline2: `${theme.colors.grey0}`,
  outlineBrand1: `${theme.colors.brand1}`,
  link: `${theme.colors.grey0}`,
  alert: `${theme.colors.alert1}`,
  success: `${theme.colors.sucess1}`,
  brandDisable: `${theme.colors.brand4}`,
}

const hoverTextColors = {
  brand1: `${theme.colors.whiteFixed}`,
  grey1: `${theme.colors.whiteFixed}`,
  negative: `${theme.colors.grey2}`,
  disable: `${theme.colors.whiteFixed}`,
  light: `${theme.colors.grey1}`,
  outline1: `${theme.colors.grey0}`,
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

const backgroundColors = {
  brand1: `${theme.colors.brand1}`,
  grey1: `${theme.colors.grey0}`,
  negative: `${theme.colors.grey6}`,
  disable: `${theme.colors.grey5}`,
  light: `${theme.colors.grey10}`,
  outline1: `${theme.colors.whiteFixed}`,
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

const hoverBackgroundColors = {
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

const borderColors = {
  brand1: `${theme.colors.brand1}`,
  grey1: `${theme.colors.grey0}`,
  negative: `${theme.colors.grey6}`,
  disable: `${theme.colors.grey5}`,
  light: `${theme.colors.grey10}`,
  outline1: `${theme.colors.whiteFixed}`,
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

const hoverBorderColors = {
  brand1: `${theme.colors.brand1}`,
  grey1: `${theme.colors.grey0}`,
  negative: `${theme.colors.grey6}`,
  disable: `${theme.colors.grey5}`,
  light: `${theme.colors.grey10}`,
  outline1: `${theme.colors.whiteFixed}`,
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

export const StyledInput = styled.input`
  padding: ${(props) => props.theme.input[props.size].padding};
  font-size: ${(props) => props.theme.input[props.size].fontSize};
  background-color: ${({ type }) => backgroundColors[type]};
  font-family: 'Inter';
  font-weight: 600;
  color: ${({ type }) => textColors[type]};
  border-radius: 4px;
  cursor: pointer;
  border:${({ type }) => borderColors[type]};
  &:hover {
    color: ${({ type }) => hoverTextColors[type]};
    background-color: ${({ type }) => hoverBackgroundColors[type]};
    border: 1.5px solid ${({ type }) => hoverBorderColors[type]};
  }
`




//     export const InputStyled = styled.section`
//     flexDirection:'row';
  
//     span{
//         color:red;
//         font-size:12px;
//         margin-left:30px;
        
       
//     }
   
//     input{
       
//      height:48px;
//      flex:1;
//      background-color:"red";
//      padding-left:20px;
//      border-radius:4px;
//      font-size:16px;
//      border-color:#868E96;
//      font-family: 'Inter',
//      color:white;
//     }   
//    `
    

// ;