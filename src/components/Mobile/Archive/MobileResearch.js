import styled from 'styled-components'
import Img1 from '../../../assets/mobile/archive/researchArcive1.png'

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
    button {
        margin-top: 20px;
        height: 39px;
        font-weight: 300;
        font-size: 16px;
        background: rgba(255, 255, 255, 0.2);
        border: 0.5px solid #ffffff;
        border-radius: 5px;
        color: #ffffff;
    }
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

function MobileResearch() {
    return (
        <Content>
            <Card>
                <img src={Img1} alt="이미지" />
                <Title>#2 대출 프로토콜의 담보 리스크 관리</Title>
                <Detail>흠냐냐.. 나는 어쩌구인데 어쩌구 저쩌구해서 이제 어쩌구 될 것임. 다운로드는 클릭 고.</Detail>
                <button>
                    <a href="/pdf/bvTest.pdf" download>
                        Download
                    </a>
                </button>
            </Card>
            {/* <div>
				<Document file = "sample.pdf" onLoadSuccess={}
			</div> */}
        </Content>
    )
}

export default MobileResearch
