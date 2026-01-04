const TermsOfUse = () => {
  return (
    <div className="min-h-screen bg-base-100 px-6 py-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold mb-8">Terms of Use</h1>

        <p className="text-lg text-gray-600 mb-10">
          By accessing and using TravelEase, you agree to comply with
          the following terms and conditions.
        </p>

        <section className="space-y-8">
          <div>
            <h2 className="text-2xl font-semibold mb-3">User Responsibilities</h2>
            <p className="text-gray-600">
              Users are responsible for providing accurate information and
              using the platform lawfully.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3">Service Availability</h2>
            <p className="text-gray-600">
              We strive to keep our services available at all times but do not
              guarantee uninterrupted access.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3">Limitation of Liability</h2>
            <p className="text-gray-600">
              TravelEase shall not be held liable for any indirect or
              consequential damages arising from the use of our services.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default TermsOfUse;
