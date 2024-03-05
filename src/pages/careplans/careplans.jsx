import Header from "../../components/header/header.component";
import Tagline from "../../components/tagline/tagline.component";
import Footer from "../../components/footer/footer.component";
import Heading from "../../atoms/heading/heading.component";

import "./careplans.styles.scss";

export default function CarePlans() {
  return (
    <main className="seo-main">
      <Header />
      <Heading
        title="Care Plans"
        subTitle="Already have a website? We will service that for you."
      />
      <div className={"care-plans-container"}>
        <div className="overlay">
          <div className="container">
            <div className="custom-table">
              <div className="table-column">
                <div className="header-container">
                  <i className="fas fa-map"></i>
                  Features
                </div>
                <div className="column-container">Website Backups</div>
                <div className="column-container">Live Customer Support</div>
                <div className="column-container">
                  Malware Monitoring & Protection
                </div>
                <div className="column-container">
                  WordPress Core File & Plugin Updates
                </div>
                <div className="column-container">
                  Content Updates Assistance
                </div>
                <div className="column-container">Content Creation</div>
                <div className="column-container">
                  Analytics Reports & Analysis
                </div>
                <div className="column-container">
                  Website Performance Audit
                </div>
                <div className="column-container">Database maintenance</div>
                <div className="column-container">Email Setup</div>
                <div className="column-container large">
                  <b>Hours Allotted</b>
                </div>
                <div className="column-container black"></div>
              </div>

              <div className="table-column">
                <div className="header-container">
                  <i className="fas fa-check-circle"></i>Basic
                  <div className="box">
                    <h2>$75</h2>
                    month
                  </div>
                </div>
                <div className="column-container">
                  <span>Weekly Backups</span>Weekly
                </div>
                <div className="column-container">
                  <span>Live Customer Support</span>✓
                </div>
                <div className="column-container">
                  <span>WordPress Core File & Plugin Updates</span>✓
                </div>
                <div className="column-container">
                  <span>Malware Monitoring & Protection</span>✓
                </div>
                <div className="column-container">
                  <span>Content Updates Assistance</span>✕
                </div>
                <div className="column-container">
                  <span>Content Creation</span>✕
                </div>
                <div className="column-container">
                  <span>Analytics Reports & Analysis</span>✕
                </div>
                <div className="column-container">
                  <span>Website Performance Audit</span>✕
                </div>
                <div className="column-container">
                  <span>Database maintenance</span>✕
                </div>
                <div className="column-container">
                  <span>Email Setup</span>✕
                </div>
                <div className="column-container large">
                  <b>
                    <div>Hours Allotted</div>✕
                  </b>
                </div>
                <div className="column-container black">
                  <button>Buy Now</button>
                  <span>*$75 for each additional hour</span>
                </div>
              </div>

              <div className="table-column">
                <div className="header-container">
                  <i className="fas fa-star"></i>Plus
                  <div className="box">
                    <h2>$160</h2>
                    month
                  </div>
                </div>
                <div className="column-container">
                  <span>Weekly Backups</span> Weekly
                </div>
                <div className="column-container">
                  <span>Live Customer Support</span>✓
                </div>
                <div className="column-container">
                  <span>WordPress Core File & Plugin Updates</span>✓
                </div>
                <div className="column-container">
                  <span>Malware Monitoring & Protection</span>✓
                </div>
                <div className="column-container">
                  <span>Content Updates Assistance</span>✓
                </div>
                <div className="column-container">
                  <span>Content Creation</span>✕
                </div>
                <div className="column-container">
                  <span>Analytics Reports & Analysis</span>✕
                </div>
                <div className="column-container">
                  <span>Website Performance Audit</span>✕
                </div>
                <div className="column-container">
                  <span>Database maintenance</span>✕
                </div>
                <div className="column-container">
                  <span>Email Setup</span>✓
                </div>
                <div className="column-container large">
                  <b>
                    <div>Hours Allotted</div>2 Hours of content update
                    assistance/month
                  </b>
                </div>
                <div className="column-container black">
                  <button>Buy Now</button>
                  <span>*$75 for each additional hour</span>
                </div>
              </div>

              <div className="table-column">
                <div className="header-container">
                  <i className="fas fa-check-circle "></i>Preminum
                  <div className="box">
                    <h2>$295</h2>
                    month
                  </div>
                </div>
                <div className="column-container">
                  <span>Weekly Backups</span>Daily
                </div>
                <div className="column-container">
                  <span>Live Customer Support</span>✓
                </div>
                <div className="column-container">
                  <span>WordPress Core File & Plugin Updates</span>✓
                </div>
                <div className="column-container">
                  <span>Malware Monitoring & Protection</span>✓
                </div>
                <div className="column-container">
                  <span>Content Updates Assistance</span>✓
                </div>
                <div className="column-container">
                  <span>Content Creation</span>✓
                </div>
                <div className="column-container">
                  <span>Analytics Reports & Analysis</span>✓
                </div>
                <div className="column-container">
                  <span>Website Performance Audit</span>✕
                </div>
                <div className="column-container">
                  <span>Database maintenance</span>✕
                </div>
                <div className="column-container">
                  <span>Email Setup</span>✓
                </div>
                <div className="column-container large">
                  <b>
                    <div>Hours Allotted</div>4 Hours of content update
                    assistance & content creation total/month
                  </b>
                </div>
                <div className="column-container black">
                  <button>Buy Now</button>
                  <span>*$75 for each additional hour</span>
                </div>
              </div>

              <div className="table-column">
                <div className="header-container">
                  <i className="far fa-calendar-plus"></i>Preminum Plus
                  <div className="box">
                    <h2>$425</h2>
                    month
                  </div>
                </div>
                <div className="column-container">
                  <span>Weekly Backups</span>Daily
                </div>
                <div className="column-container">
                  <span>Live Customer Support</span>✓
                </div>
                <div className="column-container">
                  <span>WordPress Core File & Plugin Updates</span>✓
                </div>
                <div className="column-container">
                  <span>Malware Monitoring & Protection</span>✓
                </div>
                <div className="column-container">
                  <span>Content Updates Assistance</span>✓
                </div>
                <div className="column-container">
                  <span>Content Creation</span>✓
                </div>
                <div className="column-container">
                  <span>Analytics Reports & Analysis</span>✓
                </div>
                <div className="column-container">
                  <span>Website Performance Audit</span>✓
                </div>
                <div className="column-container">
                  <span>Database maintenance</span>✓
                </div>
                <div className="column-container">
                  <span>Email Setup</span>✓
                </div>
                <div className="column-container large">
                  <b>
                    <div>Hours Allotted</div>6 Hours of content update
                    assistance & content creation total/month
                  </b>
                </div>
                <div className="column-container black">
                  <button>Buy Now</button>
                  <span>*$75 for each additional hour</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Tagline web />
      <Footer />
    </main>
  );
}
