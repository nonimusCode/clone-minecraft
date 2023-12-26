import { usePlane } from '@react-three/cannon'
import { groudTexture } from '../images/textures'
import { useStore } from '../hooks/UseStore'

export function Ground() {
  const [ref] = usePlane(() => ({
    rotation: [-Math.PI / 2, 0, 0],
    position: [0, -0.5, 0]
  }))

  const [addCube] = useStore(state => [state.addCube])

  const handleClickGround = (event) => {
    event.stopPropagation()
    const [x, y, z] = Object.values(event.point).map((point) => {
      return Math.ceil(point)
    })
    addCube(x, y, z)
  }
  groudTexture.repeat.set(100, 100)

  return (
    <mesh ref={ref} onClick={handleClickGround}>
      <planeBufferGeometry attach='geometry' args={[100, 100]} />
      <meshStandardMaterial attach='material' map={groudTexture} />
    </mesh>
  )
}
