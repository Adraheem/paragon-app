import Header from "./Header";

function Layout(props) {
  return (
    <div
      style={{
        width: "100%",
        backgroundColor: "rgba(255,0,0,0.1)",
        padding: "50px",
      }}
    >
      {/* <Header /> */}
      {props.children}
      {/* <Header /> */}

    </div>
  );
}

export default Layout;
