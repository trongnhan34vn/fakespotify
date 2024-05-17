import { SIGNUP } from "../api/services/authServices";
import { getAuthResponse } from "../redux/reducer/userSlice";


export const signup = (data) => {
  return async function (dispatch) {
    try {
      let response = await SIGNUP(data);
      dispatch(getAuthResponse(response));
    } catch (error) {
      // dispatch(getAuthResponse(error.response.data))
      console.log(error);
    }
  }
}