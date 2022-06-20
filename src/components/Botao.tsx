interface BotaoProps {
    icone?: any,
    children?: any,
    className?: string,
    clearClass?: boolean,
    onClick?: () => void,
}

export default function Botao(props: BotaoProps) {
    return (
        <button onClick={props.onClick} className={`
            ${props.clearClass
                ? `${props?.className}`
                : `flex justify-center items-center p-2 m-1 rounded-full  ${props?.className}`
            }
        `}>
            {props.icone}
            {props.children}
        </button>
    )
}