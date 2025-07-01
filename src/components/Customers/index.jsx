import React from 'react'
import "./styles.css";
const customerData = [
  {
    name: "Ali Hassan",
    image: "https://randomuser.me/api/portraits/men/94.jpg",
    feedback: "The website exceeded my expectations — responsive, modern and fast.",
    service: "Web Development",
  },
  {
    name: "Sara Mahmoud",
    image: "https://randomuser.me/api/portraits/women/71.jpg",
    feedback: "Amazing design and super professional experience from start to finish.",
    service: "UI/UX Design",
  },
  {
    name: "Yousef Darwish",
    image: "https://randomuser.me/api/portraits/men/51.jpg",
    feedback: "Helped me launch my business online smoothly. Highly recommended!",
    service: "E-Commerce Setup",
  },
];

const Customers = () => {
  return <section className="section customers-section" id="customers">
    <h2 className="section-title">My Customers</h2>
    <div className="customer-cards">
      {customerData.map((customer, index) => (
        <div className="customer-card" key={index}>
          <img src={customer.image} alt={customer.name} className="customer-avatar" />
          <h3 className="customer-name">{customer.name}</h3>
          <p className="customer-feedback">"{customer.feedback}"</p>
          <p className="customer-service">{customer.service}</p>
        </div>
      ))}
    </div>
  </section>
}

export default Customers