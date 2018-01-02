import React, { PureComponent } from 'react';
import Figure from '../Figure';
import { H2, P, Strong, OL, OLI } from '../typography';
import Container from '../Container';
import Section from '../Section';
import NavAnchor from '../NavAnchor';
import Directory from '../directory/Directory';
import DirectoryItem from '../directory/DirectoryItem';

class NationalDues extends PureComponent {
  render() {
    return (
      <NavAnchor anchor={this.props.anchor}>
        <Section>
          <Container>
            <H2>Renewing your national membership</H2>
            <div>
              <Figure graphic="solidarity-in-action" align="right" />
              <P>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In urna
                sem, tristique sit amet risus et, sollicitudin placerat enim.
                Nulla ac quam ut purus tincidunt auctor quis vel tellus. Nunc
                diam ipsum, rutrum sed condimentum et, congue non dui. Integer
                in rhoncus sapien. Sed pretium commodo quam. Nulla facilisi.
                Cras facilisis venenatis orci in malesuada. Sed maximus augue
                lectus, quis faucibus magna suscipit nec. Duis imperdiet augue
                sed mi sollicitudin, sit amet eleifend nulla malesuada.
              </P>
            </div>
            <Directory>
              <DirectoryItem
                text="National dues are the first step"
                links={[
                  {
                    label: 'Renew now',
                    href: 'https://act.dsausa.org/donate/membership/'
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

export default NationalDues;
