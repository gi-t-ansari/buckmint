import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'

const Layout = (props) => {
  return (
    <React.Fragment>
        {/* <Header />
        <div className='h-32'> */}
            <div className='flex'>
                <Sidebar />
                <div>
                    <Header />
                    {props.children}
                </div>
                
            </div>
        {/* </div> */}
    </React.Fragment>
  )
}

export default Layout