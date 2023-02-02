import {useState} from 'react';
import styles from './styles.module.css';
import {Bar} from '../';
import {playerStats} from '../../shared/characters';

const red = 'lightgrey';
const blue = '#A2C8EB';

export const PlayerSummary = ({ main = false, name, level, health, maxHealth }) => { 
return ( 
<div style={{ backgroundColor: main ? red : blue }} 
className={styles.main}>
    
<div className={styles.info}>
    <div className={styles.name}>{name}</div>
    <div className={styles.level}>LVL: {level}</div>
</div>

<div className={styles.health}>
    <Bar label="HP" value={health} maxValue={maxHealth} />
</div>
</div>
);
};