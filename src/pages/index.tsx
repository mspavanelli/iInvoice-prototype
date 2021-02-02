import {
  all as getAllInvoicesItems,
  sumItemsValueByCode,
} from '../services/invoices'

const Home = () => {
  const handleClick = async () => {
    const items = await getAllInvoicesItems()
    const total = await sumItemsValueByCode('2143')

    console.log(items, total)
  }

  return (
    <main className="layout">
      <button className="btn btn-white" onClick={handleClick}>
        Fetch Invoices
      </button>
    </main>
  )
}

export default Home
