import { createGlobalStyle } from "styled-components";

import toyota_font from '../../assets/fonts/avenirltstd-black.otf';

export const GlobalStyles = createGlobalStyle`
    @font-face {
        font-family: 'Toyota Font';
        src: local('Toyota_font'), local('FontName'),
        url(${toyota_font}) format('otf'),   
    }
`