import axios from "axios";
import buildClient from "../api/build-client";

const LandingPage = ({ currentUser }) => {
  return currentUser ? (
    <h1>You're Signed in</h1>
  ) : (
    <h1>You're NOT Signed in</h1>
  );
};

LandingPage.getInitialProps = async function (context) {
  const client = buildClient(context);
  const { data } = await client.get("/api/users/currentuser");
  return data;
};

export default LandingPage;
