import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Users } from './users';
import Table from './Table';
function App() {

  const [search, setSearch] = useState("")
  // const [data, setData] = useState(Users)

  console.log(Users.filter((user) => user.title.includes(search)));
  const keys = ["title", "body"]
  const query = (data) =>{
    return Users.filter((item) =>
      keys.some((key) => item[key].toLowerCase().includes(search))
    )
    // return data.filter((item) => item.title.toLowerCase().includes(search) || item.body.toLowerCase().includes(search))
  }


  return (
    <>

      <div className="container mt-5">
        <form className="form-group d-flex">
          <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" onChange={(e) => setSearch(e.target.value)} />
          <button className="btn btn-outline-success my-2 my-sm-0 mx-2" type="submit">Search</button>
        </form>

        <div className='container mt-5'>
          <Table query={query(Users)}/>


        </div>
      </div>
    </>
  )
}

export default App
