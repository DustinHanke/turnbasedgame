import {useState} from 'react';
import styles from './styles.module.css';
import {BattleMenu, PlayerSummary} from '..';
import { opponentStats, playerStats } from '../../shared/characters';


export const Battle = () => { 

    const [playerHealth, setPlayerHealth] = useState(playerStats.maxHealth);
    const [opponentHealth, setOpponentHealth] = useState(opponentStats.maxHealth);

return ( 
<div className={styles.main}>
    <div className={styles.opponent}>
        <div className={styles.summary}>
        <PlayerSummary 
                health={opponentStats.health} 
                name={opponentStats.name}
                level={opponentStats.level}
                maxHealth={opponentStats.maxHealth}
        />
        </div>
    </div>

    <div className={styles.characters}>
        <div className={styles.gameHeader}>
        {playerStats.name} vs {opponentStats.name}

    <div className={styles.gameImages}>
        <div className={styles.playerSprite}>
        <img 
         src={playerStats.img}
         
         >
        </img>

        </div>

        <div className={styles.opponentSprite}>
        <img 
         src={opponentStats.img}>
        </img>

        </div>
    </div>

    </div>
    </div>

    <div className={styles.user}>
        <div className={styles.summary}>
        <PlayerSummary
        main
        health={playerHealth} 
        name={playerStats.name}
        level={playerStats.level}
        maxHealth={playerStats.maxHealth}
        />
        </div>
    </div>

    <div className={styles.hudChild}>
<BattleMenu
    onAttack={() => console.log('Attack!')}
    onHeal={() => console.log('Heal!')}
    onMagic={() => console.log('Magic!')}

    />
    </div>

</div>
);
};