import styled from "styled-components";

export const Container = styled.div`
  background-color: ${(props) => props.theme.colors.grey10};
  border-radius: 4px;
  padding: 36px 26px;
  margin-top: 33px;
  position: relative;
  

  @media (min-width: 760px) {
    padding: 36px 44px;
  }

  .box-user {
    display: flex;
    align-items: center;
    margin-bottom: 15px;
    min-height: 32px;

    .username {
      margin-left: 8px;
      font-weight: 500;
      color: ${(props) => props.theme.colors.grey2};
    }
  }
  .error {
    color: red;
    margin-top: 5px;
  }

  .box-input {
    height: 128px;
    border-radius: 4px;
    border: 1.5px solid ${(props) => props.theme.colors.grey7};
    padding: 28px 11px 13px 28px;

    .comment {
      border: none;
      font-size: 1rem;
      resize: none;
      max-width: 500px;
      width: 100%;
      height: 80px;
      &:focus {
        outline: none;
      }
    }
  }

  button {
    margin: 24px 0 5px;
    width: 94px;
    height: 47px; 

    display: flex;
    align-items: center;

    @media (min-width: 760px) {
      position: absolute;
      top: 130px;
      right: 55px;
    }
  }

  .box-sugestions {
    margin-top: 19px;
    display: flex;
    flex-wrap: wrap;
    .choices {
      height: 24px;
      background-color: ${(props) => props.theme.colors.grey7};
      color: ${(props) => props.theme.colors.grey3};
      font-size: 0.75rem;
      border-radius: 12px;
      padding: 4px 12px;
      margin: 0 8px 8px;
      cursor: pointer;
    }
  }
`