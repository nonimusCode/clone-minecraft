import { useBox } from '@react-three/cannon'
import * as textures from '../images/textures'
import { useState } from 'react'
import { useStore } from '../hooks/UseStore'
export const Cube = ({ id, position, texture }) => {
    const [ isHovered, setIsHoverd ] = useState(false)
    const [removeCube] = useStore(state => [state.removeCube])
    const [ref] = useBox(() => ({
        type: 'Static',
        position
    }))

    const handleDeleteCube = (event) => {
        if (event.shiftKey) {
            removeCube(id)
        }
    }

    const ActiveTextures = textures[texture + 'Texture']

    return (
      <mesh ref={ref}
        onPointerMove={(e) => {
        e.stopPropagation()
        setIsHoverd(true)
        handleDeleteCube(e)
      }}
        onPointerOut={(e) => {
            e.stopPropagation()
            setIsHoverd(false)
        }}
      >
        <boxBufferGeometry attach='geometry' />
        <meshStandardMaterial color={isHovered ? 'grey' : 'white'}map={ActiveTextures} attach='material' />
      </mesh>
    )
}
