import Otp from '../Pages/Otp'
import Login from '../Pages/Login'
import Profile from '../Pages/Profile'
import Form from '../Pages/Form'
export const publicRoutes=[
    {
    path:"/",
    element:<Login/>
    },
    {
    path:"/*",
    element:<Login/>
    }
]
export const privateRoutes=[
    {
        path:"/profile",
        element:<Profile/>
    },
    {
        path:"/otp",
        element:<Otp/>
    },
    {
        path:"/form",
        element:<Form/>
    }
]