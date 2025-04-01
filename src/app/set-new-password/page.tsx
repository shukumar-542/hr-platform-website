"use client"
import React from 'react'
import bg from "../../assets/background.png";
import { Form, Input } from "antd";
import Button from "@/components/Button/Button";

const SetNewPasswordPage = () => {
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
        Set a new password
        </p>
        <p className="text-center text-sm mt-2 text-[#333333]">
        Create a new password. Ensure it differs from <br />
        previous ones for security
        </p>

        {/* Ensure Form has onFinish handler */}
        <Form layout="vertical" >
          
        
          <Form.Item
            name={"Password"}
            label={<p className="text-[#333333]">New Password</p>}
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
          
          <Button>Reset Password</Button>
        
        </Form>
      </div>
    </div>
  </div>
  )
}

export default SetNewPasswordPage;