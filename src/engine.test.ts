import { describe, expect, it } from 'vitest'
import { classify, simulate } from './engine'

describe('educational simulation engine', () => {
  it('returns a bounded, deterministic trace', () => {
    const trace = simulate([.62, .48, .7], 0)
    expect(trace).toHaveLength(25)
    expect(trace.every(point => point.output >= 0 && point.efficiency >= 0 && point.efficiency <= 1)).toBe(true)
    expect(simulate([.62, .48, .7], 0)).toEqual(trace)
  })
  it('classifies safety envelopes', () => {
    expect(classify(0.1)).toBe('stable')
    expect(classify(0.5)).toBe('watch')
    expect(classify(0.9)).toBe('critical')
  })
})
