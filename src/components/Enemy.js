import React, { useEffect, useState } from 'react';
import { getUserData } from '../utils/utils'

function Enemy({ enemy, setEnemy, playerTurn, spr }) {


    const [user, setUser] = useState(() => {
        return []
    })

    useEffect(() => {
        getUserData().then(data => {
            const randomUser = data[Math.floor(Math.random() * data.length)]
            setUser(randomUser)
            setEnemy((enemy) => ({ ...enemy, name: randomUser.login, avatar_url: randomUser.avatar_url }))
        })
    }, []);


    // setEnemy((enemy) => {...enemy, name: user.login})


    const { avatar_url, login } = user


    return (

        <div id="enemy-container">
            <div className="character-stats">
                <div className="name-level">
                    <h2 className="name">{login}</h2>
                    <h2>Lv10</h2>
                </div>
                <div className="bar">
                    HP<progress value={enemy.hp} max="100">0%</progress>
                    <h5><span className={enemy.hp > 60 ? "" : enemy.hp > 30 ? "yellow" : "red"}>{enemy.hp}</span>/100</h5>
                </div>
            </div>
            <div className={"pokemon-display " + (spr === "used" ? "spr" : "")}>
                <img className={"enemy-pokemon " + (!playerTurn ? "hit" : "enemyatk")} src={avatar_url} />
                <div className="grey-oval"></div>
            </div>
        </div>
    )

}

export default Enemy