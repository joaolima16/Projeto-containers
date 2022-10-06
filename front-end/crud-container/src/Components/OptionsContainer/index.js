import React from 'react'
import { WrapperButtons, BtnOptions,Text } from './style'
import {Link} from 'react-router-dom'
export default function ButtonOptions() {
    return (
        <>
            <WrapperButtons>
                <BtnOptions>
                    <Link to="/NewContainer">  Insert Container</Link>
                   
                </BtnOptions>
                <BtnOptions >
                    <Link to="/UpdateContainer"> Update Container</Link>
                </BtnOptions>
                <BtnOptions >
                        <Link to="/DeleteContainer"> Delete Container </Link>
                </BtnOptions>
            </WrapperButtons>

        </>
    )
}
