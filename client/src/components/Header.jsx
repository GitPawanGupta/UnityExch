const Header = () => {
  return (
    <header style={{ background: '#2a2a2a' }} className="py-4">
      <div className="max-w-[1240px] mx-auto flex justify-center px-5">
        <a href="/">
          <img
            src="https://uniityexch.com/wp-content/uploads/2025/12/logo-250x59.png"
            alt="Unityexch Logo - Unity Exchange India's trusted online betting and casino platform, login to get your betting ID"
            className="h-12 w-auto"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'block';
            }}
          />
          <span
            className="text-3xl font-bold"
            style={{ display: 'none', color: '#ff6b35' }}
          >
            🎯 unityexch
          </span>
        </a>
      </div>
    </header>
  );
};

export default Header;
