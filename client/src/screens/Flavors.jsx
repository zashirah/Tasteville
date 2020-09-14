import React from 'react'



const Flavors = ({ flavors }) => {

  const FlavorsJSX = flavors.map(flavor => (<p key={flavor.id}>{flavor.name}</p>))

  return (
    <div>
      <h3>Flavors</h3>
      {FlavorsJSX}
    </div>
  )
}

export default Flavors
