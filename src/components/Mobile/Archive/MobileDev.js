import styled from 'styled-components'
import Img1 from '../../../assets/mobile/archive/devArchive1.png'
import Img2 from '../../../assets/mobile/archive/devArchive2.png'

const Content = styled.div`
    margin: 20px 20px 50px 20px;
`
const Card = styled.div`
    img {
        width: 100%;
        background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(IMG_9076.jpg);
        border-radius: 8px;
    }
    margin-bottom: 40px;
`
const Title = styled.p`
    margin-top: 10px;
    font-weight: 600;
    font-size: 20px;
`
const Detail = styled.p`
    margin-top: 10px;
    font-weight: 300;
    font-size: 16px;
    line-height: 19px;
`

function MobileDev() {
    return (
        <Content>
            <Card>
                <img src={Img1} />
                <Title>2022 드림플러스 해커톤 수상</Title>
                <Detail>2022년, 드림플러스 해커톤에서 블록체인밸리 팀원들이 수상을 하였습니다</Detail>
            </Card>
            <Card>
                <img src={Img1} />
                <Title>2022 드림플러스 해커톤 수상</Title>
                <Detail>2022년, 드림플러스 해커톤에서 블록체인밸리 팀원들이 수상을 하였습니다</Detail>
            </Card>
        </Content>
    )
}

export default MobileDev
