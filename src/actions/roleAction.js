import axios from "axios";

// get all roles
export const getRoles = () => async (dispatch) => {
  const result = await axios.get("http://127.0.0.1:8000/api/roles");
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
export const createRole = (role) => async (dispatch) => {
  const result = await axios.post("http://127.0.0.1:8000/api/roles", role);
  dispatch({
    type: "CREATE_ROLE",
    payload: result.data,
  });
};

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
