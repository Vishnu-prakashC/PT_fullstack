import { useState } from "react"
import './State.css'; // Ensure you have a CSS file for styling

const Form =()=>{
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        department: "",

    })
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev)=> ({
            ...prev,
            [name]: value
        }))

    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    }
    return(
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                <label htmlFor="">Name:</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} /><br />
                <label htmlFor="">Email:</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} /><br />
                <label htmlFor="password">Password:</label>
                <input type="password" name="password" value={formData.password} onChange={handleChange} /><br />
                <button type="submit">submit</button>
                </form>
            </div>
    )
}
export default Form;
