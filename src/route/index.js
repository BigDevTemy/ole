import Home from '../container/Home'
import About_us from '../container/AboutUs'
import Services from '../container/Services'
import Contact from '../container/Contact'
import Quote from '../container/Quote'
const routes = [
    {
        path:'/',
        title:'OLE Shipping| HomePage',
        component:Home
    },
    {
        path:'/about_us',
        title:'OLE Shipping| About Us',
        component:About_us
    },
    {
        path:'/contact_us',
        title:'OLE Shipping| Contact Us',
        component:Contact
    },
    
    {
        path:'/request_for_quote',
        title:'OLE Shipping| Quote',
        component:Quote
    },
    {
        path:'/services',
        title:'OLE Shipping| Services',
        component:Services
    }
]



export default routes;