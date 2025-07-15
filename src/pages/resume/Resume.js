import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import { Fade } from "react-reveal";
import "./Resume.css";

class Resume extends Component {
  render() {
    const theme = this.props.theme;

    return (
      <div className="resume-main">
        <Header theme={this.props.theme} />
        <div className="basic-resume">
          <Fade bottom duration={2000} distance="40px">
            <div className="resume-heading-div">
              <div className="resume-heading-text-div">
                <h1
                  className="resume-heading-text"
                  style={{ color: theme.text }}
                >
                  Resume
                </h1>
                <h3
                  className="resume-heading-sub-text"
                  style={{ color: theme.text }}
                >
                  Mohammad Ashraf Fawzy
                </h3>
                <p
                  className="resume-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  View my professional experience, skills, and achievements in
                  detail.
                </p>
              </div>
            </div>
          </Fade>

          <Fade bottom duration={2000} distance="40px">
            <div className="resume-actions">
              <a
                href={require("../../assets/Mohammad Ashraf Fawzy.pdf")}
                download="Mohammad_Ashraf_Resume.pdf"
                className="download-btn"
                style={{
                  backgroundColor: theme.text,
                  color: theme.body,
                  border: `2px solid ${theme.text}`,
                }}
              >
                Download PDF
              </a>
              <a
                href={require("../../assets/Mohammad Ashraf Fawzy.pdf")}
                target="_blank"
                rel="noopener noreferrer"
                className="view-btn"
                style={{
                  backgroundColor: "transparent",
                  color: theme.text,
                  border: `2px solid ${theme.text}`,
                }}
              >
                View in New Tab
              </a>
            </div>

            <div className="pdf-viewer-container">
              <iframe
                src={require("../../assets/Mohammad Ashraf Fawzy.pdf")}
                className="pdf-iframe"
                title="Mohammad Ashraf Resume"
                style={{ border: `1px solid ${theme.text}` }}
              >
                <p style={{ color: theme.text }}>
                  Your browser does not support PDFs.
                  <a
                    href={require("../../assets/Mohammad Ashraf Fawzy.pdf")}
                    style={{ color: theme.highlight }}
                  >
                    Download the PDF
                  </a>{" "}
                  to view it.
                </p>
              </iframe>
            </div>
          </Fade>
        </div>
        <Footer theme={theme} />
        <TopButton theme={theme} />
      </div>
    );
  }
}

export default Resume;
