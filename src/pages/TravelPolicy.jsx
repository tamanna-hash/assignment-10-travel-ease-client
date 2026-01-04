const TravelPolicy = () => {
  return (
    <div className="min-h-screen bg-base-100 px-6 py-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold mb-8">Privacy Policy</h1>

        <p className="text-lg text-gray-600 mb-10">
          At TravelEase, your privacy is important to us. This policy explains how we collect,
          use, and protect your personal information.
        </p>

        <section className="space-y-8">
          <div>
            <h2 className="text-2xl font-semibold mb-3">Information We Collect</h2>
            <p className="text-gray-600">
              We may collect personal information such as your name, email address,
              and booking details when you use our services.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3">How We Use Your Data</h2>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>To provide and improve our services</li>
              <li>To manage bookings and user accounts</li>
              <li>To communicate important updates</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3">Data Security</h2>
            <p className="text-gray-600">
              We implement industry-standard security measures to protect your data
              from unauthorized access.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default TravelPolicy;
