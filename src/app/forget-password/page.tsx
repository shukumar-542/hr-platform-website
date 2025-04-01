"use client"
import React from "react";
import bg from "../../assets/background.png";
import { Form, Input } from "antd";
import Button from "@/components/Button/Button";

const ForgetPasswordPage = () => {
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
        Forget Password?
        </p>
        <p className="text-center text-sm mt-2 text-[#333333]">
        Please enter your email to get verification code
        </p>

        {/* Ensure Form has onFinish handler */}
        <Form layout="vertical" >
        
          <Form.Item
            name={"email"}
            label={<p className="text-[#333333] mt-10">Email Address</p>}
          >
            <Input
              placeholder="esteban_schiller@gmail.com"
              className="border-red-400 border"
            />
          </Form.Item>
      
        
          <Button>Continue</Button>
          
        </Form>
      </div>
    </div>
  </div>
  );
};

export default ForgetPasswordPage;
