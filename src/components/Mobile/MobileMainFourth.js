import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Back from "../../assets/background.png";

const Total = styled.div`
  position: relative;
  overflow: hidden;
  margin-top: 50px;
`;
const Background = styled.div`
  img {
    width: 125%;
    height: 93vh;
  }
`;

const Middle = styled.div`
  width: 100%;
  text-align: center;
  position: absolute;
  top: 36vh;
  button {
    margin-top: 30px;
    width: 151px;
    height: 48px;
    color: black;
    background: linear-gradient(94.83deg, #5bffe8 -0.03%, #9d3cff 99.97%);
    border-radius: 200px;
    border: 0px;
    font-weight: 700;
    font-size: 16px;
  }
`;
const Title = styled.div`
  color: #ffffff;
  font-weight: 700;
  font-size: 22px;
  margin-bottom: 5px;
`;
const DetailBox = styled.div`
  margin-top: 16px;
  p {
    font-weight: 400;
    font-size: 18px;
    color: white;
    margin-bottom: 3px;
  }
`;

function MobileMainFourth() {
  const navigate = useNavigate();
  const OnClick = () => {
    navigate("/join");
  };
  return (
    <Total>
      <Background>
        <img src={Back} alt="img" />
      </Background>
      <Middle>
        <Title>우리는 혼자 할 수 없고, 함께 해야만</Title>
        <Title>할 수 있다는 것을 확신합니다.</Title>
        <DetailBox>
          <p>WEB 3.0의 거대한 물결에</p>
          <p>함께 올라탈 여러분을 기다립니다.</p>
        </DetailBox>
        <button onClick={OnClick}>지원하기</button>
      </Middle>
    </Total>
  );
}

export default MobileMainFourth;
