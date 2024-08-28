import React from "react";
import { IUserPost } from "./UserPost.types";
import { styles } from "./UserPost.styled.ts";
import { globalStyles } from "../../globalStyles.ts";
import { maxLength } from "../../constants.ts";

const UserPost: React.FC = ({
  userId,
  postId,
  postTitle,
  postContent,
}: IUserPost) => {
  return (
    <article style={styles.postWrapper}>
      <div style={styles.postBanner}></div>
      <header style={styles.postHeader}>
        <h3 style={globalStyles.baseTitle}>{postTitle}</h3>
      </header>
      <section style={styles.postContent}>
        <p style={globalStyles.baseText}>
          {postContent.length < maxLength
            ? postContent
            : `${postContent?.slice(0, maxLength)}... `}
        </p>
      </section>
    </article>
  );
};

export default UserPost;
