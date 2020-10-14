## Usage example

```javascript

import React from "react"
import useSavedState from "./useSavedState"

const AnnoyingPopUp = () => {
    const [isShown, setIsShown] = useSavedState(true)
    const hide = () => setIsShown(false)
  
    return (
        <>
            {isShown && 
                <>
                    <p>This is modal</p>
                    <button onClick={hide}>Close modal</button>
                </>
            }
        </>
    )
}
  
export default AnnoyingPopUp

```
