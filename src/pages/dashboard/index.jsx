import Header from "../../components/Header";
import Modal from "../../components/Modal";

export default function index({ data }) {
  return (
    <div className="dashboard">
      <Header data={data} />
      
      {/* <div className="table">
        {moviesState.map((movie) => (
          <Card key={movie._id} movie={movie} fun={setMovies} />
        ))}
      </div> */}
      <Modal/>
    </div>
  );
}
export function getServerSideProps({ req }) {
  const data = JSON.parse(req.headers["x-data"]);
  return {
    props: {
      data,
    },
  };
}
