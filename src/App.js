import Header from './components/Header'
import Li from './components/Li'
import { arr } from './components/data'
import Button from './components/Button'


function App() {
  return (
    <div className=" min-w-screen">
      <Header />
      <h1 className="text-bold text-center font-bold text-3xl pb-5 border-b-2">Hello!</h1>
      <Li {...arr[0]} />
      {/*Либо можно еще title = {arr[0].title} и т.д., если имена не совпадают или если мы
      прописали props*/}
      <Li {...arr[1]} />
      <div className="flex items-center justify-center">
        <Button></Button>
      </div>
    </div>
  )
}

export default App
