function Nav() {
  return (
    <div className="Nav tracking-wide sticky top-0 z-20  backdrop-blur-sm">
      <ul className="nav-items flex flex-row gap-10 justify-center items-center text-zinc-300	bg-black text-xs py-3 backdrop-blur-sm">
        <li>
          <a>
            <img src="/apple2.png" alt="apple" className="w-5" />
          </a>
        </li>
        <li>
          <a>Store</a>
        </li>
        <li>
          <a>Mac</a>
        </li>
        <li>
          <a>iPad</a>
        </li>
        <li>
          <a>iPhone</a>
        </li>
        <li>
          <a>Watch</a>
        </li>
        <li>
          <a>AirPods</a>
        </li>
        <li>
          <a>TV & Home</a>
        </li>
        <li>
          <a>Only on Apple</a>
        </li>
        <li>
          <a>Accessories</a>
        </li>
        <li>
          <a>Support</a>
        </li>
        <li>
          <a>
            <i className="fa-solid fa-magnifying-glass"></i>
          </a>
        </li>
        <li>
          <a />
        </li>
      </ul>
    </div>
  );
}

export default Nav;
