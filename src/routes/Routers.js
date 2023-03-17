import { Navigate, Route, Routes } from 'react-router-dom'
import Home from '../page/Home/Home'


export default function Routers() {
    return (
        <Routes>
            <Route path='/' element={<Navigate to='/ReactTabSection' />} />
            <Route path='/ReactTabSection' element={<Home />} />
        </Routes>
    )
}
