import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { red } from "./colors";
import breakpoint from "./styles/breakpoint";

const Fig = styled.figure`
  margin: 0;
  padding: 15px 0;
  text-align: center;
`;

const Caption = styled.figcaption`
  border-right: 4px solid ${red};
  padding-right: 20px;
  text-align: right;
  color: ${red};
  font-weight: 600;
`;

const Img = styled.img`
  width: 30%;
  min-width: 200px;
`;

class Figure extends PureComponent {
  static propTypes = {
    children: PropTypes.node
  };

  render() {
    return (
      <Fig align={this.props.align}>
        {this.props.graphic ? (
          <Img src={`/images/${this.props.graphic}.svg`} alt={this.props.alt} />
        ) : null}
        <Caption>{this.props.children}</Caption>
      </Fig>
    );
  }
}

Figure.propTypes = {
  children: PropTypes.node,
  graphic: PropTypes.string,
  align: PropTypes.oneOf(["right", "left"]),
  alt: PropTypes.string
};

Figure.defaultProps = {
  align: "left"
};

export default Figure;
