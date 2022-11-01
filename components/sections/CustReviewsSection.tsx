// define Customer Reviews section

import { Cards } from "../cards";
import { Typography } from "../typography";
import { request, gql } from "graphql-request";
import { useState } from "react";

export type CustomerReview = {
  customerName: string;
  review: string;
  id: string;
  photo?: string;
};

type CustReviewsSectionProps = {
  data: Array<CustomerReview>;
};

export const CustReviewsSection = ({ data }: CustReviewsSectionProps) => {
  return (
    <>
      <section id="custReviews" className="custReviewsSection">
        <div className="custReviewsTitle">
          <Typography.SectionTitle
            content="Customer Reviews"
            color="var(--solidBrown)"
          />
        </div>
        <div className="container d-flex flex-row align-items-center justify-content-center px-4 pb-2">
          <div className="row  gap-3 pt-5">
            {/*  extract key from custReviews, spread the rest into CustReviewCard component */}

            {data?.map(({ id, ...other }) => {
              return (
                <div className="col-lg" key={id}>
                  <Cards.CustReviewCard {...other} />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <style jsx>{`
        .custReviewsSection {
          background-color: var(--coffee);
          min-height: 80vh;
          padding: 40px 0px 40px 0px;
        }
      `}</style>
    </>
  );
};
