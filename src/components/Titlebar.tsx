
type TitlebarProps = {text: string}

export default function Titlebar(props:TitlebarProps) {
        return (
            <div>
                <h1 className="font-roboto justify-self-center text-3xl py-4">{props.text}</h1>
            </div>
        );
}