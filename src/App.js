import TextEdtior from "./TextEdtior";
import "./editorStyle.css"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from 'react-router-dom'
import {v4 as uuidv4} from 'uuid'
function App() {
  const uid= uuidv4()
  console.log(uid)
  return (
  <Router>
    <Routes>
      <Route path="/"  element={<Navigate to={`/documents/${uuidv4()}`}/>}>
  
      </Route>
      <Route path="/documents/:id" element={<TextEdtior/>}>

      </Route>
    </Routes> </Router> )
}

export default App;
