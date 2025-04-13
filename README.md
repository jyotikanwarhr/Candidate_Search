# Candidate_Search
  ![License](https://img.shields.io/badge/License-MIT-blue.svg)

  ## Description
The Candidate Search Application is a dynamic React project built with TypeScript that enables employers to efficiently explore and evaluate candidate profiles using data from the GitHub API. It utilizes a custom API endpoint to fetch user information, showcasing key details such as name, username, location, avatar, email, bio, and company affiliation. Employers can conveniently add promising candidates to a saved list with the "+" button, skip profiles using the "-" button, and access a persistent view of accepted profiles. To further enhance the hiring workflow, optional features like sorting and filtering may also be introduced.

## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Technologies](#technologies)
  - [Walkthrough Video](#walkthrough-video)
  - [URL Link](#url-link)
  - [Contributing](#contributing)
  - [Contributors](#contributors)
  - [License](#license)
  - [Questions](#questions)

  ## Installation
  
  1. Git clone: git@github.com:jyotikanwarhr/Candidate_Search.git

  2. Navigate to the project directory: cd Candidate_Search

  3. Right click the root package.json file and click open in integrated terminal

  4. Inside the terminal install the dependencies with the command: npm i

  5. After dependencies are installed build the application with the command: npm run build

  6. After the build is finished run the command: npm run dev

  7. Set Up Environment Variables in your .env file

  8. Create a .env file in the environment folder (or in the project root if instructed).

  9. Generate a GitHub Personal Access Token (with default permissions) by following the instructions on creating a fine-grained token.

  10. Add your token to the .env file as follows: VITE_GITHUB_TOKEN=your_personal_access_token_here

  ## Usage
  To run the Candidate Search:

  1. Start the development server (commonly via Vite) with: npm run dev

  2. When the candidate search page loads, it displays one candidate's details (name, username, location, avatar, email, bio, and company).

  3. Click the "+" button to save the current candidate and load the next candidate’s information.

  4. Click the "- button" to skip the current candidate without saving and display the next candidate.

  5. View the list of saved candidates, which persists via local storage.

  6. If no candidates have been saved or if there are no candidates available to review, the application will display an appropriate message.

  7. Optionally, sort and filter the list of potential candidates to further refine your hiring process.

  ## Technologies
 

 ![Vite Badge](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)

 ![npm Badge](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)

 ![TypeScript Badge](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)

 ![React Badge](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)

 ![GitHub Badge](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)

 ![VSCode Badge](https://img.shields.io/badge/VSCode-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white)
 
## Walkthrough Video
  A demo of the application can be found at the following link: 

  ## URL Link
  Here is the URL Link to the application: https://github.com/jyotikanwarhr/Candidate_Search

  ## License
  This project is licensed under the MIT license.
  

