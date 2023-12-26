import { grass, dirt, glass, log, woood } from './images'
import { NearestFilter, RepeatWrapping, TextureLoader } from 'three'

const grassTexture = new TextureLoader().load(grass)
const glassTexture = new TextureLoader().load(glass)
const dirtTexture = new TextureLoader().load(dirt)
const logTexture = new TextureLoader().load(log)
const woodTexture = new TextureLoader().load(woood)

grassTexture.wrapS = RepeatWrapping
grassTexture.wrapT = RepeatWrapping
grassTexture.magFilter = NearestFilter

glassTexture.wrapS = RepeatWrapping
glassTexture.wrapT = RepeatWrapping
glassTexture.magFilter = NearestFilter

dirtTexture.wrapS = RepeatWrapping
dirtTexture.wrapT = RepeatWrapping
dirtTexture.magFilter = NearestFilter

logTexture.wrapS = RepeatWrapping
logTexture.wrapT = RepeatWrapping
logTexture.magFilter = NearestFilter

woodTexture.wrapS = RepeatWrapping
woodTexture.wrapT = RepeatWrapping
woodTexture.magFilter = NearestFilter

export { grassTexture, glassTexture, dirtTexture, logTexture, woodTexture }
