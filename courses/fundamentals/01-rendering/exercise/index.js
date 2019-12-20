import React from 'react'
import ReactDOM from 'react-dom'
import { FaRegStar, FaStar } from 'react-icons/fa'
import Heading from 'YesterTech/Heading'
import StarRatings from 'YesterTech/StarRatings'

const products = [
  { id: 1, name: 'Mario Kart', rating: 5, brand: 'Nintendo', condition: 'new' },
  { id: 2, name: 'Donkey Kong', rating: 3.5, brand: 'Nintendo', condition: 'good' },
  { id: 3, name: 'Nintendo NES', rating: 4, brand: 'Nintendo', condition: 'fair' },
]

function ProductProfile() {
  return (
    <span>
      {products.map(product => (
        <div>
          <Heading>{product.name}</Heading>

          {/* Add the star rating logic here */}
          <span className="star-ratings">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaRegStar />
            <FaRegStar />
          </span>

          <div className="text-small">
            <div>Brand: {product.brand}</div>
            <div>Condition: {product.condition}</div>
          </div>
        </div>
      ))}
    </span>
  )
}

ReactDOM.render(<ProductProfile />, document.getElementById('root'))