import React from "react";
import Header from "../../components/header/header.component";
import Footer from "../../components/footer/footer.component";

import "./reports.styles.scss";
const Reports = () => {
  return (
    <div className="reports-component">
      <Header />

      <div className="form-container">
        <div className="row container mx-auto">
          <form className="col-lg-7">
            <h2>REPORTS</h2>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto.
            </p>
            <div>
              <input
                type="text"
                placeholder="USERNAME OR EMAIL ADDRESS *"
                required
              />
            </div>
            <div>
              <input type="email" placeholder="PASSWORD *" required />
            </div>
            <div>
              <button>LOGIN</button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Reports;
