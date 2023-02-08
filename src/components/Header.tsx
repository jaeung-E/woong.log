function Header() {
  const navigationItems = ["Posts", "Tags"];

  return (
    <header>
      <div className="flex justify-between items-center sm:w-full">
        <div className="text-2xl text-bold">
          <a href="/">
            <h1>Woong.log</h1>
          </a>
        </div>
        <nav>
          <ul className="flex">
            {navigationItems.map((item) => (
              <a href={`/${item.toLowerCase()}`}>
                <li className="mx-3 my-5">{item}</li>
              </a>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
