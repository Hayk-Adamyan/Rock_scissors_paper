import React, {useEffect, useState} from 'react';

const App = () => {
    const [stateUser, setStateUser] = useState()
    const [stateComp, setStateComp] = useState()
    const [result, setResult] = useState()
    const choyses = ["qar", "tuxt", "mkrat"]

    const compChoise = () => {
        const random = choyses[Math.floor(Math.random() * choyses.length)]
        setStateComp(random)

    }
    const handleClick = (val) => {
        setStateUser(val)
        compChoise()

    }
    useEffect(()=>{
        gameResult()
    },[stateComp,stateUser])


    const gameResult = () => {
        // eslint-disable-next-line default-case
        switch (stateUser + stateComp) {
            case "qarmkrat":
            case "mkrattuxt":
            case "tuxtqar":
                setResult("YOU WIN")
                break
            case "qartuxt":
            case "mkratqar":
            case "tuxtmkrat":
                setResult("YOU LOSE")
                break
            case "qarqar":
            case "tuxttuxt":
            case "mkratmkrat":
                setResult("DRAW")
                break

        }

    }
    return (
        <div>
            <h1>user:{stateUser}</h1>
            <h1>computer:{stateComp}</h1>
            {choyses.map((choyse, index) => <button key={index} onClick={() => handleClick(choyse)}>{choyse}</button>)}
            <h1>{result}</h1>


        </div>
    );
};

export default App;