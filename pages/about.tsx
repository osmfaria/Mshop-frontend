import { IGetPulications } from "../interfaces/publicationsInterface";

export async function getServerSideProps(): Promise<{props: IGetPulications}> {
  const response = await fetch(
    'https://motors-ecommerce-api.herokuapp.com/publications'
  )
  const data = await response.json()
  return {
    props: {
      publications: data
    },
  }
}

const About = ({ publications }: IGetPulications) => {
  console.log(publications)
  return (<>
    <h1>hello</h1>
    <h1>{publications.results[0].title}</h1>
  </>)
}
 
export default About;