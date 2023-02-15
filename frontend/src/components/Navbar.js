import React from 'react'

export default function Navbar() {
  return (
    <div style={{background:"aqua", height:'40px', width:'100%'}}>

      <div style={{marginLeft:'30px',float:'left'}}>
        <button>Home</button>

        <button>About Us</button>

        <button>Contact Us</button>

      </div>

      <div style={{float:'right',marginRight:'30px'}}>

        <button>Sign In</button>

      </div>

    </div>
  )
}

