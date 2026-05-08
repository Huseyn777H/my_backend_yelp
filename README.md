# My Backend Yelp

React + AWS cloud deployment for the My Backend Yelp project.

## Live URL

https://main.d1eio383e90r6j.amplifyapp.com

The same URL is saved in `my_yelp_url.txt` as required by the subject.

## Stack

- React
- TypeScript
- AWS Amplify Hosting
- Amazon Cognito authentication
- AWS AppSync GraphQL API
- Amazon DynamoDB storage

## Project Structure

```text
amplify/
  backend/
    api/RestaurantAPI/schema.graphql
    auth/myyieldauth/
src/
  graphql/
  App.tsx
my_yelp_url.txt
```

## Features

- User authentication with Cognito
- Create restaurants with name, description, and city
- List restaurants from the GraphQL API
- Real-time restaurant creation subscription

## Local Setup

Install dependencies:

```bash
npm install
```

Start the app locally:

```bash
npm start
```

Build for production:

```bash
NODE_OPTIONS=--openssl-legacy-provider npm run build
```

On Windows PowerShell:

```powershell
$env:NODE_OPTIONS="--openssl-legacy-provider"; npm run build
```

## Deployment

The app is deployed on AWS Amplify Hosting in `eu-north-1`.

Created AWS resources:

- Cognito user pool for authentication
- AppSync GraphQL API for restaurant data
- DynamoDB table for persistence
- Amplify Hosting app for the frontend

## Notes

This project started from an older Create React App and Amplify Gen 1 codebase. Some dependencies were pinned or updated so the project can still compile on modern Node.js.
