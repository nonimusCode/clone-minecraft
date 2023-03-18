import { grass, dirt, glass, log, woood } from './images'
import { NearestFilter, RepeatWrapping, TextureLoader } from 'three'

const groudTexture = new TextureLoader().load(grass)
const glassTexture = new TextureLoader().load(glass)
const dirtTexture = new TextureLoader().load(dirt)
const logTexture = new TextureLoader().load(log)
const wooodTexture = new TextureLoader().load(woood)

groudTexture.wrapS = RepeatWrapping
groudTexture.wrapT = RepeatWrapping
groudTexture.magFilter = NearestFilter

export { groudTexture, glassTexture, dirtTexture, logTexture, wooodTexture }
