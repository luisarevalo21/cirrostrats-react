import React from "react";
const Story = () => {
  return (
    <div className="story">
      <h2 className="story__title">Welcome to Our Story</h2>

      <p className="story__description">
        In the bustling world of aviation, where every minute counts, we saw the need for a powerful utility tool
        designed specifically for pilots. We wanted to create a platform that would declutter your workspace, enhance
        your planning capabilities, and provide invaluable decision-making support, all in one place.
      </p>
      <p className="story__description">
        With unwavering dedication, we embarked on a mission to redefine efficiency and elevate your flying experience
        to new heights.
      </p>
      <p className="story__description">
        Our utility tool is a testament to our commitment to innovation and efficiency. It combines cutting-edge
        technology with an intuitive interface, ensuring that you have access to the most relevant aviation information
        at your fingertips. Weather updates, gate statuses, route checks, crosswind checks, and so much more—all
        seamlessly integrated into a single, simple, comprehensive solution.
      </p>
      <p className="story__description">
        We collaborate with pilots like you, incorporating your valuable feedback and insights, ensuring that our
        utility tool remains your trusted companion in the flightdeck.
      </p>
      <p className="story__description">
        We believe that by simplifying and streamlining your workflow, we can empower you to focus on what truly
        matters—the safe and efficient operation of your flights.
      </p>
      <p className="story__description">
        Join us on this remarkable journey as we redefine the way pilots navigate the complexities of their profession.
        Together, let&apos;s embrace the boundless possibilities that await us in the endless blue skies.
      </p>

      <h4 className="story__subtitle">Welcome aboard!</h4>
      <div className="team">
        <h3 className="team__title">Our Team</h3>
        <ul className="team__list ">
          <li className="team__list__item">Ujas Vaghani CEO/Systems Engineer</li>
          <li className="team__list__item">Ismail Sakhani - CDO(Design)</li>
          <li className="team__list__item">Luis Arevalo - Full Stack Developer</li>
        </ul>
      </div>
    </div>
  );
};

export default Story;
