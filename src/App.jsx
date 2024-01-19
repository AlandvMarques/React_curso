import Title from "./Title"
import Subtitle from "./Subtitle"

export default function App(){
    const status = true 

  return(
    <div>
      <Title/>
      <Subtitle/>
      <h2>Current status: {status ? "ON" : "OFF"}</h2>
      
    </div>
  )
}

