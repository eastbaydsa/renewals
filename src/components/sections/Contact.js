import React, { PureComponent } from 'react';
import Figure from '../Figure';
import { H2, P } from '../typography';
import Container from '../Container';
import Section from '../Section';
import NavAnchor from '../NavAnchor';
import Graphic from '../Graphic';
import Directory from '../directory/Directory';
import DirectoryItem from '../directory/DirectoryItem';

class Contact extends PureComponent {
  render() {
    return (
      <NavAnchor anchor={this.props.anchor}>
        <Section>
          <Container>
            <H2>Have questions?</H2>
            <P>
              Reach out to the Internal Organizing Committee at{' '}
              <a href="mailto:ioc@eastbaydsa.org">ioc@eastbaydsa.org</a>
            </P>
          </Container>
        </Section>
      </NavAnchor>
    );
  }
}

export default Contact;
