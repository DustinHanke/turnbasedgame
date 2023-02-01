import {useState} from 'react';
import styles from './styles.module.css';
import {PlayerSummary} from '../';

export const BattleMenu = () => { 
return ( 
<div className={styles.main}>
    <div className={styles.opponent}>
        <div className={styles.summary}>
        <PlayerSummary />
        </div>
    </div>

    <div className={styles.user}>
        <div className={styles.summary}>
        <PlayerSummary main />
        </div>
    </div>

</div>
);
};