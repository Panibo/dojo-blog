import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './Navbar'
import Home from './Home'
import Create from './Create'
import BlogDetails from './BlogDetails'
import NotFound from './NotFound'

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/create" element={<Create />} />
            <Route path="/blogs/:id" element={<BlogDetails />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <footer>
          <p>Made by Miro Mariapori</p>
          <a href="https://www.youtube.com/watch?v=j942wKiXFu8&list=PL4cUxeGkcC9gZD-Tvwfod2gaISzfRiP9d&index=1">Tutorial by Net Ninja</a>
        </footer>
      </div>
    </Router>
  )
}

export default App
