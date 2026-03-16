import Header from '../components/Header';
import LoginForm from '../components/LoginForm';
import Footer from '../components/Footer';
import WhatsAppFloat from '../components/WhatsAppFloat';

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 bg-white">
        <LoginForm />

        {/* H1 - only one per page */}
        <div className="max-w-[1200px] mx-auto px-6 pt-8 pb-2">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            Unityexch, unityexch com, Unity Exchange, Unityexch Login, Betting Exchange
          </h1>
          <p className="text-gray-600 text-sm leading-relaxed">
            Unityexch is India's most trusted online betting exchange platform. Login to Unity Exchange
            and access cricket betting, casino games, and sports wagering. Register on Unityexch com
            to get your betting ID instantly on WhatsApp with 100% welcome bonus.
          </p>
        </div>

        {/* Register CTA Button */}
        <div className="flex justify-center py-6 px-4">
          <a
            href="https://wa.me/447474785565?text=Hi%2C%20I%20want%20to%20get%20my%20online%20cricket%20ID"
            target="_blank"
            rel="noreferrer"
            className="text-white text-sm text-center py-4 px-6 rounded max-w-2xl w-full hover:opacity-90 transition-opacity"
            style={{ background: 'linear-gradient(-180deg, #fd8f3b 0%, #fd3523 100%)' }}
          >
            Register For A New Unity Exchange Betting Account and Get Your Login ID and Password Instantly on WhatsApp
          </a>
        </div>

        {/* SEO Content Section - keyword density 1-2% */}
        <section className="max-w-[1200px] mx-auto px-6 pb-10">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">About Unity Exchange</h2>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            Welcome to <strong>Unity Exchange</strong> — the premier online betting and casino platform in India.
            Whether you're looking for <strong>Unityexch login</strong>, a new betting ID, or want to explore
            sports betting markets, Unity Exchange has everything you need. Our platform offers a secure,
            fast, and user-friendly experience for all players.
          </p>
          <h2 className="text-xl font-semibold text-gray-800 mb-3">How to Login to Unityexch</h2>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            To access your <strong>Unityexch</strong> account, simply enter your username and password above.
            If you don't have an account, click "Create an account" to register on <strong>unityexch com</strong>.
            New users get their betting ID and password instantly on WhatsApp along with a 100% welcome bonus.
          </p>
          <h2 className="text-xl font-semibold text-gray-800 mb-3">Unity Exchange Features</h2>
          <p className="text-gray-600 text-sm leading-relaxed">
            <strong>M Unity Exchange</strong> is fully mobile-optimized for seamless betting on the go.
            Access <strong>Unity Exchange login</strong> from any device — desktop, tablet, or mobile.
            Enjoy live cricket betting, casino games, and instant withdrawals on the <strong>Unity Exchange app</strong>.
          </p>
        </section>
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Home;
