import { Navigate, Route, HashRouter as Router, Routes } from 'react-router-dom'
import './assets/scss/global.scss'
import { AppHeader } from './cmps/AppHeader'
import { Wheather } from './pages/Wheather'
import { SimpleTimer } from './pages/SimpleTimer'

function App() {

  return (
    <Router>
      <section className='main-app'>
        <AppHeader />
        <main className='main-container'>
          <Routes>
            <Route path='/' element={<Wheather />}></Route>
            <Route path='/timer' element={<SimpleTimer/>}></Route>
          </Routes>
        </main>
      </section>
    </Router>
  )
}

export default App
