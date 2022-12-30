import styled from "styled-components"

export const Container = styled.div`
  background-color: ${(props) => props.theme.colors.grey7};
  flex-grow: 1;

  .top-section {
    background-color: ${(props) => props.theme.colors.brand1};
    height: 275px;
  }

  .content-main {
    transform: translateY(-202px);
    margin-bottom: -202px;
    min-height: 100%;
    padding: 0 26px;
    @media (min-width: 760px) {
      padding: 0 62px;
    }
  }

  .user-details {
    background-color: ${(props) => props.theme.colors.grey10};
    padding: 40px 22px 40px 29px;
    border-radius: 4px;
    margin: auto;
    display: flex;
    flex-direction: column;
    gap: 24px;

    max-width: 1240px;

    @media (min-width: 760px) {
      padding: 44px 70px 50px 41px;
    }

    .user-details-title {
      display: flex;
      align-items: center;
      gap: 9px;
    }

    .user-details-name {
      color: ${(props) => props.theme.colors.grey1};
      font-weight: 600;
      font-size: 20px;
      line-height: 25px;
    }
    .user-details-mark {
      background-color: ${(props) => props.theme.colors.brand4};
      padding: 4px 8px;
      border-radius: 4px;
      font-size: 14px;
      font-weight: 500;
      color: ${(props) => props.theme.colors.brand1};
    }
    .user-details-text {
      font-size: 16px;
      color: ${(props) => props.theme.colors.grey2};
      font-weight: 400;
      line-height: 28px;
    }
  }
`