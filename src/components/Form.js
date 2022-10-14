export const Form = () => {

    const handleChange = (e) => {
        console.log(e)
    }
    return (
    <div>
        <form onSubmit="handleSubmit">
            <div>
                <label>Your Name:</label>
                <input type="text" onChange={handleChange(e.target.value)}></input>
            </div>
        </form>
    </div>
    )
}
