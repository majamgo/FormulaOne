import React, { useState, useEffect } from 'react';
import './Slider.scss';

const Slider = ({ slides }) => {

    const [curr, setCurr] = useState(0);

    const goToNext = () => {
        const { length } = slides;
        setCurr(curr === length - 1 ? 0 : curr + 1);
    }

    useEffect(() => {
        setTimeout(goToNext, 6000);
        return function() {
            clearTimeout(goToNext);
        }
    });

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  
  return (
    <section className="home-bigslider">
      {slides.map((s, i) => (
        <div className={i === curr ? "home-bigslide active" : "home-bigslide"} key={s.title}>

            <div className="home-bigslidetext">
                <div>
          <h1>{s.title}</h1>
          <hr className="main-hr hrhomemargin"/>
          <p>{s.subtitle}</p>
          </div>
          </div>

{i === curr && (
    <img src={s.image} className="home-bigimage" alt={s.image}/>
)}
          
        </div>
      ))}
    </section>
  );
};

export default Slider;
