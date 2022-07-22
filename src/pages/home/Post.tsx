import { Link } from "react-router-dom";
import { StyledH3, StyledLink } from "@/uiKit";
import { PostModel } from "@/types";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { setSelectedPost } from "@/store/postSlice";
import convertIdToDate from "@/utils/convertIdToDate";

type PostProps = PostModel;

export default function Post({ id, userId, body, title }: PostProps) {
  const dispatch = useDispatch();

  const handleClickOnPost = () => {
    dispatch(
      setSelectedPost({
        id,
        userId,
        body,
        title,
      })
    );
  };

  return (
    <article>
      <header>
        <StyledH3>
          <StyledLink to={`${id}`} onClick={handleClickOnPost}>
            {title}
          </StyledLink>
        </StyledH3>
        <small>{convertIdToDate(id)}</small>
      </header>

      <p>{body}</p>
    </article>
  );
}
