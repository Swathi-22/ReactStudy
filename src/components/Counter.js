    import React from 'react'
    
    function Counter({title,counts}) {
    // const {title,counts} = props
      return (
        <div>
          <p>Counter : {counts}</p>
          <p>{title}: {counts}</p>
        </div>
      )
    }
  
    export default Counter
    