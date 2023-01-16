//login user
import axios from "axios";
import url from "../utils/URL";

async function loginUser({ email, password }) {
  const response = await axios
    .post(`${url}/api/auth/local`, {
      //.post(`https://reqres.in/api/login`, {
      identifier: email,
      password
    })
    .catch(error => console.log(error));
  return response;

  //   try {
  //   const response = await axios.post(url, {identifier: email, password})
  //   console.log(response)
  // }
  // catch (error){
  //   console.log(error.response)
  // }
  }


export default loginUser;
