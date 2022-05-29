import React, {useEffect , useState}from 'react'
import '../../App.css'
const Car = ({startGame , setstartGame}) => {
    const carImage = require('./car.png');
    const [active , setActive] = useState(false);
    const [Score, setScore] = useState(0);
    const jump = () => {
        if(!active){
            setScore(Score + 1);
            setActive(true);
        }
        setTimeout(() => {
            setActive(false)
        }, 500);
    }
    const collison = () => {
        var model = document.getElementById('car');
        var CarTop = parseInt(getComputedStyle(model).top);
        var model2 = document.querySelector('span');
        var obstacleLeft = parseInt(getComputedStyle(model2).right);

        if(obstacleLeft >= 530 && obstacleLeft <= 590 && CarTop >= 360){
            setScore(0);
            
            alert("Game Over");
            model2.style.display = "none";
            var storedScore = parseInt(localStorage.getItem('score'));
            if(storedScore != null){
                if(storedScore < Score){
                    localStorage.setItem('score' , Score);
                }
                if(storedScore === undefined){
                    localStorage.setItem('score' , 0);
                }
            }
            setstartGame(false);
        }
    }

    const GameStart = () => {
        setstartGame(true);
        var obstacleLeft = document.querySelector('span');
        obstacleLeft.style.display = "inline";
    }

    useEffect(() => {
        if(startGame){
            document.addEventListener('keypress' , jump);
        }
        const interval = setInterval(collison , 10)
        return () => {
            clearInterval(interval);
        }
    }) 
    return(
        <>
            <h1 className='title'>Car Dash</h1>
            <br />
            <h2 className='sub'>- By Dev</h2>

            <button className='start' onClick={GameStart}>Start Game</button>
            <p>Score: {Score}</p>
            <p className='hi'>HIGH SCORE: {localStorage.getItem('score')}</p>
            <div className="car">
                <img id = "car" height={"55px"} width={"155px"} className= {active ? 'car-jump' : null} src = {carImage} alt = "" />
            </div>
            
            <span className='obstacle2'></span>
            
            <hr class = "e" width="100%" color = "white" margin-top="-100px" />
        </>
    );
}

export default Car;