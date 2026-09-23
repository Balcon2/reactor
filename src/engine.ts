export type SystemId = 'tidal'|'solar'|'wind'|'hydro'|'geothermal'|'bio'|'storage'|'fusion'|'orbital'
export type SystemDef = { id: SystemId; name: string; kicker: string; description: string; color: string; accent: string; variables: [string,string,string]; unit: string; plant: 'water'|'solar'|'wind'|'thermal'|'storage'|'hybrid' }
export const systems: SystemDef[] = [
  { id:'tidal', name:'Tidal Array', kicker:'Marine current', description:'Turbines harvest predictable movement in a fictional channel.', color:'#27d3b2', accent:'#0d5d59', variables:['Flow speed','Blade pitch','Turbine count'], unit:'flow units', plant:'water' },
  { id:'solar', name:'Solar Field', kicker:'Photonic input', description:'A field of panels turns an idealized light budget into useful work.', color:'#ffc857', accent:'#7b5d14', variables:['Irradiance','Panel tilt','Panel area'], unit:'light units', plant:'solar' },
  { id:'wind', name:'Wind Cluster', kicker:'Atmospheric flow', description:'A cluster balances gusts, rotor area, and wake losses.', color:'#7dd3fc', accent:'#165477', variables:['Wind speed','Yaw alignment','Rotor area'], unit:'wind units', plant:'wind' },
  { id:'hydro', name:'River Turbine', kicker:'Gravitational flow', description:'A head-and-flow model explores how water becomes shaft work.', color:'#60a5fa', accent:'#174a80', variables:['Head height','Gate opening','Flow rate'], unit:'head units', plant:'water' },
  { id:'geothermal', name:'Geothermal Loop', kicker:'Earth heat', description:'A closed loop moves heat between an underground reservoir and a generator.', color:'#fb7185', accent:'#7d2437', variables:['Reservoir heat','Flow rate','Insulation'], unit:'heat units', plant:'thermal' },
  { id:'bio', name:'Thermal Storage Plant', kicker:'System 06 · heat reserve', description:'A fictional insulated store shifts modeled heat across a demand curve.', color:'#a3e635', accent:'#416510', variables:['Charge rate','Reserve','Insulation'], unit:'thermal units', plant:'storage' },
  { id:'storage', name:'Renewable Hybrid Plant', kicker:'System 07 · solar + storage', description:'A conceptual plant routes PV directly to an electrical bus and stores surplus heat separately.', color:'#c084fc', accent:'#5c2a93', variables:['Sun input','Thermal reserve','Grid demand'], unit:'hybrid units', plant:'hybrid' },
  { id:'fusion', name:'Stellar Plasma', kicker:'Boundary conditions', description:'A safe, dimensionless sandbox for competing confinement variables.', color:'#f0abfc', accent:'#702b79', variables:['Confinement','Density','Stability'], unit:'plasma units', plant:'thermal' },
  { id:'orbital', name:'Orbital Solar', kicker:'Space collection', description:'A conceptual constellation compares collection time with relay loss.', color:'#fda4af', accent:'#783640', variables:['Collection','Relay loss','Duty cycle'], unit:'orbit units', plant:'solar' },
]
export const initialValues = [0.62, 0.48, 0.7]
export type Snapshot = { t:number; output:number; efficiency:number; risk:number }
export function simulate(values:number[], seed:number): Snapshot[] {
  const [a,b,c] = values
  return Array.from({length:25}, (_,i) => {
    const wave = Math.sin(i/3 + seed) * 0.06 + Math.sin(i/7) * 0.035
    const efficiency = Math.max(0.08, Math.min(0.96, 0.3 + a*0.42 + b*0.18 - Math.abs(c-.62)*0.24 + wave))
    const output = Math.max(0, (0.25 + a*.55 + b*.2 + c*.18) * (0.82 + wave))
    const risk = Math.max(0, Math.min(1, Math.abs(a-b)*.48 + Math.max(0,c-.78)*.7 + (i>18 ? .04 : 0)))
    return { t:i, output, efficiency, risk }
  })
}
export function classify(risk:number) { return risk > .64 ? 'critical' : risk > .38 ? 'watch' : 'stable' }
