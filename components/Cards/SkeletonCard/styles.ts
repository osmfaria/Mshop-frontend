import styled from 'styled-components'

export const ContainerPublication = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  max-width: 312px;
  flex-shrink: 0;

  .skeleton-image {
    width: 312px;
    height: 152px;
  }

  p {
    font-size: 0.875rem;
  }

  .box-user {
    display: flex;
    align-items: center;
    .user-icon {
      height: 32px;
      width: 32px;
    }
    .username {
      width: 100%;
      margin-left: 8px;
    }
  }

  .box-car_details {
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: 28px;

    .box-highlight {
      display: flex;
    }

    .highlight {
      width: 60px;
      margin-right: 12px;
      line-height: 28px;
    }

    .price {
      width: 120px;
      line-height: 26px;
    }
  }
`

export const ContainerAuction = styled.div`
  height: 388px;
  border-radius: 4px;

  .auction {
    height: 100%;
    width: calc(100vw - 40px);
  }

  @media (min-width: 900px) {
    .auction {
      width: 735px;
    }
  }
`
