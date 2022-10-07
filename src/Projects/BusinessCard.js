import '../scss/BusinessCard.scss';

import React, { Component } from 'react';

const person = [
  {
    id: 1,
    picture: "/src/images/melissa-j-kipp.jpg",
    name: "Melissa Kipp",
    title: "Frontend Developer",
    personalWebsite: "https://melissajkipp.com",
    about: "I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.",
    interest: "Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.",
    socialMedia: [
      {platform: "twitter", icon: "", profileUrl: "https://twitter.com/lint_on_kipp" },
      {platform: "facebook", icon: "", profileUrl: "https://www.facebook.com/missyplusfour/" },
      {platform: "Instagram", icon: "", profileUrl: "https://www.instagram.com/missyplusfour/" },
      {platform: "LinkedIn", icon: "", profileUrl: "https://www.linkedin.com/in/melissajkipp/" },
      {platform: "GitHub", icon: "", profileUrl: "https://github.com/melissakipp" }
    ]
  }
]

function BusinessCard() {
  return (
    <>
      <section className='biz-main-content'>
        <article className='biz-card'>
          <img src="/src/images/melissa-j-kipp.jpg" alt="Melissa's Profile Pictures" />
          <h2>Melissa Kipp</h2>
        </article>
        
      </section>
    </>
  );
}

export default BusinessCard;
