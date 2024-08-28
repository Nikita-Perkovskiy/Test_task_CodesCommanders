import React, { useEffect, useState } from "react";
import { styles } from "./MainPage.styled.ts";
import UserPost from "../../components/UserPost/UserPost.tsx";
import { useGetPostsQuery } from "../../features/postSlice.ts";
import { IPostsArray } from "./MainPage.types.ts";

const MainPage: React.FC = () => {
  const [userPosts, setUserPosts] = useState<IPostsArray>([]);
  const { data: posts, error, isLoading } = useGetPostsQuery();
  useEffect(() => {
    if (!isLoading && !error) {
      setUserPosts(posts);
    } else {
      alert("Something went wrong");
    }
  }, [posts, error]);
  console.log(posts, error, isLoading);

  return (
    <main style={styles.mainContent}>
      <div style={styles.cardWrapper}>
        {userPosts.map((post) => (
          <UserPost
            key={post.id}
            postTitle={post.title}
            postContent={post.body}
          />
        ))}
      </div>
    </main>
  );
};

export default MainPage;
