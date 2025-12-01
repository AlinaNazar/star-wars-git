import {useEffect, useState} from "react";
import {baseURL} from "../utils/constants.js";
import Text from "./ui/Text.jsx";


const OpeningCrawl = () => {
    const [openingCrawl, setOpeningCrawl] = useState(() => sessionStorage.getItem("opening_crawl"));

    useEffect(() => {
        if (!openingCrawl) {
            const episode = Math.floor(Math.random() * 6) + 1;
            fetch(`${baseURL}/v1/films/${episode}`)
                .then(res => res.json())
                .then(data => {
                    setOpeningCrawl(data.opening_crawl);
                    sessionStorage.setItem("opening_crawl", data.opening_crawl);
                })
                .catch(() => setOpeningCrawl('Error loading opening crawl'));
        }
    }, [openingCrawl]);

    return <Text> {openingCrawl || 'Loading...'} </Text>


    // if(openingCrawl){
    //     return (
    //         <p className="text-[2rem] text-justify tracking-[0.1em] leading-[1.5]">{openingCrawl}</p>
    //     )
    // } else{
    //     return (
    //         <p className='text-[2rem] text-justify tracking-[0.1em] leading-[1.5]'>
    //             <span className={'spinner-border-sm spinner-border'}></span>
    //             <span className={'spinner-grow spinner-grow-sm'}>Loading</span>
    //         </p>
    //     )
    // }


}

export default OpeningCrawl;