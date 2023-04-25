
import "./Thread.scss"
export default function Thread({ onClick, row, index, color }) {
    return (
        <div className="Thread" onClick={onClick} data-row={row} data-index={index} style={{ backgroundColor: color }}></div>
    )
}