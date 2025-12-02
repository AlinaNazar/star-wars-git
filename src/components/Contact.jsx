import {useEffect, useState} from "react";
import {baseURL, EXPIDATE} from "../utils/constants.js";
import Button from "./ui/Button.jsx";

const Contact = () => {
    const [planets, setPlanets] = useState(() => {
        let pl = JSON.parse(localStorage.getItem("planets"));
        if (pl === null) {
            pl = {payload: [], expiryDate: 0}
        }
        return pl;
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const fName = formData.get("fName");
        const lName = formData.get("lName");
        const planet = formData.get("planet");
        const subject = formData.get("subject");
    }

    useEffect(() => {
        // const planets = JSON.parse(localStorage.getItem("planets"));
        if (planets.payload.length === 0 || (Date.now() - planets.expiryDate) > EXPIDATE) {
            fetch(`${baseURL}/v1/planets`)
                .then((res) => res.json())
                .then((data) => {
                    const info = {
                        payload: data.map(p => p.name),
                        expiryDate: Date.now(),
                    }
                    setPlanets(info);
                    localStorage.setItem("planets", JSON.stringify(info));
                })
        }
    }, [planets]);

    return (
        <div className="max-w-[600px] mx-auto my-8 p-8 rounded-3xl bg-black border-main border-2
        shadow-[0_0_20px_rgba(0,0,0,0.9),_0_0_25px_rgba(255,255,0,0.18)] text-gray-100 box-border">
            <form onSubmit={handleSubmit}>

                <label className={'form-label'} htmlFor="fName">First Name</label>
                <input className={'form-field'} type="text" id="fName" name="fName" placeholder="Your name.."/>

                <label className={'form-label'} htmlFor="lName">Last Name</label>
                <input className={'form-field'} type="text" id="lName" name="lName" placeholder="Your last name.."/>

                <label className={'form-label'} htmlFor="planet">Planet</label>
                <select className={'form-field'} id="planet" name="planet">
                    {planets.payload.map(name => (
                        <option key={name} value={name}>{name}</option>
                    ))}
                </select>

                <label className={'form-label'} htmlFor="subject">Subject</label>
                <textarea className={'form-field'} id="subject" name="subject" placeholder="Write something.."
                          style={{height: "200px"}}></textarea>

                <Button className={'mt-2 text-center text-main'} type="submit" onClick={handleSubmit}>Submit</Button>

            </form>
        </div>
    )
}

export default Contact;