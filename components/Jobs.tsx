"use client";

import React, { useState } from "react";
import Title from "@/components/Title";
import { FaAngleDoubleRight } from "react-icons/fa";
import jobsData from "@/constants/jobs";

const Jobs = () => {
    const [value, setValue] = useState(0);
    const jobs = jobsData;
    const { company, position, date, desc } = jobs[value];

    return (
        <section className="section jobs">
            <Title title="experience" />
            <div className="jobs-center">
                {/* btn container */}
                <div className="btn-container">
                    {jobs.map((item, index) => (
                        <button
                            key={item.id}
                            onClick={() => setValue(index)}
                            className={`job-btn ${
                                index === value ? "active-btn" : ""
                            }`}
                        >
                            {item.company}
                        </button>
                    ))}
                </div>

                {/* job info */}
                <article className="job-info">
                    <h3>{position}</h3>
                    <h4>{company}</h4>
                    <p className="job-date">{date}</p>
                    {desc.map((item) => (
                        <div key={item.id} className="job-desc">
                            <FaAngleDoubleRight className="job-icon" />
                            <p>{item.name}</p>
                        </div>
                    ))}
                </article>
            </div>
        </section>
    );
};

export default Jobs;
