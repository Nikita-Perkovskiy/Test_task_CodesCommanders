import React from "react";
import { styles } from "./MainPage.styled.ts";
import UserPost from "../../components/UserPost/UserPost.tsx";

const MainPage: React.FC = () => {
  return (
    <main style={styles.mainContent}>
      <div style={styles.cardWrapper}>
        <UserPost
          postTitle={"cadvadvadvad"}
          postContent={
            " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse error itaque eius beatae est, maxime porro odio maiores architecto, id fugit! Fuga veritatis deleniti a dolorum officia modi consequatur enim!"
          }
        />
      </div>
    </main>
  );
};

export default MainPage;
