import styled from "styled-components";

export const Container = styled.div`

  @media (min-width: 900px) {
    display: none;
  }
`

export const DropDown = styled.div`
  position: absolute;
  top: 80px;
  right: 0;
  background-color: ${(props) => props.theme.colors.whiteFixed};
  width: 100%;
  max-width: 450px;
  z-index: 2;

  -webkit-box-shadow: 40px 0px 40px rgba(0, 0, 0, 0.09);
  box-shadow: 40px 0px 40px rgba(0, 0, 0, 0.09);

  .upper-panel,
  .lower-panel {
    padding: 32px 16px;
    display: flex;
    flex-direction: column;
    gap: 44px;
    border-bottom: 1px solid ${(props) => props.theme.colors.grey6};
  }

  .collapsible {
    margin-top: 20px;
    padding: 0 10px;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
`