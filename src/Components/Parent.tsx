import React, { useState } from 'react'
import Child1 from './Child';

export default function Parent() {
    const [data, setData] = useState(1);
  return (
   <>
   <button onClick={() => setData(data + 1)}>change</button>
   <Child1 display={data.toString()}/>
   </>
  )
}
