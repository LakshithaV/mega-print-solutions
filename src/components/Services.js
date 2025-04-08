import React from 'react';
import './Services.css';

const services = [
  { name: 'Tarpaulin Printing', image: 'https://dezynedit.com/wp-content/uploads/2022/05/TARPAULIN-PRINTING-PER-SQFT.png' },
  { name: 'Invitation Cards', image: 'https://static.vecteezy.com/system/resources/previews/027/477/475/non_2x/luxury-wedding-invitation-cards-set-free-vector.jpg' },
  { name: 'Acrylic Printing', image: 'https://www.pictorem.com/images/acr_intro4.jpg' },
  { name: 'Sticker Printing', image: 'https://www.rolanddg.eu/-/media/roland-emea/images/applications/stickers/stickers-22/sticker-printing-print-and-cut-vinyl-stickers.jpg/?la=en&h=534&w=800&hash=C565C5CD8356AB7A130D5219E9B785D4' },
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
