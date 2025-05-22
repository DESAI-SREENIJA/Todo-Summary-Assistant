# Todo-Summary-Assistant
A full-stack app that lets users manage a to-do list, summarize pending tasks using OpenAI, and send the summary to Slack.

# Tech Stack
React (Frontend)
- Node.js + Express (Backend)
- Supabase (Database)
- OpenAI API (Task Summary)
- Slack Webhooks (Notifications)

##  Features
- Create, edit, delete to-do items
- View all pending tasks
- Summarize tasks with OpenAI
- Send summary to a Slack channel

## Getting Started

--Clone and Install
git clone <your-repo-url>
cd server && npm install
cd ../client && npm install

Run the App
-- Start Backend
cd server
node app.js

-- Start Frontend
cd ../client
npm start

##  .env Setup
# Create a .env file in /server with:
OpenAI:
Instructions for generating a key at https://platform.openai.com/account/api-keys


