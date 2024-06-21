export const reducer = (state, action) => {
  switch (action.type){
    case "FIRSTNAME":
      return { ...state, firstname: action.payload };

    case "LASTNAME":
      return { ...state, lastname: action.payload };

    case "EMAIL":
      return { ...state, email: action.payload };

    case "PASSWORD":
      return { ...state, password: action.payload };

    case "TELEPHONE":
      return { ...state, telephone: action.payload };

    default:
      return new Error("invalid input");
  }
};

export const loginReducer = (state, action) => {
  switch (action.type) {
    case "EMAIL":
      return { ...state, email: action.payload };

    case "PASSWORD":
      return { ...state, password: action.payload };
    default:
      return new Error("invalid login details");
  }
};
