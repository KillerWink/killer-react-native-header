import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { HeaderWrapper, HeaderContainer, HeaderBottom } from './HeaderBar.style';
import { StatusBarComponent } from '../StatusBar';
import { DEFAULT_PROPS_HEADER_BAR } from '../config';


const HeaderBar = ({options : { HeaderOptions = {}, StatusBarOptions = {} }, children}) => {

    const {
        height = DEFAULT_PROPS_HEADER_BAR.height,
        padding = DEFAULT_PROPS_HEADER_BAR.padding,
        backgroundColor = DEFAULT_PROPS_HEADER_BAR.backgroundColor,
    } = HeaderOptions;

    return (
        <HeaderWrapper height={height} padding={padding} backgroundColor={backgroundColor}>
            <StatusBarComponent options={StatusBarOptions} />
            <HeaderContainer>
                {children}
            </HeaderContainer>
        </HeaderWrapper>
    );
};

HeaderBar.propTypes = {
    height: PropTypes.number,
    padding: PropTypes.number,
    backgroundColor: PropTypes.string,
    barStyle: PropTypes.string,
    hidden: PropTypes.bool,
    children: PropTypes.node,
};

export default HeaderBar;
