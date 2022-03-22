const initialState = {
  roles: [],
  role: null,
};

const roles = (state = initialState, { type, payload }) => {
  switch (type) {
    case "GET_ROLES":
      return { ...state, roles: payload.data };
    case "CREATE_ROLE":
      return {
        ...state,
        roles: [...state.roles, payload.data],
      };
    case "GET_ROLE":
      return {
        ...state,
        role: payload.data,
      };
    case "UPDATE_ROLE":
      return {
        ...state,
        roles: state.roles.map((roleItem) =>
          roleItem.userRoleId === payload.data.userRoleId
            ? payload.data
            : roleItem
        ),
      };
    case "DELETE_ROLE":
      return {
        ...state,
        roles: state.roles.filter(
          (roleItem) => roleItem.userRoleId !== payload.data.userRoleId
        ),
      };
    default:
      return state;
  }
};

export default roles;
