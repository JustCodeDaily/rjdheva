import { useState } from 'react';

export default function NavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isPagesDropdownOpen, setIsPagesDropdownOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const togglePagesDropdown = () => {
    setIsPagesDropdownOpen(!isPagesDropdownOpen);
  };

  return (
    <>
      {/* Header */}
      <header className="transition-all duration-[0.3s] ease-in-out py-[30px] fixed top-0 right-0 left-0 z-20">
        <div className="flex flex-wrap justify-between relative items-center mx-auto max-w-[1320px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px] px-4">
          <div className="flex flex-wrap w-full">
            <div className="w-full px-3">
              <nav className="navbar transition-all duration-[0.3s] ease-in-out p-4 bg-[#f8f6fc] border border-solid border-[#111a24] rounded-[30px] relative z-[3] flex items-center justify-between">
                {/* Header Logo */}
                <a className="navbar-brand" href="#home">
                  <img src="/assets/img/logo/logo.png" alt="logo" className="w-[90px] px-4" />
                </a>
                
                {/* Mobile Menu Toggle Button */}
                <button 
                  className="min-[992px]:hidden w-10 h-10 flex items-center justify-center rounded-full text-[#111a24] border border-solid border-[#111a24] text-xl bg-transparent"
                  type="button" 
                  onClick={toggleMobileMenu}
                  title="navbar-toggler"
                >
                  <i className="ri-menu-2-line"></i>
                </button>

                {/* Desktop Menu */}
                <div className="hidden min-[992px]:flex relative justify-end">
                  <ul className="flex flex-row m-0 p-0 list-none">
                    <li className="transition-all duration-[0.3s] ease-in-out ml-8">
                      <a className="transition-all duration-[0.3s] ease-in-out font-montserrat tracking-[0.03rem] p-0 text-[15px] font-medium leading-10 capitalize text-[#1b1c20] flex items-center relative hover:text-[#f41a4a]" href="#home">Home</a>
                    </li>
                    <li className="transition-all duration-[0.3s] ease-in-out ml-8">
                      <a className="transition-all duration-[0.3s] ease-in-out font-montserrat tracking-[0.03rem] p-0 text-[15px] font-medium leading-10 capitalize text-[#1b1c20] flex items-center relative hover:text-[#f41a4a]" href="#about">About</a>
                    </li>
                    <li className="transition-all duration-[0.3s] ease-in-out ml-8">
                      <a className="transition-all duration-[0.3s] ease-in-out font-montserrat tracking-[0.03rem] p-0 text-[15px] font-medium leading-10 capitalize text-[#1b1c20] flex items-center relative hover:text-[#f41a4a]" href="#projects">Projects</a>
                    </li>
                    <li className="transition-all duration-[0.3s] ease-in-out ml-8">
                      <a className="transition-all duration-[0.3s] ease-in-out font-montserrat tracking-[0.03rem] p-0 text-[15px] font-medium leading-10 capitalize text-[#1b1c20] flex items-center relative hover:text-[#f41a4a]" href="#services">Services</a>
                    </li>
                    <li className="transition-all duration-[0.3s] ease-in-out ml-8">
                      <a className="transition-all duration-[0.3s] ease-in-out font-montserrat tracking-[0.03rem] p-0 text-[15px] font-medium leading-10 capitalize text-[#1b1c20] flex items-center relative hover:text-[#f41a4a]" href="#contact">Contact</a>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed w-full h-screen top-0 left-0 bg-[#000000cc] z-[42]"
          onClick={toggleMobileMenu}
        ></div>
      )}

      {/* Mobile Menu */}
      <div 
        className={`fixed top-0 left-0 w-[300px] h-full pt-4 px-5 pb-5 bg-white z-[43] overflow-auto transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="w-full pb-5 flex flex-wrap justify-between">
          <div className="flex items-center">
            <h4 className="relative border-0 font-montserrat text-[17px] font-semibold leading-none text-[#1b1c20] bg-transparent tracking-[0.03rem]">Menu</h4>
          </div>
          <button 
            type="button" 
            className="relative border-0 text-[30px] leading-none text-[#ff0000] bg-transparent cursor-pointer"
            onClick={toggleMobileMenu}
          >
            ×
          </button>
        </div>
        
        <div className="menu-inner">
          <div className="menu-content">
            <ul className="list-none p-0 m-0">
              <li className="relative">
                <a href="#home" className="mb-3 py-2 px-4 block capitalize text-[#777] border border-solid border-[#eae8ef] rounded-[10px] font-montserrat leading-[26px] text-sm font-medium tracking-[0.03rem]" onClick={toggleMobileMenu}>Home</a>
              </li>
              <li className="relative">
                <a href="#about" className="mb-3 py-2 px-4 block capitalize text-[#777] border border-solid border-[#eae8ef] rounded-[10px] font-montserrat leading-[26px] text-sm font-medium tracking-[0.03rem]" onClick={toggleMobileMenu}>About</a>
              </li>
              <li className="relative">
                <a href="#projects" className="mb-3 py-2 px-4 block capitalize text-[#777] border border-solid border-[#eae8ef] rounded-[10px] font-montserrat leading-[26px] text-sm font-medium tracking-[0.03rem]" onClick={toggleMobileMenu}>Projects</a>
              </li>
              <li className="relative">
                <a href="#services" className="mb-3 py-2 px-4 block capitalize text-[#777] border border-solid border-[#eae8ef] rounded-[10px] font-montserrat leading-[26px] text-sm font-medium tracking-[0.03rem]" onClick={toggleMobileMenu}>Services</a>
              </li>
              <li className="relative">
                <a href="#contact" className="mb-3 py-2 px-4 block capitalize text-[#777] border border-solid border-[#eae8ef] rounded-[10px] font-montserrat leading-[26px] text-sm font-medium tracking-[0.03rem]" onClick={toggleMobileMenu}>Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
