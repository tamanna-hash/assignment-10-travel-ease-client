const TravelCookiePolicy = () => {
  return (
    <div className="min-h-screen bg-base-100 px-6 py-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold mb-8">Cookie Policy</h1>

        <p className="text-lg text-gray-600 mb-10">
          This Cookie Policy explains how TravelEase uses cookies to enhance
          your browsing experience.
        </p>

        <section className="space-y-8">
          <div>
            <h2 className="text-2xl font-semibold mb-3">What Are Cookies?</h2>
            <p className="text-gray-600">
              Cookies are small text files stored on your device that help us
              remember your preferences and improve site functionality.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3">How We Use Cookies</h2>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>To keep you logged in</li>
              <li>To analyze website performance</li>
              <li>To personalize content</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3">Managing Cookies</h2>
            <p className="text-gray-600">
              You can choose to disable cookies through your browser settings,
              though this may affect site functionality.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default TravelCookiePolicy;
