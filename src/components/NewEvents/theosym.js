import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';
import logo from './logo.png';
import neoai from './neo.png';
import neoai1 from './neo1.png';
import neoai2 from './neo2.png';
import neoai3 from './neo3.png';

const LandingPage = () => {
    const featres = [
        {
          title: "Communication",
          description: "Understand best practices for AI-human collaboration in software development"
        },
        {
          title: "Task Distribution",
          description: "Learn how to effectively allocate tasks between human developers and AI assistants"
        },
        {
          title: "Quality Assurance",
          description: "Implement strategies for maintaining code quality in AI-assisted development"
        },
        {
          title: "Continuous Learning",
          description: "Develop a framework for ongoing improvement in AI-human collaborative processes"
        }
      ];
    
      const timelineItems = [
        {
          number: "1",
          title: "Code Generation",
          description: "Use AI to generate code snippets and entire functions"
        },
        {
          number: "2",
          title: "Full-Stack Development",
          description: "Develop full-stack applications with AI assistance"
        },
        {
          number: "3",
          title: "Debugging and Optimization",
          description: "Implement AI-driven debugging and code optimization"
        },
        {
          number: "4",
          title: "Rapid Prototyping",
          description: "Create AI-powered prototypes and MVPs rapidly"
        }
      ];

      const steps = [
        {
          number: "1",
          title: "Positioning for Success",
          description: "By embracing this technology, you're not just learning new tools – you're positioning yourself at the forefront of a digital revolution that combines human intuition with AI-powered insights, including the ability to create sophisticated software solutions."
        },
        {
          number: "2",
          title: "Shaping the Future",
          description: "Invest in your future. Join us in shaping a world where human ingenuity and artificial intelligence converge to create unprecedented opportunities for growth, innovation, and success in both business and technology domains."
        },
        {
          number: "3",
          title: "AI-Augmented Future",
          description: "Secure Your Spot in the AI-Augmented Future"
        }
      ];
      
      const features = [
        {
          icon: "🚀", // You can replace this with an SVG or image icon
          title: "Launch Your Career",
          description: "Propel your professional growth with cutting-edge AI skills",
        },
        {
          icon: "📊",
          title: "Expand Your Network",
          description:
            "Connect with like-minded innovators and industry leaders",
        },
        {
          icon: "💡",
          title: "Drive Innovation",
          description:
            "Learn to create groundbreaking solutions using AI technologies",
        },
        {
          icon: "🎓",
          title: "Earn Certification",
          description: "Gain recognition for your expertise in AI innovation",
        },
      ];

      
  return (
    <div className="landing-page">
      <nav className="nav-container">
        <div className="logo-container">
        <a href={window.location.origin + '/theosym'}>
          <img src={logo} alt="THEOSYM" className="logo" />
        </a>
        </div>
        <div className="nav-right">
          <a href="https://theosym.com/" target="_blank" rel="noopener noreferrer" className="website-text" > TheoSym website </a>
          <button className="secure-btn" onClick={() => window.location.href = "https://theosym.jotform.com/243261109704955"} > Secure your Spot </button>
        </div>
      </nav>

      <main className="main-content">
        <div className="content-left">
          <h1 className="gradient-title">
            From Novice to AI Pro: Career-Boosting Skills for the Digital Age
          </h1>
          <p className="subtitle">
            Embark on a transformative journey into the future of technology with our
            comprehensive AI Innovation package.
          </p>
          <button className="secure-btn" onClick={() => window.location.href = "https://theosym.jotform.com/243261109704955"} > Secure your Spot </button>
        </div>
        <div className="content-right">
          <img
            src={neoai}
            alt="Futuristic cityscape with two silhouettes"
            className="hero-image"
          />
        </div>
      </main>


      {/* Package Section */}
      <section className="package-section">
        <h2 className="section-title">Comprehensive AI Innovation Package</h2>
        <div className="package-grid">
          <div className="package-aicard">
            <h3>Foundational Knowledge</h3>
            <p>This unique offering combines foundational knowledge and advanced applications in a single, streamlined experience. Whether you're taking your first steps into AI or ready to push the boundaries of innovation, this course equips you with the tools to harness the power of cutting-edge AI platforms and Human-AI Augmentation (HAA) techniques.</p>
          </div>
          <div className="package-aicard">
            <h3>Growth Mindset</h3>
            <p>Our program is designed to foster a growth mindset, encouraging you to reimagine what's possible in our AI-driven world. You'll learn how to leverage AI-augmented virtual assistants, Retrieval-Augmented Generation (RAG), and other advanced AI capabilities to enhance productivity, decision-making, and customer interactions.</p>
          </div>
          <div className="package-aicard">
            <h3>Investment</h3>
            <div className="price-list">
              <p>$399.00 One-time Investment</p>
              <p>$299.00 One-time Investment early discount</p>
              <p>$199.00 One-time Investment Student early discount</p>
            </div>
          </div>
        </div>

        {/* Key Features Section */}
        <div className="features-container">
          <h2 className="features-title">Key Features</h2>
          <div className="features-grid">
            <div className="feature-card">
              <span className="feature-number">1</span>
              <div className="feature-content">
                <h4>Master AI Tools</h4>
                <p>Master AI tools like ChatGPT, Claude, Gemini, and Perplexity</p>
              </div>
            </div>
            <div className="feature-card">
              <span className="feature-number">2</span>
              <div className="feature-content">
                <h4>Explore Symprise</h4>
                <p>Explore the revolutionary Symprise platform</p>
              </div>
            </div>
            <div className="feature-card">
              <span className="feature-number">3</span>
              <div className="feature-content">
                <h4>Business Integration</h4>
                <p>Learn to integrate AI seamlessly with existing business processes</p>
              </div>
            </div>
            <div className="feature-card">
              <span className="feature-number">4</span>
              <div className="feature-content">
                <h4>Data Analysis</h4>
                <p>Develop skills in AI-driven data analysis and strategy formulation</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ethical AI Section */}
      <section className="ethical-ai-section">
        <div className="content-wrapper">
          <h2 className="gradient-heading">Ethical AI and Governance</h2>
          <ul className="ethics-list">
            <li>
              <span className="bullet">▸</span>
              Understand ethical AI deployment
            </li>
            <li>
              <span className="bullet">▸</span>
              AI governance frameworks
            </li>
            <li>
              <span className="bullet">▸</span>
              Balancing innovation and ethics
            </li>
          </ul>
        </div>
      </section>

      <section className="development-section">
      <div className="content-wrapper">
        <div className="development-grid">
          <div className="image-container">
            <img src={neoai1} alt="Developer working with multiple screens"  className="developer-image" />
          </div>
          <div className="development-content">
            <h2 className="gradient-heading">AI-Powered Development Module</h2>
            <div className="timeline">
              {timelineItems.map((item, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-number">{item.number}</div>
                  <div className="timeline-content">
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
       
      <div className="ai_layout_wrapper">
        <div className="ai_split_container">
          <div className="ai_content_section">
            <h1 className="ai_hero_title">
              Best Practices for AI-
              <span>Human Collaboration</span>
            </h1>

            <div className="ai_features_grid">
              {features.map((feature, index) => (
                <div key={index} className="ai_feature_box">
                  <div className="ai_feature_header">
                    <h3 className="ai_feature_heading">{feature.title}</h3>
                  </div>
                  <div className="ai_feature_content">
                    <p className="ai_feature_text">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="ai_media_wrapper">
            <img  src={neoai3} alt="AI-Human Collaboration" className="ai_hero_image" />
            <div className="ai_image_overlay"></div>
          </div>
        </div>
      </div>
    </section>




    <div className="impact-section">
      <div className="impact-container">
        <h1>Transformative Impact</h1>
        
        <div className="steps-container">
          <div className="step">
            <div className="step-number">1</div>
            <h2>Positioning for Success</h2>
            <p>By embracing this technology, you're not just learning new tools – you're positioning yourself at the forefront of a digital revolution that combines human intuition with AI-powered insights, including the ability to create sophisticated software solutions.</p>
          </div>

          <div className="step">
            <div className="step-number">2</div>
            <h2>Shaping the Future</h2>
            <p>Invest in your future. Join us in shaping a world where human ingenuity and artificial intelligence converge to create unprecedented opportunities for growth, innovation, and success in both business and technology domains.</p>
          </div>

          <div className="step">
            <div className="step-number">3</div>
            <h2>AI-Augmented Future</h2>
            <p>Secure Your Spot in the AI-Augmented Future</p>
          </div>
        </div>
      </div>
    </div>




    <div className="innovation-wrapper">
      <div className="innovation-container">
        <div className="innovation-content">
          <h1 className="innovation-title">
            Join the AI Innovation <br />
            <span>Journey</span>
          </h1>

          <div className="innovation-features">
            {features.map((feature, index) => (
              <div key={index} className="innovation-feature">
                <div className="feature-icon">{feature.icon}</div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="innovation-image-container">
          <img
            src={neoai2}
            alt="AI Innovation Journey"
            className="innovation-image"
          />
        </div>
      </div>
    </div>
      
    </div>
  );
};

export default LandingPage;