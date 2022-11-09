import styled from 'styled-components'

export const Container = styled.div`
  .banner {
    padding: 80px 0 160px;
    text-align: center;
    background-color: ${(props) => props.theme.colors.brand2};
    color: ${(props) => props.theme.colors.brand4};

    h1 {
      margin: auto;
      line-height: 56px;
      font-size: 44px;
      max-width: 750px;
      margin-bottom: 20px;
    }

    .btn-group {
      margin-top: 48px;
      display: flex;
      justify-content: center;
      gap: 20px;
    }
  }

  .products-section {
    padding-left: 23px;

    @media (min-width: 500px) {
      padding-left: 60px;
    }
  }

  .products-display {
    padding: 100px 0;
    margin: 0 auto;
    position: relative;

    h2 {
      font-weight: 600;
      color: ${(props) => props.theme.colors.grey1};
      font-size: 24px;
      line-height: 30px;
      margin-bottom: 63px;
    }
  }

  .carousel {
    padding: 23px 0 16px;
    display: flex;
    gap: 48px;
    overflow-x: scroll;
    scroll-behavior: smooth;
    &::-webkit-scrollbar {
      display: none;
    }
  }
`
