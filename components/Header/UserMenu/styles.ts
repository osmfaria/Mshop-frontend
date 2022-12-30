import styled from "styled-components";

export const Container = styled.div`
  .nav-user {
    display: flex;
    align-items: center;
    gap: 8px;
    cursor: pointer;

    .nav-user-title {
      color: ${(props) => props.theme.colors.grey2};
    }
  }
`

export const DropDown = styled.div`
  position: absolute;
  top: 70px;
  right: 12px;
  background-color: ${(props) => props.theme.colors.whiteFixed};
  width: 200px;
  z-index: 2;
  border-radius: 4px;

  -webkit-box-shadow: 40px 0px 40px rgba(0, 0, 0, 0.09);
  box-shadow: 40px 0px 40px rgba(0, 0, 0, 0.09);

  .panel {
    border-radius: 4px;
    padding: 21px 22px;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    gap: 16px;
    ul {
      line-height: 28px;
      color: ${(props) => props.theme.colors.grey2};
      cursor: pointer;
    }
  }
`



