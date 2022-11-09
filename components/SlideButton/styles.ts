import styled from "styled-components";
import { ISlideButtonProps } from "../../interfaces/buttonInterface";

export const StyledButton = styled.button<ISlideButtonProps>`
  height: 80px;
  width: 40px;
  padding: 0;
  color: ${(props) => props.theme.colors.grey3};
  background-color: rgba(230, 230, 230, 0.3);
  border: none;
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px;
  &:hover {
    background-color: ${(props) => props.theme.colors.grey6};
  }

  position: absolute;
  margin: auto;
  top: 0;
  bottom: 0;
  right: ${(props) => (props.format === 'forward' ? '10px' : 100)};

  @media (max-width: 900px) {
    display: none;
  }
`