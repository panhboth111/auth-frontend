import axios from "axios";
import cookie from "./cookie";
const baseURL = "http://localhost:3000/api";
//these access public routes, so as you can see, we dont need to put the headers 'auth-token'
export const signup = async (signupUser) => {
  try {
    const response = await axios.post(`${baseURL}/auth/signup`, signupUser);
    alert(response.data.msg);
    if (response.data.success) {
      signin(signupUser);
    }
    return;
  } catch (error) {
    alert(error.message);
  }
};
export const signin = async (signinUser) => {
  const response = await axios.post(`${baseURL}/auth/signin`, signinUser);
  alert(response.data.msg);
  if (response.data.success) {
    cookie.setCookie("auth-token", response.data.token, 30); //window.localStorage.setItem("auth-token",token)
    localStorage.setItem("LastLogged", Date.now());
    window.location.replace("/");
  }
  return;
};
export const signout = () => {
  cookie.setCookie("auth-token", "", 30);
  localStorage.setItem("LastLogged", Date.now());
  window.location.reload();
};
//these access private routes that's why we add headers auth-token.
//the name 'auth-token' is optional. You can name it the way your backend expects.
export const getUser = async () => {
  const token = cookie.getCookie("auth-token");
  const response = await axios.get(`${baseURL}/user`, {
    headers: { "auth-token": token },
  });
  return response.data;
};
export const addTodo = async (todo) => {
  try {
    const token = cookie.getCookie("auth-token");
    const response = await axios.post(`${baseURL}/todo`, todo, {
      headers: { "auth-token": token },
    });
    return response.data;
  } catch (error) {
    return { success: false, msg: error.message, data: null };
  }
};
export const getTodo = async (todo) => {
  try {
    const token = cookie.getCookie("auth-token");
    const response = await axios.get(`${baseURL}/todo`, {
      headers: { "auth-token": token },
    });
    return response.data;
  } catch (error) {
    return { success: false, msg: error.message, data: null };
  }
};
export const removeTodo = async (name) => {
  try {
    const token = cookie.getCookie("auth-token");
    const response = await axios.delete(`${baseURL}/todo`, name, {
      headers: { "auth-token": token },
    });
    return response.data;
  } catch (error) {
    return { success: false, msg: error.message, data: null };
  }
};
