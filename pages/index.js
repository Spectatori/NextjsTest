import {Hero, Villain} from "../sections";

const heroProps = {
  image: { src: "/img/heroimg.png", alt: "", width: 1000, height: 1680 },
  title: "Agency procurement, outsourced.",
  description: "Start the process here",
  ctaText: "Start",
};
const villainProps = {
    background: { src: "/img/background.png", alt: "", width: 1980, height:1038},
    image:{src: "/img/video.png", alt: "", width: 658, height:1050},
    brief:{src: "/img/brief.png", alt: "", width: 512, height:512},
    pitch:{src: "/img/pitch.png", alt: "", width: 1200, height:1200},
    search:{src: "/img/search.png", alt: "", width: 512, height:512},
    title: "Managed agency selection",
    description: "Strengthen your onboarding process",
    ctaText: "Start",
};

export default function Home() {
  return (
      <>
          <head>
              <link rel="preconnect" href="https://fonts.googleapis.com"/>
              <link rel="preconnect" href="https://fonts.gstatic.com"/>
              <link
                  href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
                  rel="stylesheet"
              />
          </head>
          <div>
              <Villain{...villainProps}/>
              {/** Other sections */}
          </div>
      </>
  );
}
