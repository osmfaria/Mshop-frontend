import styled from 'styled-components'

interface StyledProps {
  image: string
}

export const Container = styled.div<StyledProps>`
  background-image: url(${(props) => props.image});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  max-width: 735px;

  .box-cover {
    border-radius: 4px 4px 0 0;
    height: 326px;
    padding: 24px 41px 20px 36px;
    background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.29),
      rgb(0, 0, 0)
    );

    .box-clock {
      background-color: ${(props) => props.theme.colors.whiteFixed};
      max-width: 125px;
      height: 36px;
      border-radius: 32px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 16px 0 8px;
      font-family: 'Lexend';
      .clock-icon {
        color: ${(props) => props.theme.colors.brand1};
      }
    }

    .box-card_details {
      padding-top: 60px;
      height: calc(100% - 36px);
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    h6 {
      color: ${(props) => props.theme.colors.grey10};
      font-weight: 600;
      line-height: 25px;
      font-size: 1.25rem;
    }

    .description {
      width: 100%;
      white-space: nowrap;
      text-overflow: ellipsis;
      display: inline-block;
      overflow: hidden;
      color: ${(props) => props.theme.colors.grey5};
    }

    .box-user {
      display: flex;
      align-items: center;

      .username {
        margin-left: 8px;
        font-weight: 500;
        color: ${(props) => props.theme.colors.whiteFixed};
        font-size: 0.875rem;
      }
    }

    .box-car_details {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .highlight {
        padding: 6px 8px;
        font-weight: 500;
        background-color: ${(props) => props.theme.colors.brand4};
        color: ${(props) => props.theme.colors.brand1};
        margin-right: 12px;
        line-height: 24px;
        border-radius: 4px;
        font-size: 0.875rem;
      }

      .price {
        font-family: 'Lexend';
        font-weight: 500;
        color: ${(props) => props.theme.colors.whiteFixed};
      }
    }
  }

  .box-link {
    height: 62px;
    color: ${(props) => props.theme.colors.whiteFixed};
    background-color: ${(props) => props.theme.colors.brand1};
    padding: 0 41px 0 36px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 0 0 4px 4px;

    button {
      font-size: 1rem;
      background-color: transparent;
      border: none;
      cursor: pointer;
      color: ${(props) => props.theme.colors.whiteFixed};
      font-weight: 600;
    }
  }
`
