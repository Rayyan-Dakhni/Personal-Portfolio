const Navbar = () => {
  return (
    <nav className='inline-flex items-center w-full h-auto p-5'>
      <div>
        {/* Logo */}
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='134'
          height='70'
          viewBox='0 0 134 70'
        >
          <g id='Group_1' data-name='Group 1' transform='translate(-27 -15)'>
            <text
              id='R'
              transform='translate(27 66)'
              fill='#1d3557'
              font-size='70'
              font-family='UtopiaStd-BlackHeadline, Utopia Std'
              font-weight='800'
            >
              <tspan x='0' y='0'>
                R
              </tspan>
            </text>
            <text
              id='ayyan'
              transform='translate(68 48)'
              fill='#1d3557'
              font-size='16'
              font-family='UtopiaStd-BlackHeadline, Utopia Std'
              font-weight='800'
            >
              <tspan x='0' y='0'>
                ayyan
              </tspan>
            </text>
            <text
              id='_.D'
              data-name='.D'
              transform='translate(89 66)'
              fill='#e63946'
              font-size='70'
              font-family='UtopiaStd-BlackHeadline, Utopia Std'
              font-weight='800'
            >
              <tspan x='0' y='0'>
                .D
              </tspan>
            </text>
          </g>
        </svg>
      </div>

      <div className='ml-auto inline-flex space-x-10 pr-10'>
        <a href=''>Home</a>
        <a href=''>About</a>
        <a href=''>Portfolio</a>
        <a href=''>Services</a>

        <button>Get in Touch</button>
      </div>
    </nav>
  );
};

export default Navbar;
