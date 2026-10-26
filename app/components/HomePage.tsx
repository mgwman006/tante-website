
import {
  Button,
  Card,
  Col,
  Row,
  Timeline,
  Typography,
  Badge,
  Tag,
} from "antd";
import {
  ArrowRightOutlined,
  HomeOutlined,
  DollarOutlined,
  TeamOutlined,
  BarChartOutlined,
  PlayCircleOutlined,
  CheckCircleFilled,
  ThunderboltFilled,
  SafetyCertificateFilled,
  MobileFilled,
} from "@ant-design/icons";
import { useNavigate } from "react-router";

const { Title, Paragraph, Text } = Typography;

// ─── Brand tokens ───────────────────────────────────────────
const NAVY = "#0F172A";
const TEAL = "#0F766E";
const TEAL_L = "#14B8A6";
const AMBER = "#D4A017";
const MUTED = "#64748B";
const BORDER = "#E2E8F0";
const OFF = "#F8FAFC";

// ─── Data ───────────────────────────────────────────────────
const features = [
  {
    icon: <HomeOutlined style={{ fontSize: 26, color: TEAL }} />,
    bg: "#E6F7F6",
    tag: "Core",
    tagColor: TEAL,
    title: "Portfolio Overview",
    desc: "See every property, unit, and tenant at a glance. Real-time occupancy and revenue across your entire portfolio.",
  },
  {
    icon: <DollarOutlined style={{ fontSize: 26, color: "#92400E" }} />,
    bg: "#FEF9E7",
    tag: "Most Popular",
    tagColor: AMBER,
    title: "Smart Rent Collection",
    desc: "Automated reminders, EFT and card payments, late fee calculation, and instant receipts. Chase less, collect more.",
  },
  {
    icon: <TeamOutlined style={{ fontSize: 26, color: NAVY }} />,
    bg: "rgba(15,23,42,0.06)",
    tag: "Tenant Facing",
    tagColor: MUTED,
    title: "Tenant Management",
    desc: "Keep tenant records, lease history, and communication organized. Invite tenants to their own portal in seconds.",
  },
  {
    icon: <BarChartOutlined style={{ fontSize: 26, color: "#7C3AED" }} />,
    bg: "rgba(124,58,237,0.08)",
    tag: "Tax Ready",
    tagColor: "#7C3AED",
    title: "Financial Reports",
    desc: "Monthly income statements, expense tracking, SARS-ready exports, and year-over-year performance charts.",
  },
];

const stats = [
  { num: "2,400+", label: "Active Landlords" },
  { num: "18,000+", label: "Units Managed" },
  { num: "R 2.1B", label: "Rent Processed" },
  { num: "98.4%", label: "Collection Rate" },
];

const timelineItems = [
  {
    dot: <span style={dotStyle(TEAL)}>1</span>,
    title: "Create Lease",
    desc: "Import your portfolio in seconds — units, addresses, and existing tenants. No data entry required.",
  },
  {
    dot: <span style={dotStyle(TEAL_L)}>2</span>,
    title: "Invite your tenants",
    desc: "Tenants receive a welcome link. Digital lease signing and profile setup done in minutes.",
  },
  {
    dot: <span style={dotStyle(AMBER)}>3</span>,
    title: "Collect rent automatically",
    desc: "Set due dates, automated reminders go out. Tenants pay via EFT or card. You get notified instantly.",
  },
  {
    dot: <span style={dotStyle("#7C3AED")}>4</span>,
    title: "Track & grow",
    desc: "Monitor performance, and make smarter decisions with real-time data.",
  },
];

const testimonials = [
  {
    text: "tante saved me hours every month. Rent collection used to be a nightmare — now it's fully automated and I can see everything on my phone.",
    name: "James Mthembu",
    role: "Landlord · 12 properties, Dar",
    initials: "JM",
    color: TEAL,
  },
  {
    text: "The maintenance tracking alone is worth the subscription. My tenants are happier and I have a full record for every property.",
    name: "Naledi Chikwanda",
    role: "Property Manager · Mwanza",
    initials: "NC",
    color: "#7C3AED",
    featured: true,
  },
  {
    text: "Finally a platform built for South African property owners. EFT support, rand figures, SARS exports — it just works.",
    name: "Bongani Sithole",
    role: "Investor · 28 units, Arusha",
    initials: "BS",
    color: AMBER,
  },
];

function dotStyle(color: string): React.CSSProperties {
  return {
    width: 36,
    height: 36,
    borderRadius: "50%",
    background: color,
    color: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 15,
    fontWeight: 800,
    flexShrink: 0,
  } as React.CSSProperties;
}
const landlordAppUrl = import.meta.env.VITE_LANDLORD_APP_URL?.trim();

export default function HomePage() {

  const navigate = useNavigate();
  return (
    <div style={{ minHeight: "100vh", background: "#fff", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>

      {/* ── HERO ── */}
      <section
        style={{
          padding: "96px 24px 80px",
          background: `linear-gradient(135deg, ${NAVY} 0%, #0c2340 100%)`,
          color: "#fff",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* decorative orbs */}
        <div style={{
          position: "absolute", width: 600, height: 600, borderRadius: "50%",
          background: `radial-gradient(circle, rgba(15,118,110,0.35) 0%, transparent 65%)`,
          right: -150, top: -150, pointerEvents: "none",
        }} />
        <div style={{
          position: "absolute", width: 400, height: 400, borderRadius: "50%",
          background: `radial-gradient(circle, rgba(212,160,23,0.18) 0%, transparent 65%)`,
          left: -100, bottom: -100, pointerEvents: "none",
        }} />

        <div style={{ maxWidth: 780, margin: "0 auto", textAlign: "center", position: "relative", zIndex: 2 }}>
          {/* eyebrow */}
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            background: "rgba(15,118,110,0.2)", border: "1px solid rgba(20,184,166,0.3)",
            borderRadius: 20, padding: "6px 16px", marginBottom: 24,
          }}>
            <span style={{ width: 7, height: 7, borderRadius: "50%", background: TEAL_L, display: "inline-block" }} />
            <Text style={{ fontSize: 11, fontWeight: 700, color: TEAL_L, letterSpacing: 1, textTransform: "uppercase" }}>
              Smart Real Estate Platform
            </Text>
          </div>

          <Title style={{ color: "#fff", fontSize: "clamp(36px, 5vw, 58px)", fontWeight: 900, lineHeight: 1.1, marginBottom: 20 }}>
            Rent smarter.{" "}
            <span style={{ color: TEAL_L, fontStyle: "italic" }}>Collect faster.</span>
            {" "}Grow bigger.
          </Title>

          <Paragraph style={{ color: "rgba(255,255,255,0.6)", fontSize: 17, maxWidth: 600, margin: "0 auto 36px", lineHeight: 1.75 }}>
            tante is the all-in-one platform for Tanzanian property owners — rent collection,
            tenant management, and financial reporting in one beautiful dashboard.
          </Paragraph>

          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap", marginBottom: 40 }}>
            <Button
              onClick={() => window.open(landlordAppUrl, '_blank')}
              type="primary" size="large"
              icon={<ArrowRightOutlined />}
              style={{ background: AMBER, borderColor: AMBER, color: NAVY, fontWeight: 700, height: 48, padding: "0 28px", fontSize: 15 }}
            >
              Start for free
            </Button>
            {/* <Button
              size="large"
              icon={<PlayCircleOutlined />}
              ghost
              style={{ fontWeight: 600, height: 48, padding: "0 24px", fontSize: 15, borderColor: "rgba(255,255,255,0.25)", color: "#fff" }}
            >
              Watch demo
            </Button> */}
          </div>

          {/* social proof */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12 }}>
            <div style={{ display: "flex" }}>
              {[
                { i: "JM", c: TEAL }, { i: "NC", c: "#7C3AED" },
                { i: "BS", c: AMBER }, { i: "TZ", c: "#059669" },
              ].map((av, idx) => (
                <div key={idx} style={{
                  width: 32, height: 32, borderRadius: "50%", background: av.c,
                  border: `2.5px solid ${NAVY}`, display: "flex", alignItems: "center",
                  justifyContent: "center", fontSize: 10, fontWeight: 700, color: "#fff",
                  marginRight: -10, zIndex: 4 - idx,
                }}>{av.i}</div>
              ))}
            </div>
            <Text style={{ color: "rgba(255,255,255,0.5)", fontSize: 13, marginLeft: 14 }}>
              <span style={{ color: "rgba(255,255,255,0.85)", fontWeight: 700 }}>2,400+ landlords</span>
              {" "}trust tante · ★ 4.9 / 5
            </Text>
          </div>
        </div>
      </section>

      {/* ── STATS BAND ── */}
      <section style={{ background: TEAL, padding: "0 24px" }}>
        <Row style={{ maxWidth: 1100, margin: "0 auto" }}>
          {stats.map((s, i) => (
            <Col key={i} xs={12} md={6}>
              <div style={{
                padding: "36px 24px", textAlign: "center",
                borderRight: i < 3 ? "1px solid rgba(255,255,255,0.2)" : "none",
              }}>
                <div style={{ fontSize: 38, fontWeight: 900, color: "#fff", lineHeight: 1 }}>{s.num}</div>
                <div style={{ fontSize: 13, color: "rgba(255,255,255,0.75)", marginTop: 6, fontWeight: 500 }}>{s.label}</div>
              </div>
            </Col>
          ))}
        </Row>
      </section>

      {/* ── FEATURES ── */}
      <section style={{ padding: "96px 24px", background: "#fff" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <Text style={{ display: "block", textAlign: "center", fontSize: 11, fontWeight: 800, letterSpacing: 2.5, textTransform: "uppercase", color: TEAL, marginBottom: 12 }}>
            Everything you need
          </Text>
          <Title level={2} style={{ textAlign: "center", fontSize: "clamp(28px,3vw,42px)", fontWeight: 900, marginBottom: 12 }}>
            Property management, <em style={{ color: TEAL }}>reimagined</em>
          </Title>
          <Paragraph style={{ textAlign: "center", color: MUTED, fontSize: 16, maxWidth: 540, margin: "0 auto 56px", lineHeight: 1.75 }}>
            From a single apartment to a 500-unit portfolio — tante scales with you.
          </Paragraph>

          <Row gutter={[24, 24]}>
            {features.map((f, i) => (
              <Col key={i} xs={24} md={12} lg={6}>
                <Card
                  hoverable
                  style={{
                    borderRadius: 16, border: `1.5px solid ${BORDER}`, height: "100%",
                    transition: "all 0.3s", overflow: "hidden",
                  }}
                  bodyStyle={{ padding: 28 }}
                  styles={{
                    body: {
                      display: "flex", flexDirection: "column", height: "100%"
                    }
                  }}
                >
                  <Title level={4} style={{ marginBottom: 8, fontSize: 17, fontWeight: 700 }}>{f.title}</Title>
                  <Paragraph style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, flex: 1, marginBottom: 0 }}>{f.desc}</Paragraph>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section style={{ padding: "96px 24px", background: NAVY, position: "relative", overflow: "hidden" }}>
        <div style={{
          position: "absolute", width: 500, height: 500, borderRadius: "50%",
          background: `radial-gradient(circle, rgba(15,118,110,0.28) 0%, transparent 65%)`,
          right: -100, bottom: -100, pointerEvents: "none",
        }} />
        <div style={{ maxWidth: 720, margin: "0 auto", position: "relative", zIndex: 2 }}>
          <Text style={{ display: "block", textAlign: "center", fontSize: 11, fontWeight: 800, letterSpacing: 2.5, textTransform: "uppercase", color: TEAL_L, marginBottom: 12 }}>
            Get started in minutes
          </Text>
          <Title level={2} style={{ textAlign: "center", color: "#fff", fontSize: "clamp(28px,3vw,40px)", fontWeight: 900, marginBottom: 48 }}>
            How <em style={{ color: TEAL_L }}>tante</em> works
          </Title>

          <Timeline
            mode="left"
            items={timelineItems.map((item) => ({
              dot: item.dot,
              children: (
                <div style={{ paddingBottom: 28, paddingLeft: 8 }}>
                  <div style={{ fontSize: 17, fontWeight: 700, color: "#fff", marginBottom: 6 }}>{item.title}</div>
                  <div style={{ fontSize: 14, color: "rgba(255,255,255,0.5)", lineHeight: 1.7 }}>{item.desc}</div>
                </div>
              ),
            }))}
          />
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section style={{ padding: "96px 24px", background: OFF }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <Text style={{ display: "block", textAlign: "center", fontSize: 11, fontWeight: 800, letterSpacing: 2.5, textTransform: "uppercase", color: TEAL, marginBottom: 12 }}>
            Loved by landlords
          </Text>
          <Title level={2} style={{ textAlign: "center", fontSize: "clamp(28px,3vw,42px)", fontWeight: 900, marginBottom: 48 }}>
            What our <em style={{ color: TEAL }}>community</em> says
          </Title>

          <Row gutter={[22, 22]}>
            {testimonials.map((t, i) => (
              <Col key={i} xs={24} md={8}>
                <Card
                  style={{
                    borderRadius: 18, height: "100%",
                    background: t.featured ? NAVY : "#fff",
                    border: t.featured ? "none" : `1.5px solid ${BORDER}`,
                    boxShadow: t.featured ? "0 24px 80px rgba(15,23,42,0.2)" : "none",
                  }}
                  bodyStyle={{ padding: 32 }}
                >
                  <div style={{ fontSize: 14, color: AMBER, letterSpacing: 2, marginBottom: 12 }}>★★★★★</div>
                  <div style={{ fontSize: 38, fontFamily: "Georgia, serif", color: t.featured ? TEAL_L : TEAL, lineHeight: 0.8, marginBottom: 12 }}>"</div>
                  <Paragraph style={{ fontSize: 15, color: t.featured ? "rgba(255,255,255,0.65)" : MUTED, lineHeight: 1.75, marginBottom: 24 }}>
                    {t.text}
                  </Paragraph>
                  <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <div style={{
                      width: 42, height: 42, borderRadius: 12, background: t.color,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontSize: 13, fontWeight: 700, color: "#fff", flexShrink: 0,
                    }}>{t.initials}</div>
                    <div>
                      <div style={{ fontSize: 14, fontWeight: 700, color: t.featured ? "#fff" : NAVY }}>{t.name}</div>
                      <div style={{ fontSize: 12, color: t.featured ? "rgba(255,255,255,0.4)" : MUTED, marginTop: 2 }}>{t.role}</div>
                    </div>
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </section>

      {/* ── TRUST STRIP ── */}
      <section style={{ padding: "40px 24px", background: "#fff", borderTop: `1px solid ${BORDER}`, borderBottom: `1px solid ${BORDER}` }}>
        <Row justify="center" gutter={[40, 16]}>
          {[
            { icon: <ThunderboltFilled style={{ color: TEAL }} />, text: "Instant rent notifications" },
            // { icon: <SafetyCertificateFilled style={{ color: AMBER }} />, text: "POPIA Compliant" },
            { icon: <CheckCircleFilled style={{ color: "#10B981" }} />, text: "No setup fees" },
            // { icon: <MobileFilled style={{ color: "#7C3AED" }} />, text: "iOS & Android apps" },
          ].map((item, i) => (
            <Col key={i}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 14, fontWeight: 600, color: MUTED }}>
                <span style={{ fontSize: 18 }}>{item.icon}</span>
                {item.text}
              </div>
            </Col>
          ))}
        </Row>
      </section>

      {/* ── CTA ── */}
      <section style={{
        padding: "96px 24px", textAlign: "center",
        background: `linear-gradient(135deg, ${NAVY} 0%, #0c2340 100%)`,
        color: "#fff", position: "relative", overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", width: 600, height: 600, borderRadius: "50%",
          background: `radial-gradient(circle, rgba(15,118,110,0.3) 0%, transparent 65%)`,
          left: "50%", top: "50%", transform: "translate(-50%,-50%)", pointerEvents: "none",
        }} />
        <div style={{ maxWidth: 640, margin: "0 auto", position: "relative", zIndex: 2 }}>
          <Title style={{ color: "#fff", fontSize: "clamp(32px,4vw,52px)", fontWeight: 900, marginBottom: 16, lineHeight: 1.1 }}>
            Ready for a <em style={{ color: TEAL_L }}>smarter</em> way to manage?
          </Title>
          <Paragraph style={{ color: "rgba(255,255,255,0.55)", fontSize: 17, marginBottom: 40, lineHeight: 1.7 }}>
            Join 2,400+ Tanzanian landlords already using tante to collect rent effortlessly,
            keep tenants happy, and grow their portfolios with confidence.
          </Paragraph>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <Button
              onClick={() => window.open(landlordAppUrl, '_blank')}
              type="primary" size="large"
              icon={<ArrowRightOutlined />}
              style={{ background: AMBER, borderColor: AMBER, color: NAVY, fontWeight: 700, height: 50, padding: "0 32px", fontSize: 15 }}
            >
              Get started free
            </Button>
            {/* <Button size="large" ghost style={{ fontWeight: 600, height: 50, padding: "0 28px", fontSize: 15, borderColor: "rgba(255,255,255,0.25)", color: "#fff" }}>
              Schedule a demo
            </Button> */}
          </div>
          <Text style={{ display: "block", marginTop: 18, color: "rgba(255,255,255,0.3)", fontSize: 13 }}>
            No credit card required
          </Text>
        </div>
      </section>

    </div>
  );
}
