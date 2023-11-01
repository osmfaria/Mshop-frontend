import styled from 'styled-components'

export const Container = styled.div`
  .products-display {
    padding: 50px 0;
    margin: 0 auto;
    position: relative;
    h2 {
      font-weight: 600;
      color: ${(props) => props.theme.colors.grey1};
      font-size: 24px;
      line-height: 30px;
      margin-bottom: 45px;
    }
  }

  .carousel {
    padding: 23px 0 16px;
    display: flex;
    gap: 48px;
    overflow-x: scroll;
    scroll-behavior: smooth;
    scroll-snap-type: x mandatory;
    &::-webkit-scrollbar {
      display: none;
    }
  }
`
