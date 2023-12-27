import { create } from 'zustand'
import { nanoid } from 'nanoid'

const getItemlocalStorage = (key) => JSON.parse(window.localStorage.getItem(key))

export const useStore = create(set => ({
    texture: 'dirt',
    cubes: getItemlocalStorage('cubes') || [],
    ground: 'dirt',
    addCube: (x, y, z) => {
        set(prev => ({
            cubes: [...prev.cubes, {
                id: nanoid(),
                texture: prev.texture,
                position: [x, y, z]
            }]
        }))
    },
    removeCube: (id) => {
        set(prev => ({
            cubes: prev.cubes.filter(cube => cube.id !== id)
        }))
    },
    setTexture: (texture) => {
        set({ texture })
    },
    setGround: (ground) => {
        set({ ground })
    },
    resetWorld: () => {
        set(() => ({ cubes: [] }))
    }
}))
