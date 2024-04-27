import style from "./App.module.sass"
import Light from "./components/Light/Light.tsx"
import {useState} from "react"

function App() {
    const [currentIndex, setCurrentIndex] = useState(0)

    const sequence = [0, 1, 2, 1]

    const changeColor = () => {
        setCurrentIndex(prevIndex => (prevIndex + 1) % sequence.length)
    }

    return (
        <>
            <div className={style.trafficLight}>
                <Light isActive={sequence[currentIndex] === 0} color={"red"}/>
                <Light isActive={sequence[currentIndex] === 1} color={"yellow"}/>
                <Light isActive={sequence[currentIndex] === 2} color={"green"}/>
            </div>
            <button onClick={changeColor}>Change color</button>
        </>
    )
}

export default App
