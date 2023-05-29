import React from "react";
import aboutImage from "../assets/images/about-image.png";

export const About = () => {
  return (
    <div className="bg-white">
      <div className="p-24 grid grid-cols-2">
        <div className="">
          <h2 className="text-2xl font-medium">About Us</h2>
          <p className="text-lg">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed aut
            quam tempora laborum perferendis eum explicabo, enim omnis molestiae
            deserunt quidem, maiores debitis optio culpa cum qui non earum
            libero cupiditate possimus, illum repellat voluptatem illo deleniti.
            Illo iusto delectus animi error nihil labore illum hic. Maxime, ea
            nesciunt tempore rem odit officia autem laboriosam fugit enim
            officiis expedita quia voluptas hic amet facere sequi libero
            possimus nisi quasi, ipsam incidunt. Similique dolores aspernatur
            non cum amet quae molestiae rem ad saepe, blanditiis mollitia culpa
            eveniet iure odio dolorem assumenda ab unde aut voluptas nam odit
            ipsum sunt? Ad, id.
          </p>
        </div>
        <div className="flex items-center justify-center">
          <img
            src={aboutImage}
            alt="about"
            className="w-[400px] h-[400px] object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
