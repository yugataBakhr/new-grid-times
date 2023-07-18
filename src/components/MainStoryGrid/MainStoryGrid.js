import React from "react";
import styled from "styled-components/macro";
import { QUERIES } from "../../constants";

import {
  MAIN_STORY,
  OPINION_STORIES,
  SECONDARY_STORIES,
} from "../../data";

import SectionTitle from "../SectionTitle";
import MainStory from "../MainStory";
import SecondaryStory from "../SecondaryStory";
import OpinionStory from "../OpinionStory";
import Advertisement from "../Advertisement";

const MainStoryGrid = () => {
  return (
    <Wrapper>
      <MainStorySection>
        <MainStory {...MAIN_STORY} />
      </MainStorySection>

      <SecondaryStorySection>
        <StoryList>
          {SECONDARY_STORIES.map((story, index) =>
            index !== SECONDARY_STORIES.length - 1 ? (
              <SecondaryStory
                key={story.id}
                isFirst={index}
                isLast={false}
                {...story}
              />
            ) : (
              <SecondaryStory
                key={story.id}
                isFirst={index}
                isLast={true}
                {...story}
              />
            )
          )}
        </StoryList>
      </SecondaryStorySection>

      <OpinionSection>
        <SectionTitle>Opinion</SectionTitle>
        <StoryList>
          {OPINION_STORIES.map((story, index) =>
            index !== OPINION_STORIES.length - 1 ? (
              <OpinionStory
                key={story.id}
                isFirst={index}
                isLast={false}
                {...story}
              />
            ) : (
              <OpinionStory
                key={story.id}
                isFirst={index}
                isLast={true}
                {...story}
              />
            )
          )}
        </StoryList>
      </OpinionSection>

      <AdvertisementSection>
        <Advertisement />
      </AdvertisementSection>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  @media ${QUERIES.mobileOnly} {
    grid-template-areas:
      "main-story"
      "secondary-stories"
      "opinion-stories"
      "advertisement";
    gap: 48px;
    margin-bottom: 48px;
  }

  @media ${QUERIES.tabletOnly} {
    grid-template-areas:
      "main-story main-story secondary-stories"
      "advertisement advertisement advertisement"
      "opinion-stories opinion-stories opinion-stories";
  }

  @media ${QUERIES.laptopAndUp} {
    grid-template-columns: 2fr 1.5fr 1.2fr;
    grid-template-areas:
      "main-story secondary-stories opinion-stories"
      "main-story secondary-stories opinion-stories"
      "main-story advertisement advertisement";
    margin-bottom: 48px;
  }
`;

const MainStorySection = styled.section`
  grid-area: main-story;
  @media ${QUERIES.laptopAndUp} {
    border-right: 2px solid var(--color-gray-300);
  }
`;

const SecondaryStorySection = styled.section`
  grid-area: secondary-stories;

  @media ${QUERIES.tabletOnly} {
    padding-left: 1rem;
    border-left: 2px solid var(--color-gray-300);
  }

  @media ${QUERIES.laptopAndUp} {
    padding-right: 1rem;
    padding-left: 1rem;
  }
`;

const StoryList = styled.div`
  display: flex;
  flex-direction: column;

  @media ${QUERIES.laptopAndUp} {
    margin-top: -1rem;
  }
`;

const OpinionSection = styled.section`
  grid-area: opinion-stories;

  @media ${QUERIES.tabletOnly} {
    // those codes are not locked
    display: flex;
    flex-direction: column;
    margin-bottom: 48px;
    & > ${StoryList} {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
    }
  }
  @media ${QUERIES.laptopAndUp} {
    padding-left: 1rem;
    border-left: 2px solid var(--color-gray-300);

    & > ${StoryList} {
    }
    & > ${SectionTitle} {
      margin-bottom: 0;
    }
  }
`;

const AdvertisementSection = styled.section`
  grid-area: advertisement;
`;

export default MainStoryGrid;
