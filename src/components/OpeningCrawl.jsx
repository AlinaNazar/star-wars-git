import {useEffect, useState} from "react";
import {baseURL} from "../utils/constants.js";
import data from "bootstrap/js/src/dom/data.js";

const OpeningCrawl = () => {
    const[openingCrawl, setOpeningCrawl] = useState();

    useEffect(() => {
        const opening_crawl = sessionStorage.getItem("opening_crawl");
        if (opening_crawl) {
            setOpeningCrawl(opening_crawl);
        } else {
            const episode = Math.floor(Math.random() * 6) + 1;
            fetch(`${baseURL}/v1/films/${episode}`)
                .then(res => res.json())
                .then(data => {
                    setOpeningCrawl(data.opening_crawl);
                    sessionStorage.setItem("opening_crawl", data.opening_crawl);
                })
                .catch(() => setOpeningCrawl('Error loading opening crawl'));
        }
    },[]);

    if(openingCrawl){
        return (
            <p className="far-galaxy">{openingCrawl}</p>
        )
    } else{
        return (
            <p className='far-galaxy'>
                <span className={'spinner-border-sm spinner-border'}></span>
                <span className={'spinner-grow spinner-grow-sm'}>Loading</span>
            </p>
        )
    }


}

export default OpeningCrawl;