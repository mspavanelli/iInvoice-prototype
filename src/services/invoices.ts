import { flatten } from 'lodash'

import { get } from 'src/utils/handleRequest'

const endpoint = '/api/invoices'

export async function all() {
  const response = await get(endpoint)

  const { invoices } = response

  const allItems = flatten(invoices.map(invoice => invoice.items))

  return allItems
}
