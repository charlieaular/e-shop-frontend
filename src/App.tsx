import { QueryClientProvider } from 'react-query'
import { BrowserRouter } from 'react-router-dom'
import './App.css'
import Categories from './components/Categories'
import Header from './components/Header'
import MyRouter from './routes/MyRouter'
import queryClient from './services/queryClient'

function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Header />
        <MyRouter />
      </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App
