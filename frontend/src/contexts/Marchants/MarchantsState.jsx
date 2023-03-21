import React from 'react'
import MarchantsContext from './MarchantsContext'

function MarchantsState() {
    //-----Add a new  machinary info-----X

  return (
    <>
        <MarchantsContext.Provider value={{fetchMachinary, addMachinary}}>
            {props.Children}
        </MarchantsContext.Provider>
    </>
  )
}

export default MarchantsState