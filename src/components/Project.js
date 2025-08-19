import React from "react";
import styled from "styled-components";
import Slider from "react-slick";

const ProjectsSection = styled.section`
  padding: 5rem 2rem;
  background: linear-gradient(135deg, #0f0f1a, #1a1a2e);

  h2 {
    text-align: center;
    margin-bottom: 3rem;
    font-size: 2.5rem;
    font-weight: 700;
    color: #00d4ff;
  }

  .slick-slide {
    display: flex;
    justify-content: center;
    padding: 1rem;
  }

  .card {
    background: rgba(255, 255, 255, 0.08);
    border: 1px solid rgba(255, 255, 255, 0.15);
    backdrop-filter: blur(12px);
    border-radius: 15px;
    padding: 2rem;
    width: 100%;          /* Make width dynamic */
    max-width: 320px;     /* Limit maximum width */
    box-sizing: border-box;
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  .card:hover {
    transform: translateY(-8px);
    box-shadow: 0 0 20px rgba(0, 212, 255, 0.4);
  }

  .card h3 {
    font-size: 1.3rem;
    color: #00e676;
    margin-bottom: 0.8rem;
  }

  .card p {
    flex: 1;
    font-size: 0.95rem;
    margin-bottom: 1rem;
    line-height: 1.6;
    color: rgba(255, 255, 255, 0.85);
  }

  .tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  .tag {
    background: rgba(0, 212, 255, 0.15);
    color: #00d4ff;
    font-size: 0.8rem;
    padding: 0.3rem 0.8rem;
    border-radius: 20px;
    font-weight: 500;
  }

  /* Optional: adjust font sizes for mobile */
  @media (max-width: 480px) {
    h2 {
      font-size: 2rem;
    }
    .card h3 {
      font-size: 1.1rem;
    }
    .card p {
      font-size: 0.9rem;
    }
  }
`;
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: true,  // optional: show arrows only on desktop
  responsive: [
    {
      breakpoint: 1024,
      settings: { slidesToShow: 2, arrows: true }
    },
    {
      breakpoint: 768,
      settings: { slidesToShow: 1, arrows: false } // hide arrows on mobile
    }
  ]
};



const Projects = () => {
  const projects = [
    {
      name: "Course Management System",
      desc: "Java program that allows students to manage university courses with CSV storage.",
      tags: ["Java", "CSV"],
    },
    {
      name: "University Website",
      desc: "Responsive website with faculties, events, campuses, admissions, and signup.",
      tags: ["HTML", "CSS", "Bootstrap", "JavaScript"],
    },
    {
      name: "Medical Center Management",
      desc: "JavaFX system with secure login, patient file management, appointments, and staff data.",
      tags: ["JavaFX", "Database"],
    },
    {
      name: "Travel Booking Website",
      desc: "Responsive city tour guide with feedback forms and cross-device accessibility.",
      tags: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    },
    {
      name: "Rent House Web/Mobile App",
      desc: "Full-stack rental platform with Spring Boot APIs, Stripe payments, Google/GitHub login, and React Native mobile app.",
      tags: ["React", "Spring Boot", "Stripe", "React Native"],
    },
    {
      name: "Delivery App",
      desc: "Laravel-based delivery platform with payments, GPS tracking, chat, and multi-role access.",
      tags: ["Laravel", "JavaScript", "Stripe", "Firebase"],
    },
    {
      name: "Teacher Management System",
      desc: "C++ OOP project for managing university teachers, schedules, and feedback.",
      tags: ["C++", "OOP", "Pointers"],
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 }
      }
    ]
  };

  return (
    <ProjectsSection id="projects">
      <h2>Projects</h2>
      <Slider {...settings}>
        {projects.map((p, i) => (
          <div key={i} style={{ display: "flex", justifyContent: "center" }}>
            <div className="card">
              <h3>{p.name}</h3>
              <p>{p.desc}</p>
              <div className="tags">
                {p.tags.map((tag, j) => (
                  <span className="tag" key={j}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </Slider>

    </ProjectsSection>
  );
};

export default Projects;
