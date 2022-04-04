
import axios from "axios";
// import errorHandler from "@/request/errorHandler";
// import successHandler from "@/request/successHandler";

export const Login = async (loginData) => {
  try {
    const response = await axios.post(
    //   API_BASE_URL + `login?timestamp=${new Date().getTime()}`,
    "https://reqres.in/api/users?page=2",
      loginData,
    );
    console.log(response)
    // await token.set(response.data.result.token);
  //   return successHandler(response);
  } catch (error) {
    // return errorHandler(error);
  }
};
