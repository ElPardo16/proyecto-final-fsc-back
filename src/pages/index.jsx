import Cookies from "js-cookie";
import Login from "../components/Login";

export default function Home() {
 
  //console.log(Cookies.get())
  return (
    <div className="login">
      {/* <button onClick={()=> {
        Cookies.remove("role")
      }}>asdsa</button>
      <button onClick={async _ => {
        try {
          const res = await fetch("http://localhost:5000/api/login",{
          method: "POST",
          headers:{
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            email: "a@a.com",
            password: "1234"
          })
        })
        if(res.status === 200){
            const json = await res.json()
            Cookies.set("token", json.token)
        }else{
          const json = await res.json()
          console.log(json)
        }
        
        } catch (error) {
          console.log(error)
        }
        
      }}>log</button> */}
        <Login />
    </div>
  )
}