import React, { useContext } from 'react';
import { CountdownContext } from '../contexts/CountdownContext';
import styles from '../styles/components/Countdown.module.css';

export function Countdown() {
    const style = {
        fill: 'var(--red)'
    }

    const { 
        minutes, 
        seconds, 
        isActive, 
        hasFinished, 
        startCountdown, 
        resetCountdown
    } = useContext(CountdownContext)

    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

    return (
        <div>
            <div className={styles.countdownContainer}>
                <div>
                    <span>{minuteLeft}</span>
                    <span>{minuteRight}</span>
                </div>
                <span>:</span>
                <div>
                    <span>{secondLeft}</span>
                    <span>{secondRight}</span>
                </div>
            </div>

            { hasFinished ? (
                <button
                    disabled
                    className={styles.countdownButton}
                >
                    Ciclo encerrado
                    <img src="/icons/carraca.svg" alt="" />
                </button>
            ) : (
                    <>
                        { isActive ? (
                            <button
                                type="button"
                                className={`${styles.countdownButton} ${styles.countdownButtonActive} ${styles.countdownButtonQuit}`}
                                onClick={resetCountdown}
                            >
                                Abandonar ciclo
                                <img src="/icons/close.svg" alt="Desistir" style={style}/>
                            </button>
                        ) : (
                                <button
                                    type="button"
                                    className={styles.countdownButton}
                                    onClick={startCountdown}
                                >
                                    Iniciar ciclo
                                    <img src="/icons/level.svg" alt="" />
                                </button>
                            )}
                    </>
                )}
        </div>
    );
}