import { Carrousell } from '../ui/Carrousell'
import { Details } from './Details'

export const Main = () => {
  return (
    <main className='flex flex-col gap-y-6'>
      <Carrousell />
      <Details />
    </main>
  )
}
