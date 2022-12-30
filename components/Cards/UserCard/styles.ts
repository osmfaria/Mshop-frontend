import styled from "styled-components";

export const Container = styled.div`
  background-color: ${(props) => props.theme.colors.grey10};
  padding: 40px 22px 40px 29px;
  border-radius: 4px;
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 24px;

  max-width: 1240px;

  button {
    align-self: flex-start;
  }

  @media (min-width: 760px) {
    padding: 44px 70px 50px 41px;
  }

  .box-user {
    display: flex;
    align-items: center;
    gap: 9px;
  }

  .box-user_name {
    color: ${(props) => props.theme.colors.grey1};
    font-weight: 600;
    font-size: 20px;
    line-height: 25px;
  }
  .box-user_mark {
    background-color: ${(props) => props.theme.colors.brand4};
    padding: 4px 8px;
    border-radius: 4px;
    font-size: 14px;
    font-weight: 500;
    color: ${(props) => props.theme.colors.brand1};
  }
  .text {
    font-size: 16px;
    color: ${(props) => props.theme.colors.grey2};
    font-weight: 400;
    line-height: 28px;
  }
  `