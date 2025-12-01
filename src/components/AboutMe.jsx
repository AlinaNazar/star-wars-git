import React, {useEffect, useState} from "react";
import {baseURL, EXPIDATE} from "../utils/constants.js";
import heroImg from "../assets/main.jpg";

const AboutMe = () => {
    const [hero, setHero] = useState(null);
    //const [heroImg, setHeroImg] = useState();
    useEffect(() => {
        const hero = JSON.parse(localStorage.getItem("hero"));
        if (hero && (Date.now() - hero.expiryDate) < EXPIDATE) {
            setHero(hero.info);
        } else {
            fetch(`${baseURL}/v1/peoples/1`)
                .then((res) => res.json())
                .then((data) => {
                    let card = {
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
                    card = {
                        info: card,
                        expiryDate: Date.now()
                    }
                    localStorage.setItem("hero", JSON.stringify(card));
                })
        }
    }, []);

    if (!hero) return <div className='far-galaxy'> Loading...</div>;


    return (

        <>
            {(!!hero) &&
                <div className='container mx-auto max-w-4xl bg-black border-2 border-main rounded-3xl overflow-hidden
  shadow-[0_0_25px_rgba(56,189,248,0.8)]'>
                    <div className='grid grid-cols-3 gap-6 p-6'>
                        <h2 className='col-span-3  text-center mb-4 text-[2rem] tracking-[0.12em]'>
                            {hero.name}
                        </h2>
                        <div className='col-span-1'>
                            <img src={heroImg} alt={hero.name}
                                 className='w-full border-2 border-main rounded-2xl object-cover max-h-[330px]'/>
                        </div>
                        <dl className='col-span-2 grid grid-cols-2 gap-x-4 gap-y-2'>
                            {Object.entries(hero).map(([key, value]) =>
                                key === 'name' ? null :
                                    <React.Fragment key={key}>
                                        <dt className='col-span-1 text-main uppercase text-sm font-bold'>{key}</dt>
                                        <dd className='col-span-1 text-dataColor  mb-1'>{value}</dd>
                                    </React.Fragment>
                            )}
                        </dl>
                    </div>
                </div>
            }
        </>
    );
};

export default AboutMe;