import { useState, useEffect } from 'react';
import { searchGithub, searchGithubUser } from '../api/API';

const CandidateSearch = () => {

  // const candidate = {
  //   username: "JohnDoe",
  //   location: "New York",
  //   email: "email@email.com",
  //   company: "company",
  //   bio: "bio",
  //   image: "https://placehold.co/400",
  // }

    const [candidate, setCandidate] =  useState({
        username: "",
        location: "",
        email: "",
        company: "",
        bio: "",
        image: "https://placehold.co/400",
    })

    async function getCandidate () {
      const randomList = await searchGithub();
      console.log(randomList);
      const selectedUsername = randomList[0].login;
      const user = await searchGithubUser(selectedUsername);
      console.log(user);

      if(user.login === undefined) {
        console.log("user not found");
        return;
      }

        setCandidate({
          username: user.login,
          location: user.location || "N/A",
          email: user.email || "N/A",
          company: user.company || "N/A",
          bio: user.bio || "N/A",
          image: user.avatar_url,
      })
    }

    function saveCandidate() {
      console.log("save candidate");

      const savedCandidates = localStorage.getItem("savedCandidates") || "[]";
      const parsedCandidates = JSON.parse(savedCandidates);

      parsedCandidates.push(candidate);

      localStorage.setItem("savedCandidates", JSON.stringify(parsedCandidates));
      
      getCandidate();
    }


    useEffect(() => {
      getCandidate()
    }, [])


  return (
    <>
      <h1>CandidateSearch</h1>

      <div className="card">
        <img  className="card-image" src={candidate.image}/>
        
        <div className="card-content">
          <h3>{candidate.username}</h3>
          <p>Location: {candidate.location}</p>
          <p>Email: {candidate.email}</p>
          <p>Company</p>
          <p>Bio</p>
        </div>

      </div>


      <button onClick={getCandidate}>Minus (Skip)</button>
      <button onClick={saveCandidate}>Plus (Save)</button>

    
    
    
    
    
    </>
  );
};

export default CandidateSearch;
