import styled from 'styled-components'

export const Container = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  
  div {
    height: 40px;
    border-right: 1px solid ${(props) => props.theme.colors.grey3};
    margin: 0 18px;
  }

  h2 {
    font-weight: 400;
    color: ${(props) => props.theme.colors.grey2};
  }
`
