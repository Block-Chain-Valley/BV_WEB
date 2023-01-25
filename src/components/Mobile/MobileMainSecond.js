import styled from 'styled-components'
import Lottie from 'lottie-react'
import animationData from '../../animations/mobileDown.json'

const Total = styled.div``
const Content = styled.div`
    margin-top: 15px;
    margin-left: 32px;
    margin-bottom: 60px;
`
const Title = styled.p`
    font-weight: 700;
    font-size: 32px;
    color: #ffffff;
    margin-bottom: 20px;
`
const Detail = styled.p`
    font-weight: 500;
    font-size: 22px;
    padding-left: 18px;
    margin: 6px 0px;
`
const DetailBox = styled.div`
    padding-top: 1px;
    padding-bottom: 1px;
    border-left: 3px solid #c0c0c0;
    margin-bottom: 20px;
`
const MoreDetail = styled.p`
    color: #c0c0c0;
    font-weight: 300;
    font-size: 18px;
    margin-top: 5px;
`
const Under = styled.div`
    text-align: center;
    p {
        font-weight: 300;
        font-size: 18px;
        color: #c0c0c0;
    }
`

const LottieBox = styled.div`
    text-align: center;
    display: flex;
    justify-content: center;
`

function MobileMainSecond() {
    return (
        <Total>
            <Content>
                <Title>Our vision</Title>
                <DetailBox>
                    <Detail>WEB 3.0의 진정한 가치를</Detail>
                    <Detail>학습하는 공간,</Detail>
                    <Detail>자신의 미래를 위해</Detail>
                    <Detail>준비하는 공간.</Detail>
                </DetailBox>
                <MoreDetail>블록체인밸리(Blockchain Valley)는</MoreDetail>
                <MoreDetail>‘블록체인’이라는 키워드에서 뻗어,</MoreDetail>
                <MoreDetail>자유롭게 생각을 나누고 대화를 하며</MoreDetail>
                <MoreDetail>가치있는 네트워크의 형성을 꿈꿉니다.</MoreDetail>
            </Content>
            <Content>
                <Title>Our activities</Title>
                <DetailBox>
                    <Detail>현재 18명의 리서치팀과</Detail>
                    <Detail>19명의 개발팀으로</Detail>
                    <Detail>구성되어 있으며, 총 37명이</Detail>
                    <Detail>노드로 활동하고 있습니다.</Detail>
                </DetailBox>
            </Content>
            <Under>
                <a href="#imgBox">사진 보기</a>
                <LottieBox>
                    <Lottie animationData={animationData} style={{width: '25px', marginTop: '3px'}} />
                </LottieBox>
            </Under>
        </Total>
    )
}

export default MobileMainSecond
