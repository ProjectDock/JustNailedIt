![alt text](src/assets/images/hacktoberfest_logo.png)
# JustNailedIt
We are celebrating Hacktoberfest 2022 with the project where everyone can share the code snippet got on the recent technical interview.

## Rules
- Code can be submitted only wrapped in string
- Any content of disturbing subject, politics, obscenity, illegal activity or other not related content will be rejected

## App
It is a basic React application that listing information from a js file. Do not worry if you are not familiar with React, you only need to modify an array of objects which detailed below.

## How to contribute

1. Fork this repo to your Github account

2. Clone your fork to your computer

3. Set remote stream with the original repo to keep always updated

    - `git remote add upstream https://github.com/ProjectDock/JustNailedIt.git`
    - `git pull upstream main`

4. Create a branch with your Github username

5. Run `yarn` in your local repo

6. Create a javascript file with your initial in `src/CONTRIBUTE_HERE/codes` directory, create `code` variable and place your code inside between the two backticks. Its important that only `code` variable and string format will be accepted.

    ```js
    export const code = `
      function myCode {
        // Some code
      }
    `
    ```
7. Go one folder up and open `content.js`

8. There is an array of objects for every card. Fill out with your name, code file path and Github account link. For the codeFile only need the created file name.

   ```js
   const cards = [
       {
          name: 'Project Dock',
          codeFile: 'pd.js',
          github: 'https://github.com/ProjectDock',
       },
   ]
   ```

9. Commit and push the code to your fork

10. Create a pull request to the original repo


> Congratulations! You are now one step closer to getting the Hacktoberfest 2022 swags. You can check your progress at <https://hacktoberfest.digitalocean.com/profile> .

######By contributing you understand that your code will be publicly available
