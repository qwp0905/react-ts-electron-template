import React from "react"

function MainPage() {
  const handleClick = (): void => {
    window.api.request('test', '123123123')
    window.api.recieveOnce('reply', (data: any) => console.log(data))
  }

  return (
    <div>
      <div>Hello World</div>
      <button onClick={handleClick}>click</button>
    </div>
  )
}
export default MainPage