import {
  Button,
  Card,
  Col,
  Form,
  Input,
  Layout,
  Row,
  Typography,
  message,
} from "antd";

const ContactUsPage = () => {
  const [form] = Form.useForm();

  const handleFinish = () => {
    message.success("Thanks for reaching out. We will respond within 24 hours.");
    form.resetFields();
  };

  return (
    <Layout.Content className="overflow-y-scroll p-4 w-full h-full bg-[#0b1426] text-white">
      <div className="max-w-6xl mx-auto space-y-8">
        <header className="space-y-3">
          <Typography.Title className="!mb-0 text-white">
            Contact the Cryptocurrency team
          </Typography.Title>
          <Typography.Paragraph className="!text-gray-200 !mb-0 text-base lg:text-lg">
            Need help understanding market moves or have feedback on the
            experience? Send us a note and we will get back to you quickly.
          </Typography.Paragraph>
        </header>

        <section className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <Card bordered={false} className="bg-[#162441] text-white">
            <Typography.Title level={4} className="!mb-2 text-white">
              Support hours
            </Typography.Title>
            <Typography.Paragraph className="!mb-0 text-gray-200">
              Mon-Fri, 8:00 AM - 6:00 PM (UTC)
            </Typography.Paragraph>
          </Card>
          <Card bordered={false} className="bg-[#162441] text-white">
            <Typography.Title level={4} className="!mb-2 text-white">
              Email
            </Typography.Title>
            <Typography.Paragraph className="!mb-0 text-gray-200">
              support@cryptocurrency.app
            </Typography.Paragraph>
          </Card>
          <Card bordered={false} className="bg-[#162441] text-white">
            <Typography.Title level={4} className="!mb-2 text-white">
              Response time
            </Typography.Title>
            <Typography.Paragraph className="!mb-0 text-gray-200">
              Most requests answered within 24 hours.
            </Typography.Paragraph>
          </Card>
        </section>

        <section className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-6">
          <Card bordered={false} className="bg-[#101d36]">
            <Typography.Title level={4} className="!mb-4 text-white">
              Send a message
            </Typography.Title>
            <Form
              layout="vertical"
              form={form}
              onFinish={handleFinish}
              requiredMark="optional"
            >
              <Row gutter={16}>
                <Col xs={24} md={12}>
                  <Form.Item
                  label={<span style={{ color: '#e5e7eb' }}>Full name</span>}
                    name="fullName"
                    rules={[
                      { required: true, message: "Please enter your name." },
                    ]}
                  >
                    <Input placeholder="Jane Doe" className={`bg-gradient-to-br from-blue-500/30 to-cyan-500/10 border-none`} />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item
                    label={<span style={{ color: '#e5e7eb' }}>Email address</span>}
                    name="email"
                    rules={[
                      { required: true, message: "Please enter your email." },
                      {
                        type: "email",
                        message: "Please enter a valid email address.",
                      },
                    ]}
                  >
                    <Input placeholder="jane@email.com" color="black" className={`bg-gradient-to-br from-blue-500/30 to-cyan-500/10 border-none`}/>
                  </Form.Item>
                </Col>
              </Row>
              <Form.Item
                label={<span style={{ color: '#e5e7eb' }}>Message</span>}
                name="message"
                rules={[
                  { required: true, message: "Please share your message." },
                ]}
              >
                <Input.TextArea
                  rows={6}
                  placeholder="Tell us what you need help with."
                      className={`bg-gradient-to-br from-blue-500/30 to-cyan-500/10 border-none`}
                    />
              </Form.Item>
              <div className="flex flex-wrap gap-3 items-center">
                <Button type="primary" htmlType="submit" className="bg-blue-500">
                  Send message
                </Button>
              </div>
            </Form>
          </Card>

          <div className="space-y-4">
            <Card bordered={false} className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 bg-[#162441] text-white">
              <Typography.Title level={4} className="!mb-2 text-white">
                Quick help
              </Typography.Title>
              <Typography.Paragraph className="!mb-0 text-gray-100">
                Include your user ID and the asset you are viewing so we can
                investigate faster.
              </Typography.Paragraph>
            </Card>
            <Card bordered={false} className="bg-[#162441] text-white">
              <Typography.Title level={4} className="!mb-2 text-white">
                Partnerships
              </Typography.Title>
              <Typography.Paragraph className="!mb-0 text-gray-200">
                Looking to collaborate on data or research? Select Partnerships
                in the topic list and we will connect you with the right team.
              </Typography.Paragraph>
            </Card>
            <Card bordered={false} className="bg-[#162441] text-white">
              <Typography.Title level={4} className="!mb-2 text-white">
                Press inquiries
              </Typography.Title>
              <Typography.Paragraph className="!mb-0 text-gray-200">
                For media questions, choose Press and include your deadline.
              </Typography.Paragraph>
            </Card>
          </div>
        </section>
      </div>
    </Layout.Content>
  );
};

export default ContactUsPage;
