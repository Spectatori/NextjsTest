import styled from "styled-components";
import { Button, SectionContainer, SectionBigHeading, SectionSubheading } from "~/components";

export const Background = styled(({...props}) => <div{...props}/>)`
    background-size:cover;
    background-position: center;
    background-repeat: no-repeat;
    height:100%;
`;

export const StyledContainer = styled(({ height, ...props }) => <SectionContainer {...props} />)`
    display:flex;
    width:100%;
    justify-content: center;
    padding-top:4rem;
`;

export const StyledGetStartedBtn = styled((props) => <Button {...props} variant="contained" color="main" />)`
  margin-top: 4.375rem;
  padding-top: 0;
  padding-bottom: 0;
`;

export const StyledTitle = styled((props) => <SectionBigHeading {...props} />)`
  margin: 0;
  color: black;
`;

export const StyledDescription = styled((props) => <SectionSubheading {...props} />)`
    display:flex;
    justify-content: center;
    margin: 1.563rem 0 0;
`;

export const StyledTextContainer = styled(({ ...props }) => <div {...props} />)`
  color: black;
  font-family: sans-serif;
`;

export const StyledCTAContainer = styled(({ ...props }) => <div {...props} />)`
  display: flex;
`;

export const StyledImageContainer = styled(({ ...props }) => <div {...props} />)`
  max-width: 32.03rem;
  max-height: 65rem;
  width: 100%;
  height: 100%;
  margin-left: auto;
`;
