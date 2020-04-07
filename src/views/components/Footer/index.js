import React from 'react';
import { useSelector } from 'react-redux';
import { StyledHeaderContainer, StyledLogoContainer } from './style';
import theme from '../../../utilities/theme';
import logo from '../../../assets/images/logo.png';

export default function Footer() {
    const data = useSelector(store=>store.brand)
    console.log(theme.palette[data.brand])
    return(
        <StyledHeaderContainer color={theme.palette[data.brand].footer_color}>
            <StyledLogoContainer>
                
            </StyledLogoContainer>
        </StyledHeaderContainer>
    )
}
