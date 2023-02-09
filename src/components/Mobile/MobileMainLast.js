import styled from "styled-components";
import Korea from "../../assets/mobile/korea.png";
import Philo from "../../assets/mobile/philosophia.png";
import Discord from "../../assets/discordwhite.svg";
import Insta from "../../assets/instagramWhite.svg";
import Medium from "../../assets/mediumWhite.svg";
import Telegram from "../../assets/telegramWhite.svg";
// import RecentMedium from "../RecentMedium";
import MediumCard from "../MediumCard";

const Blog = styled.div`
  margin-bottom: 30px;
`;
const Partners = styled.div`
  /* margin-left: 20px; */
`;
const Title = styled.p`
  margin-left: 20px;
  font-weight: 700;
  font-size: 32px;
  color: #ffffff;
  margin-bottom: 20px;
`;

const Partner = styled.div`
  display: flex;
  margin-left: 20px;
`;
const Name = styled.div``;

const Box = styled.div`
  img {
    height: 45px;
    margin-right: 10px;
  }
  display: flex;
  margin-right: 30px;
  align-items: center;
  font-weight: 600;
`;

const SidebarFooter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-left: 40px;
  margin-right: 40px;
  margin-top: 10vh;
  margin-bottom: 30px;
`;
const SidbarIcon = styled.div`
  img {
    width: 35px;
  }
`;
// const Blogs = styled.div`
//   /* width: 100%; */
//   margin-left: 20px;
//   overflow: scroll;
//   /* white-space: nowrap; */
//   height: 240px;
//   display: flex;
//   flex-wrap: nowrap;
//   flex-direction: row;
//   overflow-x: auto;
//   -webkit-overflow-scrolling: touch; /* 끝에서 바운스 되도록*/
//   scroll-snap-type: x mandatory;
//   /* scrollbar-width: 0; */
//   div {
//     margin-right: 20px;
//     flex: 0 0 auto;
//     width: 230px;
//     height: 230px;
//     background: rgba(255, 255, 255, 0.2);
//     border-radius: 8px;
//   }
// `;

function MobileMainLast() {
  return (
    <>
      <Blog>
        <Title>Blog Posts</Title>
        <MediumCard />
      </Blog>
      <Partners>
        <Title>Partners</Title>
        <Partner>
          <Box>
            <img src={Philo} alt="_" />
            <Name>
              <p>Philosophia</p>
              <p>Ventures</p>
            </Name>
          </Box>
          <Box>
            <img src={Korea} alt="_" />
            <Name>
              <p>Korea</p>
              <p>University</p>
            </Name>
          </Box>
        </Partner>
      </Partners>
      <SidebarFooter>
        <SidbarIcon>
          <a href="https://discord.gg/RFAWQz8S3J">
            <img src={Discord} alt="_" />
          </a>
        </SidbarIcon>
        <SidbarIcon>
          <a href="https://www.instagram.com/blockchain__valley/">
            <img src={Insta} alt="_" />
          </a>
        </SidbarIcon>
        <SidbarIcon>
          <a href="https://telegram.org/">
            <img src={Telegram} alt="_" />
          </a>
        </SidbarIcon>
        <SidbarIcon>
          <a href="https://medium.com/blockchain-valley">
            <img src={Medium} alt="_" />
          </a>
        </SidbarIcon>
      </SidebarFooter>
    </>
  );
}

export default MobileMainLast;
