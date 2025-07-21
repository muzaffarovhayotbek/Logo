import React from 'react';

function Header() {
  return (
    <div>
      <header
        style={{
          background: `linear-gradient(0deg, #FFFFFF, #FFFFFF),
                       linear-gradient(1.02deg, #4A99D3 -17.33%, rgba(74, 153, 211, 0) 75.91%)`,
        }}
        className="py-4 ml-[120px] mr-[131px]"
      >
        <div className="container mx-auto flex items-center justify-between">
          <div className="header-icon">
            <h2 className="text-2xl font-bold">LOGO</h2>
          </div>
          <div className="header-nav">
            <ul className="flex items-center gap-8 text-[16px] font-medium">
              <li><a href="#" className="hover:text-blue-600">Home</a></li>
              <li><a href="#" className="hover:text-blue-600">About</a></li>
              <li><a href="#" className="hover:text-blue-600">Contact Us</a></li>
            </ul>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
