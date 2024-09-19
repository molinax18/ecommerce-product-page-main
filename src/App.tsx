import { Header } from './components/sections/Header'
import { Main } from './components/sections/Main'

const App = () => {
  return (
    <div className='relative flex flex-col w-full max-w-6xl mx-auto'>
      <Header />
      <hr className='hidden md:block w-[98%] mx-auto mt-1 mb-16'/>
      <Main />
    </div>
  )
}

export default App
