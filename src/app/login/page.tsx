"use client";
import React from "react";
import bg from "../../assets/background.png";
import { Form, Input } from "antd";
import Button from '../../components/Button/Button'
interface LoginFormValues {
  email : string;
  password : string
}
const LoginPage = () => {

  const handleLogin = (values : LoginFormValues)=>{
    console.log(values);
  }
  return (
    <div
      style={{
        backgroundImage: `url(${bg.src})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className="flex justify-end h-screen"
    >
      <div className="container mx-auto px-2 md:px-0 flex justify-end items-center">
        <div className="bg-white p-6 rounded-lg shadow-lg  md:min-w-[500px]">
          <p className="text-center text-xl md:text-4xl font-semibold text-[#333333]">Login to Account</p>
          <p className="text-center text-sm mt-2 text-[#333333]">
          Please enter your email and password to continue
          </p>

          {/* Ensure Form has onFinish handler */}
          <Form layout="vertical" onFinish={handleLogin}>
            <Form.Item name={"email"} label={<p className="text-[#333333] mt-5">Email Address</p>}>
              <Input placeholder="esteban_schiller@gmail.com" className="border-red-400 border" />
            </Form.Item>
            <Form.Item name={"Password"} label={<p className="text-[#333333]">Password</p>}>
              <Input.Password placeholder="************" className="border-red-400 border" />
            </Form.Item>
            <Button>Login</Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
