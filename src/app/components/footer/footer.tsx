import React from 'react'
import Link from 'next/link'
import Logo from '../logo'

import { FaLinkedin } from 'react-icons/fa6'
import { BsGeoAltFill, BsTelephoneOutbound } from 'react-icons/bs'
import { FaFacebookF, FaHeart, FaInstagram, FaTwitter } from 'react-icons/fa'

import { footerLink1, footerLink2, footerLink3 } from '../../data/data'

export default function Footer() {
  return (
        <footer className="footer skin-dark-footer">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 col-md-5 col-lg-12 col-xl-4">
                        <div className="footer-widget pe-xl-4 mb-5">
                            <div className="footerLogo"><Logo width={160} imgClassName="img-fluid" navClass="" /></div>
                            <div className="footerText">
                                <p className="mb-2">© {new Date().getFullYear()} QTick. Develop with <FaHeart className="ms-1 text-danger"></FaHeart>  By Shreethemes</p>
                                <div className="d-flex flex-wrap gap-3 small text-muted">
                                    <Link href="/terms" className="text-muted text-decoration-none">Terms &amp; Conditions</Link>
                                    <Link href="/privacy-policy" className="text-muted text-decoration-none">Privacy Policy</Link>
                                </div>
                            </div>
                            <div className="footerSocialwrap">
                                <ul className="footersocial">
                                    <li><Link href="#" className="social-link"><FaFacebookF className=""/></Link></li>
                                    <li><Link href="#" className="social-link"><FaTwitter className=""/></Link></li>
                                    <li><Link href="#" className="social-link"><FaInstagram className=""/></Link></li>
                                    <li><Link href="#" className="social-link"><FaLinkedin className=""/></Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-6 col-md-4 offset-md-3 col-lg-3  offset-lg-0 col-xl-2">
                        <div className="footer-widget mb-5 mb-md-5 mb-lg-0">
                            <h4 className="widget-title text-pri">Community</h4>
                            <ul className="footer-menu">
                                {footerLink1.map((item,index)=>{
                                    return(
                                        <li key={index}><Link href="#">{item}</Link></li>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>

                    <div className="col-6 col-md-4 col-lg-3 col-xl-2">
                        <div className="footer-widget mb-5 mb-md-5 mb-lg-0">
                            <h4 className="widget-title">Getting Started</h4>
                            <ul className="footer-menu">
                                {footerLink2.map((item,index)=>{
                                    return(
                                        <li key={index}><Link href="#">{item}</Link></li>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>

                    <div className="col-6 col-md-4 col-lg-3 col-xl-2">
                        <div className="footer-widget">
                            <h4 className="widget-title">QTick Business</h4>
                            <ul className="footer-menu">
                                {footerLink3.map((item,index)=>{
                                    return(
                                        <li key={index}><Link href="#">{item}</Link></li>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>

                    <div className="col-6 col-md-4 col-lg-3 col-xl-2">
                        <div className="footer-widget">
                            <h4 className="widget-title">Get In Touch</h4>
                            <div className="contactInfowrap">
                                
                                <div className="singleinfo">
                                    <div className="icons"><BsGeoAltFill className=""/></div>
                                    <div className="caps">
                                        <h5 className="title">Angraster 7, Greenhorst<br/>Los Angeles QTC564</h5>
                                        <p className="subs">Reach Us</p>											
                                    </div>
                                </div>
                                
                                <div className="singleinfo">
                                    <div className="icons"><BsTelephoneOutbound className=""/></div>
                                    <div className="caps">
                                        <h5 className="title">042 - 526 - 5263</h5>
                                        <p className="subs">Mon - Sat 10am - 6PM</p>											
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid border-top pt-3 pb-3">
                <div className="d-flex flex-column flex-md-row align-items-md-center justify-content-md-between gap-3">
                    <p className="mb-0 small text-muted">Stay connected with QTick for industry insights, compliance updates, and community stories.</p>
                    <div className="d-flex flex-wrap gap-2">
                        <Link href="/list-layout-01" className="badge bg-soft-primary text-primary rounded-pill">Browse Listings</Link>
                        <Link href="/dashboard-add-listing" className="badge bg-soft-primary text-primary rounded-pill">Add Your Business</Link>
                        <Link href="/help-center" className="badge bg-soft-primary text-primary rounded-pill">Help Center</Link>
                    </div>
                </div>
            </div>
        </footer>
  )
}
