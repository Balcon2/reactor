import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { initialValues, SystemId } from './engine'
type State = { active:SystemId; values:Record<SystemId,number[]>; compare:SystemId[]; reducedMotion:boolean; quizScore:number; setActive:(id:SystemId)=>void; setValue:(id:SystemId,i:number,v:number)=>void; toggleCompare:(id:SystemId)=>void; setReducedMotion:(v:boolean)=>void; setQuizScore:(v:number)=>void }
const defaults = Object.fromEntries(['tidal','solar','wind','hydro','geothermal','bio','storage','fusion','orbital'].map(id=>[id,[...initialValues]])) as Record<SystemId,number[]>
export const useLab = create<State>()(persist((set)=>({
  active:'tidal', values:defaults, compare:[], reducedMotion:window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false, quizScore:0,
  setActive:(active)=>set({active}), setValue:(id,i,v)=>set(s=>({values:{...s.values,[id]:s.values[id].map((x,j)=>j===i?v:x)}})),
  toggleCompare:(id)=>set(s=>({compare:s.compare.includes(id)?s.compare.filter(x=>x!==id):s.compare.length<3?[...s.compare,id]:s.compare})),
  setReducedMotion:(reducedMotion)=>set({reducedMotion}), setQuizScore:(quizScore)=>set({quizScore}),
}), {name:'energy-lab-progress', partialize:({values,compare,quizScore,reducedMotion})=>({values,compare,quizScore,reducedMotion})}))
