import { flatten } from 'lodash'

const Home = () => {
  const fetchInvoices = async () => {
    try {
      const response = await fetch('/api/invoices')

      if (!response.ok) {
        throw Error(response.statusText)
      }

      const parsedData = await response.json()

      const allItems = flatten(
        parsedData.invoices.map(invoice => invoice.items)
      )

      console.log(allItems)
    } catch (error) {
      console.error(error.message)
    }
  }

  return (
    <main className="layout">
      <button className="btn btn-white" onClick={fetchInvoices}>
        Fetch Invoices
      </button>
    </main>
  )
}

export default Home
