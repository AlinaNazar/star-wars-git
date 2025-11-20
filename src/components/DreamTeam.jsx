import {friends} from "../utils/constants.js";
import Friend from "./Friend.jsx";

const DreamTeam = () => {
    return (
        <section className="float-end w-50 row border border-warning rounded-bottom-4 ms-2 me-0">
            <h2 className="text-center text-center">Dream team</h2>
            {friends.map((f, i) => <Friend friend={f} key={i} pos={i + 1}/>)}
        </section>
    );
};

export default DreamTeam;