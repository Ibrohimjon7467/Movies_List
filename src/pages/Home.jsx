import Movies from "./Movies"
import data from "../data/data"

function Home() {
  return (
    <div className="flex w-full">
        <Movies data={data}/>
    </div>
  )
}

export default Home