import React from "react";
import styled from "styled-components/macro";
import { COLORS, QUERIES } from "../../constants";

const OpinionStory = ({
  id,
  title,
  author,
  avatar,
  isFirst,
  isLast,
}) => {
  return (
    <a href={`/story/${id}`}>
      <Wrapper isFirst={isFirst} isLast={isLast}>
        <AvatarWrapper>
          <Avatar alt="" src={avatar} />
        </AvatarWrapper>
        <MiniWrapper>
          <AuthorName>{author}</AuthorName>
          <ArticleTitle>{title}</ArticleTitle>
        </MiniWrapper>
      </Wrapper>
    </a>
  );
};

const Wrapper = styled.article`
  color: var(--color-gray-900);
  padding-top: 1rem;
  padding-bottom: 1rem;
  display: grid;
  grid-template-areas: "WriterAndArticle Avatar";
  grid-template-columns: 1fr minmax(0, auto);
  border-bottom: ${(props) =>
    !props.isLast ? `2px solid ${COLORS.gray[300]}` : ""};

  @media ${QUERIES.tabletOnly} {
    grid-template-columns: 1fr;
    grid-template-rows: 60px minmax(0, 1fr);
    grid-template-areas: "Avatar" "WriterAndArticle";
    border: 0;
    padding-top: 0;
    padding-bottom: 0;
  }

  @media ${QUERIES.laptopAndUp} {
    padding-top: ${(props) => (props.isFirst !== 0 ? "1rem" : 0)};
  }
`;

const AvatarWrapper = styled.div`
  grid-area: Avatar;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 8px;
  @media ${QUERIES.tabletOnly} {
    padding: 0;
  }
`;

const Avatar = styled.img`
  display: block;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  object-fit: cover;
`;

const MiniWrapper = styled.div`
  grid-area: WriterAndArticle;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  @media ${QUERIES.tabletOnly} {
    padding: 0;
  }
`;

const AuthorName = styled.p`
  font-size: 1.125rem;
  font-weight: var(--font-weight-medium);
  color: var(--color-gray-700);
  margin-bottom: 4px;
`;

const ArticleTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: var(--font-weight-bold);
  line-height: 1.3;
`;

export default OpinionStory;
