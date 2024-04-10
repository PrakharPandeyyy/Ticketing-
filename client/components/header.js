function Header({ currentUser }) {
  const links = [
    !currentUser && { label: "Sign Up", href: "/auth/signup" },
    !currentUser && { label: "Sign In", href: "/auth/signin" },
    currentUser && { label: "Sign Out", href: "/auth/signout" },
  ]
    .filter((linkConfig) => linkConfig)
    .map(({ label, href }) => {
      return (
        <li key={href} className="nav-item">
          <a href={href} className="nav-link">
            {label}
          </a>
        </li>
      );
    });

  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" style={{ transform: 'translateX(20px)' }} href="/" >
        Ticketing APP
      </a>
      <div className="d-flex justify-content-end">
        <ul className="nav d-flex align-items-center">{links}</ul>
      </div>
    </nav>
  );
}

export default Header;
