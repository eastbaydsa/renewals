import React, { PureComponent } from 'react';
import Figure from '../Figure';
import { H2, P, Strong, OL, OLI } from '../typography';
import Container from '../Container';
import Section from '../Section';
import NavAnchor from '../NavAnchor';
import Graphic from '../Graphic';
import Directory from '../directory/Directory';
import DirectoryItem from '../directory/DirectoryItem';

class LocalDues extends PureComponent {
  render() {
    return (
      <NavAnchor anchor={this.props.anchor}>
        <Section>
          <Container>
            <H2>Local chapter dues</H2>
            <P>
              Interdum et malesuada fames ac ante ipsum primis in faucibus.
              Phasellus dignissim sollicitudin ex ac venenatis. Sed eu ornare
              enim. Etiam tristique ipsum a lectus sollicitudin pellentesque.
              Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis egestas. Nullam malesuada ex ligula, at
              tincidunt libero dignissim nec. Nulla condimentum pellentesque
              ipsum quis auctor.
            </P>
            <Directory>
              <DirectoryItem
                text="Contribute to the local chapter"
                links={[
                  {
                    label: 'Renew now',
                    href: 'http://www.eastbaydsa.org/donate'
                  }
                ]}
              />
            </Directory>
          </Container>
        </Section>
      </NavAnchor>
    );
  }
}

export default LocalDues;
