import cookie from "./cookie";

export default () => {
  const auth_token = cookie.getCookie("auth-token");
  if (auth_token !== null && auth_token !== "") {
    if (window.location.pathname == "/signin") {
      window.location.replace("/");
    }
  } else {
    if (window.location.pathname != "/signin") {
      window.location.replace("/signin");
    }
  }
};
