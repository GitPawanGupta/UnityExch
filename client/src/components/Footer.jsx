const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#1a3446' }}>
      {/* Primary Footer */}
      <div className="max-w-[1200px] mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Col 1: Logo + Description */}
        <div className="flex flex-col gap-4">
          <img src="https://uniityexch.com/wp-content/uploads/2025/12/logo-250x59.png" alt="Unity Exchange" className="w-[174px]"
            onError={(e) => { e.target.style.display = 'none'; }}
          />
          <p className="text-gray-300 text-sm leading-relaxed">
            Welcome to Unity Exchange, an online casino and sports betting platform in India.
            Secure, user-friendly, better and fastest wagering experience. Register on Unityexch
            for a new betting ID and get 100% bonus and other exciting rewards.
          </p>
        </div>

        {/* Col 2: Links */}
        <div className="text-gray-300 text-sm leading-8">
          <p>Unity Exchange</p>
          <p>Www Unityexch</p>
          <p>Http Unity Exchange</p>
          <p>Http M Unity Exchange</p>
          <p>Https M Unityexch</p>
          <p>M Unity Exchange</p>
          <p>My Unityexch Game ID</p>
          <p>Unity Exchange App</p>
          <p>Unity Exchange Login</p>
          <p>M Unityexch Login</p>
        </div>

        {/* Col 3: Customer Support */}
        <div className="text-gray-300 text-sm leading-8">
          <h2 className="text-white font-semibold text-base mb-2">Unity Exchange Customer Support</h2>
          <p>info@[unityexch].com</p>
          <p>support@[unityexch].com</p>
          <p className="mt-2">WhatsApp: +91-846**382**</p>
        </div>

        {/* Col 4: More Links */}
        <div className="text-gray-300 text-sm leading-8">
          <p>Unity Exchange ID</p>
          <p>Unityexch register</p>
          <p>Unity Exchange registration</p>
          <p>Unityexch customer support number</p>
          <p>Unityexch contact number</p>
          <p>Unity Exchange WhatsApp number</p>
          <p>M Unity Exchange Login</p>
          <p>Unity Exchange Login</p>
        </div>
      </div>

      {/* Below Footer */}
      <div
        className="border-t border-gray-600 px-6 py-4"
        style={{ backgroundColor: '#535353' }}
      >
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-center gap-2 text-gray-300 text-sm">
          <p>Copyright © 2026</p>
          <p>Powered by Unity Exchange</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
