import { baseDark, baseWhite, darkGray } from "./../../constants.ts";

export const styles = {
  pageWrapper: {
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  formWrapper: {
    marginTop: "100px",
    height: "300px",
    width: "350px",
    borderRadius: "20px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: darkGray,
  },
  textInput: {
    paddingLeft: "10px",
    width: "270px",
    height: "50px",
    margin: "0",
    border: `1px solid ${darkGray}`,
    fontSize: "16px",
    boxSizing: "border-box",
    outline: "none",
    borderRadius: "20px",
    "&::placeholder": { color: baseDark },
    "&::hover": {
      border: `1px solid ${darkGray}`,
    },
  },
  logInForm: {
    height: "40%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logInTitle: {
    fontWeight: 500,
    fontSize: "26px",
    lineHeight: "18px",
  },
  logInButton: {
    all: "unset",
    boxSizing: "border-box",
    width: "270px",
    height: "50px",
    textAlign: "center",
    backgroundColor: baseWhite,
    borderRadius: "20px",
    cursor: "pointer",
  },
};
