function Layout({ children }) {
  return (
   <div className="wrapper">
      <div className="padder"></div>
      {children}
   </div>
  );
}
export default Layout