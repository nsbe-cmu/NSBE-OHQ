import ResponsiveContainer from './Header';

const Layout = props => (
  <div>
    <ResponsiveContainer/>
      {props.children}
  </div>
)

export default Layout;