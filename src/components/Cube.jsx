import { useBox } from '@react-three/cannon'
import * as textures from '../images/textures'
import { useState } from 'react'
import { useStore } from '../hooks/UseStore'
export const Cube = ({ id, position, texture }) => {
  const [isHovered, setIsHoverd] = useState(false)
  const [removeCube, addCube] = useStore(state => [state.removeCube, state.addCube])
  const [ref] = useBox(() => ({
    type: 'Static',
    position
  }))

  const handleClickCube = (e) => {
    e.stopPropagation()
    const clickedFace = Math.floor(e.faceIndex / 2)
    const [x, y, z] = ref.current.position

    const AddCubeBypositionFaces = {
      0: () => addCube(x + 1, y, z),
      1: () => addCube(x - 1, y, z),
      2: () => addCube(x, y + 1, z),
      3: () => addCube(x, y - 1, z),
      4: () => addCube(x, y, z + 1),
      5: () => addCube(x, y, z - 1)
    }
    if (e.shiftKey) {
      removeCube(id)
      return
    }

    AddCubeBypositionFaces[clickedFace]()
  }
  const ActiveTextures = textures[texture + 'Texture']

  return (
    <mesh ref={ref}
      onPointerMove={(e) => {
        e.stopPropagation()
        setIsHoverd(true)
      }}
      onPointerOut={(e) => {
        e.stopPropagation()
        setIsHoverd(false)
      }}
      onClick={handleClickCube}
    >
      <boxBufferGeometry attach='geometry' />
      <meshStandardMaterial color={isHovered ? 'grey' : 'white'} map={ActiveTextures} attach='material' />
    </mesh>
  )
}
