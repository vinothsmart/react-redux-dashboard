const initialState = {
  roles: [
    {
      userRoleId: "pmYQej4on6",
      userRole: "SuperAdmin",
    },
    {
      userRoleId: "aYRQ8KJwx2",
      userRole: "Admin",
    },
    {
      userRoleId: "2kqA9zJOZ3",
      userRole: "User",
    },
  ],
  role: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "GET_ROLES":
      return { ...state, roles: payload };
    case "CREATE_ROLE":
      return {
        ...state,
        roles: [payload, ...state.roles],
      };
    case "GET_ROLE":
      return {
        ...state,
        role: payload,
      };
    case "UPDATE_ROLE":
      return {
        ...state,
        roles: state.posts.map((roleItem) =>
          roleItem.id == payload.id ? payload : roleItem
        ),
      };
    case "DELETE_ROLE":
      return {
        ...state,
        roles: state.posts.filter((roleItem) => roleItem.id != payload),
      };
    default:
      return state;
  }
};
