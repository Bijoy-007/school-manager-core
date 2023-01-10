import { Button, Col, DatePicker, Form, Input, Row, Select } from "antd";

import classes from "./UserDetailsPage.module.css";
import Applayout from "../../../../layout/AppLayout";

const userTypes = [
  { value: "teacher", label: "Teacher" },
  { value: "admin", label: "Admin", disabled: true },
];

const accountStatus = [
  { value: "block", label: "Block" },
  {
    value: "unblock",
    label: "unblock",
  },
];

const UserDetailsPage = () => {
  return (
    <Applayout>
      <h1 className={classes.heading}>User Details (New / id)</h1>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        className={classes["form-wrapper"]}
        autoComplete="off"
        labelAlign="left"
        layout="vertical"
      >
        <Row>
          <Col span={8}>
            <Form.Item
              label="User Id"
              name="id"
              rules={[{ required: true, message: "Please input an Id!" }]}
            >
              <Input type="text" disabled />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              label="Name"
              name="name"
              rules={[{ required: true, message: "Please input a name!" }]}
            >
              <Input type="text" />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              label="User type"
              name="type"
              rules={[{ required: true, message: "Please select a type!" }]}
            >
              <Select defaultValue="teacher" options={userTypes}></Select>
            </Form.Item>
          </Col>
        </Row>

        <Row>
          <Col span={8}>
            <Form.Item
              label="Email"
              name="email"
              rules={[{ required: true, message: "Please input an email!" }]}
            >
              <Input type="email" />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              label="Password"
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input.Password />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              label="Mobile No."
              name="mobile"
              rules={[
                { required: true, message: "Please input mobile number!" },
              ]}
            >
              <Input type="tel" />
            </Form.Item>
          </Col>
        </Row>

        <Row>
          <Col span={8}>
            <Form.Item
              label="Joining date"
              name="joining"
              rules={[
                { required: true, message: "Please select joining date!" },
              ]}
            >
              <DatePicker style={{ width: "100%" }} placeholder="Select date" />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              label="Account status"
              name="status"
              rules={[{ required: true, message: "Please select a status!" }]}
            >
              <Select options={accountStatus}></Select>
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label="School Id" name="schoolId">
              <Input disabled />
            </Form.Item>
          </Col>
        </Row>

        <Row>
          <Col span={9}></Col>
          {/* <Form.Item> */}
          <Col span={4}>
            <Button
              block
              style={{
                margin: "2rem auto",
              }}
              size="large"
              type="primary"
              htmlType="submit"
            >
              Submit
            </Button>
          </Col>
          <Col span={10}></Col>
          {/* </Form.Item> */}
        </Row>
      </Form>
    </Applayout>
  );
};

export default UserDetailsPage;
