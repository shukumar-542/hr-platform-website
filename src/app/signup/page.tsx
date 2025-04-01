"use client";
import React from 'react'
import bg from "../../assets/background.png";
import { Form, Input } from "antd";
import Button from "../../components/Button/Button";

const SignUpPage = () => {
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
      <div className="bg-white px-10 py-20 rounded-lg shadow-lg  md:min-w-[500px]">
        <p className="text-center text-xl md:text-4xl font-semibold text-[#333333]">
        Welcome to HR Platform! 
        </p>
        <p className="text-center text-sm mt-2 text-[#333333]">
          Please enter your email and password to continue
        </p>

        {/* Ensure Form has onFinish handler */}
        <Form layout="vertical" >
          <Form.Item
            name={"email"}
            label={<p className="text-[#333333] mt-5">Full Name</p>}
          >
            <Input
              placeholder="esteban_schiller"
              className=""
            />
          </Form.Item>
          <Form.Item
            name={"email"}
            label={<p className="text-[#333333]">Email Address</p>}
          >
            <Input
              placeholder="esteban_schiller@gmail.com"
              className="border-red-400 border"
            />
          </Form.Item>
          <Form.Item
            name={"Password"}
            label={<p className="text-[#333333]">Password</p>}
          >
            <Input.Password
              placeholder="************"
              className="border-red-400 border "
            />
          </Form.Item>
          <Form.Item
            name={"Password"}
            label={<p className="text-[#333333]">Confirm Password</p>}
          >
            <Input.Password
              placeholder="************"
              className="border-red-400 border "
            />
          </Form.Item>
          <div className="flex justify-between items-center mb-6">
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="checkbox"
                className="w-3 h-3 text-[#2A216D] bg-gray-100 border-gray-300 rounded focus:ring-[#2A216D]"
              />
              <span className="text-gray-700">Remember Me</span>
            </label>
            <p>Forget Password?</p>
          </div>
          <Button>Sign Up</Button>
          <p className="text-center mt-2">
            Don't have an account?{" "}
            <span className="text-[#2A216D]">Sign in</span>
          </p>
        </Form>
      </div>
    </div>
  </div>
  )
}

export default SignUpPage