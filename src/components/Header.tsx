function Header() {
  return (
    <header>
      <div className="flex justify-between items-center sm:w-full">
        <div>
          <a href="/">
            <h1>Woong.log</h1>
          </a>
        </div>
        <nav>
          <ul className="flex">
            <a href="/posts">
              <li className="mx-3 my-5">Posts</li>
            </a>
            <a href="/tags">
              <li className="mx-3 my-5">Tags</li>
            </a>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
