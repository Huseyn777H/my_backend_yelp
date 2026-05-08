# My Backend Yelp

## Task

The task was to repair an old React Yelp-style application and deploy it to the cloud with authentication and a GraphQL backend. The final submission must include a hosted URL in `my_yelp_url.txt` and must keep generated dependency folders such as `node_modules` out of Git.

## Description

This project is a React and TypeScript restaurant application deployed on AWS. Authenticated users can sign up, sign in, create restaurant records with a name, description, and city, and view the saved restaurant list through a GraphQL API. The backend uses Amazon Cognito for authentication, AWS AppSync for GraphQL operations, and DynamoDB for persistent restaurant storage. The live hosted application is available at https://main.d1eio383e90r6j.amplifyapp.com.

## Installation

Clone the repository, enter the project directory, and install dependencies with `npm install`. This project uses an older Create React App setup, so production builds on modern Node.js require the legacy OpenSSL option: `NODE_OPTIONS=--openssl-legacy-provider npm run build`. On Windows PowerShell, use `$env:NODE_OPTIONS="--openssl-legacy-provider"; npm run build`.

## Usage

Open the deployed AWS Amplify URL, create an account or sign in through the Cognito authentication screen, then use the form to add a restaurant. Submitted restaurants are stored through the AppSync GraphQL API and shown in the table below the form. The required submission URL is also stored in `my_yelp_url.txt`.

## Qwasar Reference

This repository was completed for the Qwasar My Backend Yelp cloud deployment project. It follows the subject requirements by providing a hosted application URL, React source code, AWS authentication, GraphQL backend resources, and a `.gitignore` that excludes `node_modules`.
