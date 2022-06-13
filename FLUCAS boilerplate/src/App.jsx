import { useEffect } from "react";
import { useMoralis } from "react-moralis";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { Layout } from "antd";
import "antd/dist/antd.css";
import "./style.css";
import logo from "./presenft.png"
import HomePage from "components/QuickStart";
import Text from "antd/lib/typography/Text";

const { Header, Footer } = Layout;

const styles = {
  content: {
    display: "flex",
    justifyContent: "center",
    fontFamily: "Roboto, sans-serif",
    color: "#0066ff",
    marginTop: "80px",
    padding: "10px",
  },
  header: {
    position: "fixed",
    zIndex: 1,
    width: "100%",
    background: "black",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontFamily: "Roboto, sans-serif",
    borderBottom: "2px solid rgba(0, 0, 0, 0.06)",
    padding: "0 10px",
    boxShadow: "0 1px 10px rgb(151 164 175 / 10%)",
  },
};
const App = ({ isServerInfo }) => {
  const { isWeb3Enabled, enableWeb3, isAuthenticated, isWeb3EnableLoading } = useMoralis();

  useEffect(() => {
    if (isAuthenticated && !isWeb3Enabled && !isWeb3EnableLoading) enableWeb3();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated, isWeb3Enabled]);

  return (
    <Layout style={{ height: "100vh", overflow: "auto" }}>
      <Router>
        <Header style={styles.header}>
          <div style={{width:"250px"}}>
          
          </div>
          <img src={logo} alt="" style={{height:"100px"}}/>
          <div style={{display:"flex"}}>
          </div>
        </Header>

        <div style={styles.content}>
          <Switch>
            <Route exact path="/homepage">
              <HomePage isServerInfo={isServerInfo} />
            </Route>
            <Route path="/">
              <Redirect to="/homepage" />
            </Route>
            <Route path="/ethereum-boilerplate">
              <Redirect to="/homepage" />
            </Route>
          </Switch>
        </div>
      </Router>
      <Footer style={{ textAlign: "center" }}>
        <Text style={{ display: "block" }}>
        ( ͡° ͜ʖ ͡°) Made by Flucas with the moralis{" "}
          <a
            href="https://github.com/ethereum-boilerplate/ethereum-boilerplate/"
            target="_blank"
            rel="noopener noreferrer"
          >
            boilerplate
          </a>
          , more to come!
        </Text>

        <Text style={{ display: "block" }}>
        ℹ️ More from Flucas {""}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://linktr.ee/flucasart"
          >
            here
          </a>
        </Text>

        <Text style={{ display: "block" }}>
          📖 Read more about{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://moralis.io?utm_source=boilerplatehosted&utm_medium=todo&utm_campaign=ethereum-boilerplat"
          >
            Moralis
          </a>
        </Text>
      </Footer>
    </Layout>
  );
};




export default App;
