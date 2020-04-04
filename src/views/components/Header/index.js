import React from 'react';
import { useSelector } from 'react-redux';
import { StyledHeaderContainer, StyledLogoContainer } from './style';
import theme from '../../../utilities/theme';
import logo from '../../../assets/images/logo.png';

export default function Header() {
    const data = useSelector(store=>store.brand)
    // console.log(data)
    return(
        <StyledHeaderContainer color={theme.palette[data.brand].header_color}>
            <StyledLogoContainer>
                <a href="#">
                    <img src={logo} alt="toyota_logo" />
                </a>
            </StyledLogoContainer>
        </StyledHeaderContainer>
    )
}
