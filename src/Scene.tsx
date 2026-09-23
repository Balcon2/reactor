import { Canvas } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera } from '@react-three/drei'
import { Suspense } from 'react'
import { SystemDef } from './engine'

function Tank({position=[0,0,0], color='#2c6170', scale=[1,1,1]}:{position?:[number,number,number],color?:string,scale?:[number,number,number]}) {
  return <group position={position} scale={scale}><mesh><cylinderGeometry args={[.48, .48, 1.5, 20]}/><meshStandardMaterial color={color} metalness={.35} roughness={.5}/></mesh><mesh position={[0,.77,0]}><torusGeometry args={[.48,.035,8,20]}/><meshStandardMaterial color="#b5d9d8" emissive="#4f8584" emissiveIntensity={.3}/></mesh></group>
}
function Pipe({position=[0,0,0],rotation=[0,0,0],color='#e4a84d'}:{position?:[number,number,number],rotation?:[number,number,number],color?:string}) {
  return <mesh position={position} rotation={rotation}><cylinderGeometry args={[.055,.055,1.7,10]}/><meshStandardMaterial color={color} metalness={.55}/></mesh>
}
function Plant({system}:{system:SystemDef}) {
  const thermal=system.plant==='storage'||system.plant==='thermal'||system.plant==='hybrid'
  return <group>
    <mesh position={[0,-.82,0]}><boxGeometry args={[4.8,.12,3]}/><meshStandardMaterial color="#132d3c" roughness={.8}/></mesh>
    {thermal ? <><Tank position={[-1.25,0,0]} color={system.color} scale={[1,1.1,1]}/><Tank position={[1.15,0,0]} color="#2d5364" scale={[.85,.8,.85]}/><Pipe position={[-.2,.15,0]} rotation={[0,0,Math.PI/2]} color={system.color}/><Pipe position={[.3,-.22,.2]} rotation={[0,0,Math.PI/2]} color="#6bc7bd"/><mesh position={[0,-.2,-.65]}><boxGeometry args={[1.2,.45,.35]}/><meshStandardMaterial color="#244b5b"/></mesh></> : <><mesh position={[0,-.05,0]}><boxGeometry args={[1.55,1.2,.9]}/><meshStandardMaterial color="#315565" metalness={.25}/></mesh><Tank position={[-1.2,0,.1]} color={system.color} scale={[.65,.8,.65]}/><Pipe position={[.65,.3,0]} rotation={[0,0,Math.PI/2]} color={system.color}/></>}
    {system.plant==='solar'||system.plant==='hybrid' ? <group position={[0,.25,-1]} rotation={[-.35,0,0]}>{[-1.1,0,1.1].map(x=><mesh key={x} position={[x,0,0]}><boxGeometry args={[.85,.04,.8]}/><meshStandardMaterial color="#285b78" metalness={.5} roughness={.25}/></mesh>)}</group>:null}
  </group>
}
function Scene({system,mode='Plant'}:{system:SystemDef,mode?:string}) {
  return <Canvas dpr={[1,2]} fallback={<div className="fallback">3D preview unavailable — use the live metrics below.</div>}><PerspectiveCamera makeDefault position={[0,2.6,5.2]}/><ambientLight intensity={.8}/><directionalLight position={[3,5,4]} intensity={3} color={system.color}/><pointLight position={[-3,1,2]} intensity={8} color="#4c86ff"/><Suspense fallback={null}><Plant system={system}/>{mode==='Flow'&&<><mesh position={[0,.95,0]}><torusGeometry args={[1.55,.025,8,64]}/><meshStandardMaterial color={system.color} emissive={system.color} emissiveIntensity={1}/></mesh></>}<OrbitControls enablePan={false} autoRotate={mode==='Plant'} autoRotateSpeed={.35} enableDamping/></Suspense></Canvas>
}
export default Scene
