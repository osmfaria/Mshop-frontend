import styled from 'styled-components'

export const Content = styled.div`
  background: var(--mediumGrey);
  max-width: 280px;
  margin: auto;
  padding: 20px;
  border-radius: 4px;
  text-align: center;
  height: 120px;

  @media (min-width: 1000px) {
    max-width: 500px;
  }

  > span {
    font-size: 14px;
    color: ${(props) => props.theme.colors.grey4};
  }

  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
    border-bottom: 1px solid ${(props) => props.theme.colors.grey4};
    padding: 15px;

    > h3 {
      margin-left: 5px;
      font-weight: 500;
    }
  }
`

export const Container = styled.div`
  /* height: calc(100vh - 110px);
  margin-bottom: -120px; */
`
