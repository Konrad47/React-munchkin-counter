import { useState } from "react"

const AddPlayer = ({ onAdd }) => {
    const [name, setName] = useState("")
    const [level, setLevel] = useState(1)
    const [strength, setStrength] = useState(1)

    const onSubmit = (e) => {
        e.preventDefault()

        if(!name) {
            alert("Please add a name")
            return
        }

        onAdd({ name, level, strength })

        setName("")
        setLevel(1)
        setStrength(1)
    }



    return (
        <form onSubmit={onSubmit} className="add-form">
            <div>
                <label>Add Player: </label>
                <input
                    type="text"
                    maxLength="12"
                    placeholder="Add Name"
                    value={name}
                    onChange={(e) =>
                        setName(e.target.value)}
                />
            </div>
            <input
                type="submit"
                value="Save Player"
                className="button"
            />
        </form>
    )
}

export default AddPlayer