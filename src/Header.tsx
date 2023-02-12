export function Header(props: {restart: () => void, onHelp: () => void}) {
    return (
        <header>
            <div className="header-spacer"></div>
            <div className="header-title"><h1 onClick={props.restart}>Find The Square</h1></div>
            <div className="header-info">
                <img
                    src="./images/info.png" 
                    alt="help"
                    width="40px"
                    onClick={props.onHelp}
                />
            </div>
        </header>
    )
}