import '../scss/BusinessCard.scss';
import profileImg from '../images/profile-picture.svg';
import twitter from '../images/twitter.svg';
import facebook from '../images/facebook.svg';
import instagram from '../images/instagram.svg';
import linkedin from '../images/linkedin.svg';
import github from '../images/github.svg';
import envelope from '../images/envelope.svg'


// Originally I wanted to setup the component to take in a data stream.
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
      {platform: "instagram", icon: "", profileUrl: "https://www.instagram.com/missyplusfour/" },
      {platform: "linkedIn", icon: "", profileUrl: "https://www.linkedin.com/in/melissajkipp/" },
      {platform: "github", icon: "", profileUrl: "https://github.com/melissakipp" }
    ]
  }
]

function BusinessCard() {
  return (
    <>
      <section className='biz-main-content'>
        <article className='biz-card'>
          <img className='biz-card--profileImg' src={profileImg} alt="Melissa's Profile Pictures" />
          <header className='biz-card--header'>
            <h2 className='biz-card--header__name'>Melissa Kipp</h2>
            <p className='biz-card--header__title'>Frontend Developer</p>
            <p className='biz-card--header__website'>https://melissajkipp.com</p>
            <div className='biz-card--header__btns'>
              <a className='email-btn' href="mailto:melissakipp.az@gmail.com"><img src={envelope} alt="" />Email</a>
              <a className='linkedIn-btn' href="https://www.linkedin.com/in/melissajkipp/"><img src={linkedin} alt="" />LinkedIn</a>
            </div>
          </header>
          <section className='biz-card--content'>
            <h3 className='biz-card--content__topics'>About</h3>
            <p className='biz-card--content__text'>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
            <h3 className='biz-card--content__topics'>Interests</h3>
            <p className='biz-card--content__text'>Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
          </section>
          <footer className='card-footer'>
            <ul className='card-footer--list'>
              <li><a href="https://twitter.com/lint_on_kipp">
                <span className='visually-hidden'>Twitter</span>
                <img src={twitter} alt="" /></a></li>
              <li><a href="https://www.facebook.com/missyplusfour/"><span className='visually-hidden'>Facebook</span>
                <img src={facebook} alt="" /></a></li>
              <li><a href="https://www.instagram.com/missyplusfour/"><span className='visually-hidden'>Instagram</span>
                <img src={instagram} alt="" /></a></li>
              <li><a href="https://github.com/melissakipp"><span className='visually-hidden'>GitHub</span>
                <img src={github} alt="" /></a></li>
            </ul>
          </footer>
          
        </article>
        
      </section>
    </>
  );
}

export default BusinessCard;
