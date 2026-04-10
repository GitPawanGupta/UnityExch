import Header from '../components/Header';
import LoginForm from '../components/LoginForm';
import Footer from '../components/Footer';
import WhatsAppFloat from '../components/WhatsAppFloat';

const WA_LINK = "https://wa.me/447474785565?text=Hi%2C%20I%20want%20to%20get%20my%20online%20cricket%20ID";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 bg-white" id="main-content">
        <LoginForm />

        {/* Register CTA */}
        <div className="flex justify-center py-6 px-4">
          <a
            href={WA_LINK}
            target="_blank"
            rel="noreferrer"
            aria-label="Register for Unity Exchange betting account on WhatsApp"
            className="text-white text-sm text-center py-4 px-6 rounded max-w-2xl w-full hover:opacity-90 transition-opacity"
            style={{ background: 'linear-gradient(-180deg, #fd8f3b 0%, #fd3523 100%)' }}
          >
            Register For A New Unity Exchange Betting Account — Get Login ID &amp; Password Instantly on WhatsApp
          </a>
        </div>

        <div className="max-w-[1200px] mx-auto px-6 pb-10">

          {/* H1 — primary keyword */}
          <h1 className="text-2xl font-bold text-gray-900 mb-3">
            Unity Exch Login — Unity Exchange Betting ID India
          </h1>
          <p className="text-gray-600 text-sm leading-relaxed mb-6">
            <strong>Unity Exch</strong> is India's most trusted online cricket betting exchange. Login to <strong>Unity Exchange</strong> and access live cricket betting, casino games, and sports wagering. Get your <strong>Unity Exch betting ID</strong> instantly on WhatsApp with 100% welcome bonus for new users on <strong>unity-exch.in</strong>.
          </p>

          {/* How to Login */}
          <h2 className="text-xl font-semibold text-gray-800 mb-2">How to Login to Unity Exch</h2>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            To access your <strong>Unity Exch login</strong>, enter your username and password in the form above and click Login. New users can register on <strong>unity-exch.in</strong> by contacting us on WhatsApp. Your <strong>Unity Exchange login ID</strong> and password will be sent instantly. The <strong>m unity exch login</strong> works seamlessly on all mobile devices — Android and iOS.
          </p>

          {/* How to Get ID */}
          <h2 className="text-xl font-semibold text-gray-800 mb-2">How to Get Unity Exch Betting ID</h2>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            Getting your <strong>Unity Exchange ID</strong> is simple and instant. Click the WhatsApp button on this page and send us a message. Our team will create your <strong>Unity Exch</strong> account within minutes. You'll receive your login credentials directly on WhatsApp — no lengthy registration forms required. New users also get a 100% welcome bonus on their first deposit.
          </p>

          {/* Features */}
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Unity Exchange Features</h2>
          <p className="text-gray-600 text-sm leading-relaxed mb-2">
            <strong>Unity Exchange</strong> offers the best odds on cricket, football, tennis, and kabaddi. The platform is fully mobile-optimized — access <strong>m Unity Exchange login</strong> from any smartphone. Enjoy live in-play betting, instant deposits, and same-day withdrawals on <strong>Unity Exch</strong>.
          </p>
          <ul className="list-disc list-inside text-gray-600 text-sm leading-relaxed mb-6 space-y-1">
            <li>Live cricket betting — IPL, T20, Test matches</li>
            <li>Casino games — Teen Patti, Andar Bahar, Roulette, Blackjack</li>
            <li>Sports betting — Football, Tennis, Kabaddi, Horse Racing</li>
            <li>Instant withdrawal within 24 hours</li>
            <li>100% welcome bonus for new <strong>Unity Exch register</strong> users</li>
            <li>24/7 customer support on WhatsApp</li>
            <li>Mobile-friendly — <strong>m unity exch</strong> works on all devices</li>
          </ul>

          {/* Why Choose */}
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Why Choose Unity Exchange?</h2>
          <p className="text-gray-600 text-sm leading-relaxed mb-6">
            Thousands of players across India trust <strong>Unity Exch</strong> for their online betting needs. <strong>Unity Exchange</strong> provides a safe, secure, and transparent platform with the highest payout rates in the industry. Whether you're a cricket fan looking for <strong>online cricket ID</strong> or a casino enthusiast, <strong>unity-exch.in</strong> has everything you need.
          </p>

          {/* FAQ */}
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Frequently Asked Questions about Unity Exch</h2>
          <div className="space-y-3 mb-6">
            {[
              {
                q: "What is Unity Exch?",
                a: <><strong>Unity Exch</strong> (Unity Exchange) is India's leading online cricket betting ID provider. It offers a secure platform for sports betting, live casino, and exchange betting with the best odds in the market.</>
              },
              {
                q: "How to get Unity Exchange login ID?",
                a: <>Contact us on WhatsApp at +447474785565. Send "Hi, I want to get my online cricket ID" and our team will create your <strong>Unity Exch login</strong> account instantly with a 100% welcome bonus.</>
              },
              {
                q: "Is Unity Exchange safe?",
                a: <>Yes, <strong>Unity Exchange</strong> is a trusted and secure betting platform used by thousands of players across India. All transactions are encrypted and withdrawals are processed within 24 hours.</>
              },
              {
                q: "What sports are available on Unity Exch?",
                a: <><strong>Unity Exch</strong> covers cricket (IPL, T20, Test), football, tennis, kabaddi, and horse racing. Live casino games including Teen Patti, Andar Bahar, and Roulette are also available 24/7.</>
              },
              {
                q: "How to recover Unity Exch password?",
                a: <>If you forgot your <strong>Unity Exchange</strong> password, contact our support team on WhatsApp at +447474785565. We will reset your <strong>Unity Exch login</strong> credentials instantly.</>
              },
              {
                q: "Is there a Unity Exch app?",
                a: <>Yes, <strong>Unity Exchange app</strong> is available for mobile users. You can access <strong>m unity exch login</strong> directly from your mobile browser without downloading any app. The site is fully mobile-optimized.</>
              }
            ].map(({ q, a }, i) => (
              <details key={i} className="border border-gray-200 rounded">
                <summary className="text-sm font-semibold text-gray-800 p-4 cursor-pointer hover:bg-gray-50">{q}</summary>
                <p className="text-gray-600 text-sm leading-relaxed px-4 pb-4">{a}</p>
              </details>
            ))}
          </div>

          {/* Final CTA */}
          <div className="bg-gray-50 rounded p-5 text-center">
            <p className="text-gray-700 text-sm mb-3 font-medium">
              Ready to start betting on Unity Exchange? Get your ID now!
            </p>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noreferrer"
              className="inline-block text-white text-sm py-3 px-8 rounded hover:opacity-90 transition-opacity"
              style={{ background: 'linear-gradient(-180deg, #fd8f3b 0%, #fd3523 100%)' }}
            >
              Get Unity Exch ID on WhatsApp — Free Registration
            </a>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Home;
