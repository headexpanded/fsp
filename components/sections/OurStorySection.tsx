// define Our Story section
import { Typography } from '../typography';
import { Spacer } from '../utils/Spacer';

export const OurStorySection = () => {
  return (
    <>
      <section id="ourStorySection" className="ourStorySection">
        <Spacer />
        <Typography.SectionTitle content="Our Story" />
        <div className="ourStoryText">
          <Typography.ParaC
            content="This is not actually a real business."
            fontSize="1.5rem"
            fontWeight="700"
          />
          <Typography.ParaC
            content=" It's just a site I made to practice CSS & React."
            fontSize="1.5rem"
            fontWeight="700"
          />

          <Typography.ParaC
            content="And yes, I think it's funny."
            fontSize="1.5rem"
            fontWeight="700"
          />
        </div>
        <Typography.ParaC
          content="No CSS Framework"
          color="var(--clr-text-primary)"
          fontSize="3rem"
          fontWeight="900"
        />
        <div className="ourStoryText">
          <Typography.ParaC
            content="I had three main goals. First, to write pure CSS without using a framework such as Tailwind or Bootstrap."
            fontSize="1.5rem"
            fontWeight="700"
          />
          <Typography.ParaC
            content="I wanted to see how much I could do writing the CSS myself (that's why there are still a few niggly little things to fix up)."
            fontSize="1.5rem"
            fontWeight="700"
          />
        </div>
        <Typography.ParaC
          content="Cascading Styles"
          color="var(--clr-text-primary)"
          fontSize="3rem"
          fontWeight="900"
        />
        <div className="ourStoryText">
          <Typography.ParaC
            content="Secondly, to make the CSS cascade down through the HTML elements and match the semantics."
            fontSize="1.5rem"
            fontWeight="700"
          />
          <Typography.ParaC
            content="For example, set default styles for the html <section> element, then override as necessary."
            fontSize="1.5rem"
            fontWeight="700"
          />
        </div>
        <Typography.ParaC
          content="Custom Functions"
          color="var(--clr-text-primary)"
          fontSize="3rem"
          fontWeight="900"
        />
        <div className="ourStoryText">
          <Typography.ParaC
            content="Thirdly, to use custom functions like min(), max(), calc(), and clamp() for the responsive design, instead of media queries (where it made sense to do so)."
            fontSize="1.5rem"
            fontWeight="700"
          />
        </div>
        <Typography.ParaC
          content="More To Do"
          color="var(--clr-text-primary)"
          fontSize="3rem"
          fontWeight="900"
        />
        <div className="ourStoryText">
          <Typography.ParaC
            content="E-commerce: the world needs Fat Slob Plumbing hoodies"
            fontSize="1.5rem"
            fontWeight="700"
          />
          <Typography.ParaC
            content="Franchises: interactive map of available locations"
            fontSize="1.5rem"
            fontWeight="700"
          />
          
          <Typography.ParaC
            content="Also, CSS layers would be fun to learn, so maybe I'll do that sooner or later."
            fontSize="1.5rem"
            fontWeight="700"
          />
        </div>
      </section>

      <style jsx>{`
        .ourStoryText {
          display: flex;
          flex-direction: column;
          place-items: center;
          width: 90vw;
        }
      `}</style>
    </>
  );
};
