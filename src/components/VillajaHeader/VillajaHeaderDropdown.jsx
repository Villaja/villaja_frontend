import './villajaHeaderDropdown.css'
import { Link } from 'react-router-dom'

const VillajaHeaderDropdown = ({categoryNames}) => {
  return (
    <div className="dropdown-container">
        <div className="dc-header">Sub categories</div>
        <div className="dc-main">
          {
            categoryNames.map((name,id) => {
              return <div className="dc-main-cat" key={id}>
                <Link to={`/products?category=${name}`}>{name}</Link>
              </div> 
            })
          }
        </div>
    </div>
  )
}

export default VillajaHeaderDropdown