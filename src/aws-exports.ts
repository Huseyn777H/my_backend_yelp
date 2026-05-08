const awsmobile = {
  aws_project_region: process.env.REACT_APP_AWS_PROJECT_REGION || 'us-east-1',
  aws_cognito_region: process.env.REACT_APP_AWS_COGNITO_REGION || 'us-east-1',
  aws_user_pools_id:
    process.env.REACT_APP_AWS_USER_POOLS_ID || 'local-placeholder',
  aws_user_pools_web_client_id:
    process.env.REACT_APP_AWS_USER_POOLS_WEB_CLIENT_ID || 'local-placeholder',
  aws_appsync_graphqlEndpoint:
    process.env.REACT_APP_AWS_APPSYNC_GRAPHQL_ENDPOINT ||
    'https://localhost/graphql',
  aws_appsync_region: process.env.REACT_APP_AWS_APPSYNC_REGION || 'us-east-1',
  aws_appsync_authenticationType: 'AMAZON_COGNITO_USER_POOLS',
};

export default awsmobile;
