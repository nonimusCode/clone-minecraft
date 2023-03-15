import { grass } from './images'
import { NearestFilter, RepeatWrapping, TextureLoader } from 'three'

const groudTexture = new TextureLoader().load(grass)

groudTexture.wrapS = RepeatWrapping
groudTexture.wrapT = RepeatWrapping
groudTexture.magFilter = NearestFilter

export { groudTexture }
