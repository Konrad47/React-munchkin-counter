import Player from "./Player"

const Players = ({
    players,
    onAddLevel,
    onAddStrength,
    onMinusLevel,
    onMinusStrength,
    onDelete
}) => {
    return (
        <>
            {players.map((player) => (
                <Player key={player.id}
                    player={player}
                    onAddLevel={onAddLevel}
                    onAddStrength={onAddStrength}
                    onMinusLevel={onMinusLevel}
                    onMinusStrength={onMinusStrength}
                    onDelete={onDelete}
                />
            ))}
        </>
    )
}

export default Players