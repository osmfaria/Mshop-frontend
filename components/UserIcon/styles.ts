import styled from 'styled-components'

export const Container = styled.div`
  height: 32px;
  width: 32px;
  border-radius: 50%;
  background-color: ${(props) => props.theme.colors.brand2};
  color: ${(props) => props.theme.colors.whiteFixed};
  text-align: center;
  line-height: 32px;
`
