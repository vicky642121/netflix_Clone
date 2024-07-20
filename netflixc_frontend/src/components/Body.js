import React from 'react'
import { BrowserRouter, createBrowserRouter, Route, Router, RouterProvider, Routes } from 'react-router-dom'
import Login from './Login';
import Browser from './Browser';
const Body = () => {

    const appRoutes = createBrowserRouter([

        {
            path:"/",
            element:<Login/>
        },
        {
            path:"/browse",
            element:<Browser/>
        },


    ]);
  return (
    <div>
        <RouterProvider router={appRoutes}/>
        {/*this is another router method*/}
        {/* <BrowserRouter>
                <Routes>
                    <Route path="/" element ={<Login/>}/>
                </Routes>
            </BrowserRouter> 
        */}
    </div>
  )
}

export default Body