import styled from "styled-components";

export const Container = styled.div`
  height: 310px;
  padding: 45px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props) => props.theme.colors.grey0};
  color: ${(props) => props.theme.colors.whiteFixed};

  @media (min-width: 760px) {
    flex-direction: row;
    height: 140px;
    padding: 0 59px;
  }

  button {
    height: 50px;
    width: 53px;
    border: none;
    border-radius: 4px;
    background-color: ${(props) => props.theme.colors.grey1};
    color: inherit;
  }
`