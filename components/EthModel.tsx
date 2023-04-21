import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import {useRef, useEffect} from 'react'



const EthModel = () => {
  const gltfRef = useRef();
  const controlsRef = useRef();

  useEffect(() => {
    const gltfLoader = new GLTFLoader();
    gltfLoader.load('/models/eth.gltf', (gltf) => {
      gltfRef.current = gltf;
    })
  }, [])



  return (
    <Canvas
      camera={{ position: [0, 0, 5] }}
      onCreated={({ gl, camera }) => {
        const controls = new OrbitControls(camera, gl.domElement);
        controlsRef.current = controls;
      }}
    >
      <ambientLight intensity={0.5} />
      <spotLight intensity={0.8} position={[300, 300, 400]} />
      <mesh
        visible
        position={[0, 0, 0]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[1, 1, 1]}
      >
        {gltfRef.current && <primitive object={gltfRef.current.scene} />}
      </mesh>
    </Canvas>
  )
}

export default EthModel
