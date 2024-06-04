import Image from "next/image";

import {
    StyledTextContainer,
    StyledContainer,
    StyledGetStartedBtn,
    StyledTitle,
    StyledDescription,
    StyledCTAContainer,
    Background, StyledImageContainer,
} from "./elements";

export const Villain = ({ background, title, description, ctaText,image, ...props }) => {
    return (
        <Background>
                <StyledContainer {...props}>
                    <StyledTextContainer>
                        <StyledTitle>{title}</StyledTitle>
                        <StyledDescription>{description}</StyledDescription>
                    </StyledTextContainer>
                </StyledContainer>
            <Image layout="responsive" src={background.src} alt={background.alt} width={background.width} height={background.height} />

        </Background>
    );
};
