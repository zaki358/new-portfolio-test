import { FC, memo, useEffect, useState } from "react";
import axios from "axios";
import parse from "html-react-parser";

import { Post } from "../../types/api/post";

export const Achievements: FC = memo(() => {
  const [loading, setLoading] = useState();
  const [posts, setPosts] = useState<Array<Post>>([]);

  useEffect(() => {
    axios
      .get<Array<Post>>("http://portfolio.local/wp-json/wp/v2/posts")
      .then((res) => setPosts(res.data));
  }, [posts]);
  return (
    <>
      {posts.map((post) => (
        <div key={post.id}>
          <h3>{post.title.rendered}</h3>
          {parse(post.excerpt.rendered)}
          <img src={post.thumbnail_url} alt="画像" />
        </div>
      ))}
      <div>制作実績</div>
    </>
  );
});
