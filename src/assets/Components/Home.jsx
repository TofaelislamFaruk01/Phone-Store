import { Outlet, Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="w-11/12 max-w-6xl mx-auto py-12 px-4 text-center">
      {/* Hero Section */}
      <section className="mb-16">
        <h1 className="text-5xl font-extrabold text-gray-800 mb-6">
          Welcome to the{" "}
          <span className="text-blue-500">Phone Store</span>
        </h1>
        <p className="text-lg text-gray-600 max-w-xl mx-auto mb-8">
          Discover the latest smartphones from top brands like Apple, Samsung,
          Google, and more. Click below to explore our collection of
          high-performance mobile devices at unbeatable prices.
        </p>
        <Link
          to="/phones"
          className="inline-block px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white text-lg font-medium rounded-md transition"
        >
          Browse Phones
        </Link>
      </section>

      {/* Features Section */}
      <section className="grid md:grid-cols-3 gap-8 text-left">
        {[
          {
            title: "Top Brands",
            description:
              "We offer the latest models from Apple, Samsung, Google, OnePlus, and more.",
            icon: "📱",
          },
          {
            title: "Great Prices",
            description:
              "Find unbeatable deals and seasonal discounts on all models.",
            icon: "💸",
          },
          {
            title: "Fast Shipping",
            description:
              "Get your phone delivered within 2-3 business days, anywhere in the country.",
            icon: "🚚",
          },
        ].map((feature, idx) => (
          <div
            key={idx}
            className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition duration-200"
          >
            <div className="text-4xl mb-4">{feature.icon}</div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              {feature.title}
            </h3>
            <p className="text-gray-600 text-sm">{feature.description}</p>
          </div>
        ))}
      </section>

      <Outlet />
    </div>
  );
};

export default Home;
