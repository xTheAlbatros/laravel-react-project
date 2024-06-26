import {Link, Navigate, Outlet} from "react-router-dom";
import {useStateContext} from "../context/ContextProvider";
import axiosClient from "../axios-client.js";
import {useEffect} from "react";

export default function DefaultLayout() {
  const {user, token, setUser, setToken, notification} = useStateContext();

  if (!token) {
    return <Navigate to="/login"/>
  }

  const onLogout = ev => {
    ev.preventDefault()

    axiosClient.post('/logout')
        .then(() => {
          setUser({})
          setToken(null)
        })
  }

  useEffect(() => {
    axiosClient.get('/user')
        .then(({data}) => {
          setUser(data)
        })
  }, [])

  return (
      <div id="defaultLayout">
        <aside>
          <Link to="/dashboard">Home</Link>
            <Link to="/info">Info</Link>
          <Link to="/users">Users</Link>
          <Link to="/series">Series</Link>
        </aside>
        <div className="content">
          <header>
            <div>
                <img src="/src/assets/images/logo.png" alt="logo"/>
            </div>

            <div>
              {user.name} &nbsp; &nbsp;
              <a onClick={onLogout} className="btn-logout" href="#">Logout</a>
            </div>
          </header>
          <main>
            <Outlet/>
          </main>
          {notification &&
              <div className="notification">
                {notification}
              </div>
          }
        </div>
      </div>
  )
}
