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
  const result = await axios.put(API_URL + `roles/${role.id}`, role);
  dispatch({
    type: "UDATE_ROLE",
    payload: result.data,
  });
};
// delete a role
export const deleteRole = (id) => ({
  type: "DELETE_ROLE",
  payload: id,
});
