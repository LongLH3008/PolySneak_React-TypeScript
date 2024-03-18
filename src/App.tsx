import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'

export default function App() {
    return (
        <div className='font-sans text-zinc-700 relative' id='app'>
            <Routes>
                <Route path='/' element={<HomePage />}></Route>
            </Routes>
        </div>
    )
}
