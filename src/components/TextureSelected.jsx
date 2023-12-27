import { useEffect } from 'react'
import { usekeyboard } from '../hooks/UseKeboard'
import { useStore } from '../hooks/UseStore'
import * as images from '../images/images'

export function TextureSelected() {
    const [ setTexture, texture ] = useStore(state => [state.setTexture, state.texture])

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

        if (selectedTexture) {
            const [textureName] = selectedTexture
            setTexture(textureName)
        }
    },
        [dirt, grass, glass, log, wood])

    return (
      <div className='select-items-bar'>
        {Object.entries(images).map(([key, src]) => (
          <div
            key={key}
            className={`item-slot ${texture === key ? 'selected' : ''}`}
          >
            <img key={key} src={src} alt={key} className='images-material' />

          </div>
            ))}
      </div>
    )
}
