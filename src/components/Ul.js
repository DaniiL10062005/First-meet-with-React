import { arr } from './data'
import Li from './Li'

export default function Ul() {
  return (
    <ul>
      {arr.map((elem) => (
        <Li key={elem.title} {...elem} />
      ))}
    </ul>
  )
}
/*Либо можно еще title = {arr[0].title} и т.д., если имена не совпадают или если мы прописали props*/
