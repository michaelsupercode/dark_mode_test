import { useContext, useEffect } from "react";
import Nav from "../components/Nav";
import { mainContext } from "../context/useContext";

const Home = () => {

    const { mode, setMode } = useContext(mainContext)

    console.log(mode)

    function toggle() {
        setMode(prev => !prev)
    }

    function changeColor() {
        if (mode) {
            document.body.style.backgroundColor = "black"
            document.body.style.color = "white"
        } else {
            document.body.style.backgroundColor = "white"
            document.body.style.color = "black"
        }
    }


    useEffect(() => {
        changeColor()
    }, [mode])


    return (
        <>
            <h1>Home</h1>
            <button onClick={toggle}>change</button>
            <Nav />
        </>
        
    );

}

export default Home;