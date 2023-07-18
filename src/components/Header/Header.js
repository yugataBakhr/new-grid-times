import React from "react";
import styled from "styled-components/macro";
import { Menu, Search, User } from "react-feather";

import { QUERIES } from "../../constants";

import MaxWidthWrapper from "../MaxWidthWrapper";
import Logo from "../Logo";
import Button from "../Button";

const Header = () => {
  return (
    <header>
      <SuperHeader>
        <Row>
          <ActionGroup>
            <button>
              <Search size={24} />
            </button>
            <button>
              <Menu size={24} />
            </button>
          </ActionGroup>
          <ActionGroup>
            <button>
              <User size={24} />
            </button>
          </ActionGroup>
        </Row>
      </SuperHeader>
      <TabletAndDownWrapper>
        <MainHeader>
          <Logo />
        </MainHeader>
      </TabletAndDownWrapper>
      <LaptopAndUpWrapper>
        <ActionGroup>
          <button>
            <Search size={24} />
          </button>
          <button>
            <Menu size={24} />
          </button>
        </ActionGroup>
        <MainHeader>
          <Logo />
        </MainHeader>
        <ActionWrapper>
          <Button>subscribe</Button>
          <SmallButton>Already a subscriber?</SmallButton>
        </ActionWrapper>
      </LaptopAndUpWrapper>
    </header>
  );
};

const SuperHeader = styled.div`
  padding: 16px 0;
  background: var(--color-gray-900);
  color: white;
  // Careful! it's supposed to be desktopAndUp.
  @media ${QUERIES.laptopAndUp} {
    display: none;
  }
`;

const Row = styled(MaxWidthWrapper)`
  display: flex;
  justify-content: space-between;
`;

const ActionGroup = styled.div`
  display: flex;
  gap: 24px;

  /*
    FIX: Remove the inline spacing that comes with
    react-feather icons.
  */
  svg {
    display: block;
  }
`;

const MainHeader = styled(MaxWidthWrapper)`
  display: flex;
  align-items: center;
  justify-content: center;
  // removed those margin props. made them padding props in Wrapper.
  /*
  margin-top: 32px;
  margin-bottom: 48px;
  */
`;

// my writing
// Note to self. I changed desktopAndUp to laptopAndUp because my viewport isn't wide enough.
const LaptopAndUpWrapper = styled(MaxWidthWrapper)`
  display: none;
  @media ${QUERIES.laptopAndUp} {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 32px;
    padding-bottom: 48px;
  }
`;

const TabletAndDownWrapper = styled(MaxWidthWrapper)`
  display: block;
  padding-top: 32px;
  padding-bottom: 48px;

  @media ${QUERIES.laptopAndUp} {
    display: none;
  }
`;

// problem: when !@media(laptopAndUp), ActionWrapper goes beyond the border.
const ActionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
`;

const SmallButton = styled.button`
  font-size: 0.75rem;
  border-bottom: 1px solid black;
`;

export default Header;
