import Categories from '../../components/Categories'
import Products from '../../components/Products'

const HomePage = () => {
  return (
    <div className='row mx-0 mt-4'>
      <div className="col-4">
        <Categories />
      </div>
      <div className="col">
        <Products />
      </div>
    </div>
  )
}

export default HomePage