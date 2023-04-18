import { useSphere } from '@react-three/cannon'
import { useFrame, useThree } from '@react-three/fiber'
import { useEffect, useRef } from 'react'
import { Vector3 } from 'three'
import { usekeyboard } from '../hooks/UseKeboard'

const CHAERTER_SPEED = 5
const CHARATECR_JUMP_FORCE = 4

export function Player() {
    const {
        moveBackward,
        moveForward,
        moveLeft,
        moveRaight,
        jump
    } = usekeyboard()
    const { camera } = useThree()
    const [ref, api] = useSphere(() => ({
        mass: 1,
        type: 'Dynamic',
        position: [0, 1, 0]
    }))
    const pos = useRef([0, 0, 0])

    useEffect(() => {
        api.position.subscribe(p => {
            pos.current = p
        })
    }, [api.position])

    const vel = useRef([0, 0, 0])

    useEffect(() => {
        api.velocity.subscribe(v => {
            vel.current = v
        })
    }, [api.velocity])

    useFrame(() => {
        camera.position.copy(
            new Vector3(
                pos.current[0],
                pos.current[1],
                pos.current[2],
            )
        )
        const direction = new Vector3()
        const fromVector = new Vector3(
            0,
            0,
            (moveBackward ? 1 : 0) - (moveForward ? 1 : 0)
        )
        const sideVector = new Vector3(
            (moveLeft ? 1 : 0) - (moveRaight ? 1 : 0),
            0,
            0,
        )

        direction
            .subVectors(fromVector, sideVector)
            .normalize()
            .multiplyScalar(CHAERTER_SPEED)
            .applyEuler(camera.rotation)

        api.velocity.set(
            direction.x,
            vel.current[1],
            direction.z
        )
        if (jump) {
            api.velocity.set(
                vel.current[0],
                CHARATECR_JUMP_FORCE,
                vel.current[2]
            )
        }
    })

    return (
        <mesh ref={ref} />
    )
}
