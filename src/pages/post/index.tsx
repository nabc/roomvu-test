import { useSelector } from "react-redux";
import { selectPost } from "@/store/postSlice";
import { StyledH3 } from "@/uiKit";
import convertIdToDate from "@/utils/convertIdToDate";

export default function PostPage() {
  const post = useSelector(selectPost);

  if (!post) {
    return <div>Post Not Found ...</div>;
  }

  const { title, id, body } = post;

  return (
    <article>
      <header>
        <StyledH3>{title}</StyledH3>
        <small>{<small>{convertIdToDate(id)}</small>}</small>
      </header>

      <p>{body}</p>
    </article>
  );
}
