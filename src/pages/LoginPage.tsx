import React, { useContext } from "react";
import { Form, Input, Button } from "antd";
import { LoginContext } from "../App";
import "../styles/LoginPage.scss"
const DUMMY_USERNAME = "FWW";
const DUMMY_PASSWORD = "nikola";

const LoginPage: React.FC = () => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const loginContext = useContext(LoginContext);

  
  const onFinish = (e: Event) => {
    if (username === DUMMY_USERNAME && password === DUMMY_PASSWORD) {
      loginContext.login();
    } else {
      alert("Wrong password or username");
    }
  };

  return (
    <div className="login-container">
      <Form className="form" onFinish={onFinish}>
        <Input
          placeholder="username"
          value={username}
          id="username"
          required
          onChange={(event) => setUsername(event.target.value)}
        />
        <Input.Password
          placeholder="password"
          id="password"
          value={password}
          required
          onChange={(event) => setPassword(event.target.value)}
        />
        <Button className="login-button" htmlType="submit">LOG IN</Button>
      </Form>
    </div>
  );
};

export default LoginPage;
