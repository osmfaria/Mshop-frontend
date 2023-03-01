import styled from 'styled-components'

export const Container = styled.div`
  background-color: ${(props) => props.theme.colors.grey10};

  .banner {
    padding: 80px 10px 160px;
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
      gap: 20px;
      flex-direction: column;
      justify-content: center;
      max-width: 500px;
      margin: 48px auto 0;
      @media (min-width: 480px) {
        flex-direction: row;
      }
    }
  }

  .products-section {
    padding-left: 23px;
    background-color: ${(props) => props.theme.colors.grey10};

    @media (min-width: 900px) {
      padding-left: 60px;
    }
  }
`
