import logo from './logo.svg';
import './App.css';
import { NavLink } from 'react-router-dom';

function App() {
  return (
    <div className='kaand'>
      <div className='kaand2'>
    <div className="home-frame3">
        <span className="home-text03">  Deliver accurate and timely healthcare </span>
        <span className="home-text05"> A trustworthy website that you can rely on for fixing complex MRIs with improved imaging.</span>
    </div>
      <button className="home-signupbutton">
        <span className="home-text07"><NavLink className="nav-link" to="/upload">Upload</NavLink></span>
      </button>
      <div className="home-frame4">
        <span className="home-text09"> What do we do?</span>
        <span className="home-text11">
         We are a team of software engineers that built and effcetive
            platform for doctors, who are confused while reading MRIs and
            find them difficult to diagnose. MRIfix will help you to, not
            only enhance the image, but also highlight the areas which
            reflect water. We transfer styles in MRI using Generative
            Adversarial Networks and convert the MRI into T1 weighted and
            T2 weighted images.
        </span>
      </div>
      </div>
      <div className="home-frontpagevector">
        <img
          src="/playground_assets/frame71075-a08y.svg"
          alt="Frame71075"
          className="home-frame7" />
      </div>
      </div>
  );
}

export default App;
