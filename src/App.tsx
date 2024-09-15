import { Header } from './components/sections/Header'
import { Main } from './components/sections/Main'

const App = () => {
  return (
    <div className='w-full max-w-6xl mx-auto'>
      <Header />
      <hr className='hidden md:block my-8'/>
      <Main />
    </div>
  )
}

export default App
