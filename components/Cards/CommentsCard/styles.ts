import styled from 'styled-components'

interface Props {
  overflow: string
}

export const Container = styled.div<Props>`
  border-radius: 4px;
  background-color: ${(props) => props.theme.colors.grey10};
  padding: 26px 20px;
  margin-top: 16px;

  @media (min-width: 760px) {
    padding: 36px 44px;
  }

  h6 {
    margin-bottom: 24px;
  }

  .infinite {
    overflow-y: ${(props) => props.overflow};
    max-height: 500px;
    scrollbar-width: none;
    -ms-overflow-style: none;

    @media (min-width: 760px) {
      scrollbar-width: inherit;
      -ms-overflow-style: auto;
    }

    ::-webkit-scrollbar {
      width: 0;

      @media (min-width: 760px) {
        width: 8px;
      }
    }
    ::-webkit-scrollbar-track {
      background: rgb(0 0 0 / 5%);
      border-radius: 20px;
    }
    ::-webkit-scrollbar-thumb {
      border-radius: 20px;
      background: linear-gradient(45deg, #edeafd, #4529e6);
    }
    ::-webkit-scrollbar-thumb:hover {
      background: #555;
    }

    .loader {
      max-width: 100px;
      margin: 30px auto;
    }

    .comments-section {
      display: flex;
      flex-direction: column;
      gap: 44px;

      .comment {
        word-wrap: break-word;
        padding: 10px 0 0 10px;
        color: ${(props) => props.theme.colors.grey2};
      }
    }

    .box-user {
      display: flex;
      align-items: center;
      margin-bottom: 5px;
      flex-wrap: wrap;

      .username {
        margin: 0 8px;
        font-weight: 500;
        color: ${(props) => props.theme.colors.grey1};
        line-height: 24px;
      }

      .timeago {
        margin-left: 12px;
        color: ${(props) => props.theme.colors.grey3};
        font-size: 0.75rem;
      }

      .user-edit {
        margin-left: 12px;
        display: flex;
        align-items: center;
        gap: 15px;
        color: ${(props) => props.theme.colors.grey3};
        cursor: pointer;
      }
    }
  }
`

export const StyledTextarea = styled.div`
  position: relative;
  background-color: ${(props) => props.theme.colors.grey7};
  max-width: 600px;
  border-radius: 4px;
  padding: 8px;
  textarea {
    resize: none;
    outline: none;
    border: none;
    border-radius: 4px;
    max-width: 580px;
    width: 100%;
    height: 80px;
    background-color: ${(props) => props.theme.colors.grey7};
    font-family: 'Inter';
    font-size: 1rem;
  }

  .comment-control {
    display: flex;
    justify-content: space-between;
    button {
      border: none;
      background-color: transparent;
      color: ${(props) => props.theme.colors.grey2};
    }
  }
`
