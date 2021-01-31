import { flatten } from 'lodash'

import { get } from 'src/utils/handleRequest'

import Invoice from '../types/Invoice'
import Item from '../types/Item'

const endpoint = '/api/invoices'

type Invoices = {
  invoices: Invoice[]
}

export async function all(): Promise<Item[]> {
  const response = await (<Promise<Invoices>>get(endpoint))

  const { invoices } = response
  const allItems = flatten(invoices.map(invoice => invoice.items))

  return allItems
}
