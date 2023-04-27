import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from "styled-components";

const StyledNavLink = styled(NavLink)`
  color: black;
  font-size: ${props => props.size ? props.size + 'rem' : '1.8rem'};
  font-weight: bold;
  margin: 23px 22px 22px 22px;
  text-decoration: none;
  height: 100%;
  position: relative;
  top: 1px;
  z-index: 100;
  
  
  &.active { // 활성화되었을떄 색상을 바꿔줍니다. 크기도 바꿀까요? 이건 뭐 알아서
    color: var(--maincolor);
    font-size: ${props => props.size ? props.size + 0.2 + 'rem' : '2rem'};
    border-color: var(--maincolor);
    border-bottom: ${props => props.deco ? '3px solid' : 'none'};
  }
`;

const CustomNavLink = ({ to, exact, children, size, deco }) => {
    return (
        <StyledNavLink
            to={to}
            exact={exact}
            size={size}
            deco={deco}
        >
            {children}
        </StyledNavLink>
    );
};

export default CustomNavLink;

