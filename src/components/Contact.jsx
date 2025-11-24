import '../css/contact.css'
import {useEffect, useState} from "react";
import {baseURL, EXPIDATE} from "../utils/constants.js";

const Contact = () => {
    const [planets, setPlanets] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const fName = formData.get("fName");
        const lName = formData.get("lName");
        const planet = formData.get("planet");
        const subject = formData.get("subject");
    }

    useEffect(() => {
        const planets = JSON.parse(localStorage.getItem("planets"));
        if (planets && (Date.now() - planets.expiryDate) < EXPIDATE) {
            setPlanets(planets.info);
        } else {
            fetch(`${baseURL}/v1/planets`)
            .then((res) => res.json())
            .then((data) => {
                let planetsNames = data.map(p => p.name);
                setPlanets(planetsNames);
                planetsNames = {
                    info: planetsNames,
                    expiryDate: Date.now(),
                }
                localStorage.setItem("planets", JSON.stringify(planetsNames));
            })
        }
    }, []);

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>

                <label htmlFor="fname">First Name</label>
                <input type="text" id="fname" name="firstname" placeholder="Your name.."/>

                <label htmlFor="lname">Last Name</label>
                <input type="text" id="lname" name="lastname" placeholder="Your last name.."/>

                <label htmlFor="planet">Planet</label>
                <select id="planet" name="planet">
                    {planets.map(name => (
                        <option key={name} value={name}>{name}</option>
                    ))}
                </select>

                <label htmlFor="subject">Subject</label>
                <textarea id="subject" name="subject" placeholder="Write something.." style={{height: "200px"}}></textarea>

                <input type="submit" value="Submit"/>

            </form>
        </div>
    )
}

export default Contact;