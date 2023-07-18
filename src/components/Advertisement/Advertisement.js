import React from "react";
import styled from "styled-components/macro";
import { QUERIES } from "../../constants";

const Advertisement = (props) => {
  return (
    <Wrapper {...props}>
      <Prefix>Advertisement</Prefix>
      {/*
      In a real app, this would be created by a third-party script
      or something. This is merely a placeholder.
    */}
      <Box />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  @media ${QUERIES.tabletOnly} {
    margin-top: 48px;
    margin-bottom: 48px;
  }
  @media ${QUERIES.laptopAndUp} {
    border-top: 2px solid var(--color-gray-300);
    margin-top: 1rem;
    margin-left: 1rem;
    padding-top: 1rem;
  }
`;

const Prefix = styled.p`
  margin-bottom: 0;
  font-size: 1rem;
  font-style: italic;
  color: var(--color-gray-700);

  &::before,
  &::after {
    content: "—";
    margin: 0 8px;
  }
`;

const Box = styled.div`
  width: 100%;
  height: 382px;
  background: var(--color-gray-300);

  @media ${QUERIES.tabletAndUp} {
    height: 120px;
  }
`;

export default Advertisement;
