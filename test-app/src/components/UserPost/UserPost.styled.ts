import { darkGray } from "../../constants.ts";

export const styles = {
  postWrapper: {
    padding: "10px",
    display: "flex",
    flexDirection: "column",
    alignItems: "start",
    justifyContent: "flex-start",
    width: "250px",
    height: "300px",
    border: `1px solid ${darkGray}`,
    boxShadow: `5px 5px 0px 0px  ${darkGray}`,
    borderRadius: "15px",
  },
  postBanner: {
    width: "100%",
    height: "100px",
    backgroundColor: `${darkGray}`,
  },
  postHeader: {
    marginTop: "10px",
  },
  postContent: {
    marginTop: "20px",
  },
};
