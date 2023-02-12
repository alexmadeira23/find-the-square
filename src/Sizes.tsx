export function Sizes(props: { onSizeSelection: (size: number) => () => void }) {
    return (
        <div id="sizes">
            {[8, 9, 10, 11, 12, 13, 14, 15].map((i) => 
                <div key={i} onClick={props.onSizeSelection(i)} className="size">{i}</div>
            )}
        </div>
    )
}