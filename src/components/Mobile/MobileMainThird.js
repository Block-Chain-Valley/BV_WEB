import styled from 'styled-components'
import Img1 from '../../assets/mobile/work1.png'
import Img2 from '../../assets/mobile/work2.png'
import Img3 from '../../assets/mobile/work3.png'
import Img4 from '../../assets/mobile/work4.png'
import Img5 from '../../assets/mobile/work5.png'
import Img6 from '../../assets/mobile/work6.png'
import Lottie from 'lottie-react'
import animationData from '../../animations/mobileDown.json'
import {useNavigate} from 'react-router-dom'

const Total = styled.div`
    margin-top: 60px;
`
const ImgBox = styled.div`
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    position: relative;
`
const Img = styled.div`
    margin-top: 20px;

    img {
        border-radius: 8px;
        width: 40vw;
        height: 40vw;
    }
    p {
        text-align: center;
        color: rgba(255, 255, 255, 0.7);
        font-weight: 500;
        font-size: 16px;
        margin-top: 8px;
    }
`

const BlurBox = styled.div`
    background: linear-gradient(0deg, #000000 44.27%, rgba(0, 0, 0, 0.6) 100%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 45vw;
    position: absolute;
    bottom: 0px;
    text-align: center;
    button {
        width: 188px;
        height: 49px;
        color: white;
        background-color: #000000;
        border-radius: 30px;
        font-weight: 500;
        font-size: 18px;
        margin-top: 15vw;
        border: 1px solid white;
    }
`

function MobileMainThird() {
    const navigate = useNavigate()
    const OnClick = () => {
        navigate('/archive')
    }
    return (
        <Total id="imgBox">
            <ImgBox>
                <Img>
                    <img src={Img1} />
                    <p>정규 세션</p>
                </Img>
                <Img>
                    <img src={Img2} />
                    <p>산학 협력</p>
                </Img>
                <Img>
                    <img src={Img3} />
                    <p>아이코어 사업</p>
                </Img>
                <Img>
                    <img src={Img4} />
                    <p>KBW 2022</p>
                </Img>
                <Img>
                    <img src={Img5} />
                </Img>
                <Img>
                    <img src={Img6} />
                </Img>
                <BlurBox>
                    <button onClick={OnClick}>활동 더보기</button>
                    <Lottie animationData={animationData} style={{width: '25px', marginTop: '10px'}} />
                </BlurBox>
            </ImgBox>
        </Total>
    )
}

export default MobileMainThird
