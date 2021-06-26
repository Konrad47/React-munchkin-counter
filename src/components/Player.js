import { GrAddCircle } from "react-icons/gr";
import { FiMinusCircle } from "react-icons/fi";
import { FaTimes } from "react-icons/fa"

const Player = ({
    player,
    onAddLevel,
    onAddStrength,
    onMinusLevel,
    onMinusStrength,
    onDelete
}) => {
    return (
        <div className="player">
            <h3>{player.name} <FaTimes
                style={{ cursor: "pointer" }}
                onClick={() => onDelete(player.id)}
            /></h3>
            <p>Level: {player.level}
                <hr />
                <GrAddCircle
                    style={{
                        cursor: "pointer"
                    }} onClick={() => onAddLevel(player.id)}
                />
                <FiMinusCircle
                    style={{
                        cursor: "pointer"
                    }} onClick={() => onMinusLevel(player.id)}
                />
            </p>

            <p>Strength: {player.strength}
                <hr />
                <GrAddCircle
                    style={{ cursor: "pointer" }}
                    onClick={() => onAddStrength(player.id)}
                />
                <FiMinusCircle
                    style={{
                        cursor: "pointer"
                    }} onClick={() => onMinusStrength(player.id)}
                />
            </p>
        </div>
    )
}

export default Player