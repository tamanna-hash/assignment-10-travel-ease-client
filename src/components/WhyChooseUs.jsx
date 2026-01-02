import { FaCarSide, FaShieldAlt, FaClock, FaMapMarkedAlt } from "react-icons/fa";

const features = [
  {
    icon: <FaCarSide />,
    title: "Wide Vehicle Choices",
    description:
      "From budget-friendly rides to premium vehicles — choose what fits your journey best.",
  },
  {
    icon: <FaClock />,
    title: "Fast & Easy Booking",
    description:
      "Book your ride in minutes with a smooth and hassle-free booking experience.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Safe & Reliable",
    description:
      "Verified drivers and well-maintained vehicles ensure a secure ride every time.",
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Anywhere, Anytime",
    description:
      "Whether it’s city travel or long-distance trips, we’ve got you covered.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-16 bg-base-100">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-cyan-900">
            Why Choose <span className="text-amber-400">travelEase</span>
          </h2>
          <p className="mt-3 text-base-content/70 max-w-2xl mx-auto">
            We make booking vehicles simple, reliable, and stress-free —
            so you can focus on enjoying the journey.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((item, index) => (
            <div
              key={index}
              className="card bg-base-200 shadow-sm hover:shadow-md transition"
            >
              <div className="card-body items-center text-center">
                <div className="text-3xl text-amber-400 mb-2">
                  {item.icon}
                </div>
                <h3 className="card-title text-cyan-900 text-lg">
                  {item.title}
                </h3>
                <p className="text-sm text-base-content/70">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
