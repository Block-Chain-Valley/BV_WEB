import {useState} from 'react'
import styled from 'styled-components'
import MobileDev from '../../components/Mobile/Archive/MobileDev'
import MobileResearch from '../../components/Mobile/Archive/MobileResearch'

const Head = styled.div`
    font-size: 24px;
    margin-left: 20px;
    margin-top: 80px;

    /* z-index: 10000; */
    display: flex;

    p {
        margin-right: 16px;
        color: rgba(255, 255, 255, 0.4);
        font-weight: 300;
        &.active {
            color: white;
            font-weight: 600;
        }
    }
`

function MobileArchive() {
    const [dev, setDev] = useState(true)
    const OnClickR = () => {
        setDev(false)
    }
    const OnclickD = () => {
        setDev(true)
    }
    return (
        <>
            <Head>
                <p className={dev ? 'active' : null} onClick={OnclickD}>
                    Dev
                </p>
                <p className={!dev ? 'active' : null} onClick={OnClickR}>
                    Research
                </p>
            </Head>
            {dev ? <MobileDev /> : <MobileResearch />}
        </>
    )
}
export default MobileArchive
