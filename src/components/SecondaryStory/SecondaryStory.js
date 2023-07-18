import React from "react";
import styled from "styled-components/macro";
import { QUERIES } from "../../constants";

const SecondaryStory = ({
  id,
  title,
  image,
  location,
  abstract,
  hasBorder,
  isFirst,
  isLast,
}) => {
  return (
    <a href={`/story/${id}`}>
      <Wrapper
        hasBorder={hasBorder}
        isFirst={isFirst}
        isLast={isLast}
      >
        <Image alt={image.alt} src={image.src} />
        <Heading>{title}</Heading>
        <Abstract>{abstract}</Abstract>
      </Wrapper>
    </a>
  );
};

const Wrapper = styled.article`
  display: grid;
  grid-template-areas:
    "image heading"
    "image abstract";
  gap: 4px 16px;
  grid-template-columns: 120px 1fr;
  padding-top: 1rem;
  padding-bottom: 1rem;
  border-bottom: ${(props) =>
    !props.isLast ? `2px solid var(--color-gray-300)` : ""};

  @media ${QUERIES.tabletOnly} {
    grid-template-areas:
      "image image"
      "heading heading"
      "abstract abstract";
    padding-top: ${(props) => (props.isFirst !== 0 ? "1rem" : 0)};
    padding-bottom: ${(props) => (props.isLast ? 0 : "1rem")};
  }
`;

const Image = styled.img`
  grid-area: image;
  display: block;
  width: 100%;
  height: 120px;
  border-radius: 4px;
  object-fit: cover;
`;

const Heading = styled.h2`
  grid-area: heading;
  font-size: 1.125rem;
  font-weight: var(--font-weight-bold);
  line-height: 1.3;
  /* Optical alignment */
  margin-top: -2px;
`;

const Abstract = styled.p`
  grid-area: abstract;
  font-size: 1rem;
  white-space: pre-wrap;

  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export default SecondaryStory;
