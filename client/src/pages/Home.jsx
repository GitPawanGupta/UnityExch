import Header from '../components/Header';
import LoginForm from '../components/LoginForm';
import Footer from '../components/Footer';
import WhatsAppFloat from '../components/WhatsAppFloat';

const WA_LINK = "https://wa.me/447474785565?text=Hi%2C%20I%20want%20to%20get%20my%20online%20cricket%20ID";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 bg-white">
        <LoginForm />

        {/* Register CTA */}
        <div className="flex justify-center py-6 px-4">
          <a
            href={WA_LINK}
            target="_blank"
            rel="noreferrer"
            className="text-white text-sm text-center py-4 px-6 rounded max-w-2xl w-full hover:opacity-90 transition-opacity"
            style={{ background: 'linear-gradient(-180deg, #fd8f3b 0%, #fd3523 100%)' }}
          >
            Register For A New Unity Exchange Betting Account — Get Login ID &amp; Password Instantly on WhatsApp
          </a>
        </div>

        {/* Main SEO Content */}
        <div className="max-w-[1200px] mx-auto px-6 pb-10">

          {/* H1 */}
          <h1 className="text-2xl font-bold text-gray-900 mb-3">
            Unityexch Login — Unity Exchange Betting ID India
          </h1>
          <p className="text-gray-600 text-sm leading-relaxed mb-6">
            <strong>Unityexch</strong> is India's most trusted online cricket betting exchange. Login to <strong>Unity Exchange</strong> and access live cricket betting, casino games, and sports wagering. Get your <strong>Unityexch betting ID</strong> instantly on WhatsApp with 100% welcome bonus for new users.
          </p>

          {/* How to Login */}
          <h2 className="text-xl font-semibold text-gray-800 mb-2">How to Login to Unityexch</h2>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            To access your <strong>Unityexch login</strong>, enter your username and password in the form above. New users can register on <strong>unityexch.co.in</strong> by contacting us on WhatsApp. Your <strong>Unity Exchange login ID</strong> and password will be sent instantly. The <strong>m unityexch login</strong> works on all mobile devices too.
          </p>

          {/* How to Get ID */}
          <h2 className="text-xl font-semibold text-gray-800 mb-2">How to Get Unityexch Betting ID</h2>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            Getting your <strong>Unity Exchange ID</strong> is simple. Click the WhatsApp button on this page and send us a message. Our team will create your <strong>Unityexch com</strong> account within minutes. You'll receive your login credentials directly on WhatsApp — no lengthy registration forms required.
          </p>

          {/* Features */}
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Unity Exchange Features</h2>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            <strong>Unity Exchange</strong> offers the best odds on cricket, football, tennis, and kabaddi. The platform is fully mobile-optimized — access <strong>m Unity Exchange login</strong> from any smartphone. Enjoy live in-play betting, instant deposits, and same-day withdrawals on <strong>Unityexch</strong>.
          </p>

          {/* FAQ Section */}
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Frequently Asked Questions</h2>

          <div className="space-y-4 mb-6">
            <div className="border border-gray-200 rounded p-4">
              <h3 className="text-sm font-semibold text-gray-800 mb-1">What is Unityexch?</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                <strong>Unityexch</strong> (also known as Unity Exchange or unityexch com) is India's leading online cricket betting ID provider. It offers a secure platform for sports betting, live casino, and exchange betting with the best odds in the market.
              </p>
            </div>

            <div className="border border-gray-200 rounded p-4">
              <h3 className="text-sm font-semibold text-gray-800 mb-1">How to get Unity Exchange login ID?</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Contact us on WhatsApp at +447474785565. Send "Hi, I want to get my online cricket ID" and our team will create your <strong>Unityexch login</strong> account instantly with a 100% welcome bonus.
              </p>
            </div>

            <div className="border border-gray-200 rounded p-4">
              <h3 className="text-sm font-semibold text-gray-800 mb-1">Is Unity Exchange safe?</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Yes, <strong>Unity Exchange</strong> is a trusted and secure betting platform used by thousands of players across India. All transactions are encrypted and withdrawals are processed within 24 hours.
              </p>
            </div>

            <div className="border border-gray-200 rounded p-4">
              <h3 className="text-sm font-semibold text-gray-800 mb-1">What sports are available on Unityexch?</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                <strong>Unityexch</strong> covers cricket (IPL, T20, Test), football, tennis, kabaddi, and horse racing. Live casino games including Teen Patti, Andar Bahar, and Roulette are also available 24/7.
              </p>
            </div>
          </div>

          {/* Final CTA */}
          <div className="bg-gray-50 rounded p-4 text-center">
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
              Get Unityexch ID on WhatsApp
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
