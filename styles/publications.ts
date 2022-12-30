import styled from 'styled-components'

export const Container = styled.div`
  background-color: ${(props) => props.theme.colors.grey7};

  h6 {
    font-size: 1rem;
    font-weight: 600;
    color: ${(props) => props.theme.colors.grey1};
  }

  p {
    line-height: 28px;
    color: ${(props) => props.theme.colors.grey2};
  }

  .top-section {
    background-color: ${(props) => props.theme.colors.brand1};
    height: 575px;
  }

  .content-main {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 1238px;
    margin: auto;
    padding: 0 12px 45px;
    transform: translateY(-535px);
    margin-bottom: -535px;

    .content-publication {
      display: flex;
      gap: 15px;
      flex-direction: column;

      @media (min-width: 1250px) {
        flex-direction: row;
        gap: 46px;
      }

      .publication-main {
        max-width: 752px;
        flex-grow: 1;
      }

      .publication-aside {
        flex-grow: 1;
        max-width: 752px;

        @media (min-width: 1250px) {
          max-width: 440px;
        }

        .gallery {
          padding: 36px 44px;
          border-radius: 4px;
          background-color: ${(props) => props.theme.colors.grey10};

          h6 {
            margin-bottom: 32px;
          }

          .gallery-card {
            display: flex;
            row-gap: 32px;
            column-gap: 14px;
            flex-wrap: wrap;

            .gallery-image {
              cursor: pointer;
              object-fit: contain;
            }
          }
        }

        .user-content {
          @media (min-width: 1250px) {
            min-width: 416px;
          }
          border-radius: 4px;
          background-color: ${(props) => props.theme.colors.grey10};
          padding: 37px;
          margin-top: 34px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 32px;
        }
      }
    }

    .content-comments {
      max-width: 752px;
      align-self: center;
      width: 100%;

      @media (min-width: 1250px) {
        align-self: flex-start;
      }
    }

    .box-image {
      background-color: ${(props) => props.theme.colors.grey10};
      border-radius: 4px;
      width: 100%;
      height: 355px;
      position: relative;

      @media (min-width: 760px) {
        width: 752px;
      }
      .image {
        object-fit: contain;
        margin: auto;
        max-width: 450px;
      }
    }

    .cards {
      padding: 36px 44px;
      border-radius: 4px;
      background-color: ${(props) => props.theme.colors.grey10};
    }

    .details {
      margin-top: 16px;

      h6 {
        line-height: 32px;
        margin-bottom: 41px;
      }

      .box-car_details {
        display: flex;
        justify-content: space-between;
        min-height: 28px;
        margin-bottom: 24px;
        .highlight {
          padding: 6px 8px;
          font-weight: 500;
          background-color: ${(props) => props.theme.colors.brand4};
          color: ${(props) => props.theme.colors.brand1};
          margin-right: 12px;
          line-height: 24px;
          border-radius: 4px;
        }

        .price {
          font-family: 'Lexend';
          font-weight: 500;
          color: ${(props) => props.theme.colors.grey1};
        }
      }
    }

    .description {
      margin-top: 40px;
      h6 {
        line-height: 35px;
        margin-bottom: 32px;
      }
    }
  }
`
