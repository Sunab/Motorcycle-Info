import React from "react";

const MotorCard = ({ motorData }) => {
  // console.log(motorData);
  return (
    <>
      <section className="main-card--cointainer">
        {motorData.map((currentElement) => {
          return (
            <>
              <div className="card-container" key={currentElement.id}>
                <div className="card">
                  <div className="card-body">
                    <span className="card-number card-circle subtle">
                      {currentElement.id}
                    </span>
                    <span className="card-author subtle">
                      {" "}
                      {currentElement.category}{" "}
                    </span>
                    <h2 className="card-title"> {currentElement.name} </h2>
                    <span className="card-description subtle">
                      {currentElement.description}
                    </span>
                    <div className="card-read"> Read</div>
                    <img
                      src={currentElement.image}
                      alt="images"
                      className="card-media"
                    />
                    <span className="card-tag subtle">Order Now</span>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </section>
    </>
  );
};

export default MotorCard;
