import { useState, useEffect } from 'react'

const App = () => {
  const [text, setText] = useState([])
  const [bins, setBins] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/")
      .then(res => res.text())
      .then(res => setText(JSON.parse(res)))
      .catch(err => err)
  }, []);

  useEffect(() => {
    fetch("http://localhost:3000/requests")
    .then(res => res.text())
    .then(res => setBins(JSON.parse(res)))
    .catch(err => err)
  }, [])

  return (
    <div>
      <Header/>
      <Form />
      <P bins={bins}/>
      <Table text={text}/>
    </div>
  )
}

const Header = () => {
  return <h1>🦅 Team 5 Golden Eagles 🦅  ♻️♻️♻️</h1>
}

const P = (props) => {
  console.log(props)
  return (
    <div>
    {props.bins.map((bin, idx) => 
      <p key={idx}>{"http://localhost:3000/" + bin.bin_path}</p>
    )}
    </div>
  )
}

const Table = (text) => {
  return (
  <table>
    <thead>
      <RowNames/>
    </thead>
    <tbody>
      {text.text.map((t, idx) => {
        return (
        <RowEntry 
        key={idx}
        received_at={t.received_at}
        http_path={t.http_path}
        http_method={t.http_method}
        body={t.body}
        />
        )
})}
    </tbody>
  </table>
  )
}

const RowNames = () => {
  return (
    <tr>
      <RowHead name="Time"/>
      <RowHead name="Http Path"/>
      <RowHead name="Method"/>
      <RowHead name="Body"/>
    </tr>
  )
}

const RowHead = (props) => {
  return (
    <th style={{padding: "30px"}}>{props.name}</th>
  )
}

const RowEntry = (props) => {
  return (
    <tr key={props.id}>
      <td>{props.received_at}</td>
      <td>{props.http_path}</td>
      <td>{props.http_method}</td>
      <td>{props.body}</td>
    </tr>
  )
}

const Link = (props) => {
  return <a href={props.href}>{props.text}</a>
}

const List = (props) => {
  return (
    <ul>
      <Item />
    </ul>
  )
}

const Form = () => {
  // const addNote = (e) => {
  //   e.preventDefault()
  //   location.reload()
  // }

  return (
    <form
     method="post" action="http://localhost:3000/">
        {/* <label for="hook-url">Hook url: {props.url}</label><br></br> */}

        <button type="submit">deploy</button>
      </form>   
  )
}



export default App