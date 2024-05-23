import React from 'react';
import "./Service.css";

const Service = () => {
  return (
    <div className='main' id='our-service'>
        <h2>Explore Our Comprehensive Suite of Payment Solutions</h2>
        <p className='para'>At Falcon Pay, we understand that every business is unique, which is why we offer a diverse range of services tailored to meet your specific needs. Whether you're looking to streamline your checkout process, expand your global reach, or enhance security, our suite of payment solutions has you covered.</p>
        <div className='service-list'>
            <div>
                <h3>Payment Processing</h3>
                <p>Seamlessly accept payments online, in-store, or on-the-go with our flexible and secure processing solutions. From credit and debit cards to digital wallets and beyond, we support a wide range of payment methods to ensure convenience for you and your customers.</p>
            </div>

            <div>
                <h3>E-commerce Integration</h3>
                <p>Simplify the integration of payment functionality into your e-commerce platform with our robust APIs and plugins. Whether you're using Shopify, WooCommerce, Magento, or another platform, we make it easy to enhance your online store's checkout experience.</p>
            </div>

            <div>
                <h3>Fraud Prevention</h3>
                <p>Protect your business and customers from fraudulent activities with our advanced fraud prevention tools. Our cutting-edge technology analyzes transactions in real-time to detect and prevent suspicious behavior, giving you peace of mind and safeguarding your reputation.</p>
            </div>
            <div>
                <h3>Subscription Billing</h3>
                <p>Manage recurring payments effortlessly with our subscription billing solution. Whether you offer subscription-based services, memberships, or product subscriptions, our platform automates the billing process, reduces churn, and maximizes revenue.</p>
            </div>
            <div>
                <h3>Global Payments</h3>
                <p>Expand your business globally with our international payment solutions. Accept payments in multiple currencies, localize checkout experiences, and navigate cross-border complexities with ease, allowing you to tap into new markets and drive growth.</p>
            </div>
            <div>
                <h3>Reporting and Analytics</h3>
                <p>Gain valuable insights into your payment performance with our comprehensive reporting and analytics tools. Track transaction trends, monitor key metrics, and make data-driven decisions to optimize your business strategy.</p>
            </div>
        </div>
    </div>
  )
}

export default Service