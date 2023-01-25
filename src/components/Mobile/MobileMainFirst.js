import styled from 'styled-components'
import Back from '../../assets/background.png'
import Logo from '../../assets/whitelogo.png'

const Total = styled.div`
    position: relative;
    overflow: hidden;
`
const Background = styled.div`
    img {
        width: 125%;
        height: 93vh;
    }
`
const Middle = styled.div`
    width: 100%;
    text-align: center;
    position: absolute;
    top: 38vh;
    img {
        width: 250px;
        margin-bottom: 15px;
    }
    p {
        font-weight: 500;
        font-size: 16px;
        color: #c0c0c0;
        margin-top: 3px;
    }
`
function MobileMainFirst() {
    return (
        <Total>
            <Background>
                <img src={Back} />
            </Background>
            <Middle>
                <img src={Logo} />
                <p>다가올 WEB 3.0의 미래를</p>
                <p>함께 만들어나갈 혁신가들의 공간</p>
            </Middle>
        </Total>
    )
}

export default MobileMainFirst
