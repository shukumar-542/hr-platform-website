import React from 'react'
import { Modal, Form, Input, Select, Button } from 'antd'

type JobOpenModalProps = {
  openModal: boolean
  setOpenModal: (value: boolean) => void
}

const { Option } = Select

const AddJobOpeningModal: React.FC<JobOpenModalProps> = ({ openModal, setOpenModal }) => {
  const [form] = Form.useForm()

  const handleFinish = (values: any) => {
    console.log('Form Submitted:', values)
    setOpenModal(false)
    form.resetFields()
  }

  return (
    <Modal
      open={openModal}
      onCancel={() => setOpenModal(false)}
      centered
      footer={false}
      width={900}
    >
      <h1 className="text-center text-xl font-semibold mb-4">Add Job Opening</h1>
      <Form form={form} layout="vertical" onFinish={handleFinish}>
        {/* Top Fields */}
        <div className="flex flex-wrap gap-4">
          <div className="w-full md:w-[48%]">
            <Form.Item label="Position Name" name="positionName">
              <Input placeholder="Input here" />
            </Form.Item>
          </div>
          <div className="w-full md:w-[48%]">
            <Form.Item label="Department" name="department">
              <Select placeholder="Select one">
                <Option value="hr">HR</Option>
                <Option value="engineering">Engineering</Option>
              </Select>
            </Form.Item>
          </div>
          <div className="w-full md:w-[48%]">
            <Form.Item label="Employee Type" name="employeeType">
              <Select placeholder="Select one">
                <Option value="full-time">Full-Time</Option>
                <Option value="part-time">Part-Time</Option>
              </Select>
            </Form.Item>
          </div>
          <div className="w-full md:w-[48%]">
            <Form.Item label="Job Status" name="jobStatus">
              <Select placeholder="Select one">
                <Option value="open">Open</Option>
                <Option value="closed">Closed</Option>
              </Select>
            </Form.Item>
          </div>
          <div className="w-full md:w-[48%]">
            <Form.Item label="Minimum Experience" name="experience">
              <Input placeholder="Input here" />
            </Form.Item>
          </div>
          <div className="w-full md:w-[48%]">
            <Form.Item label="Compensation">
              <Input.Group compact>
                <Form.Item name="compensation" noStyle>
                  <Input style={{ width: '60%' }} placeholder="$45" />
                </Form.Item>
                <Input
                  style={{ width: '10%', pointerEvents: 'none', backgroundColor: '#fff' }}
                  value="per"
                  disabled
                />
                <Form.Item name="rateType" noStyle>
                  <Select style={{ width: '30%' }} placeholder="Hours">
                    <Option value="hour">Hours</Option>
                    <Option value="month">Month</Option>
                  </Select>
                </Form.Item>
              </Input.Group>
            </Form.Item>
          </div>
          <div className="w-full md:w-[48%]">
            <Form.Item label="Hiring Lead" name="hiringLead">
              <Select placeholder="Select one">
                <Option value="john">John</Option>
                <Option value="jane">Jane</Option>
              </Select>
            </Form.Item>
          </div>
        </div>

        {/* Description */}
        <Form.Item label="Description" name="description">
          <Input.TextArea placeholder="Write here" rows={4} />
        </Form.Item>

        {/* Location Section */}
        <h3 className="text-lg font-medium mt-6 mb-2">Location</h3>
        <div className="flex flex-wrap gap-4">
          <div className="w-full md:w-[48%]">
            <Form.Item label="Country" name="country">
              <Select placeholder="Select one">
                <Option value="usa">USA</Option>
                <Option value="india">India</Option>
              </Select>
            </Form.Item>
          </div>
          <div className="w-full md:w-[48%]">
            <Form.Item label="City" name="city">
              <Select placeholder="Select one">
                <Option value="newyork">New York</Option>
                <Option value="delhi">Delhi</Option>
              </Select>
            </Form.Item>
          </div>
          <div className="w-full md:w-[48%]">
            <Form.Item label="State" name="state">
              <Select placeholder="Select one">
                <Option value="ny">NY</Option>
                <Option value="dl">DL</Option>
              </Select>
            </Form.Item>
          </div>
          <div className="w-full md:w-[48%]">
            <Form.Item label="Zip Code" name="zipCode">
              <Input placeholder="Input here" />
            </Form.Item>
          </div>
        </div>

        <Form.Item label="Street Address" name="streetAddress">
          <Input placeholder="Input here" />
        </Form.Item>

        <div className="flex justify-center  gap-2 mt-4">
          <button onClick={() => setOpenModal(false)} className='border border-[#EAE9F0] px-10 rounded-sm cursor-pointer'>Cancel</button>
          <button className='bg-[#2A216D] px-10 text-white py-2 rounded-sm cursor-pointer'>
            Add
          </button>
        </div>
      </Form>
    </Modal>
  )
}

export default AddJobOpeningModal
