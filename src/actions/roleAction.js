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
