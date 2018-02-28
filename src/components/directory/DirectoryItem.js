import React, { PureComponent } from "react";
import styled from "styled-components";
import Link from "../Link";
import { red, purple, black } from "../colors";
import breakpoint from "../styles/breakpoint";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  flex: 1 1 calc(40% - 20px);
  margin-right: 20px;
  margin-bottom: 20px;

  background-color: ${red};
  color: white;

  ${breakpoint.tablet`
    margin: 0;
  `};
`;

const Title = styled.p`
  font-weight: 600;
  font-size: 24px;
  line-height: 1.3;
  flex: 1 1 auto;
  margin-bottom: 15px;
  margin-right: 30px;
`;

const StyledLink = styled(Link)`
  display: block;
  color: white;
`;

class DirectoryItem extends PureComponent {
  render() {
    return (
      <Wrapper>
        <Title>{this.props.text}</Title>
        {this.props.links.map(l => (
          <div key={l.href}>
            <StyledLink
              background="transparent"
              hoverColor={black}
              highlight="white"
              color="white"
              href={l.href}
            >
              {l.label}
            </StyledLink>
          </div>
        ))}
      </Wrapper>
    );
  }
}

export default DirectoryItem;
