import './villajaheaderDropdown.css'

const VillajaHeaderDropdown = ({categoryNames}) => {
  return (
    <div className="dropdown-container">
        <div className="dc-header">Sub categories</div>
        <div className="dc-main">
          {
            categoryNames.map((name,id) => {
              return <div className="dc-main-cat" key={id}>
                {name}
              </div> 
            })
          }
        </div>
    </div>
  )
}

export default VillajaHeaderDropdown