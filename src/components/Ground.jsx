import { usePlane } from '@react-three/cannon'
import { groudTexture } from '../images/textures'

export function Ground() {
    const [ref] = usePlane(() => ({
        rotation: [-Math.PI / 2, 0, 0],
        position: [0, -0.5, 0]
    }))
    groudTexture.repeat.set(100, 100)

    return (
      <mesh ref={ref}>
        <planeBufferGeometry attach='geometry' args={[100, 100]} />
        <meshStandardMaterial attach='material' map={groudTexture} />
      </mesh>
    )
}
