const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Resume", href: "#resume" },
];

const pagesLinks = [
  { label: "Single Project", href: "#single-project" },
  { label: "Blog", href: "#blog" },
  { label: "Blog Detail", href: "#blog-detail" },
];

const Navbar = () => (
  <header className="bix-static transition-all duration-[0.3s] ease-in-out py-[30px] fixed top-0 right-0 left-0 z-[20]">
    <div className="flex flex-wrap justify-between relative items-center mx-auto min-[1400px]:max-w-[1320px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px]">
      <div className="flex flex-wrap w-full">
        <div className="w-full px-[12px]">
          <nav className="navbar navbar-expand-lg bix-navbar transition-all duration-[0.3s] ease-in-out p-[15px] bg-[#f8f6fc] border-[1px] border-solid border-[#111a24] rounded-[30px] relative z-[3] flex items-center justify-between">
            <a className="navbar-brand" href="#home">
              <img src="/assets/img/logo/logo.png" alt="logo" className="w-[90px] px-[15px]" />
            </a>
            <div className="hidden max-[991px]:flex items-center">
              <ul className="flex flex-wrap gap-4">
                {navLinks.map(item => <li key={item.label}><a href={item.href}>{item.label}</a></li>)}
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
  </header>
);

export default Navbar;
