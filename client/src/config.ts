// TODO: Once your application is deployed, copy an API id here so that the frontend could interact with it
const API_ID = 'cictz85cgi'
const DOMAIN = 'dev-did5xprt.us.auth0.com'
const CLIENT_ID = 'Sr8LdkkjRQ2M10R4QmwUj6QPV3whwoz8'
const CALLBACK_URL = 'http://localhost:3000/callback'
export const apiEndpoint = `https://${API_ID}.execute-api.us-east-1.amazonaws.com/dev`

export const authConfig = {
  // TODO: Create an Auth0 application and copy values from it into this map.
  domain: DOMAIN,            // Auth0 domain
  clientId: CLIENT_ID,          // Auth0 client id
  callbackUrl: CALLBACK_URL
}
