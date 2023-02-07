export default function index({data}) {
  return (
    <div>{data && <p>{data.email}</p>}
    {data && <p>{data.role}</p>}</div>
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