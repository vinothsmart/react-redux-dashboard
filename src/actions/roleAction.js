import axios from "axios";

// get all roles
export const getRoles = () => async (dispatch) => {
  const result = await axios.get("http://localhost/api/users");
  // const result = await axios.get("http://127.0.0.1:8000/api/users");
  dispatch({
    type: "GET_ROLES",
    payload: result.data,
  });
};

// get a role
export const getRole = (id) => ({
  type: "GET_ROLE",
  payload: id,
});

// create a role
export const createRole = (role) => ({
  type: "CREATE_ROLE",
  payload: role,
});

// update a role
export const updateRole = (role) => ({
  type: "UPDATE_ROLE",
  payload: role,
});

// delete a role
export const deleteRole = (id) => ({
  type: "DELETE_ROLE",
  payload: id,
});
