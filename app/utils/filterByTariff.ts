export type TariffFilter<T extends string> = 'all' | T

export interface TariffItem<T extends string> {
  tariff: T
}

export function filterByTariff<T extends string, I extends TariffItem<T>>(
  items: I[],
  filter: TariffFilter<T>
): I[] {
  if (filter === 'all') {
    return items
  }

  return items.filter((item) => item.tariff === filter)
}
