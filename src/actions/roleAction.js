import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

// get all roles
export const getRoles = () => async (dispatch) => {
  const result = await axios.get(API_URL + "roles");
  dispatch({
    type: "GET_ROLES",
    payload: result.data,
  });
};

// get a role
export const getRole = (roleId) => async (dispatch) => {
  const result = await axios.get(API_URL + `roles/${roleId}`);
  dispatch({
    type: "GET_ROLE",
    payload: result.data,
  });
};

// create a role
export const createRole = (role) => async (dispatch) => {
  const result = await axios.post(API_URL + "roles", role);
  dispatch({
    type: "CREATE_ROLE",
    payload: result.data,
  });
};

// update a role
export const updateRole = (role) => async (dispatch) => {
  // await axios
  //   .put(API_URL + `roles/${role.id}`, role)
  //   .then((response) => {
  //     dispatch({
  //       type: "UPDATE_ROLE",
  //       payload: response.data,
  //     });
  //   })
  //   .catch((err) => {
  //     console.log(err.response.data);
  //   });
  // handle error here using promise as done in the above code
  try {
    const result = await axios.put(API_URL + `roles/${role.id}`, role);
    dispatch({
      type: "UPDATE_ROLE",
      payload: result.data,
    });
    return Promise.resolve(result.data);
  } catch (error) {
    return console.log(error.response.data);
  }
};
// delete a role
export const deleteRole = (id) => async (dispatch) => {
  const result = await axios.delete(API_URL + `roles/${id}`);
  dispatch({
    type: "DELETE_ROLE",
    payload: result.data,
  });
};
