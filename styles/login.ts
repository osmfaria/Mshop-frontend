import styled from "styled-components";

export const Container = styled.div`
  background-color: ${(props) => props.theme.colors.grey7};
  flex-grow: 1;

  .panel {
    padding: 44px 48px;
    background-color: ${(props) => props.theme.colors.grey10};
    border-radius: 4px;
    margin: 100px auto;
    max-width: 411px;

    button {
      width: 100%;
    }

    .panel-title {
      font-weight: 500;
      font-size: 1.5rem;
      color: ${(props) => props.theme.colors.grey1};
      margin-bottom: 32px;
    }

    .decorated {
      overflow: hidden;
      text-align: center;
      margin: 24px 0;
      color: ${(props) => props.theme.colors.grey2};
      font-weight: 400;
    }
    .decorated > span {
      position: relative;
      display: inline-block;
    }
    .decorated > span:before,
    .decorated > span:after {
      content: '';
      position: absolute;
      top: 50%;
      border-bottom: 1px solid ${(props) => props.theme.colors.grey5};
      width: 100vw;
      margin: 0 10px;
    }
    .decorated > span:before {
      right: 100%;
    }
    .decorated > span:after {
      left: 100%;
    }
  }
`