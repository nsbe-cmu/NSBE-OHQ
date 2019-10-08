import ResponsiveContainer from './Header';

const Layout = props => (
  <div>
    <ResponsiveContainer page={props.page}/>
      {props.children}
  </div>
)

export default Layout;