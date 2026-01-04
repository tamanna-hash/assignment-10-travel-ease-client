const Contact = () => {
  return (
    <div className="min-h-screen bg-base-100 px-6 py-20">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-5xl font-bold mb-6">Contact Us</h1>
        <p className="text-lg text-gray-500 mb-12">
          We’d love to hear from you. Whether you have a question, feedback, or need support,
          our team is here to help.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
            <p className="mb-4 text-gray-600">
              Reach out to us anytime and we’ll happily answer your questions.
            </p>

            <ul className="space-y-3 text-lg">
              <li><strong>Email:</strong> support@travelease.com</li>
              <li><strong>Phone:</strong> +880 1234 567 890</li>
              <li><strong>Address:</strong> Dhaka, Bangladesh</li>
            </ul>
          </div>

          <div className="bg-base-200 p-8 rounded-xl shadow">
            <h3 className="text-xl font-semibold mb-4">Why Contact TravelEase?</h3>
            <ul className="space-y-3 text-gray-600 list-disc list-inside">
              <li>Vehicle booking assistance</li>
              <li>Account & dashboard support</li>
              <li>Feedback & feature requests</li>
              <li>Partnership inquiries</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
