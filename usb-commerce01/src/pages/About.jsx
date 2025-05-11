import React from 'react';

const About = () => {
  return (
    <div className="container mx-auto py-12">
      {/* Hero Section */}
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">About Our Shoe Store</h1>
        <p className="text-gray-600 text-lg">
          Step into style and comfort with the best shoes for every occasion.
        </p>
      </section>

      {/* Our Mission Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div>
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Our Mission</h2>
          <p className="text-gray-700">
            At [Your Company Name], our mission is to provide high-quality, fashionable, and
            comfortable shoes to our customers. We believe that the right pair of shoes can
            empower individuals to express their unique style and conquer any challenge.
          </p>
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt="Shoes on display"
            className="rounded-lg shadow-md"
          />
        </div>
      </section>

      {/* Our Values Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Value 1 */}
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Quality</h3>
            <p className="text-gray-700">
              We are committed to providing shoes that are made with the highest quality materials
              and craftsmanship, ensuring durability and comfort.
            </p>
          </div>

          {/* Value 2 */}
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Style</h3>
            <p className="text-gray-700">
              We curate our collection to offer the latest trends and timeless classics, ensuring
              that our customers can always find the perfect shoes to match their style.
            </p>
          </div>

          {/* Value 3 */}
          <div className="p-6 bg-white rounded-lg shadow-md">            <h3 className="text-xl font-semibold text-gray-800 mb-2">Customer Satisfaction</h3>
            <p className="text-gray-700">
              We are dedicated to providing exceptional customer service and ensuring that our
              customers have a positive shopping experience from start to finish.
            </p>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Team Member 1 */}
          <div className="p-4">
            <img
              src="https://randomuser.me/api/portraits/men/1.jpg"  // Replace with team member's image
              alt="Team Member 1"
              className="rounded-full w-32 h-32 mx-auto mb-2"
            />
            <h4 className="text-lg font-semibold text-gray-800">John Doe</h4>
            <p className="text-gray-600">CEO</p>
          </div>

          {/* Team Member 2 */}
          <div className="p-4">
            <img
              src="https://randomuser.me/api/portraits/women/2.jpg" // Replace with team member's image
              alt="Team Member 2"
              className="rounded-full w-32 h-32 mx-auto mb-2"
            />
            <h4 className="text-lg font-semibold text-gray-800">Jane Smith</h4>
            <p className="text-gray-600">Marketing Manager</p>
          </div>

          {/* Team Member 3 */}
          <div className="p-4">
            <img
              src="https://randomuser.me/api/portraits/men/3.jpg"  // Replace with team member's image
              alt="Team Member 3"
              className="rounded-full w-32 h-32 mx-auto mb-2"
            />
            <h4 className="text-lg font-semibold text-gray-800">Peter Jones</h4>
            <p className="text-gray-600">Customer Service</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;