// define CustReviewCard properties
type CustReviewCardProps ={
    content:string;
    customer: string;
}

// define CustReviewCard component
export const CustReviewCard=({content, customer}:CustReviewCardProps) => {
    return(
        <>
        <div className="col-sm px-5 mt-1 mb-1 custReviewCard">
            <p>{content}</p>
            <div className="col-sm px-5 mt-1 mb-1 custReviewCard">
                <p>- {customer}</p>
            </div>
            </div>
        <style jsx>{`
            
            .custReviewCard {
                background-color: #B0840E;
                border: 2px solid #CCB209;
                border-radius: 10px;
                height: auto;
                text-align: left;
                transition: color 0.15s ease, border-color 0.15s ease;
            }

            .custReviewCard p {
                color: #CCB209;
                font-size: 1.25rem;
                font-style: italic;
                font-weight:bold;
                margin: 1rem 0 1rem 0;

            }
        
        `}</style>
        
        
        
        </>
    )
}
