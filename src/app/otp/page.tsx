"use client";
import React, { useRef, useState } from "react";
import bg from "../../assets/background.png";
import Button from "@/components/Button/Button";
import { Form} from "antd";

const OtpPage = () => {
  const [otp, setOtp] = useState(["", "", "", "", ""]);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (index: number, value: string) => {
    if (!/^\d*$/.test(value)) return; // Allow only numbers

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Move to the next input if current one is filled
    if (value && index < 4) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, event: React.KeyboardEvent) => {
    if (event.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

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
            Check your email
          </p>
          <p className="text-center text-sm mt-2 text-[#333333]">
            We sent a code to your email address @. Please check <br /> your
            email for the 5 digit code
          </p>

          <Form layout="vertical" className="">
            <div className="flex justify-center gap-2 mb-6 mt-10">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  ref={(el) => {
                    inputRefs.current[index] = el;
                  }}
                  type="text"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleChange(index, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(index, e)}
                  className="w-12 h-12 border border-gray-300 rounded-md text-center text-xl font-semibold focus:outline-none focus:ring-2 focus:ring-[#2A216D]"
                />
              ))}
            </div>

            <Button>Verify</Button>
          </Form>
          <p className="text-center mt-8">You have not received the email? <span className="text-[#2A216D]  border-b cursor-pointer ml-1">Resend</span></p>
        </div>
      </div>
    </div>
  );
};

export default OtpPage;
