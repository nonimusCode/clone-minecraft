import { usePlane } from '@react-three/cannon'
import { groundTexture } from '../images/textures'
import { useStore } from '../hooks/UseStore'
import { useEffect } from 'react'

export function Ground() {
  const [ref] = usePlane(() => ({
    rotation: [-Math.PI / 2, 0, 0],
    position: [0, -0.5, 0]
  }))

  const [addCube] = useStore(state => [state.addCube])

  const handleClickGround = (event) => {
    event.stopPropagation()
    if (event.shiftKey) {
      return
    }
    const [x, y, z] = Object.values(event.point).map((point) => {
      return Math.ceil(point)
    })
    addCube(x, y, z)
  }
  useEffect(() => {
    groundTexture.repeat.set(200, 200)
  }, [])

  return (
    <mesh ref={ref} onClick={handleClickGround}>
      <planeBufferGeometry attach='geometry' args={[200, 200]} />
      <meshStandardMaterial attach='material' map={groundTexture} />
    </mesh>
  )
}
