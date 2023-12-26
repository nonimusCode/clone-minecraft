import { Canvas } from '@react-three/fiber'
import { Sky } from '@react-three/drei'
import { Physics } from '@react-three/cannon'
import { Ground } from './components/Ground'
import { FVP } from './components/FPV'
import { Player } from './components/Player'
import { Cubes } from './components/Cubes'
import { TextureSelected } from './components/TextureSelected'

function App() {
  return (
    <>
      <Canvas>
        <FVP />
        <Sky sunPosition={[100, 100, 20]} />
        <ambientLight intensity={0.5} />
        <TextureSelected/>
        <Physics>
          <Cubes />
          <Player />
          <Ground />
        </Physics>
      </Canvas>
      <div className='pointer'>+</div>
    </>
  )
}

export default App
