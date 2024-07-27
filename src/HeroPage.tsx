import React, { useEffect } from 'react';
import Navbar from './Navbar';
import { heroTextAnimation } from './heroTextAnimation';

const HeroPage = () => {
    useEffect(() => {
        heroTextAnimation();
    }, []);

    return (
        <>
            <header>
                <Navbar />
            </header>
            <main>
                <section className="hero-section">
                    <div className="hero-text">
                        <h1>Discover Elytse's Trendsetting <br /> Fashion Collection <br/> and Embrace the <br /> <span className="hero-text-span" data-words="Apex, Crest, Peak, Hottest, Newest, Freshest">Pinnacle</span> <br />of e-Style!</h1>
                        <p>"Enjoy 30% Off Your First Purchase — Discover Our Latest <br /> Collection and Shop the Trends Today!"</p>
                        <div className="button">
                            <a href="">Shop Now</a>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}

export default HeroPage;