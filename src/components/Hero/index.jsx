import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png';

const Hero = () => {
    return (
        <div className='hero container'>
            <div className="hero-text">
                <h1>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h1>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed animi maxime ducimus eius iure quo tempora fugiat vel, qui adipisci, ex odio, consectetur ipsa ?
                </p>
                <button className="btn">Explore more <img src={dark_arrow} alt="dark_arrow" /></button>
            </div>
        </div>
    );
}

export default Hero;