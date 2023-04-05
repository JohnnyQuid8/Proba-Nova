import React, { useContext } from "react";
import { Form, Input, Button } from "antd";
import { LoginContext } from "../App";

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
    <>
      <Form onFinish={onFinish}>
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
        <Button htmlType="submit">LOG IN</Button>
      </Form>
    </>
  );
};

export default LoginPage;
