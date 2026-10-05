---

### 2. `AboutUs.jsx`
**Path:** `src/AboutUs.jsx`

```jsx
import React from 'react';
import './AboutUs.css';

function AboutUs() {
  return (
    <div className="about-us-container">
      <h2 className="about-us-heading">About Us</h2>
      <p className="about-us-description">
        Welcome to Paradise Nursery, your number one source for all house plants. We're dedicated to providing you the best of green plants, with a focus on quality, affordability, and customer satisfaction.
      </p>
      <p className="about-us-content">
        Our mission is to bring nature closer to your home and office spaces. Whether you're looking for air-purifying plants, low-maintenance succulents, or vibrant flowering options, Paradise Nursery has something for every plant lover.
      </p>
    </div>
  );
}

export default AboutUs;
