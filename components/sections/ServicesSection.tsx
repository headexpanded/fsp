// define Services section
import { createContext } from "react";
import { Cards } from "../cards";
import { ProductCard } from "../cards/ProductCard";
import { Typography } from "../typography";

export type foodAndDrink = {
  edible: string;
  id: string;
};
type ServicesSectionProps = {
  data: Array<foodAndDrink>;
};

export const ServicesSection = ({ data }: ServicesSectionProps) => {
  return (
    <>
      <section id="services" className="servicesSection">
        <div className="servicesTitle">
          <Typography.SectionTitle
            content="Choose Your Service Level"
            color="var(--solidBrown)"
          />
        </div>
        <div className="container pb-4">
          <div className="row">
            <div className="col-2"></div>
            <div className="col-8">
              <Typography.ParagraphC
                content="Select the foods and drinks your Fat Slob Plumber will consume before visiting your home:"
                color="var(--solidBrown)"
              />
            </div>
            <div className="col-2"></div>
          </div>
        </div>
        {/* <div className="container d-flex flex-row align-items-center justify-content-space-between px-4 pb-2">
          <div className="row gap-3">
            <div className="col-lg">
              <Cards.BeforeCard data={data}></Cards.BeforeCard>
            </div>
            <div className="col-lg">
              <Cards.AfterCard></Cards.AfterCard>
            </div>
          </div>
        </div> */}
        <div className="prodCards">
          <div className="container">
            <div className="row gap-3">
              <div className="col-lg">
                <ProductCard />
              </div>
              <div className="col-lg">
                <ProductCard />
              </div>
            </div>
          </div>
        </div>
      </section>
      <style jsx>{`
        .servicesSection {
          background-color: var(--coffee);
          color: var(--hintOfBrown);
          min-height: 100vh;
          padding: 40px 0px 40px 0px;
        }
        .prodCards {
          display: flex;
          flex-direction: row;
          justify-content: space-evenly;
          padding: 40px 0px;
        }
      `}</style>
    </>
  );
};
