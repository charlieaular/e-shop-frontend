import { Outlet } from 'react-router-dom'
import MenuComponent from '../../components/MenuComponent'

const AdminIndex = () => {
  return (
    <div className='row mx-0 mt-4'>
      <div className="col-4">
        <MenuComponent />
      </div>
      <div className="col">
        <Outlet />
      </div>
    </div>
  )
}

export default AdminIndex