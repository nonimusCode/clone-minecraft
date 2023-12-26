import { useEffect } from 'react'
import { usekeyboard } from '../hooks/UseKeboard'
import { useStore } from '../hooks/UseStore'

export function TextureSelected() {
    const [setTexture] = useStore(state => [state.setTexture])

    const {
        dirt,
        grass,
        glass,
        log,
        wood
    } = usekeyboard()

    useEffect(() => {
        const options = {
            dirt,
            grass,
            glass,
            log,
            wood
        }
        const selectedTexture = Object.entries(options).find(([texture, isEnable]) => isEnable)

        console.log(selectedTexture)

        if (selectedTexture) {
            const [textureName] = selectedTexture
            setTexture(textureName)
        }
    },
        [dirt, grass, glass, log, wood])

    return null
}
