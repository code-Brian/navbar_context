import {useContext} from 'react'
import MyContext from './../contexts/MyContext'

export const Navbar = () => {
    const context = useContext(MyContext)

  return (
    <nav>
        <div>
            <span>Hello, {context.name}!</span>
        </div>
    </nav>
  )
}
