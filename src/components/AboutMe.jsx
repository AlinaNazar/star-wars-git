import React, {useEffect, useState} from "react";
import {baseURL} from "../utils/constants.js";
import heroImg from "../assets/main.jpg";
import '../AboutMe.css'

const AboutMe = () => {
    const [hero, setHero] = useState(null);
    //const [heroImg, setHeroImg] = useState();
    useEffect(() => {
        fetch(`${baseURL}/v1/peoples/1`)
            .then((res) => res.json())
            .then((data) => {
                const card = {
                    'name': data.name,
                    'gender': data.gender,
                    'skin color': data.skin_color,
                    'hair color': data.hair_color,
                    'height': data.height,
                    'eye color': data.eye_color,
                    'weight': data.mass,
                    'birth year': data.birth_year,
                };
                //setHeroImg(data.image);
                setHero(card);
            })
    }, []);

    if (!hero) return <div className='far-galaxy'> Loading...</div>;


    return (

        <>
            {(!!hero)&&
            <div className='container card text-warning border-warning character-card '>
                <div className='row g-0'>
                    <div className='col-md-4 position-relative character-image-wrapper'>
                        <img src={heroImg} alt={hero.name}
                             className='img-fluid rounded character-image'/>
                    </div>

                    <div className='col-md-8 card-body'>
                        <h2 className='card-title text-center mb-4 character-name'>
                            {hero.name}
                        </h2>
                        <dl className='row mb-0 character-info'>
                            {Object.entries(hero).map(([key, value]) =>
                                key === 'name' ? null :
                                    <React.Fragment key={key}>
                                        <dt className='col-sm-4 text-uppercase small fw-bold'>{key}</dt>
                                        <dd className='col-sm-8 mb-2'>{value}</dd>
                                    </React.Fragment>
                            )}
                        </dl>
                    </div>
                </div>
            </div>
            }
</>
    );
};

export default AboutMe;