import Image from "next/image";
import {
    StyledTextContainer,
    StyledContainer,
    StyledTitle,
    StyledDescription,
    Background,
    StyledImageContainer,
    Panels, PanelBackground, ButtonsPanel, PanelButton
} from "./elements";

export const Villain = ({ background, title, description, ctaText, image, ...props }) => {
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
                    <PanelButton>

                    </PanelButton>
                    <PanelButton>

                    </PanelButton>
                    <PanelButton>

                    </PanelButton>
                    <Image layout="responsive" src={image.src} alt={image.alt} width={image.width} height={image.height} />
                </ButtonsPanel>
            </Panels>
        </Background>
    );
};