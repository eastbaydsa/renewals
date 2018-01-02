import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { red, purple } from '../colors';
import NavAnchor from '../NavAnchor';
import breakpoint from '../styles/breakpoint';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 30vh;
  border-bottom: 20px solid ${red};

  ${breakpoint.desktop`
    background-image: url(/images/cover@2x.png);
  `};

  position: relative;

  &::before {
    content: '';
    background-image: url(/images/cover.png);
    background-size: cover;
    background-position: right bottom;
    opacity: 0.33;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: -1;
  }
`;

const Title = styled.h1`
  color: ${purple};
  font-weight: 700;
  font-size: 10vmin;
  text-shadow: rgba(0, 0, 0, 0.33) 1px 1px 0;
  text-transform: uppercase;
  text-align: center;
`;

class Cover extends PureComponent {
  render() {
    return (
      <NavAnchor anchor={this.props.anchor}>
        <Wrapper>
          <Title>
            East Bay DSA<br />Renew Your Dues
          </Title>
        </Wrapper>
      </NavAnchor>
    );
  }
}

export default Cover;
