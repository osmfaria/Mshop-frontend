import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  padding: 0 24px 28px;
  width: calc(100vw - 24px);
  height: 360px;

  @media (min-width: 760px) {
    max-width: 570px;
    height: 420px;
  }

  .box-title {
    height: 56px;
    display: flex;
    justify-content: space-between;
    align-items: center;

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

  .box-image {
    border-radius: 4px;
    max-width: 570px;
    height: 270px;
    position: relative;

    .image {
      width: 100%;
      object-fit: contain;
    }
  }
`
