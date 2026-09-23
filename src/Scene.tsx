import { Canvas } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera, Stars } from '@react-three/drei'
import { Suspense } from 'react'
import { SystemDef } from './engine'
function Core({color}:{color:string}) { return <mesh rotation={[.2,.3,0]}><icosahedronGeometry args={[1.05,2]}/><meshStandardMaterial color={color} emissive={color} emissiveIntensity={.32} roughness={.25}/></mesh> }
function Scene({system}:{system:SystemDef}) { return <Canvas dpr={[1,2]} fallback={<div className="fallback">3D preview unavailable — use the live metrics below.</div>}><PerspectiveCamera makeDefault position={[0,0,4.3]}/><ambientLight intensity={.7}/><pointLight position={[3,2,4]} intensity={20} color={system.color}/><pointLight position={[-3,-2,1]} intensity={8} color="#4466ff"/><Suspense fallback={null}><Stars radius={16} depth={8} count={700} factor={2}/><Core color={system.color}/><OrbitControls enablePan={false} autoRotate autoRotateSpeed={.4} enableDamping/></Suspense></Canvas> }
export default Scene
