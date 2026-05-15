const awsmobile = {
  aws_project_region: process.env.REACT_APP_AWS_PROJECT_REGION || 'eu-north-1',
  aws_cognito_region: process.env.REACT_APP_AWS_COGNITO_REGION || 'eu-north-1',
  aws_user_pools_id:
    process.env.REACT_APP_AWS_USER_POOLS_ID || 'eu-north-1_UwiBouWPE',
  aws_user_pools_web_client_id:
    process.env.REACT_APP_AWS_USER_POOLS_WEB_CLIENT_ID ||
    'm1inl4oam9o3c1kpeonq5agfi',
  aws_appsync_graphqlEndpoint:
    process.env.REACT_APP_AWS_APPSYNC_GRAPHQL_ENDPOINT ||
    'https://ylmn7t2nlnejnn7umw2qocg4aa.appsync-api.eu-north-1.amazonaws.com/graphql',
  aws_appsync_region: process.env.REACT_APP_AWS_APPSYNC_REGION || 'eu-north-1',
  aws_appsync_authenticationType: 'AMAZON_COGNITO_USER_POOLS',
};

export default awsmobile;
