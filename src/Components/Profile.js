import React from "react";

import "./Profile.css";
const Profile = () => {
  return (
    <div className="wrapper flex justify-center items-center w-screen h-screen">
      <div className="card w-11/12 md:w-[600px] h-[350px] mx-auto top-0 sm:border-spacing-6 rounded-2xl ">
        <div>
          <img
            className="z-0 mx-auto rounded-full shadow-lg border-[0.5px] border-white h-32 mt-6"
            src="https://res.cloudinary.com/dhnkuonev/image/upload/v1670234767/my%20folder/tp3_n9m1ew.png"
            alt=""
          />
        </div>
        <div className="TextContainer tracking-widest">Ashutosh Rath</div>
        <p className="TitleText">
          Student, Web Developer, Competitive Programmer
        </p>

        <div className="LinkContainer px-2 space-x-0.5 md:space-x-8">
          <div className=" ">
            <a href="https://github.com/Lucif3r-in">
              {" "}
              <img
                className="rounded-full shadow-md"
                src="https://res.cloudinary.com/dhnkuonev/image/upload/v1672917397/my%20folder/icons8-github_depwrg.gif"
                alt=""
              />
            </a>
          </div>
          <a href="https://www.linkedin.com/in/ashutosh-rath-966176223/">
            {" "}
            <img
              className="rounded-full shadow-lg"
              src="https://res.cloudinary.com/dhnkuonev/image/upload/v1672917874/my%20folder/icons8-linkedin-circled_hkalwu.gif"
              alt=""
            />
          </a>
          <a href="https://www.instagram.com/v_ashu_dev_/">
            {" "}
            <img
              className="rounded-full shadow-lg"
              src="https://res.cloudinary.com/dhnkuonev/image/upload/v1672917754/my%20folder/icons8-instagram_qjq8bo.gif"
              alt=""
            />
          </a>
          <a href="mailto:ashutosh123rath@gmail.com">
            {" "}
            <img
              className="rounded-2xl shadow-lg"
              src="https://res.cloudinary.com/dhnkuonev/image/upload/v1672918168/my%20folder/icons8-gmail-logo_cxtrv5.gif"
              alt=""
            />
          </a>
          <a href="https://twitter.com/Ashutos48101482">
            {" "}
            <img
              className="rounded-full shadow-lg"
              src="https://res.cloudinary.com/dhnkuonev/image/upload/v1672918384/my%20folder/icons8-twitter-circled_wqpbny.gif"
              alt=""
            />
          </a>
          <a href="https://www.buymeacoffee.com/ashutosh02">
            {" "}
            <img
              className="rounded-full shadow-lg"
              src="https://res.cloudinary.com/dhnkuonev/image/upload/v1672919111/my%20folder/icons8-cup_h0w798.gif"
              alt=""
            />
          </a>
          <a href="https://ashuport.netlify.app/">
            {" "}
            <img
              className="rounded-full shadow-lg"
              src="https://res.cloudinary.com/dhnkuonev/image/upload/v1672919225/my%20folder/icons8-programming_lmdxnv.gif"
              alt=""
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Profile;
