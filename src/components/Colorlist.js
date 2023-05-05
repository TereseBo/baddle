import Colorcomp from "./Colorcomp"
export default function Colorlist({ colors, label, name, onClick }) {
    return (
        <div>
            <h3>{label}</h3>
            {colors.map((color, index) => (
                <Colorcomp key={index+name} color={color} />
            ))}
        </div>
    )
}