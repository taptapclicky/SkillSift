import React from "react";
import "../styles/home.css";

const HomePage = () => {
  return (
    <div>
      <h2 classname="welcome-msg">
        Welcome to Skills Sift - Your Ultimate Solution for Professional
        Services!{" "}
      </h2>
      <div class="hero-images">
        <img alt="service-img" src="./images/autorepair.jpg" />
        <img alt="service-img" src="./images/cleaning.jpg" />
      </div>
      <div class="hero-images">
        <img alt="service-img" src="./images/computer-repair.jpg" />
        <img alt="service-img" src="./images/lawncare.jpg" />
      </div>
      <div>
        <p className="home-text">
          Tired of juggling countless tasks and searching high and low for
          reliable professionals? Look no further! With Skills Sift, your go-to
          web application, solving problems and accessing top-notch services has
          never been easier. Imagine having the power to seamlessly connect with
          a diverse range of skilled professionals, all in one convenient
          platform. Whether it's getting your home spick and span, your lawn
          beautifully manicured, your computer glitch-free, or your car purring
          like new – Skills Sift has you covered. Here's how it works: Simply
          sign up and tell us about your needs. In a snap, our network of
          experienced professionals will reach out to you, ready to provide
          tailored solutions. No more endless searching, no more frustration –
          just efficient, reliable service at your fingertips.
        </p>

        <h2>Why choose Skills Sift?</h2>
        <ul id="list">
          <li>
            {" "}
            <b>Streamlined Convenience: </b> Say goodbye to the hassle of
            scouring the internet or asking around for recommendations. Our
            intuitive platform connects you with the right professionals for
            your unique needs, all in one place.
          </li>
          <li>
            {" "}
            <b>Verified Expertise</b> We rigorously vet our professionals,
            ensuring you get access to a pool of trustworthy experts who are
            dedicated to delivering top-quality service.
          </li>
          <li>
            {" "}
            <b> Time and Money Saver</b> Don't waste precious time chasing after
            different service providers. Let them come to you! Get competitive
            quotes from multiple professionals, allowing you to make an informed
            decision that suits your budget.
          </li>
          <li>
            {" "}
            <b> Tailored Solutions</b> Whether it's a quick fix or a complex
            project, our professionals have the skills to address a wide range
            of challenges. You'll receive personalized solutions that meet your
            exact requirements.{" "}
          </li>
          <li>
            {" "}
            <b> Peace of Mind</b> Rest easy knowing that your tasks are in
            capable hands. Our professionals are committed to excellence,
            ensuring you receive results that exceed your expectations. With
            Skills Sift, you're not just solving problems – you're gaining a
            reliable partner in tackling life's everyday challenges. Sign up
            now, and unlock a world of seamless, efficient, and trusted
            professional services. Elevate your experience with Skills Sift
            today!{" "}
          </li>
        </ul>
      </div>
    </div>
  );
};
export default HomePage;
