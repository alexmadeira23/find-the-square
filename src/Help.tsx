export function Help(props: {show: boolean, onClose: () => void}) {
        return (
            <div className={`help-container ${props.show ? "" : "help-container-none"}`} onClick={props.onClose}>
                <div className="help-inner">
                    <h1>Instructions</h1>
                    <h2>Description</h2>
                    <div>
                        Find The Square is a simple game where you can select the size of the side of the board and one of the squares of the board will be randomly selected as the correct square.
                        You must then click squares in the board until you find the correct square.
                    </div>
                    <h2>Helpful Information</h2>
                    <div>- If the selected square is <b>correct</b>, it becomes <b style={{color: "#538d4e"}}>green</b></div>
                    <div>- If the selected square is <b>close</b>, it becomes <b style={{color: "#b59f3b"}}>yellow</b></div>
                    <div>- If the selected square is <b>far</b>, it becomes <b style={{color: "#3a3a3c"}}>gray</b></div>
                    <br />
                    <div> A square is considered close when the correct square is within 3 squares of distance vertically <b>and</b> horizontally.</div>
                </div>
            </div>
        )
}