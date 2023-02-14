import Table from '../../components/Table'
import Header from "../../components/Header";
import Modal from "../../components/Modal";
import { getData } from '../../utils/tools';


export default function index({ data, people }) {

  return (
    <div className="dashboard">
      <Header data={data} />
      
      {/* <div className="table">
        {moviesState.map((movie) => (
          <Card key={movie._id} movie={movie} fun={setMovies} />
        ))}
      </div> */}
      <Table people={people}/>
      <Modal/>
    </div>
  );
}
export function getServerSideProps({ req }) {
  const data = JSON.parse(req.headers["x-data"]);
  // /api/collaborator
  const people = getData()
  
  return {
    props: {
      data,
      people
    },
  };
}
