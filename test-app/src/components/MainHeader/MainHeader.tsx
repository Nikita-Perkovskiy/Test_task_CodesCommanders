import React from "react";
import MainButton from "../../components/MainButton.tsx/MainButton.tsx";
import { styles } from "./MainHeader.styled.ts";
import { globalStyles } from "../../globalStyles.ts";
import { IMainHeader } from "./MainHeader.types.ts";

const MainHeader: React.FC<IMainHeader> = ({ navigate }) => {
  return (
    <header style={styles.headerWrapper}>
      <h1 style={{ ...styles.mainTitle, ...globalStyles.baseTitle }}>
        Best Application
      </h1>
      <MainButton navigate={navigate} buttonTitle={"Sing In"} />
    </header>
  );
};

export default MainHeader;
