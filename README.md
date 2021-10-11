# Raising A Voice
User database to host information about clients.
## Tech Stack
**Frontend:** React.js/Node.js

**Backend**: MongoDB / SQL

## Dependencies
npm

## How to Run
1. Clone the repository.
2. Run `npm install` to install/update
3. Run npm dev for development mode with hot-code reloading, error reporting, and more.
4. Open http://localhost:3000 with your web browser to see the result.

Note: Running npm build then npm start will start the application in production mode.
## Tools Used
* Jira for issue tracking
* Figma for mockups
* Confluence for formal documents
## Code/PR Workflow
* Create a new branch in the format `[GITHUB_USERNAME]/RAV-[JIRA ISSUE NUMBER]-[SHORT_DESCRIPTION]` by running `git checkout -b [BRANCH NAME]`
  * This way the issues are closed on Jira when we merge the PR with that branch name
### Example Branch
    colepjohn/RAV-12-init-project

* Commit changes.
* Then push your branch by running `git push -u origin [BRANCH NAME]`. This pushes your branch to remote.
* Create a pull request (PR) on GitHub to merge your branch into `develop`. `main` will serve as production.
* In your PR, briefly describe the changes, then tag Cole (colepjohn) and Z (zlim2) to the PR. Others are welcome to comment and give feedback as well.

## Project Structure
* `Frontend/src/components`: Contains most of our front-end code. This is where we put our React components.
* `Backend/`: Contains files that are associated with a route based on its file name.
* `Frontend/public/`: Stores static files like images, see Next.js' [docs](https://nextjs.org/docs/basic-features/static-file-serving).
* `Frontend/styles/`: Contains our SCSS files for global styling, variables, and mixins.
