import { Layout, Typography, Card, Divider, List, Tag, Button } from "antd";
import { Link } from "react-router-dom";

const guidingPrinciples = [
  {
    title: "Clarity first",
    description:
      "Prioritize clean typography, generous spacing, and concise copy so data remains easy to scan at a glance.",
    tags: ["Readable", "Minimal"],
  },
  {
    title: "Consistency everywhere",
    description:
      "Reuse components, align spacing, and keep navigation predictable across desktop and mobile breakpoints.",
    tags: ["Reusable", "Predictable"],
  },
  {
    title: "Accessible by default",
    description:
      "Use semantic structure, high-contrast colors, and touch-friendly targets to support every visitor.",
    tags: ["Inclusive", "Keyboard friendly"],
  },
];

const designPillars = [
  {
    title: "Real-time insight",
    description:
      "Built on live market data so you can compare coins, spot trends, and dive into details without leaving the app.",
  },
  {
    title: "Guided discovery",
    description:
      "Curated highlights, quick filters, and deep dives help both newcomers and experts find the signal in the noise.",
  },
  {
    title: "Built for focus",
    description:
      "A calm palette, balanced whitespace, and responsive layouts keep attention on the numbers that matter most.",
  },
];

const AboutPage = () => {
  return (
    <Layout.Content className="overflow-y-scroll p-4 w-full h-full bg-[#001529] text-white">
      <div className="max-w-6xl mx-auto space-y-8">
        <header className="space-y-3">
          <Typography.Title className="!mb-0 text-white">About Cryptocurrency</Typography.Title>
          <Typography.Paragraph className="!text-gray-200 !mb-0 text-base lg:text-lg">
            We designed this experience to make crypto markets understandable, trustworthy, and fast. Every
            component—from cards to charts—follows shared UI principles so you always know what to expect.
          </Typography.Paragraph>
          <div className="flex gap-3 flex-wrap">
            <Button type="primary" size="large" className="bg-blue-500">
              <Link to="/cryptocurrencies">Browse Cryptocurrencies</Link>
            </Button>
            <Button size="large" ghost>
              <Link to="/news">Read Market News</Link>
            </Button>
          </div>
        </header>

        <section className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {designPillars.map((pillar) => (
            <Card key={pillar.title} className="h-full bg-[#162441]" bordered={false} >
              <Typography.Title level={4} className="!mb-2 text-white">
                {pillar.title}
              </Typography.Title>
              <Typography.Paragraph className="!mb-0 text-gray-200">
                {pillar.description}
              </Typography.Paragraph>
            </Card>
          ))}
        </section>

        <Divider className="bg-slate-700" />

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
          <div className="space-y-3">
            <Typography.Title level={3} className="!mb-1 text-white">
              UI Principles we follow
            </Typography.Title>
            <Typography.Paragraph className="!mb-4 text-gray-200">
              The interface is guided by a few simple rules: keep navigation clear, pair every statistic with a clear
              label, and favor readable contrast. These principles shape every screen, whether you are on mobile or
              desktop.
            </Typography.Paragraph>
            <List
              itemLayout="vertical"
              dataSource={guidingPrinciples}
              renderItem={(item) => (
                <List.Item key={item.title} className="!px-0">
                  <Typography.Title level={4} className="!mb-1 text-white">
                    {item.title}
                  </Typography.Title>
                  <Typography.Paragraph className="!mb-2 text-gray-200">
                    {item.description}
                  </Typography.Paragraph>
                  <div className="flex gap-2 flex-wrap">
                    {item.tags.map((tag) => (
                      <Tag key={tag} color="blue">
                        {tag}
                      </Tag>
                    ))}
                  </div>
                </List.Item>
              )}
            />
          </div>

          <Card bordered={false} className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 bg-[#162441]">
            <Typography.Title level={4} className="!mb-2 text-white">
              What this means for you
            </Typography.Title>
            <ul className="list-disc list-inside space-y-2 text-gray-100">
              <li>Responsive layouts that stay usable and familiar on any device size.</li>
              <li>Predictable navigation with clear entry points to markets, news, and research.</li>
              <li>Readable data presentation with balanced contrast and simple language.</li>
              <li>Actionable insights surfaced with contextual cues and consistent controls.</li>
            </ul>
          </Card>
        </section>

        <Divider className="bg-slate-700" />

        <section className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <Card bordered={false} className="bg-slate-900 text-gray-100">
            <Typography.Title level={4} className="!text-white">
              Built for momentum
            </Typography.Title>
            <Typography.Paragraph className="!mb-0 text-gray-300">
              Quick links and keyboard-friendly controls keep you moving between assets and headlines without friction.
            </Typography.Paragraph>
          </Card>
          <Card bordered={false} className="bg-slate-900 text-gray-100">
            <Typography.Title level={4} className="!text-white">
              Data with context
            </Typography.Title>
            <Typography.Paragraph className="!mb-0 text-gray-300">
              Each card pairs key figures with short labels and subtle dividers so you never guess what a number means.
            </Typography.Paragraph>
          </Card>
          <Card bordered={false} className="bg-slate-900 text-gray-100">
            <Typography.Title level={4} className="!text-white">
              Transparent updates
            </Typography.Title>
            <Typography.Paragraph className="!mb-0 text-gray-300">
              Components reuse the same styling tokens, so new features arrive without shifting the visual language.
            </Typography.Paragraph>
          </Card>
        </section>
      </div>
    </Layout.Content>
  );
};

export default AboutPage;
