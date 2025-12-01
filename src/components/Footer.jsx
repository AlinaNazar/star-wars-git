import Button from "./ui/Button.jsx";

const Footer = () => {
    return (
        <footer className="clear-both rounded-b-3xl bg-grey h-20 grid grid-cols-8 items-center">
            <Button className={'col-start-3'}> Send me e-mail</Button>
            {/*<div className=" col-start-3 bg-red border-1 px-3 rounded-md cursor-pointer hover:bg-red-800 hover:text-yellow-100 hover: border-main">Send me email</div>*/}
        </footer>
    )
}

export default Footer;