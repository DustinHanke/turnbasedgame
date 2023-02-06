import { useEffect, useState } from "react"

export const useAIOpponent = turn => {
    const[aiChoice, setAIChoice] = useState('');
    useEffect(() => {
        if (turn !== 1) return;
        const options = ['attack', 'magic', 'heal']
        setAIChoice(options[Math.floor(Math.random()* options.legnth)]);
    }, [turn]);

    return aiChoice;
};
