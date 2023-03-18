import { useEffect, useState } from 'react'

const ACTIONS_KEYBOARD_MAP = {
    KeyW: 'moveForward',
    KeyS: 'moveBackward',
    KeyD: 'moveRaight',
    KeyA: 'moveLeft',
    Space: 'jump',
    Digit1: 'dirt',
    Digit2: 'grass',
    Digit3: 'glass',
    Digit4: 'wood',
    Digit5: 'log'
}

export function usekeyboard() {
    const [actions, setAcctions] = useState({
        moveForward: false,
        moveBackward: false,
        moveLeft: false,
        moveRaight: false,
        jump: false,
        dirt: false,
        grass: false,
        glass: false,
        log: false,
        wood: false
    })

    useEffect(() => {
        const handleKeyDown = (event) => {
            const { code } = event
            const playAction = ACTIONS_KEYBOARD_MAP[code]

            if (playAction) {
                if (actions[playAction]) return

                setAcctions(prevAccion => ({
                    ...prevAccion, [playAction]: true
                }))
            }
        }
        const handleKeyUp = (event) => {
            const { code } = event
            const playAction = ACTIONS_KEYBOARD_MAP[code]

            if (playAction) {
                setAcctions(prevAccion => ({
                    ...prevAccion, [playAction]: false
                }))
            }
        }

        document.addEventListener('keydown', handleKeyDown)
        document.addEventListener('keyup', handleKeyUp)

        return () => {
            document.removeEventListener('keydown', handleKeyDown)
            document.removeEventListener('keyup', handleKeyUp)
        }
    })
    return { actions }
}
