import React from 'react'

const cars =[
    {title: "Lamborgini", color: "purple", id : 1 },
    {title: "Bugati", color: "white", id : 2 },
    {title: "mclaren", color: "yello", id : 3 }
]
const Listitems = () => {
  const Items = cars.map(car => 
    <li key={car.id} style={{color:"brown"}}>{car.title}</li>
  );
  return (
    <div>
        <h2>hello</h2>

      <ul>
        {Items}
      </ul>
    </div>
  );
}

export default Listitems
