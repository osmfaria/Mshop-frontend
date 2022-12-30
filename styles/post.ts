import styled from 'styled-components'

export const Container = styled.div`
  background-color: ${(props) => props.theme.colors.grey7};
  flex-grow: 1;
  padding: 0 10px;

  .panel {
    background-color: ${(props) => props.theme.colors.grey10};
    max-width: 520px;
    padding: 18px 16px 26px;
    margin: 46px auto 97px;
    border-radius: 4px;

    @media (min-width: 760px) {
      padding: 18px 24px 26px;
    }

    .panel-title {
      font-weight: 500;
      font-size: 1rem;
      color: ${(props) => props.theme.colors.grey1};
      margin-bottom: 32px;
    }

    .panel-subtitle {
      font-weight: 500;
      font-size: 0.875rem;
      color: ${(props) => props.theme.colors.grey1};
      margin-bottom: 24px;
    }
  }

  .btn-section {
    h3 {
      font-weight: 500;
      font-size: 0.875rem;
      line-height: 24px;
      margin-bottom: 18px;
    }
    .btn-section-btns {
      display: flex;
      gap: 10px;
      margin-bottom: 24px;
    }
  }

  .input-group {
    display: flex;
    gap: 10px;
    flex-direction: column;

    @media (min-width: 760px) {
      flex-direction: row;
      align-items: center;
    }

    .input-group-static {
      display: flex;
      gap: inherit;
    }
  }

  .field-array {
    margin-bottom: 55px;
  }

  .submission-section {
    display: flex;
    gap: 20px;
  }

  .image-control {
    position: relative;
    .image-control-trash {
      display: flex;
      justify-content: middle;
      align-items: center;
      position: absolute;
      top: 7px;
      right: -9px;
      background-color: ${(props) => props.theme.colors.grey7};
      border-radius: 50%;
      height: 30px;
      width: 30px;

      border: none;
      :hover {
        color: ${(props) => props.theme.colors.alert1};
        background-color: ${(props) => props.theme.colors.grey6};
      }
    }
  }
`

export const StyledModal = styled.div`
  padding: 18px 24px;
  .box-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    h2 {
      font-weight: 500;
    }
    .close-btn {
      background-color: transparent;
      border: none;
      color: ${(props) => props.theme.colors.grey4};
      border-radius: 4px;
      display: flex;
      &:hover {
        background-color: ${(props) => props.theme.colors.grey8};
      }
    }
  }

  .box-body {
    margin: 20px 0;
    padding: 10px 0;
    border: solid ${(props) => props.theme.colors.grey6};
    border-width: 1px 0 1px 0;

    p {
      color: ${(props) => props.theme.colors.grey2};
    }
  }

  .box-footer {
    display: flex;
    justify-content: flex-end;
    gap: 10px;
    width: 100%;

    button {
      flex-grow: 0;
    }
  }
`
