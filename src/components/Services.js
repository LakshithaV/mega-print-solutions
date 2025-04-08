import React from 'react';
import './Services.css';

const services = [
  { name: 'Tarpaulin Printing', image: '/images/service1.jpg' },
  { name: 'Invitation Cards', image: '/images/service2.jpg' },
  { name: 'Acrylic Printing', image: '/images/service3.jpg' },
  { name: 'Sticker Printing', image: '/images/service4.jpg' },
];

const Services = () => (
  <section className="services">
    <h2>Our Services</h2>
    <div className="service-list">
      {services.map((service, index) => (
        <div key={index} className="service-item">
          <img src={service.image} alt={service.name} />
          <h3>{service.name}</h3>
        </div>
      ))}
    </div>
  </section>
);

export default Services;
