import Image from "next/image";
import styled from "styled-components";

import {
    StyledTextContainer,
    StyledContainer,
    StyledTitle,
    StyledDescription,
    Background,
    StyledImageContainer,
    Panels,
    PanelBackground,
    ButtonsPanel,
    PanelButtonImage,
    PanelButtonTitle,
    PanelButtonDescription,
    TextContainer,
    BriefButton,
    SearchButton,
    PitchButton,
} from "./elements";

export const Villain = ({ background, title, description, ctaText, image, brief, pitch, search, ...props }) => {
    return (
        <Background>
            <StyledContainer {...props}>
                <StyledTextContainer>
                    <StyledTitle>{title}</StyledTitle>
                    <StyledDescription>{description}</StyledDescription>
                </StyledTextContainer>
            </StyledContainer>
            <Panels>
                <PanelBackground style={{ backgroundImage: `url(${background.src})` }} />
                <StyledImageContainer>
                    <Image layout="responsive" src={image.src} alt={image.alt} width={image.width} height={image.height} />
                </StyledImageContainer>
                <ButtonsPanel>
                    <BriefButton>
                        <PanelButtonImage>
                            <Image layout="responsive" src={brief.src} alt={brief.alt} width={brief.width} height={brief.height} />
                        </PanelButtonImage>
                        <TextContainer>
                            <PanelButtonTitle>
                                Brief
                            </PanelButtonTitle>
                            <PanelButtonDescription>
                                Complete <strong>brief writing or simple guidance</strong> on what to include, we've got you covered
                            </PanelButtonDescription>
                        </TextContainer>
                    </BriefButton>
                    <SearchButton>
                        <PanelButtonImage>
                            <Image layout="responsive" src={search.src} alt={search.alt} width={search.width} height={search.height} />
                        </PanelButtonImage>
                        <TextContainer>
                            <PanelButtonTitle>
                                Search
                            </PanelButtonTitle>
                            <PanelButtonDescription>
                                In-depth agency search covering; <strong>criteria matching</strong>, door knocking and due-diligence vetting
                            </PanelButtonDescription>
                        </TextContainer>
                    </SearchButton>
                    <PitchButton>
                        <PanelButtonImage>
                            <Image layout="responsive" src={pitch.src} alt={pitch.alt} width={pitch.width} height={pitch.height} />
                        </PanelButtonImage>
                        <TextContainer>
                            <PanelButtonTitle>
                                Pitch
                            </PanelButtonTitle>
                            <PanelButtonDescription>
                                Comprehensive <strong>pitch management</strong>, including comms, diary management and pitch hosting
                            </PanelButtonDescription>
                        </TextContainer>
                    </PitchButton>
                </ButtonsPanel>
            </Panels>
        </Background>
    );
};