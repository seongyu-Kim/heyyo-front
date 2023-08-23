const CLIENT_ID =
  "607225851616-bn9l2iee6433pc6l51r67r4cfounvlnv.apps.googleusercontent.com";
const REDIRECT_URI = "http://localhost:3000";

export const GOOGLE_AUTH_URL = `https://accounts.google.com/o/oauth2/v2/auth?scope=profile&response_type=code&client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}`;
