import { all as getAllInvoicesItems } from '../services/invoices'

const Home = () => {
  const handleClick = async () => {
    const items = await getAllInvoicesItems()

    console.log(items)
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
