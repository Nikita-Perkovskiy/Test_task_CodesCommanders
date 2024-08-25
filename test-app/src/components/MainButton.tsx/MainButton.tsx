import React from "react";
import { IMainButtonProps } from "./MainButton.types";
import { styles } from "./MainButton.styled.ts";
import { globalStyles } from "../../globalStyles.ts";

const MainButton: React.FC<IMainButtonProps> = ({ buttonTitle, navigate }) => {
  return (
    <button
      onClick={() => navigate("/logInPage")}
      style={{ ...styles.mainButton, ...globalStyles.baseTitle }}
    >
      {buttonTitle}
    </button>
  );
};

export default MainButton;
