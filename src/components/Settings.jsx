import { useEffect } from 'react'
import { usekeyboard } from '../hooks/UseKeboard'
import { useStore } from '../hooks/UseStore'
import { useState } from 'react'

export const Settings = () => {
    const [resetWorld, cubes] = useStore((state) => [state.resetWorld, state.cubes])
    const { settings } = usekeyboard()
    const [settingsActive, setSettingsActive] = useState(settings)

    const setItemlocalStorage = (key, value) => window.localStorage.setItem(key, JSON.stringify(value))


    useEffect(() => {
        if (!settings || settingsActive) {
            return
        }
        setSettingsActive(settings)
    }, [settings])

    const handleSave = () => {
        setItemlocalStorage('cubes', cubes)
        setSettingsActive(false)
    }
    const handleReset = () => {
        resetWorld()
        setSettingsActive(false)
    }
    return (
        <>
            {settingsActive &&
                <div className='settings'>
                    <span className='circle-button-cancel' onClick={() => setSettingsActive(false)}>X</span>
                    <button className='button' onClick={handleSave}>Save</button>
                    <button className='button' onClick={handleReset}>Reset</button>
                </div>
            }
        </>
    )
}
