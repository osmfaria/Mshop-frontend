import styled from "styled-components";

export const Container = styled.div`
  height: 140px;
  padding: 0 59px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => props.theme.colors.grey0};
  color: ${(props) => props.theme.colors.whiteFixed};

  button {
    height: 50px;
    width: 53px;
    border: none;
    border-radius: 4px;
    background-color: ${(props) => props.theme.colors.grey1};
    color: inherit;
  }
`