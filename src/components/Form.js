import {useContext} from 'react'
import MyContext from '../contexts/MyContext'

export const Form = () => {
    const context = useContext(MyContext)
    let currentName = ""

    const handleChange = (e) => {
        currentName = e.target.value
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        context.setName(currentName)
        console.log("It submitted!")
        console.log()
        e.target.value = ""
    }


    return (
    <div>
        <form onSubmit={handleSubmit}>
            <div>
                <label>Your Name:</label>
                <input type="text" onChange={handleChange} defaultValue=""></input>
            </div>
            <input type="submit" value="Change Name"></input>
        </form>
    </div>
    )
}
