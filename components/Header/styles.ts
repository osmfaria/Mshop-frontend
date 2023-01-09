import styled from "styled-components";

export const Container = styled.div`
  height: 80px;
  padding: 0 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${(props) => props.theme.colors.grey6};

  @media (min-width: 760px) {
    padding: 0 60px;
  }

  .brand-name {
    font-size: 1.6rem;
    background-clip: text;
    span {
      font-size: 1.2rem;
    }
    background: linear-gradient(to right, #0b0d0d, #4529e6);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  nav {
    display: none;
    align-items: center;
    gap: 44px;
    height: 100%;

    @media (min-width: 900px) {
      display: flex;
    }
  }

  .nav-section-end {
    height: 100%;
    border-right: 2px solid ${props => props.theme.colors.grey6};
  }
`