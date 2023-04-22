import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import {useRef, useEffect, useState, FC} from 'react'
import { MeshShadow } from "@react-three/drei"


interface EthModelProps {
  rotationY: number
}

const ModelMash: FC<EthModelProps> = ({rotationY}) => {
  const gltfRef = useRef();
  const [rotationX, setRotationX] = useState(0)


  useEffect(() => {
    const gltfLoader = new GLTFLoader();
    gltfLoader.load('/models/eth.gltf', (gltf) => {
      gltfRef.current = gltf;
    })
  }, [])

  useFrame(() => {
    setRotationX(rotationX + 0.02)
  })

  return (
    <mesh
      visible
      position={[0, 0, 0]}
      rotation={[rotationY, rotationX, 0]}
      scale={[1, 1, 1]}
      castShadow
      receiveShadow
    >
      {gltfRef.current && (
        <primitive object={gltfRef.current.scene} />

      )}
    </mesh>
  )
}


const EthModel: FC<EthModelProps> = ({rotationY}) => {

  const controlsRef = useRef();






  return (
    <Canvas
      camera={{ position: [0, 0, 5] }}
      onCreated={({ gl, camera }) => {
        const controls = new OrbitControls(camera, gl.domElement);
        controlsRef.current = controls;
        controls.enableRotate = false;
      }}
    >
      <ambientLight intensity={0.5} />
      <spotLight intensity={0.8} position={[300, 300, 400]} />
      <ModelMash rotationY={rotationY}/>
    </Canvas>
  )
}

export default EthModel
