import Nav from "../components/Nav";

const SavedCandidates = () => {
  return (
    <>
      <Nav />
      <h1>Potential Candidates</h1>

      {/* create table showing savedCandidates from localstorage */}
      {/* add reject button to each candidate */}

      <table className="table">
        <thead>
          <tr>
            <th scope="col">Image</th>
            <th scope="col">Name</th>
            <th scope="col">Location</th>
            <th scope="col">Email</th>
            <th scope="col">Company</th>
            <th scope="col">Bio</th>
            <th scope="col">Reject</th>
          </tr>
        </thead>
        <tbody id="savedCandidates">
          {/* map through savedCandidates and create a row for each candidate */}
          {JSON.parse(localStorage.getItem("savedCandidates") || "[]").map((candidate: any, index: number) => (
            <tr key={index}>
              <td><img style={{width: "100%"}}src={candidate.image} alt="Candidate" /></td>
              <td>{candidate.username}</td>
              <td>{candidate.location}</td>
              <td>{candidate.email}</td>
              <td>{candidate.company}</td>
              <td>{candidate.bio}</td>
          
              <td style={{ textAlign: "center", verticalAlign: "middle" }}>
                <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",

                }}
                >
                <button
                  className="btn btn-danger"
                  onClick={() => handleReject(index)}
                  style={{
                    backgroundColor: "red",
                    color: "black",
                    border: "none",
                    borderRadius: "50%",
                    width: "30px",
                    height: "30px",
                    fontSize: "20px",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "0",
                    margin: "0",
                    boxSizing: "border-box",
                  }}
                >
                  -
                </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default SavedCandidates;
