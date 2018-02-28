import React, { PureComponent } from "react";
import Container from "../Container";
import Section from "../Section";
import SideBar from "../SideBar";
import Figure from "../Figure";
import { H2, P, Strong } from "../typography";
import NavAnchor from "../NavAnchor";
import Directory from "../directory/Directory";
import DirectoryItem from "../directory/DirectoryItem";

class WelcomeSection extends PureComponent {
  render() {
    return (
      <NavAnchor anchor={this.props.anchor}>
        <Section>
          <Container>
            <H2>Reaffirm your commitment</H2>
            <P>
              East Bay DSA is a member-run organization, fighting capitalism by
              building power in the working class. We want a democratic
              socialist society, one that guarantees all people opportunity to
              flourish, freedom from want, and the right to self-determination.
              To get there, we need an organized working class equipped to take
              on capitalist power.
            </P>
            <P>
              This organization is ours — we define the vision, and we do the
              work to carry it out.
            </P>
            <P>
              Paying dues gives us a stake in this collective project. As
              members we have a voice and a vote in defining our future
              together.
            </P>
            <SideBar title="Choosing monthly dues" theme="red">
              <P>
                By switching to monthly dues, you never have to worry about your
                membership expiring, and you help to ensure the long term
                success and stability of our organization in the long struggle
                against capital.
              </P>
              <P>
                When you renew your membership, select “Monthly” at the top of
                the page to make the switch.
              </P>
            </SideBar>
            <Figure graphic="solidarity-in-action" />
            <H2>Local chapter donations</H2>
            <div>
              <P>
                As members of the East Bay chapter, we have a responsibility to
                build our local organization. This means contributing both our
                labor power and, as we are able, our financial support. National
                membership dues do not fund the operations of our local chapter
                — it’s contributions from workers like us that ensure we’re able
                to continue building power and class consciousness in our
                neighborhoods, workplaces, and communities in the East Bay.
              </P>
              <P>
                After you renew your national membership, please consider making
                a donation to the local chapter as well — any donation will help
                to sustain the chapter we’ve built together for years to come!
              </P>
            </div>

            <Directory>
              <DirectoryItem
                text="Step 1. Renew your national membership"
                links={[
                  {
                    label: "Renew now",
                    href: "https://act.dsausa.org/donate/membership/"
                  }
                ]}
              />
              <DirectoryItem
                text="Step 2. Contribute to the local chapter"
                links={[
                  {
                    label: "Donate now",
                    href: "http://www.eastbaydsa.org/donate"
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

export default WelcomeSection;
