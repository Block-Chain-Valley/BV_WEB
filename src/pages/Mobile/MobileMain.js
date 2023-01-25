import styled from 'styled-components'
import Back from '../../assets/mainBack.svg'
import MobileMainFirst from '../../components/Mobile/MobileMainFirst'
import MobileMainFourth from '../../components/Mobile/MobileMainFourth'
import MobileMainLast from '../../components/Mobile/MobileMainLast'
import MobileMainSecond from '../../components/Mobile/MobileMainSecond'
import MobileMainThird from '../../components/Mobile/MobileMainThird'

function MobileMain() {
    return (
        <>
            <MobileMainFirst />
            <MobileMainSecond />
            <MobileMainThird />
            <MobileMainFourth />
            <MobileMainLast />
        </>
    )
}

export default MobileMain
