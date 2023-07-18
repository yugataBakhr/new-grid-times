import React from "react";
import styled from "styled-components/macro";

import { MARKET_DATA, SPORTS_STORIES } from "../../data";
import { QUERIES } from "../../constants";

import MarketCard from "../MarketCard";
import SectionTitle from "../SectionTitle";
import MiniStory from "../MiniStory";

const SpecialtyStoryGrid = () => {
  return (
    <Wrapper>
      <MarketsSection>
        <SectionTitle
          cornerLink={{
            href: "/markets",
            content: "Visit Markets data »",
          }}
        >
          Markets
        </SectionTitle>
        <MarketCards>
          {MARKET_DATA.map((data) => (
            <MarketCard key={data.tickerSymbol} {...data} />
          ))}
        </MarketCards>
      </MarketsSection>
      <SportsSection>
        <SectionTitle
          cornerLink={{
            href: "/sports",
            content: "Visit Sports page »",
          }}
        >
          Sports
        </SectionTitle>
        <SportsStories NumsOfColumns={SPORTS_STORIES.length}>
          {SPORTS_STORIES.map((data) => (
            <MiniStory key={data.id} {...data} />
          ))}
        </SportsStories>
      </SportsSection>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-areas: "Markets" "Sports";
  gap: 48px;

  @media ${QUERIES.laptopAndUp} {
    grid-template-areas: "Markets Sports";
    gap: 0;
  }
`;

const MarketsSection = styled.section`
  grid-area: Markets;

  @media ${QUERIES.laptopAndUp} {
    padding-right: 1rem;
    border-right: 2px solid var(--color-gray-300);
  }
`;

const MarketCards = styled.div`
  display: grid;
  gap: 1rem;
  @media ${QUERIES.mobileOnly} {
    grid-template-columns: 1fr 1fr;
  }
  @media ${QUERIES.tabletOnly} {
    grid-template-columns: repeat(4, 1fr);
  }
  @media ${QUERIES.laptopAndUp} {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const SportsSection = styled.section`
  grid-area: Sports;

  @media ${QUERIES.tabletAndUp} {
    display: grid;
    height: fit-content;
    grid-template-rows: minmax(0, 1fr) 200px;
    padding-left: 1rem;
  }
`;

const SportsStories = styled.div`
  @media ${QUERIES.mobileOnly} {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
  }
  @media ${QUERIES.tabletAndUp} {
    display: grid;
    grid-template-columns: repeat(
      ${(props) => props.NumsOfColumns},
      minmax(250px, 1fr)
    );
    gap: 1rem;
    overflow: auto;
    height: fit-content;
    padding-bottom: 1rem;
  }
`;

export default SpecialtyStoryGrid;
