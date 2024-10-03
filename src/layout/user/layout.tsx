import Footer from '../../components/user/footer'
import Header from '../../components/user/header'
import { Outlet } from 'react-router-dom'

const Layout = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}

export default Layout