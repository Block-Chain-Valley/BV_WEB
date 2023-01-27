import styled from 'styled-components'
import Star from '../../assets/star-img.png'
import Bg from '../../assets/mainsecondBg.png'
import Work1 from '../../assets/mobile/work1.png'
import Work2 from '../../assets/mobile/work2.png'
import Work3 from '../../assets/mobile/work3.png'
import Work4 from '../../assets/mobile/work4.png'
import Work5 from '../../assets/mobile/work5.png'

const Total = styled.div`
    position: relative;
    overflow: hidden;
`
const ImgTop = styled.div`
    position: absolute;
    z-index: 1;
    top: -400px;
    left: -800px;
    img {
        width: 1600px;
        opacity: 0.8;
    }
`
const ImgLow = styled.div`
    position: absolute;
    z-index: 1;
    bottom: -600px;
    right: -300px;
    img {
        width: 2000px;
        opacity: 0.8;
    }
`
const Content = styled.div`
    position: relative;
    z-index: 100;
    margin-left: 11.7vw;
    margin-right: 11.7vw;
    margin-top: 100px;
    button {
        margin-top: 52px;
        background: linear-gradient(94.83deg, #5bffe8 -0.03%, #9d3cff 99.97%);
        border-radius: 200px;
        width: 270px;
        height: 70px;
        color: #000000;
        font-weight: 700;
        font-size: 28px;
        border: 0px;
        margin-bottom: 100px;
    }
`
const Title = styled.div`
    z-index: 100;
    display: flex;
    align-items: center;
    img {
        width: 45px;
        height: 45px;
    }
    p {
        font-weight: 700;
        font-size: 40px;
        color: #ffffff;
        margin-left: 16px;
    }
`
const Middle = styled.div`
    z-index: 100;
    margin-top: 30px;
    p {
        font-weight: 510;
        font-size: 28px;
    }
`
const Detail = styled.div`
    z-index: 100;
    margin-top: 30px;
    p {
        font-weight: 274;
        font-size: 24px;
        line-height: 36px;
    }
`
const ImgBox = styled.div`
    margin-top: 50px;
    display: flex;
    justify-content: space-between;
`
const Img = styled.div`
    text-align: center;
    img {
        width: 14.5vw;
        height: 14.5vw;
        background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2));
        border-radius: 14px;
    }
    p {
        font-weight: 590;
        font-size: 24px;
        color: rgba(255, 255, 255, 0.8);
    }
`
const JoinMid = styled.div`
    margin-top: 82px;
    font-weight: 700;
    font-size: 26px;
    margin-bottom: 16px;
    text-align: center;
`

const JoinDetail = styled.div`
    font-weight: 400;
    font-size: 24px;
    line-height: 150%;
    text-align: center;
`

function MainSecond() {
    return (
        <Total>
            <ImgTop>
                <img src={Bg} alt="" />
            </ImgTop>
            <ImgLow>
                <img src={Bg} alt="" />
            </ImgLow>
            <Content>
                <Title>
                    <img src={Star} alt="" />
                    <p>Our vision</p>
                </Title>
                <Middle>
                    <p>WEB 3.0의 진정한 가치를 학습하는 공간, 자신의 미래를 위해 준비를 하는 공간.</p>
                </Middle>
                <Detail>
                    <p>
                        블록체인밸리(Blockchain Valley)는 고려대학교를 기반으로 활동하는 블록체인 학회입니다.
                        블록체인밸리는 WEB3의 진정한 가치를 학습하는 공간이자, 블록체인을 통해 자신의 미래를 위해 준비를
                        하는 공간이 되길 희망합니다. “블록체인”이라는 키워드에서 뻗어, 자유롭게 생각을 나누고 대화를
                        하며 가치있는 네트워크의 형성을 꿈꿉니다.
                    </p>
                </Detail>
            </Content>
            <Content>
                <Title>
                    <img src={Star} alt="" />
                    <p>Our activities</p>
                </Title>
                <Detail>
                    <p>현재 18명의 리서치팀과 19명의 개발팀으로 구성되어 있으며, 총 37명이 노드로 활동하고 있습니다.</p>
                </Detail>
                <ImgBox>
                    <Img>
                        <img src={Work1} alt="" />
                        <p>정규 세션</p>
                    </Img>
                    <Img>
                        <img src={Work2} alt="" />
                        <p>산학 협력</p>
                    </Img>
                    <Img>
                        <img src={Work3} alt="" />
                        <p>KBW 2022</p>
                    </Img>
                    <Img>
                        <img src={Work4} alt="" />
                        <p>아이코어 사업</p>
                    </Img>
                    <Img>
                        <img src={Work5} alt="" />
                        <p>라운지 회식</p>
                    </Img>
                </ImgBox>
            </Content>
            <Content>
                <Title>
                    <img src={Star} alt="" />
                    <p>Join us</p>
                </Title>
                <JoinMid>
                    <p>우리는 혼자 할 수 없고,함께해야만 할 수 있다는 것을 확신합니다.</p>
                </JoinMid>
                <JoinDetail>
                    <p>WEB 3.0이라는 거대한 물결에 함께 올라탈</p>
                    <p>예비 노드 여러분의 지원을 기다립니다.</p>
                    <button>지원하기</button>
                </JoinDetail>
            </Content>
        </Total>
    )
}
export default MainSecond
