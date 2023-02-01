import {useState} from 'react';
import styles from './styles.module.css';
import {Bar} from '../';
import {playerStats} from '../../shared/characters';

const red = '#821200';
const blue = '#1953cb';

export const PlayerSummary = ({ main = false, name, level, health, maxHealth }) => { 
return ( 
<div style={{ backgroundColor: main ? red : blue }} 
className={styles.main}>
    
<div className={styles.info}>
    <div className={styles.name}>{playerStats.name}</div>
    <div className={styles.level}>LVL: {level}</div>
</div>

<div className={styles.health}>
    <Bar label="HP" value={health} maxHealth={maxHealth} />
</div>
</div>
);
};