import React from 'react'

export default function Content() {
  return (
    <div>

      <div style={{width:'70%', marginLeft:'30px',marginTop:'50px',marginBottom:'30px' ,border:'1px solid black', float:'left'}}>

        <h2 style={{marginLeft:'20px'}}>About</h2>

        <p style={{marginLeft:'20px', marginRight:'20px'}}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Sed, neque omnis? Placeat officia porro ipsam veniam sunt assumenda doloribus esse.
          Ullam aliquid nesciunt eius amet accusantium, nisi illo eaque eligendi? Lorem ipsum, 
          dolor sit amet consectetur adipisicing elit. Quidem, iusto vel. Provident labore repudiandae totam 
          perferendis minima distinctio quis, ex dolores necessitatibus excepturi quasi repellendus odit, maiores obcaecati 
          dolorum, vel deleniti eaque vitae accusamus autem eius culpa. Ipsum fuga, quidem dolore delectus 
          itaque earum impedit omnis, ipsa, id facere inventore?
        </p>

      </div>


      <div style={{width:'30%', marginLeft:'30px',float:'right', marginTop:'20px'}}>
        <h2>Founder</h2>

        <ul>
          <li>Vikash</li>
          <li>Saurav</li>
          <li>Deekashant</li>
        </ul>
      </div>
    </div>
  )
}