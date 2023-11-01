import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
  position: relative;
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
        color: ${(props) => props.theme.colors.grey1};
      }
    }
  }

  textarea {
    background: ${(props) => props.theme.colors.grey10};
    width: 100%;
    padding: 16px;
    font-size: 1rem;
    color: ${(props) => props.theme.colors.grey1};
    border-radius: 4px;
    border: 1px solid ${(props) => props.theme.colors.grey7};
    resize: none;
    &:focus {
      outline-color: ${(props) => props.theme.colors.brand1};
    }
  }

  .counter {
    color: ${(props) => props.theme.colors.grey4};
    font-size: 0.875rem;
    margin-top: 5px;
    position: absolute;
    bottom: -20px;
    right: 5px;
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
