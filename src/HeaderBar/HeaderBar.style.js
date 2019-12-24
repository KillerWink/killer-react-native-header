import styled from 'styled-components';

export const HeaderWrapper = styled.View`
    alignItems: center;
    justifyContent: flex-end;
    height: ${props => props.height}px;
    padding: ${props => props.padding}px;
    padding-top: ${props => props.padding}px;
    background-color: ${props => props.backgroundColor};
`;

export const HeaderContainer = styled.View`
    flex: 1;
    alignItems: stretch;
    justifyContent: center;
    flexDirection: row;
`;
