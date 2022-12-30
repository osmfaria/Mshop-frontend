import styled from "styled-components";

export const Container = styled.div`
  background-color: ${(props) => props.theme.colors.grey7};

  .panel {
    padding: 44px 48px;
    background-color: ${(props) => props.theme.colors.grey10};
    border-radius: 4px;
    margin: 46px auto 97px;
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

    .panel-subtitle {
      font-weight: 500;
      font-size: 0.875rem;
      color: ${(props) => props.theme.colors.grey1};
      margin-bottom: 24px;
    }

    .panel-grouped-input {
      display: flex;
      gap: 11px;
      button {
        margin-bottom: 24px;
      }
    }
  }
`