import {
  ArrowRightOutlined,
  BankOutlined,
  CalendarOutlined,
  FileTextOutlined,
  HomeFilled,
  HomeOutlined,
  LineChartOutlined,
  SearchOutlined,
  StarFilled,
  WalletFilled,
  EnvironmentFilled,
} from "@ant-design/icons";
import { Button, Card, Col, Row, Select, Typography } from "antd";

const { Title, Text } = Typography;

const tenantAppUrl = import.meta.env.VITE_TENANT_APP_URL?.trim();
const landlordAppUrl = import.meta.env.VITE_LANDLORD_APP_URL?.trim();

const services = [
  {
    title: "Property Discovery",
    description: "Explore rental opportunities and connect with property representatives.",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=85",
    icon: <HomeFilled />,
  },
  {
    title: "Viewing Management",
    description: "Coordinate appointments, manage enquiries and schedule viewings.",
    image:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=85",
    icon: <CalendarOutlined />,
  },
  {
    title: "Lease Management",
    description: "Create, review and manage rental agreements.",
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=800&q=85",
    icon: <FileTextOutlined />,
  },
  {
    title: "Rental Management",
    description: "Track tenants, rent obligations and rental records.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=85",
    icon: <LineChartOutlined />,
  },
];

const stats = [
  { value: "2,400+", label: "Satisfied Landlords", icon: <HomeOutlined /> },
  { value: "18,000+", label: "Properties Listed", icon: <BankOutlined /> },
  { value: "R2.1B+", label: "Rent Processed", icon: <WalletFilled /> },
  { value: "98.4%", label: "Collection Rate", icon: <StarFilled /> },
];

export default function HomePage() {
  return (
    <main>
      <section className="home-hero">
        <div className="home-hero__content">
          <Title className="home-hero__title">
            Find your next place.
            <br />
            <span>Build better rental<br />relationships.</span>
          </Title>
          <Text className="home-hero__description">
            Discover rental properties, arrange viewings
            <br className="desktop-break" /> and manage your rental journey with Tante.
          </Text>
          <div className="home-hero__actions">
            <Button
              className="home-button home-button--gold"
              size="large"
              href="#quick-search"
            >
              Find a property <ArrowRightOutlined />
            </Button>
            <Button
              className="home-button home-button--outline"
              size="large"
              href={landlordAppUrl || "#"}
              target={landlordAppUrl ? "_blank" : undefined}
              rel={landlordAppUrl ? "noreferrer" : undefined}
            >
              I&apos;m a landlord / agent
            </Button>
          </div>
        </div>
        <div className="home-hero__caption">
          <span />
          Connecting people, properties and businesses through trusted rental relationships.
          <span />
        </div>
      </section>

      <section className="home-main">
        <div className="home-search" id="quick-search">
          <div className="home-search__heading">
            <SearchOutlined />
            <Title level={4}>Quick search</Title>
          </div>
          <Text className="home-search__description">Find available properties in your area.</Text>
          <Row gutter={[12, 12]} className="home-search__fields">
            <Col xs={24} sm={12} md={6}>
              <Select
                aria-label="Location"
                defaultValue="Dar es Salaam"
                prefix={<EnvironmentFilled />}
                options={[
                  { value: "Dar es Salaam", label: "Dar es Salaam" },
                  { value: "Arusha", label: "Arusha" },
                  { value: "Mwanza", label: "Mwanza" },
                ]}
              />
            </Col>
            <Col xs={24} sm={12} md={6}>
              <Select
                aria-label="Property type"
                defaultValue="Any property type"
                prefix={<HomeFilled />}
                options={[
                  { value: "Any property type", label: "Any property type" },
                  { value: "Apartment", label: "Apartment" },
                  { value: "House", label: "House" },
                ]}
              />
            </Col>
            <Col xs={24} sm={12} md={6}>
              <Select
                aria-label="Budget"
                defaultValue="Any budget"
                prefix={<WalletFilled />}
                options={[
                  { value: "Any budget", label: "Any budget" },
                  { value: "Under 500,000", label: "Under TSh 500,000" },
                  { value: "500,000-1,000,000", label: "TSh 500,000–1,000,000" },
                ]}
              />
            </Col>
            <Col xs={24} sm={12} md={6}>
              <Button
                className="home-search__submit"
                type="primary"
                icon={<SearchOutlined />}
                href={tenantAppUrl || undefined}
                target={tenantAppUrl ? "_blank" : undefined}
                rel={tenantAppUrl ? "noreferrer" : undefined}
              >
                Search
              </Button>
            </Col>
          </Row>
        </div>

        <section className="home-services">
          <div className="home-section-heading">
            <Title level={2}>Everything connected to the rental journey.</Title>
            <Text>From discovery to a rental agreement, Tante has you covered.</Text>
          </div>
          <Row gutter={[16, 16]}>
            {services.map((service) => (
              <Col key={service.title} xs={24} sm={12} md={6}>
                <Card
                  className="service-card"
                  cover={<img src={service.image} alt="" loading="lazy" />}
                  styles={{ body: { padding: "18px 17px 16px" } }}
                >
                  <span className="service-card__icon" aria-hidden="true">
                    {service.icon}
                  </span>
                  <Title level={5}>{service.title}</Title>
                  <Text>{service.description}</Text>
                </Card>
              </Col>
            ))}
          </Row>
        </section>
      </section>

      <section className="home-stats" aria-label="Tante by the numbers">
        <Row className="home-stats__row" gutter={[16, 12]}>
          {stats.map((stat) => (
            <Col key={stat.label} xs={12} md={6}>
              <div className="home-stat">
                <span className="home-stat__icon">{stat.icon}</span>
                <span className="home-stat__copy">
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </span>
              </div>
            </Col>
          ))}
        </Row>
      </section>
    </main>
  );
}
