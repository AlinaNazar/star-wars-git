const Text = ({children}) => {
    return (
        <p className={"text-[2rem] text-justify tracking-[0.1em] leading-[1.5]"}>
            <span className={"mr-3 size-5 animate-spin ..."}>{children}</span>
        </p>
    )
}

export default Text;