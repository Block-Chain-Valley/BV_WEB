import React, { useEffect, useState } from "react";
import * as FaIcons from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import LogoWhite from "../assets/bv_logo_white.png";
import Discord from "../assets/discordwhite.svg";
import Insta from "../assets/instagramWhite.svg";
import Medium from "../assets/mediumWhite.svg";
import Telegram from "../assets/telegramWhite.svg";

const Header = () => {
  const [showBackground, setShowBackground] = useState(false);
  const headerBackroundHandler = (current) => {
    if (current === "/home" || current === "/") {
      setShowBackground(false);
    } else {
      setShowBackground(true);
    }
  };

  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  useEffect(() => {
    headerBackroundHandler(window.location.pathname);
  }, []);

  return (
    <div>
      <StyledHeader className={showBackground ? "isActive" : ""}>
        <HeaderContainer>
          <LogoLink
            to="/home"
            onClick={() => {
              setShowBackground(false);
            }}
          >
            <img height={44} src={LogoWhite} alt="블록체인 밸리" />
          </LogoLink>
        </HeaderContainer>
        <Nav>
          <PageList>
            <PageItem>
              <PageLink to="/home">
                <PageTxt
                  onClick={() => {
                    setShowBackground(false);
                  }}
                >
                  Home
                </PageTxt>
              </PageLink>
            </PageItem>
            <PageItem>
              <PageLink to="/about">
                <PageTxt
                  onClick={() => {
                    setShowBackground(true);
                  }}
                >
                  About Us
                </PageTxt>
              </PageLink>
            </PageItem>
            {/* <PageItem>
          <PageLink to="/log" >
            <PageTxt>Log</PageTxt>
          </PageLink>
        </PageItem> */}
            <PageItem>
              <PageLink to="/contact">
                <PageTxt
                  onClick={() => {
                    setShowBackground(true);
                  }}
                >
                  Contact
                </PageTxt>
              </PageLink>
            </PageItem>
            <PageItem>
              <PageLink to="/join">
                <PageTxt
                  onClick={() => {
                    setShowBackground(true);
                  }}
                >
                  Join Us
                </PageTxt>
              </PageLink>
            </PageItem>
          </PageList>
        </Nav>
      </StyledHeader>
      {/* Mobile */}
      <StyledHeaderMobile className={showBackground ? "isActive" : ""}>
        <HeaderContainer>
          {/* <LogoLink
            to="/home"
            onClick={() => {
              setShowBackground(false);
            }}>
            <img height={32} src={LogoWhite} alt="블록체인 밸리" />
          </LogoLink> */}
          <FaIcons.FaBars fontSize={22} onClick={showSidebar} />
        </HeaderContainer>
        <Sidebar className={sidebar ? "active" : ""}>
          <SidebarContainer>
            {/* <SidebarTop>
                            <img src={LogoWhite} alt="blockchain valley" />
                        </SidebarTop> */}
            <PageList>
              <PageItem>
                <PageLink to="/home">
                  <PageTxt
                    onClick={() => {
                      setShowBackground(false);
                      showSidebar();
                    }}
                  >
                    HOME
                  </PageTxt>
                </PageLink>
              </PageItem>
              <PageItem>
                <PageLink to="/about">
                  <PageTxt
                    onClick={() => {
                      setShowBackground(true);
                      showSidebar();
                    }}
                  >
                    MEMBERS
                  </PageTxt>
                </PageLink>
              </PageItem>
              <PageItem>
                <PageLink to="/archive">
                  <PageTxt
                    onClick={() => {
                      setShowBackground(true);
                      showSidebar();
                    }}
                  >
                    ARCHIVE
                  </PageTxt>
                </PageLink>
              </PageItem>
              {/* <PageItem>
          <PageLink to="/log" >
            <PageTxt>Log</PageTxt>
          </PageLink>
        </PageItem> */}
              <PageItem>
                <PageLink to="/contact">
                  <PageTxt
                    onClick={() => {
                      setShowBackground(true);
                      showSidebar();
                    }}
                  >
                    CONTACT
                  </PageTxt>
                </PageLink>
              </PageItem>
              <PageItem>
                <PageLink to="/join">
                  <PageTxt
                    onClick={() => {
                      setShowBackground(true);
                      showSidebar();
                    }}
                  >
                    JOIN US
                  </PageTxt>
                </PageLink>
              </PageItem>
            </PageList>
            <SidebarFooter>
              <SidbarIcon>
                <a href="https://discord.gg/RFAWQz8S3J">
                  <img src={Discord} alt="icon" />
                </a>
              </SidbarIcon>
              <SidbarIcon>
                <a href="https://www.instagram.com/blockchain__valley/">
                  <img src={Insta} alt="icon" />
                </a>
              </SidbarIcon>
              <SidbarIcon>
                <a href="https://telegram.org/">
                  <img src={Telegram} alt="icon" />
                </a>
              </SidbarIcon>
              <SidbarIcon>
                <a href="https://medium.com/blockchain-valley">
                  <img src={Medium} alt="icon" />
                </a>
              </SidbarIcon>
            </SidebarFooter>
          </SidebarContainer>
        </Sidebar>
      </StyledHeaderMobile>
    </div>
  );
};

const SidebarFooter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-left: 40px;
  margin-right: 40px;
  margin-top: 10vh;
`;
const SidbarIcon = styled.div`
  img {
    width: 35px;
  }
`;

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 6.25rem;
  z-index: 9900;
  padding: 0 11.7vw 0 11.7vw;
  opacity: 100%;

  /* background-color: #0b0811; */
  &.isActive {
    background-color: #0b0811;
    box-shadow: 0px 0px 20px 5px rgba(0, 0, 0, 0.8);
  }

  /* @media all and (max-width: 320px) {
    display: none;
  } */
  @media all and (max-width: 768px) {
    display: none;
  }
`;

const StyledHeaderMobile = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 4rem;
  z-index: 9900;
  padding: 0 5vw;
  opacity: 100%;
  &.isActive {
    background-color: #0b0811;
    box-shadow: 0px 0px 20px 5px rgba(0, 0, 0, 0.8);
  }

  @media all and (min-width: 768px) {
    display: none;
  }
`;
// const SidebarTop = styled.div`
//     img {
//         width: 120px;
//         height: 28ox;
//         margin-left: 16px;
//     }
// `

const Sidebar = styled.div`
  /* background-color: #0b0811; */
  background: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(25px);
  padding-top: 2rem;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: left;
  position: fixed;
  top: 0;
  left: -100%;
  transition: 350ms;
  backdrop-filter: blur(15px);

  &.active {
    left: 0;
    transition: 350ms;
  }
`;

const SidebarContainer = styled.nav`
  display: flex;
  flex-direction: column;
`;

const HeaderContainer = styled.h1`
  height: 2rem;

  @media all and (max-width: 768px) {
    width: 100vw;
    z-index: 100;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
  }
`;

const LogoLink = styled(Link)`
  display: flex;
`;

const Nav = styled.nav`
  height: 33px;
`;

const PageList = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-decoration: none;

  @media all and (max-width: 768px) {
    width: 100vw;
    margin-top: 140px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    text-decoration: none;
    text-align: center;
  }
`;

const PageItem = styled.li`
  margin-left: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;

  @media all and (max-width: 768px) {
    margin-left: 0;
    margin-bottom: 2rem;
    display: flex;
    letter-spacing: 0.6em;
    justify-content: left;
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 300;
    line-height: 100%;
    align-items: left;
    color: #ffffff;
  }
`;

const PageLink = styled(NavLink)`
  text-decoration: none;
  color: #ffffff;
  font-weight: 200;
  line-height: 33px;
  transition: all 0.1s ease 0s;

  &:hover {
    color: #ffffff;
  }

  &.active {
    position: relative;
    font-weight: 800;
    color: #ffffff;
  }

  @media add and (max-width: 768px) {
    width: 100vw;
    background-color: red;
  }
`;

const PageTxt = styled.div`
  font-size: 1.1rem;
  /* letter-spacing: -3%; */
  vertical-align: center;

  @media all and (max-width: 768px) {
    width: 100vw;
    font-size: 1.8rem;
  }
`;

export default Header;
