import './App.css';
import Projects from './components/Projects';
import Selfie from './components/selfie.png';
import Skillset from './components/Skillset.js';
import Socials from './components/Socials.js';



function App() {
  return (
    <div className="App">
      <header className='header-container'>
        <img src='logo.png' alt=''/>
        <ul className='header-list'>
          <li className='list-item'><a className='links' href='mailto:nathandevelops1@gmail.com'>Email Me</a></li>
          <li className='list-item'><a className='links' rel="noreferrer" href='https://github.com/NaPared' target='_blank'>GitHub</a></li>
        </ul>
      </header><br/><br/>
      <div className='identity-container'>
          <img src={Selfie} className='self-img' alt=' '/>
          <h1 className='identity-txt'>Nathan Pared</h1><br/>
          <h2 className='identity-txt'>Web developer</h2>
      </div>
      <article className='bio-container'>
        <p className='bio-txt'>I am a self-taught web developer and student at Rutgers University, with a major in Computer Science and a minor in Mathematics. I started web development in the early summer of 2019, and was instantly hooked on the beauty of frontend development. Since then, I have created projects with one goal in mind: to get better at doing what I love to do. I have learned through trial and error and countless YouTube tutorials in order to be where I am today. If I seem like a good fit for your company, please do not hesitate to contact me!</p>
      </article>
      <section className='linkedin-container'>
        <a className='linkedin-link' href='https://www.linkedin.com/in/nathan-pared-bb1484212/' target='_blank' rel='noreferrer'>
          <button className='linkedin-profile-btn'><img src='https://cdn-icons-png.flaticon.com/512/174/174857.png' alt='' className='linked-in-img'/>My LinkedIn Page</button>
        </a>
      </section>
      <p className='skills-list-txt'>LANGUAGES I'VE LEARNED</p>
      <Skillset/>
      <Projects/>
      <footer className='footer-container'>
        <li className='social-list-footer'><Socials/></li>
      </footer>
    </div>
  );
}



export default App;
