import Welcome from "../welcome";
import Skills from "../skills";

const Home = () => {
    return (
        <div>

            
            <h1>Home Page</h1>
            <Welcome name='vishnu' country="india" />
            <Skills skill={['html', 'css', 'js', 'react']} />
            <h1>Hello World</h1>
            <p>This is the home page of your Vite project.</p>
            
        
        </div>
    )
}
export default Home;