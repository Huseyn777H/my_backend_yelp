# My Backend Yelp

## Description

My Backend Yelp is a cloud-hosted React application that lets authenticated users add and view restaurant records. The project was originally an older React and AWS Amplify codebase, so it was repaired, configured, and deployed with a working AWS backend.

## Live Deployment

The application is deployed on AWS Amplify Hosting and is available at this production URL:

https://main.d1eio383e90r6j.amplifyapp.com

The same deployment URL is stored in `my_yelp_url.txt`, which is the required submission file for the project.

## Technologies

The frontend is built with React, TypeScript, React Bootstrap, and AWS Amplify client libraries. The deployed backend uses Amazon Cognito for authentication, AWS AppSync for the GraphQL API, and Amazon DynamoDB for restaurant data storage.

## Features

Users can sign up and sign in through Cognito authentication before accessing the application. After login, they can create restaurants with a name, description, and city, then view the saved restaurant list from the GraphQL API.

## Architecture

The React application communicates with AppSync using generated GraphQL queries, mutations, and subscriptions. AppSync stores restaurant items in DynamoDB, while Cognito protects access so only authenticated users can use the application.

## Project Structure

The `src` directory contains the React application, generated GraphQL operations, and TypeScript code. The `amplify/backend/api/RestaurantAPI/schema.graphql` file contains the restaurant schema, and `amplify/backend/auth` contains the authentication configuration.

## Installation

Install the project dependencies with `npm install` from the project root. The repository intentionally ignores `node_modules`, so dependencies must be installed locally before running or building the application.

## Running Locally

Start the local development server with `npm start`. The app requires valid AWS configuration values to communicate with the deployed Cognito and AppSync services.

## Build

Create a production build with `npm run build`. On modern Node.js versions, this older Create React App project requires the `NODE_OPTIONS=--openssl-legacy-provider` option during the build step.

## Deployment

The final project is deployed to AWS in the `eu-north-1` region. The deployment uses Amplify Hosting for the static React build, Cognito for login, AppSync for GraphQL, and DynamoDB for persistent restaurant records.

## Notes

Several compatibility issues in the original project were fixed, including missing Amplify configuration, old dependency conflicts, TypeScript build errors, and missing cloud backend resources.
