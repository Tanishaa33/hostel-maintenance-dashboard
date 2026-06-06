import Navbar from './Navbar';
import Sidebar from './Sidebar';

const Layout = ({ children, title }) => (
  <div className="flex">
    <Sidebar />
    <div className="ml-64 flex-1">
      <Navbar title={title} />
      <main className="p-8">{children}</main>
    </div>
  </div>
);
export default Layout;