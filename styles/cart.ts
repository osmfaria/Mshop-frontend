import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  flex-grow: 1;
  background-color: ${props => props.theme.colors.grey7};

  h2 {
    font-weight: 500;
    color: ${props => props.theme.colors.grey1};
    margin-bottom: 32px;
    font-size: 1rem;
  }

  .panel {
    background-color: ${props => props.theme.colors.grey10};
    max-width: 570px;
    margin: 46px auto 97px;
    padding: 20px;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    gap: 50px;
    @media (min-width: 770px) {
      padding: 30px 40px 40px;
    }

    .panel-header {
      display: flex;
      justify-content: space-between;
    }
  }
`