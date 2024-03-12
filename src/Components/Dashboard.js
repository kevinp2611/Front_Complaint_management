import { useNavigate } from "react-router";


const Dashboard = () => {
    const navigate = useNavigate();
  return (
    <>
      <h1>register your complaint here</h1>
      <br />
      <br />
      <form action="/register" method="get">
        <button class="btn btn-primary m-1" type="submit" name="button" onClick={()=>{
            navigate('/complaint');
        }}>
          Register Complaint Here
        </button>
      </form>
      <br />
      <br />

      <form action="/client" method="get">
        <button class="btn btn-primary m-1" type="submit" name="button">
          Your Complaints
        </button>
      </form>

      <table class="table table-bordered">
        <thead class="table-success">
          <tr>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">Branch</th>
            <th scope="col">Query</th>
            <th scope="col">ComputerIP</th>
            <th scope="col">Other</th>
            <th scope="col">Note</th>
            <th scope="col">Date</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
      </table>
    </>
  );
};

export default Dashboard;
