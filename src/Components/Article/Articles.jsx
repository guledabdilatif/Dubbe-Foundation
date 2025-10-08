import React from "react";
import { colors } from "../../constant/colors";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from 'lucide-react';

import './Articles.css'
const Articles = () => {
    return (
        <section className="py-5" style={{ backgroundColor: "#fff" }}>
            <div className="container">
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <div>
                        <small style={{ color: colors.secondary }}>Latest News</small>
                        <h3 className="fw-bold" style={{ color: colors.primary }}>
                            Articles You May Read
                        </h3>
                    </div>
                    <div>
                        <button
                            className="btn btn-outline-success me-2"
                            style={{
                                borderColor: colors.secondary,
                                color: colors.secondary,
                                borderRadius: "50%",
                                width: '50px',
                                height: '50px'
                            }}
                        >
                            <ChevronLeft size={28}/>
                        </button>
                        <button
                            className="btn btn-outline-success"
                            style={{
                                borderColor: colors.secondary,
                                color: colors.secondary,
                                borderRadius: "50%",
                                width: '50px',
                                height: '50px'
                            }}
                        >
                            <ChevronRight size={28}/>
                        </button>
                    </div>
                </div>

                <div className="row g-4">
                    {/* Card 1 */}
                    <div className="col-md-4">
                        <div className="card border-0 shadow-sm h-100">
                            <div
                                className="card-img-top bg-light"
                                style={{ height: "180px", borderRadius: "8px" }}
                            ></div>
                            <div className="card-body">
                                <div className="d-flex justify-content-between align-items-center mb-2">
                                    <small className="text-muted">👤 Esther Howard</small>
                                    <small className="text-muted">
                                        <i className="bi bi-calendar"></i> 12 Sep 2021
                                    </small>
                                </div>
                                <h5
                                    className="card-title fw-semibold"
                                    style={{ color: colors.primary }}
                                >
                                    Charity, Expectations Vs. Reality
                                </h5>
                                <p className="card-text text-muted">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                                    diam nonummy tempor incididunt ut labore...
                                </p>
                                <button
                                    className="btn"
                                    style={{
                                        backgroundColor: colors.secondary,
                                        color: "white",
                                        borderRadius: "6px",
                                    }}
                                >
                                    <Link to={'/blog'}> Read More</Link>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="col-md-4">
                        <div className="card border-0 shadow-sm h-100">
                            <div
                                className="card-img-top bg-light"
                                style={{ height: "180px", borderRadius: "8px" }}
                            ></div>
                            <div className="card-body">
                                <div className="d-flex justify-content-between align-items-center mb-2">
                                    <small className="text-muted">👤 Jacob Jones</small>
                                    <small className="text-muted">
                                        <i className="bi bi-calendar"></i> 22 Aug 2021
                                    </small>
                                </div>
                                <h5
                                    className="card-title fw-semibold"
                                    style={{ color: colors.primary }}
                                >
                                    This Week’s Top Stories About Charity
                                </h5>
                                <p className="card-text text-muted">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                                    diam nonummy tempor incididunt ut labore...
                                </p>
                                <button
                                    className="btn"
                                    style={{
                                        backgroundColor: colors.secondary,
                                        color: "white",
                                        borderRadius: "6px",
                                    }}
                                >
                                    <Link to={'/blog'}> Read More</Link>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="col-md-4">
                        <div className="card border-0 shadow-sm h-100">
                            <div
                                className="card-img-top bg-light"
                                style={{ height: "180px", borderRadius: "8px" }}
                            ></div>
                            <div className="card-body">
                                <div className="d-flex justify-content-between align-items-center mb-2">
                                    <small className="text-muted">👤 Floyd Miles</small>
                                    <small className="text-muted">
                                        <i className="bi bi-calendar"></i> 30 Jul 2021
                                    </small>
                                </div>
                                <h5
                                    className="card-title fw-semibold"
                                    style={{ color: colors.primary }}
                                >
                                    Why You Should Focus On Charity
                                </h5>
                                <p className="card-text text-muted">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                                    diam nonummy tempor incididunt ut labore...
                                </p>
                                <button
                                    className="btn"
                                    style={{
                                        backgroundColor: colors.secondary,
                                        color: "white",
                                        borderRadius: "6px",
                                    }}
                                >
                                    <Link to={'/blog'}> Read More</Link>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Articles;
