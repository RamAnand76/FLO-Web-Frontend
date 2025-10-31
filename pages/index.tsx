import Header from '../components/Header';
import ActionCard from '../components/ActionCard';
import MetricCard from '../components/MetricCard';
import PortfolioCard from '../components/PortfolioCard';
import { FiUpload, FiPlus, FiCode, FiCoffee, FiTrendingUp, FiActivity, FiUsers, FiDollarSign } from 'react-icons/fi';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

export default function HomePage() {
  const router = useRouter();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="page-layout">
      <div className="layout-container">
        <Header />
        
        {/* Welcome Section */}
        <div className="hero-section spacing-section">
          <div className="hero-background">
            <div className="hero-sphere hero-sphere-1" style={{ transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)` }}></div>
            <div className="hero-sphere hero-sphere-2" style={{ transform: `translate(${-mousePosition.x * 0.5}px, ${-mousePosition.y * 0.5}px)` }}></div>
            <div className="hero-sphere hero-sphere-3" style={{ transform: `translate(${mousePosition.x * 0.8}px, ${mousePosition.y * 0.8}px)` }}></div>
            <div className="hero-grid"></div>
          </div>
          <div className="hero-content">
            <div className="hero-text-container">
              <div className="hero-badge">Premium Dashboard</div>
              <h2 className="hero-title">Welcome back, Designer!</h2>
              <p className="hero-subtitle">Ready to create something amazing today?</p>
            </div>
            <button
              onClick={() => router.push('/templates')}
              className="hero-cta"
            >
              <span>Start New Project</span>
              <div className="hero-cta-shine"></div>
            </button>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="spacing-section">
          <div className="section-header-3d">
            <h3 className="section-title-3d">
              Quick Actions
            </h3>
            <p className="section-subtitle">Accelerate your workflow</p>
          </div>
          <div className="action-cards-grid">
            <ActionCard icon={<FiUpload />} label="Upload Assets" onClick={() => router.push('/templates')} />
            <ActionCard icon={<FiPlus />} label="New Project" onClick={() => router.push('/templates')} />
            <ActionCard icon={<FiCode />} label="Code Editor" />
            <ActionCard icon={<FiCoffee />} label="Take a Break" />
          </div>
        </div>

        {/* Analytics Dashboard */}
        <div className="spacing-section">
          <div className="section-header-3d">
            <div>
              <h3 className="section-title-3d">
                Analytics Overview
              </h3>
              <p className="section-subtitle">Real-time performance metrics</p>
            </div>
            <select className="select-3d">
              <option>Last 30 days</option>
              <option>Last 7 days</option>
              <option>Last 90 days</option>
            </select>
          </div>
          <div className="metrics-grid">
            <div className="metric-card-3d">
              <div className="metric-icon-container metric-icon-blue">
                <FiTrendingUp className="metric-icon" />
              </div>
              <MetricCard label="Total Views" value="12,847" change="+23%" />
            </div>
            <div className="metric-card-3d">
              <div className="metric-icon-container metric-icon-green">
                <FiActivity className="metric-icon" />
              </div>
              <MetricCard label="Engagement Rate" value="8.4%" change="+12%" />
            </div>
            <div className="metric-card-3d">
              <div className="metric-icon-container metric-icon-orange">
                <FiUsers className="metric-icon" />
              </div>
              <MetricCard label="New Followers" value="1,284" change="+18%" />
            </div>
            <div className="metric-card-3d">
              <div className="metric-icon-container metric-icon-purple">
                <FiDollarSign className="metric-icon" />
              </div>
              <MetricCard label="Revenue" value="$4,250" change="+31%" />
            </div>
          </div>
        </div>

        {/* Portfolio Showcase */}
        <div className="spacing-section">
          <div className="section-header-3d">
            <div>
              <h3 className="section-title-3d">
                Your Portfolio Showcase
              </h3>
              <p className="section-subtitle">Featured projects and designs</p>
            </div>
            <button className="btn-link-3d">
              View All Projects →
            </button>
          </div>
          <div className="portfolio-grid">
            <PortfolioCard title="Modern UI Kit" views="8.2K Views" likes={342} />
            <PortfolioCard title="E-commerce Platform" views="5.7K Views" likes={198} />
            <PortfolioCard title="Dashboard Analytics" views="4.1K Views" likes={156} />
            <PortfolioCard title="Mobile App Design" views="3.8K Views" likes={124} />
            <PortfolioCard title="Brand Identity" views="2.9K Views" likes={89} />
            <PortfolioCard title="Web3 Interface" views="2.1K Views" likes={67} />
          </div>
        </div>
      </div>
    </div>
  );
}