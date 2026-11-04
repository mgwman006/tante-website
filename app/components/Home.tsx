import { MenuOutlined } from "@ant-design/icons";
import { Button, Drawer, Grid, Layout, Typography } from "antd";
import { Link, Outlet } from "react-router-dom";
import { useState } from "react";

const { Header, Content, Footer } = Layout;
const { Text } = Typography;
const { useBreakpoint } = Grid;

const landlordAppUrl = import.meta.env.VITE_LANDLORD_APP_URL?.trim();
const tenantAppUrl = import.meta.env.VITE_TENANT_APP_URL?.trim();

const footerGroups = [
  {
    title: "For Tenants",
    links: ["Find a Rental", "How It Works", "FAQs"],
  },
  {
    title: "For Landlords",
    links: ["Manage Properties", "Rent Collection", "Support"],
  },
  {
    title: "For Agents",
    links: ["List Properties", "Manage Viewings", "Support"],
  },
  {
    title: "About",
    links: ["Our Mission", "Contact Us", "Blog"],
  },
];

export default function AppLayout() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const screens = useBreakpoint();
  const isMobile = !screens.md;
  const navLinks = [
    { label: "Home", href: "/", active: true },
    { label: "Find a Rental", href: tenantAppUrl || "#quick-search" },
    { label: "For Landlords", href: landlordAppUrl || "#" },
    { label: "For Agents", href: landlordAppUrl || "#" },
  ];

  return (
    <Layout className="site-layout">
      <Header className="site-header">
        <Link className="site-brand" to="/" aria-label="Tante home">
          tante<span>.</span>
        </Link>

        {!isMobile ? (
          <>
            <nav className="site-nav" aria-label="Main navigation">
              {navLinks.map((item) => (
                <a
                  key={item.label}
                  className={item.active ? "site-nav__link is-active" : "site-nav__link"}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <div className="site-header__actions">
              <a
                className="site-sign-in"
                href={tenantAppUrl || "#"}
                target={tenantAppUrl ? "_blank" : undefined}
                rel={tenantAppUrl ? "noreferrer" : undefined}
              >
                Sign In
              </a>
              <Button
                className="site-get-started"
                href={landlordAppUrl || "#"}
                target={landlordAppUrl ? "_blank" : undefined}
                rel={landlordAppUrl ? "noreferrer" : undefined}
              >
                Get Started
              </Button>
            </div>
          </>
        ) : (
          <Button
            className="site-menu-button"
            type="text"
            aria-label="Open navigation menu"
            icon={<MenuOutlined />}
            onClick={() => setDrawerOpen(true)}
          />
        )}
      </Header>

      <Drawer
        title={<span className="drawer-brand">tante<span>.</span></span>}
        placement="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        width={280}
      >
        <nav className="mobile-nav" aria-label="Mobile navigation">
          {navLinks.map((item) => (
            <a key={item.label} href={item.href} onClick={() => setDrawerOpen(false)}>
              {item.label}
            </a>
          ))}
          <a href={tenantAppUrl || "#"} onClick={() => setDrawerOpen(false)}>Sign In</a>
          <Button
            type="primary"
            href={landlordAppUrl || "#"}
            onClick={() => setDrawerOpen(false)}
          >
            Get Started
          </Button>
        </nav>
      </Drawer>

      <Content>
        <Outlet />
      </Content>

      <section className="site-footer-main">
        <div className="site-footer__inner">
          <div className="site-footer__brand">
            <Link className="site-brand site-brand--footer" to="/">
              tante<span>.</span>
            </Link>
            <Text>Better rental relationships.<br />Together.</Text>
          </div>
          <div className="site-footer__groups">
            {footerGroups.map((group) => (
              <div className="site-footer__group" key={group.title}>
                <Text strong>{group.title}</Text>
                {group.links.map((label) => (
                  <a
                    key={label}
                    href={
                      group.title === "For Tenants"
                        ? tenantAppUrl || "#"
                        : group.title === "For Landlords" || group.title === "For Agents"
                          ? landlordAppUrl || "#"
                          : "#"
                    }
                  >
                    {label}
                  </a>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer className="site-footer-bottom">
        <Text>© 2025 Tante. All rights reserved.</Text>
        <div className="site-footer__socials" aria-label="Social media">
          <a href="https://www.facebook.com/" aria-label="Facebook">f</a>
          <a href="https://www.x.com/" aria-label="X">𝕏</a>
          <a href="https://www.linkedin.com/" aria-label="LinkedIn">in</a>
          <a href="https://www.youtube.com/" aria-label="YouTube">▶</a>
        </div>
      </Footer>
    </Layout>
  );
}
