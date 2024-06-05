import styled from "styled-components";
import { Button, SectionContainer, SectionBigHeading, SectionSubheading } from "~/components";

export const Background = styled(({...props}) => <div {...props} />)`
`;

export const Panels = styled(({...props}) => <div {...props} />)`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    position: relative; /* Needed to position PanelBackground relative to Panels */
    width: 100%;
    height: 100%;
    gap:5rem;
`;

export const PanelBackground = styled(({ ...props }) => <div {...props} />)`
    position: absolute;
    width: 95%;
    height: 100%;
    z-index: -1;
    background-size: contain;
    background-repeat: no-repeat;
    margin-top:3rem;
    margin-left:4rem;
`;
export const ButtonsPanel = styled(({ ...props }) => <div {...props} />)`
    display:flex;
    flex-direction:column;
    gap:2rem;
    max-width: 27rem;
    max-height: 65rem;
    width: 100%;
    height: 100%;
    padding-top: 1rem;
    padding-right:15rem;
`;
export const PanelButton = styled(({ ...props }) => <div {...props} />)`
    background-color:gray; //*#F9F9F9
    border-radius:0.5rem;
    display:flex;
    flex-direction:row;
    border: 3px solid transparent;
        &:hover{
            border-color:dodgerblue;
            cursor:pointer;
        }
`;
export const PanelButtonImage = styled(({ ...props }) => <div {...props} />)`
    width:10rem;
    padding:3.5rem;
`;

export const TextContainer = styled(({ ...props }) => <div {...props} />)`
    display:flex;
    flex-direction:column;
    padding-top:2rem;
    gap:1rem;
    padding-right:2rem;
`;
export const PanelButtonTitle = styled(({ ...props }) => <div {...props} />)`

`;
export const PanelButtonDescription = styled(({ ...props }) => <div {...props} />)`

`;




export const StyledContainer = styled(({ height, ...props }) => <SectionContainer {...props} />)`
    display: flex;
    width: 100%;
    justify-content: center;
    padding-top: 4rem;
    position: relative; /* To ensure it appears above the background */
    z-index: 1; /* Position it above the PanelBackground */
`;

export const StyledTitle = styled((props) => <SectionBigHeading {...props} />)`
    margin: 0;
    color: black;
    font-size:3.3rem;
`;

export const StyledDescription = styled((props) => <SectionSubheading {...props} />)`
    display: flex;
    justify-content: center;
    margin:0;
    padding-bottom: 2rem;
    font-size: 1.65rem;
`;

export const StyledTextContainer = styled(({ ...props }) => <div {...props} />)`
    color: black;
    font-family: sans-serif;
`;

export const StyledImageContainer = styled(({ ...props }) => <div {...props} />)`
    max-width: 25rem;
    max-height: 65rem;
    width: 100%;
    height: 100%;
    padding-top: 1rem;
`;