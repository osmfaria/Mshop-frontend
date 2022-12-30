import styled from 'styled-components'

export const Container = styled.div`
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  padding: 15px 10px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  gap: 20px;
  position: relative;

  @media (min-width: 770px) {
    padding: 15px 20px 15px;
  }

  .image-container {
    position: relative;
    height: 70px;
    width: 100px;
  }

  .image {
    object-fit: contain;
    cursor: pointer;
  }

  .details-container {
    h3 {
      cursor: pointer;
    }
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  .box-user {
    display: flex;
    align-items: center;
    cursor: pointer;

    .username {
      margin-left: 8px;
      font-weight: 500;
      color: ${(props) => props.theme.colors.grey2};
    }
  }

  .box-car_details {
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    min-height: 28px;
    flex-wrap: wrap;

    .highlight {
      padding: 6px 8px;
      font-weight: 500;
      background-color: ${(props) => props.theme.colors.brand4};
      color: ${(props) => props.theme.colors.brand1};
      margin-right: 12px;
      line-height: 24px;
      border-radius: 4px;
    }

    .price {
      font-family: 'Lexend';
      font-weight: 500;
      color: ${(props) => props.theme.colors.grey1};
      margin-top: 15px;

      @media (min-width: 435px) {
        margin-top: 0px;
      }
    }
  }

  .remove-btn {
    position: absolute;
    padding: 4px 5px 2px 7px;
    border-radius: 4px 4px 0 0;
    z-index: 100;
    cursor: pointer;
    top: -21px;
    right: 10px;
    font-size: 0.75rem;
    color: ${(props) => props.theme.colors.grey3};
    box-shadow: rgba(17, 17, 26, 0.05) 0px 1px 0px,
      rgba(17, 17, 26, 0.1) 0px 0px 8px;
    :hover {
      color: ${(props) => props.theme.colors.alert1};
      box-shadow: rgb(204, 219, 232) 3px 3px 6px 0px inset,
        rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset;
    }
  }
`
