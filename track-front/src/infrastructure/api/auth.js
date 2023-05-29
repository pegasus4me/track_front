import axios from "axios";
let tokenStorage = `Bearer ${localStorage.getItem("token")}`

/*
 * register request
 */
export async function saveUser(data) {
  try {
    let res = await axios.post(
      "http://localhost:4000/api/v1/user/register",
      data
    );
    return res.data;
  } catch (error) {
    console.log(error);
  }
}

/*
 * authentification request
 */
export async function authenticateUser(data) {
  try {
    let res = await axios.post("http://localhost:4000/api/v1/user/login",data,
      {
        headers: {
          "x-access-token": tokenStorage,
        },
      }
    );
    return res.data;
  } catch (error) {
    throw new Error("error", error);
  }
}

/*
 * get current User details request
*/
export async function getUserData() {
  try {
    let res = await axios.get("http://localhost:4000/api/v1/user/data", {
      headers : {
        "x-access-token": tokenStorage,
      }
    });
    return res.data;
  } catch (error) {
    console.log("error", error);
  }
}


/*
 * update user Informations request
*/

export async function updateUserDetails(data, id){}

export function checkAuth() {
  let token = localStorage.getItem("token");
  return !!token;
}
