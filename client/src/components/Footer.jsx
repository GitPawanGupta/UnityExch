const WA_LINK = "https://wa.me/447474785565?text=Hi%2C%20I%20want%20to%20get%20my%20online%20cricket%20ID";

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#1a3446' }} aria-label="Site footer">
      <div className="max-w-[1200px] mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Col 1: Logo + Description */}
        <div className="flex flex-col gap-4">
          <a href="/" aria-label="Unity Exchange Home">
            <img
              src="/favicon.png"
              alt="Unityexch - Unity Exchange India"
              className="w-[174px]"
              onError={(e) => { e.target.style.display = 'none'; }}
            />
          </a>
          <p className="text-gray-300 text-sm leading-relaxed">
            Welcome to <strong className="text-white">Unity Exchange</strong> — India's trusted online cricket betting and casino platform.
            Secure, fast, and user-friendly. Register on <strong className="text-white">Unity Exch</strong> for a new betting ID and get 100% bonus.
          </p>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noreferrer"
            className="text-white text-xs py-2 px-4 rounded text-center hover:opacity-90"
            style={{ background: 'linear-gradient(-180deg, #25d366 0%, #128c7e 100%)' }}
          >
            Get Unity Exch ID on WhatsApp
          </a>
        </div>

        {/* Col 2: Quick Links */}
        <nav aria-label="Quick links">
          <h3 className="text-white font-semibold text-sm mb-3">Quick Links</h3>
          <ul className="text-gray-300 text-sm space-y-2">
            <li><a href="/" className="hover:text-white transition-colors">Unity Exch Login</a></li>
            <li><a href={WA_LINK} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Unity Exchange Register</a></li>
            <li><a href={WA_LINK} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Get Online Cricket ID</a></li>
            <li><a href={WA_LINK} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">M Unity Exch Login</a></li>
            <li><a href={WA_LINK} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Unity Exchange App</a></li>
            <li><a href={WA_LINK} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Forgot Password</a></li>
          </ul>
        </nav>

        {/* Col 3: Support */}
        <div>
          <h3 className="text-white font-semibold text-sm mb-3">Customer Support</h3>
          <ul className="text-gray-300 text-sm space-y-2">
            <li>24/7 WhatsApp Support</li>
            <li>
              <a href={WA_LINK} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                +44 7474 785565
              </a>
            </li>
            <li className="mt-2 text-xs text-gray-400">Available in English &amp; Hindi</li>
            <li className="mt-2">
              <a href={WA_LINK} target="_blank" rel="noreferrer" className="hover:text-white transition-colors text-xs">
                Unityexch Customer Support
              </a>
            </li>
            <li>
              <a href={WA_LINK} target="_blank" rel="noreferrer" className="hover:text-white transition-colors text-xs">
                Unity Exchange Contact Number
              </a>
            </li>
          </ul>
        </div>

        {/* Col 4: Keywords / SEO links */}
        <nav aria-label="Related searches">
          <h3 className="text-white font-semibold text-sm mb-3">Related</h3>
          <ul className="text-gray-300 text-sm space-y-2">
            <li><a href="/" className="hover:text-white transition-colors">Unity Exch com</a></li>
            <li><a href="/" className="hover:text-white transition-colors">Unity Exchange Login</a></li>
            <li><a href="/" className="hover:text-white transition-colors">unity-exch.in</a></li>
            <li><a href="/" className="hover:text-white transition-colors">M Unity Exchange</a></li>
            <li><a href="/" className="hover:text-white transition-colors">Unity Exchange ID</a></li>
            <li><a href="/" className="hover:text-white transition-colors">Cricket Betting ID India</a></li>
            <li><a href="/" className="hover:text-white transition-colors">Online Betting Exchange</a></li>
          </ul>
        </nav>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-600 px-6 py-4" style={{ backgroundColor: '#535353' }}>
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-center gap-2 text-gray-300 text-xs">
          <p>Copyright © 2026 Unity Exchange — Unityexch. All Rights Reserved.</p>
          <p>
            <a href="https://policies.google.com/privacy" className="hover:text-white underline mr-3" target="_blank" rel="noreferrer">Privacy Policy</a>
            <a href="https://policies.google.com/terms" className="hover:text-white underline" target="_blank" rel="noreferrer">Terms of Service</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
