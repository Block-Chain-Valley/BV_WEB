import styled from 'styled-components'
import Discord from '../../assets/discordWhite.svg'
import Insta from '../../assets/instagramWhite.svg'
import Medium from '../../assets/mediumWhite.svg'
import Telegram from '../../assets/telegramWhite.svg'

const Total = styled.div`
    margin-top: 35vh;
    text-align: center;
    margin-left: 20px;
    margin-right: 20px;
`
const Title = styled.p`
    font-size: 24px;
    font-weight: 600;
    color: white;
    margin-bottom: 24px;
`
const Middle = styled.p`
    font-size: 18px;
    font-weight: 500;
    color: white;
    margin-bottom: 24px;
`

const Small = styled.p`
    font-size: 14px;
    font-weight: 300;
    color: white;
    margin-bottom: 8px;
`
const SidebarFooter = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin-left: 40px;
    margin-right: 40px;
    margin-top: 30vh;
`
const SidbarIcon = styled.div`
    img {
        width: 35px;
    }
`

function MobileJoin() {
    return (
        <Total>
            <Title>지금은 지원 기간이 아닙니다</Title>
            <Middle>지원 기간에 업로드될 공지를 확인해주세요</Middle>
            <Small>Instagram 등 블록체인밸리 공식 SNS 계정들을</Small>
            <Small>통해 공지드릴 예정입니다</Small>
            <Small>감사합니다</Small>
            {/* <SidebarFooter>
                <SidbarIcon>
                    <a href="https://discord.gg/RFAWQz8S3J">
                        <img src={Discord} />
                    </a>
                </SidbarIcon>
                <SidbarIcon>
                    <a href="https://www.instagram.com/blockchain__valley/">
                        <img src={Insta} />
                    </a>
                </SidbarIcon>
                <SidbarIcon>
                    <a href="https://telegram.org/">
                        <img src={Telegram} />
                    </a>
                </SidbarIcon>
                <SidbarIcon>
                    <a href="https://medium.com/blockchain-valley">
                        <img src={Medium} />
                    </a>
                </SidbarIcon>
            </SidebarFooter> */}
        </Total>
    )
}
export default MobileJoin
