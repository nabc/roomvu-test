import { useQuery } from "@tanstack/react-query";
import { getPosts } from "@/api/posts";
import { Div } from "@/uiKit";
import { PostModel } from "@/types";
import Post from "./Post";

export default function PostList() {
  const { data, isLoading, error } = useQuery(["getPosts"], getPosts);

  if (isLoading) return <div>Loading ...</div>;

  if (Boolean(error)) {
    return <div>{JSON.stringify(error)}</div>;
  }

  return (
    <Div justify="center" column>
      {data.map((post: PostModel) => (
        <Post key={`key-${post.id}`} {...post} />
      ))}
    </Div>
  );
}
