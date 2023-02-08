import Header from "../../components/Header";

export default function index({data}) {
  return (
    <Header data={data}/>
  )
}
export function getServerSideProps({req}){
    const data = JSON.parse(req.headers["x-data"])
    return {
      props: {
        data
      }
    }
  }