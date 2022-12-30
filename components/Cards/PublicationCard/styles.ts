import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 312px;
  flex-shrink: 0;
  scroll-snap-align: center;

  @media (min-width: 500px) {
    scroll-snap-align: none;
  }

  .image {
    object-fit: contain;
    max-width: 312px;
    max-height: 152px;
    transition: 2s;
    cursor: pointer;
  }

  .status {
    position: absolute;
    top: 11px;
    left: 16px;
    line-height: 24px;
    color: ${(props) => props.theme.colors.whiteFixed};
    padding: 0 8px;
    font-weight: 500;
  }

  .status--active {
    background-color: ${(props) => props.theme.colors.brand1};
  }

  .status--inactive {
    background-color: ${(props) => props.theme.colors.grey4};
  }

  h6 {
    font-size: 1rem;
    font-weight: 600;
    color: ${(props) => props.theme.colors.grey1};
    line-height: 20px;
    cursor: pointer;
  }

  .description {
    font-weight: 400;
    color: ${(props) => props.theme.colors.grey2};
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  p {
    font-size: 0.875rem;
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
    }
  }

  button {
    align-self: flex-start;
  }
`
