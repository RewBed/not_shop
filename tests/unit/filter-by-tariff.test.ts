import { describe, expect, it } from 'vitest'
import { filterByTariff } from '../../app/utils/filterByTariff'

type DemoTariff = 'start' | 'business' | 'premium'

interface DemoItem {
  id: string
  tariff: DemoTariff
}

const demoItems: DemoItem[] = [
  { id: 'a', tariff: 'start' },
  { id: 'b', tariff: 'business' },
  { id: 'c', tariff: 'premium' },
  { id: 'd', tariff: 'business' }
]

describe('filterByTariff', () => {
  it('returns all items when filter is all', () => {
    expect(filterByTariff(demoItems, 'all')).toEqual(demoItems)
  })

  it('returns only matching tariff items', () => {
    expect(filterByTariff(demoItems, 'business')).toEqual([
      { id: 'b', tariff: 'business' },
      { id: 'd', tariff: 'business' }
    ])
  })
})
