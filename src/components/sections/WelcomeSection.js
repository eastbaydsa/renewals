import React, { PureComponent } from 'react';
import Container from '../Container';
import Section from '../Section';
import SideBar from '../SideBar';
import { H2, P, Strong } from '../typography';
import NavAnchor from '../NavAnchor';

class WelcomeSection extends PureComponent {
  render() {
    return (
      <NavAnchor anchor={this.props.anchor}>
        <Section>
          <Container>
            <H2>It's that time.</H2>
            <P>
              Sed placerat luctus eros, sit amet consequat sapien rutrum at.
              Phasellus eget odio eget nulla vehicula rhoncus. Fusce tincidunt
              sagittis turpis, ac interdum magna iaculis ut. Donec rutrum
              ullamcorper sem, sed ultrices elit venenatis a. Nulla fermentum
              aliquet mi et aliquet. Donec rhoncus non augue non aliquam.
              Praesent pulvinar eget metus non facilisis. In turpis elit,
              faucibus ut consequat ac, iaculis eu magna. Nam vitae magna
              mollis, cursus est vitae, condimentum erat.
            </P>
            <SideBar title="Why does monthly matter?" theme="purple">
              <P>
                Praesent ullamcorper in purus at congue. Nullam laoreet diam in
                nunc lobortis euismod. Etiam ultrices mi venenatis odio
                tincidunt congue. Sed elementum ipsum a ex placerat ultrices.
                Sed ornare tempor elit et efficitur. Mauris arcu neque, bibendum
                quis orci et, tempor facilisis dui. Curabitur eleifend in nulla
                ut vulputate. Vestibulum eget tristique ex. Nam non lacus vel
                risus sagittis sagittis eu vel mi.
              </P>
            </SideBar>
          </Container>
        </Section>
      </NavAnchor>
    );
  }
}

export default WelcomeSection;
