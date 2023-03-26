import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  
  return (
    <>
      <nav>
        <Link to="/">R_B_A</Link>
        <Link to="/home">Home</Link>
        <Link to="/create">New Blog</Link>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;
