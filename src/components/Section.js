import styled from "styled-components";
import { red } from "./colors";

const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 2.5em;
  padding-bottom: 2.5em;
  border-bottom: 40px solid ${red};
`;

export default Section;
