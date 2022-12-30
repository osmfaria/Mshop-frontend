import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;

  label {
    font-size: 0.875rem;
    font-weight: 500;
    color: ${(props) => props.theme.colors.grey1};
  }
  .label-container {
    margin-bottom: 8px;
    display: flex;
    align-items: center;
    gap: 10px;
    .edit-icon {
      color: ${(props) => props.theme.colors.grey3};
      cursor: pointer;
      :hover {
        color: ${props => props.theme.colors.grey1};
      }
    }
  }

  input {
    padding: 0 16px;
    height: 48px;
    font-size: 1rem;
    width: 100%;
    color: ${(props) => props.theme.colors.grey1};
    border-radius: 4px;
    border: 1px solid ${(props) => props.theme.colors.grey7};
    &:focus {
      outline-color: ${(props) => props.theme.colors.brand1};
    }
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type='number'] {
    -moz-appearance: textfield;
  }

  .input-error {
    border: 1px solid ${(props) => props.theme.colors.alert1};
  }

  .error {
    color: ${(props) => props.theme.colors.alert1};
    font-size: 0.875rem;
    margin-top: 5px;
  }
`