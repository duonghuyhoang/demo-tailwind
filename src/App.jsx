import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  const [isMediumScreen, setIsMediumScreen] = useState(false);
  useEffect(() => {
    const menuItem = document.getElementById("header-menu");
    const menuItemDesktop = document.getElementById("header-menu-desktop");

    const handleClick = (e) => {
      if (menuItemDesktop.contains(e.target)) {
        menuItem.classList.toggle("ct-menu-item-expanded");
        menuItem.classList.toggle("hidden");
      } else {
        if (menuItem.classList.contains("ct-menu-item-expanded")) {
          menuItem.classList.remove("ct-menu-item-expanded");
          menuItem.classList.add("hidden");
        }
      }
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsLargeScreen(true);
      } else {
        setIsLargeScreen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMediumScreen(true);
      } else {
        setIsMediumScreen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className='content-wrapper font-Karla  max-w-screen-2xl text-base mx-auto px-5'>
      <header className='py-6 mx-auto'>
        <nav className='flex flex-row justify-between items-center relative '>
          <div className='logo basis-3/6 text-center text-xl font-semibold cursor-pointer'>
            CoffeeStyle.
          </div>
          <ul
            id='header-menu'
            className='basis-3/6 hidden lg:flex lg:items-center  lg:justify-end lg:gap-8 text-sm text-gray-500 font-medium'
          >
            <li className='ct-menu-item'>
              <a href='#'>HOME</a>
            </li>
            <li className='ct-menu-item'>
              <a href='#'>PRODUCTS</a>
            </li>
            <li className='ct-menu-item'>
              <a href='#'>BLOG</a>
            </li>
            <li className='ct-menu-item'>
              <a href='#'>ABOUT</a>
            </li>
            <li className='ct-menu-item'>
              <a href='#'>CONTACT</a>
            </li>
            <li className='ct-menu-item'>
              <a href='#'>STYLERGUIDE</a>
            </li>
          </ul>
          <ul className='basis-3/6 lg:basic-1/6 flex justify-end lg:justify-start items-center pl-12 text-sm text-gray-500 font-medium '>
            <li className='ct-menu-item'>
              {" "}
              <a href='' className='flex items-center'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth='1.5'
                  stroke='currentColor'
                  className='ct-icon'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z'
                  />
                </svg>

                <span className='mx-2'>CART</span>
                <span className='ct-badge-circle bg-orange-400 text-white'>
                  {" "}
                  10
                </span>
              </a>
            </li>
          </ul>
          <div
            className=' basis-1/6 lg:hidden flex items-center cursor-pointer px-2 sm:px-4'
            id='header-menu-desktop'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth='1.5'
              stroke='currentColor'
              className='ct-icon'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
              />
            </svg>
          </div>
        </nav>
      </header>
      <main>
        {" "}
        <div className='slider h-[530px] bg-[url("../assest/logo-content.jpg")] bg-cover bg-no-repeat bg-bottom'>
          <div className='w-full h-full flex justify-center items-center bg-gray-900 bg-opacity-40'>
            <div className='mx-16 text-white text-center'>
              <div className='text-sm  mb-6'>BEST PLACE TO BUY DESIGN</div>
              <div className='font-medium text-5xl mb-6'>Coffee Mugs</div>
              <div className='font-medium mb-6 text-lg'>
                The most versatile furniture system ever created. Designed to
                fit your life, made to move and grow.
              </div>
              <div className='flex justify-center'>
                {" "}
                <div className='bg-white text-gray-900 w-max tracking-wider text-sm py-4 px-8 font-bold cursor-pointer hover:bg-opacity-95'>
                  EXPLORE OUR PRODUCTS
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='story'>
          <div className='w-full h-full flex justify-center items-center'>
            <div className='px-4 sm:px-16 md:px-32 lg:px-64 2xl:px-[380px] py-32 text-center'>
              <div className='text-3xl leading-10 mb-6 '>
                Even the all-powerful Pointing has no control about the blind
                texts.
              </div>
              <div className='text-gray-500 leading-7 mb-6'>
                It is a paradisematic country, in which roasted parts of
                sentences fly into your mouth. Even the all-powerful Pointing
                has no control about the blind texts it is an almost
                unorthographic life One day however a small line of blind text
                by the name of Lorem Ipsum decided to leave for the far World of
                Grammar.
              </div>
              <a
                href='#'
                className='text-coffee-400 hover:text-coffee-600 underlined-link '
              >
                Read the full Story
              </a>
            </div>
          </div>
        </div>
        <div className='ct-subheadline '>
          <div className='ct-subheadline-deco-line'></div>
          <div className='ct-subheadline-lable '>Featured mugs</div>
          <div className='ct-subheadline-deco-line  '></div>
        </div>
        <div className='featured-mugs lg:w-[77%] w-[95%] mx-auto mb-24'>
          <div className='grid lg:grid-cols-2 grid-cols-1 gap-8'>
            <div className='ct-product-card '>
              <div className=' h-[440px] sm:h-[540px] bg-[url("../assest/featured-mugs1.jpg")] bg-cover bg-no-repeat bg-center'>
                <a href='#'>
                  {" "}
                  <div className='w-full h-full hover:bg-gray-900 hover:bg-opacity-10 hover:transition-all hover:ease-in-out hover:duration-400 relative group'>
                    <div className='absolute hidden group-hover:block group-hover:animate-fadeIn bg-white text-center text-gray-900 w-11/12 bottom-4 left-1/2 text-[12px] -translate-x-1/2 tracking-wider text-sm py-4 px-8 font-bold cursor-pointer hover:bg-opacity-90 uppercase'>
                      Explore Mug
                    </div>
                  </div>
                </a>
              </div>
              <div className='text-center mt-8'>
                {" "}
                <a href='#'>
                  <div className='text-xl mb-3 '>Pink Premium Ceramic</div>
                </a>
                <div className=''>
                  <span className='text-[16px] text-gray-500'>$ 99.00 USD</span>
                </div>
              </div>
            </div>
            <div className='ct-product-card '>
              <div className=' h-[440px] sm:h-[540px] bg-[url("../assest/featured-mugs2.jpg")] bg-cover bg-no-repeat bg-center'>
                <a href='#'>
                  {" "}
                  <div className='w-full h-full hover:bg-gray-900 hover:bg-opacity-10 hover:transition-all hover:ease-in-out hover:duration-400 relative group'>
                    <div className='absolute w-[100px] bg-white py-2 px-4 top-3 right-3 text-center font-semibold text-coffee-400'>
                      On Sale.
                    </div>
                    <div className='absolute hidden group-hover:block group-hover:animate-fadeIn bg-white text-center text-gray-900 w-11/12 bottom-4 left-1/2 text-[12px] -translate-x-1/2 tracking-wider text-sm py-4 px-8 font-bold cursor-pointer hover:bg-opacity-90 uppercase'>
                      Explore Mug
                    </div>
                  </div>
                </a>
              </div>
              <div className='text-center mt-8'>
                {" "}
                <a href='#'>
                  <div className='text-xl mb-3 '>Golden Designers Mug</div>
                </a>
                <div className=''>
                  <span className='text-[20px] text-[#a25f4b]'>$ 50.00</span>
                  <span className='text-[16px] ml-2 text-[#1d1f2e66] line-through'>
                    $ 69.00 USD
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='ct-subheadline mt-52 '>
          <div className='ct-subheadline-deco-line'></div>
          <div className='ct-subheadline-lable '>MORE PRODUCTS</div>
          <div className='ct-subheadline-deco-line  '></div>
        </div>
        <div className='more-products lg:w-[77%] w-[95%] mx-auto mb-16'>
          <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 md:gap-4'>
            <div className='ct-product-card '>
              <div className=' h-[380px]  bg-[url("../assest/5be96251aaba7a6173ece01a_trent-erwin-570303-unsplash.jpg")] bg-cover bg-no-repeat bg-center'>
                <a href='#'>
                  {" "}
                  <div className='w-full h-full hover:bg-gray-900 hover:bg-opacity-10 hover:transition-all hover:ease-in-out hover:duration-400 relative group'>
                    <div className='absolute w-[100px] bg-white py-2 px-4 top-3 right-3 text-center font-semibold text-coffee-400'>
                      On Sale.
                    </div>
                    <div className='absolute hidden group-hover:block group-hover:animate-fadeIn bg-white text-center text-gray-900 w-11/12 bottom-4 left-1/2 text-[12px] -translate-x-1/2 tracking-wider text-sm py-4 px-8 font-bold cursor-pointer hover:bg-opacity-90 uppercase'>
                      Explore Mug
                    </div>
                  </div>
                </a>
              </div>
              <div className='text-center my-8'>
                {" "}
                <a href='#'>
                  <div className='text-xl mb-3 '>Red Love Cup</div>
                </a>
                <div className=''>
                  <span className='text-[20px] text-[#a25f4b]'>$25.00</span>
                  <span className='text-[16px] ml-2 text-[#1d1f2e66] line-through'>
                    $ 37.00 USD
                  </span>
                </div>
              </div>
            </div>
            <div className='ct-product-card '>
              <div className=' h-[380px]  bg-[url("../assest/5be96251aaba7a0c09ece01c_steve-harvey-523112-unsplash.jpg")] bg-cover bg-no-repeat bg-center'>
                <a href='#'>
                  {" "}
                  <div className='w-full h-full hover:bg-gray-900 hover:bg-opacity-10 hover:transition-all hover:ease-in-out hover:duration-400 relative group'>
                    <div className='absolute w-[100px] bg-white py-2 px-4 top-3 right-3 text-center font-semibold text-coffee-400'>
                      On Sale.
                    </div>
                    <div className='absolute hidden group-hover:block group-hover:animate-fadeIn bg-white text-center text-gray-900 w-11/12 bottom-4 left-1/2 text-[12px] -translate-x-1/2 tracking-wider text-sm py-4 px-8 font-bold cursor-pointer hover:bg-opacity-90 uppercase'>
                      Explore Mug
                    </div>
                  </div>
                </a>
              </div>
              <div className='text-center my-8'>
                {" "}
                <a href='#'>
                  <div className='text-xl mb-3 '>Golden Designers Mug</div>
                </a>
                <div className=''>
                  <span className='text-[20px] text-[#a25f4b]'>$15.00</span>
                  <span className='text-[16px] ml-2 text-[#1d1f2e66] line-through'>
                    $ 29.00 USD
                  </span>
                </div>
              </div>
            </div>
            <div className='ct-product-card '>
              <div className=' h-[380px]  bg-[url("../assest/5be96251aaba7a223decdff8_ronaldo-arthur-vidal-66241-unsplash.jpg")] bg-cover bg-no-repeat bg-center'>
                <a href='#'>
                  {" "}
                  <div className='w-full h-full hover:bg-gray-900 hover:bg-opacity-10 hover:transition-all hover:ease-in-out hover:duration-400 relative group'>
                    <div className='absolute hidden group-hover:block group-hover:animate-fadeIn bg-white text-center text-gray-900 w-11/12 bottom-4 left-1/2 text-[12px] -translate-x-1/2 tracking-wider text-sm py-4 px-8 font-bold cursor-pointer hover:bg-opacity-90 uppercase'>
                      Explore Mug
                    </div>
                  </div>
                </a>
              </div>
              <div className='text-center my-8'>
                {" "}
                <a href='#'>
                  <div className='text-xl mb-3 '>Golden Designers Mug</div>
                </a>
                <div className=''>
                  <span className='text-[16px] text-gray-500'>$ 19.00 USD</span>
                </div>
              </div>
            </div>
            <div className='ct-product-card '>
              <div className=' h-[380px]  bg-[url("../assest/5be96251aaba7a6d09ece015_rocknwool-690694-unsplash.jpg")] bg-cover bg-no-repeat bg-center'>
                <a href='#'>
                  {" "}
                  <div className='w-full h-full hover:bg-gray-900 hover:bg-opacity-10 hover:transition-all hover:ease-in-out hover:duration-400 relative group'>
                    <div className='absolute hidden group-hover:block group-hover:animate-fadeIn bg-white text-center text-gray-900 w-11/12 bottom-4 left-1/2 text-[12px] -translate-x-1/2 tracking-wider text-sm py-4 px-8 font-bold cursor-pointer hover:bg-opacity-90 uppercase'>
                      Explore Mug
                    </div>
                  </div>
                </a>
              </div>
              <div className='text-center my-8'>
                {" "}
                <a href='#'>
                  <div className='text-xl mb-3 '>Golden Designers Mug</div>
                </a>
                <div className=''>
                  <span className='text-[16px] text-gray-500'>$ 25.00 USD</span>
                </div>
              </div>
            </div>
            <div className='ct-product-card '>
              <div className=' h-[380px]  bg-[url("../assest/5be96251aaba7ae493ece012_rawpixel-645289-unsplash.jpg")] bg-cover bg-no-repeat bg-center'>
                <a href='#'>
                  {" "}
                  <div className='w-full h-full hover:bg-gray-900 hover:bg-opacity-10 hover:transition-all hover:ease-in-out hover:duration-400 relative group'>
                    <div className='absolute hidden group-hover:block group-hover:animate-fadeIn bg-white text-center text-gray-900 w-11/12 bottom-4 left-1/2 text-[12px] -translate-x-1/2 tracking-wider text-sm py-4 px-8 font-bold cursor-pointer hover:bg-opacity-90 uppercase'>
                      Explore Mug
                    </div>
                  </div>
                </a>
              </div>
              <div className='text-center my-8'>
                {" "}
                <a href='#'>
                  <div className='text-xl mb-3 '>Golden Designers Mug</div>
                </a>
                <div className=''>
                  <span className='text-[16px] text-gray-500'>$ 46.00 USD</span>
                </div>
              </div>
            </div>
            <div className='ct-product-card '>
              <div className=' h-[380px]  bg-[url("../assest/5be96251aaba7a8461ece016_nathan-dumlao-643391-unsplash.jpg")] bg-cover bg-no-repeat bg-center'>
                <a href='#'>
                  {" "}
                  <div className='w-full h-full hover:bg-gray-900 hover:bg-opacity-10 hover:transition-all hover:ease-in-out hover:duration-400 relative group'>
                    <div className='absolute hidden group-hover:block group-hover:animate-fadeIn bg-white text-center text-gray-900 w-11/12 bottom-4 left-1/2 text-[12px] -translate-x-1/2 tracking-wider text-sm py-4 px-8 font-bold cursor-pointer hover:bg-opacity-90 uppercase'>
                      Explore Mug
                    </div>
                  </div>
                </a>
              </div>
              <div className='text-center my-8'>
                {" "}
                <a href='#'>
                  <div className='text-xl mb-3 '>Golden Designers Mug</div>
                </a>
                <div className=''>
                  <span className='text-[16px] text-gray-500'>$ 34.00 USD</span>
                </div>
              </div>
            </div>
            <div className='ct-product-card '>
              <div className=' h-[380px]  bg-[url("../assest/5be96251aaba7a1db2ece009_natanja-grun-600152-unsplash.jpg")] bg-cover bg-no-repeat bg-center'>
                <a href='#'>
                  {" "}
                  <div className='w-full h-full hover:bg-gray-900 hover:bg-opacity-10 hover:transition-all hover:ease-in-out hover:duration-400 relative group'>
                    <div className='absolute hidden group-hover:block group-hover:animate-fadeIn bg-white text-center text-gray-900 w-11/12 bottom-4 left-1/2 text-[12px] -translate-x-1/2 tracking-wider text-sm py-4 px-8 font-bold cursor-pointer hover:bg-opacity-90 uppercase'>
                      Explore Mug
                    </div>
                  </div>
                </a>
              </div>
              <div className='text-center my-8'>
                {" "}
                <a href='#'>
                  <div className='text-xl mb-3 '>Golden Designers Mug</div>
                </a>
                <div className=''>
                  <span className='text-[16px] text-gray-500'>$ 25.00 USD</span>
                </div>
              </div>
            </div>
            <div className='ct-product-card '>
              <div className=' h-[380px]  bg-[url("../assest/5be96251aaba7a512bece011_liana-mikah-698524-unsplash.jpg")] bg-cover bg-no-repeat bg-center'>
                <a href='#'>
                  {" "}
                  <div className='w-full h-full hover:bg-gray-900 hover:bg-opacity-10 hover:transition-all hover:ease-in-out hover:duration-400 relative group'>
                    <div className='absolute hidden group-hover:block group-hover:animate-fadeIn bg-white text-center text-gray-900 w-11/12 bottom-4 left-1/2 text-[12px] -translate-x-1/2 tracking-wider text-sm py-4 px-8 font-bold cursor-pointer hover:bg-opacity-90 uppercase'>
                      Explore Mug
                    </div>
                  </div>
                </a>
              </div>
              <div className='text-center my-8'>
                {" "}
                <a href='#'>
                  <div className='text-xl mb-3 '>Golden Designers Mug</div>
                </a>
                <div className=''>
                  <span className='text-[16px] text-gray-500'>$ 99.00 USD</span>
                </div>
              </div>
            </div>
            <div className='ct-product-card '>
              <div className=' h-[380px]  bg-[url("../assest/5be96251aaba7a81a6ecdfe7_levi-guzman-1077850-unsplash.jpg")] bg-cover bg-no-repeat bg-center'>
                <a href='#'>
                  {" "}
                  <div className='w-full h-full hover:bg-gray-900 hover:bg-opacity-10 hover:transition-all hover:ease-in-out hover:duration-400 relative group'>
                    <div className='absolute hidden group-hover:block group-hover:animate-fadeIn bg-white text-center text-gray-900 w-11/12 bottom-4 left-1/2 text-[12px] -translate-x-1/2 tracking-wider text-sm py-4 px-8 font-bold cursor-pointer hover:bg-opacity-90 uppercase'>
                      Explore Mug
                    </div>
                  </div>
                </a>
              </div>
              <div className='text-center my-8'>
                {" "}
                <a href='#'>
                  <div className='text-xl mb-3 '>Golden Designers Mug</div>
                </a>
                <div className=''>
                  <span className='text-[16px] text-gray-500'>$ 29.00 USD</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='ct-subheadline '>
          <div className='ct-subheadline-deco-line'></div>
          <div className='ct-subheadline-lable '>
            BUY 2 MUGS AND GET A COFFEE MAGAZINE FREE s
          </div>
          <div className='ct-subheadline-deco-line  '></div>
        </div>
        <div className='coffee-magazine lg:w-[77%] md:w-[50%] w-[95%] mx-auto mb-16'>
          <div className='flex lg:flex-row  flex-col justify-center items-center gap-5'>
            <div className='ct-magazine-image basis-1/2 flex flex-row gap-5 w-full h-full'>
              <div className='ct-magazine-big-image bas h-[280px] basis-2/3 bg-[url("../assest/5be96251aaba7a2f3decdfa9_Image.jpg")] bg-cover bg-no-repeat bg-center'></div>
              <div className='ct-magazine-small-image basis-1/3 flex flex-col gap-5'>
                <div className=' h-[130px] bg-[url("../assest/5be96251aaba7ae493ece012_rawpixel-645289-unsplash.jpg")] bg-cover bg-no-repeat bg-center'></div>
                <div className=' h-[130px]   bg-[url("../assest/5be96251aaba7a528fecdfa6_Image.jpg")] bg-cover bg-no-repeat bg-center'></div>
              </div>
            </div>
            <div className='ct-magazine-post  basis-1/2 lg:pl-14 text-center lg:text-left'>
              <div className='  tracking-widest text-gray-500 font-medium text-[12px] '>
                PREMIUM OFFER
              </div>
              <div className='text-4xl my-6'>Get our Coffee Magazine</div>
              <div className=' text-gray-500 leading-7 mb-4'>
                The most versatile furniture system ever created. Designed to
                fit your life.
              </div>
              <div className='flex justify-center lg:justify-start'>
                <div className='bg-gray-900 text-white w-max tracking-wider text-sm py-4 px-8 font-bold cursor-pointer hover:bg-opacity-90'>
                  START SHOPPING
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='ct-parallax-section w-[100vw] left-[calc(-50vw+50%)] relative h-[340px] mb-24 bg-fixed bg-[url("https://assets.website-files.com/5be96251aaba7a7b19ecdf69/5be96251aaba7ac1c6ecdfd2_Section%20Image%202.jpg")] bg-cover bg-no-repeat bg-center '></div>
        <div className='ct-subheadline '>
          <div className='ct-subheadline-deco-line'></div>
          <div className='ct-subheadline-lable '>
            BEHIND THE MUGS, LIFESTYLE STORIES
          </div>
          <div className='ct-subheadline-deco-line '></div>
        </div>
        <div className='lifestyle-stories  lg:w-[77%] w-[95%] mx-auto mb-24'>
          <div className='grid lg:grid-cols-3 grid-cols-1 gap-5'>
            <div className='ct-lifestyle-stories '>
              <div className=' h-[300px]  bg-[url("../assest/5be96251aaba7a4ce6ece036_bar-cafe-caffeine-1002740.jpg")] bg-cover bg-no-repeat bg-center'>
                <a href='#'>
                  {" "}
                  <div className='w-full h-full hover:bg-gray-900 hover:bg-opacity-10 hover:transition-all hover:ease-in-out hover:duration-400 relative group'>
                    <div className='absolute hidden group-hover:block group-hover:animate-fadeIn bg-white text-center text-gray-900 w-11/12 bottom-4 left-1/2 text-[12px] -translate-x-1/2 tracking-wider text-sm py-4 px-8 font-bold cursor-pointer hover:bg-opacity-90 uppercase'>
                      READ THE FULL STORY
                    </div>
                  </div>
                </a>
              </div>
              <div className='text-center lg:text-left my-8'>
                {" "}
                <a href='#' className='hover:text-coffee-400'>
                  <div className='text-xl mb-3 '>
                    Health Check: why do I get a headache when I haven’t had my
                    coffee?
                  </div>
                </a>
                <div className='text-gray-500 leading-7 mb-3  text-[16px]'>
                  It is a paradisematic country, in which roasted parts of
                  sentences fly into your mouth.
                </div>
                <div className='text-gray-500 leading-7 mb-3 text-[12px]  font-semibold tracking-widest'>
                  OCTOBER 9, 2018
                </div>
              </div>
            </div>
            <div className='ct-lifestyle-stories '>
              <div className=' h-[300px]  bg-[url("https://assets.website-files.com/5be96251aaba7a84f6ecdf81/5be96251aaba7a481bece02f_Blog%20Pic%20Head%201.jpg")] bg-cover bg-no-repeat bg-center'>
                <a href='#'>
                  {" "}
                  <div className='w-full h-full hover:bg-gray-900 hover:bg-opacity-10 hover:transition-all hover:ease-in-out hover:duration-400 relative group'>
                    <div className='absolute hidden group-hover:block group-hover:animate-fadeIn bg-white text-center text-gray-900 w-11/12 bottom-4 left-1/2 text-[12px] -translate-x-1/2 tracking-wider text-sm py-4 px-8 font-bold cursor-pointer hover:bg-opacity-90 uppercase'>
                      READ THE FULL STORY
                    </div>
                  </div>
                </a>
              </div>
              <div className='text-center lg:text-left my-8'>
                {" "}
                <a href='#' className='hover:text-coffee-400'>
                  <div className='text-xl mb-3 '>
                    How long does a cup of coffee keep you awake?
                  </div>
                </a>
                <div className='text-gray-500 leading-7 mb-3  text-[16px]'>
                  It is a paradisematic country, in which roasted parts. Vel qui
                  et ad voluptatem.
                </div>
                <div className='text-gray-500 leading-7 mb-3 text-[12px]  font-semibold tracking-widest'>
                  OCTOBER 9, 2018
                </div>
              </div>
            </div>
            <div className='ct-lifestyle-stories '>
              <div className=' h-[300px]  bg-[url("https://assets.website-files.com/5be96251aaba7a84f6ecdf81/5be96251aaba7a5e47ece03c_Blog%20Pic%20Head%208.jpg")] bg-cover bg-no-repeat bg-center'>
                <a href='#'>
                  {" "}
                  <div className='w-full h-full hover:bg-gray-900 hover:bg-opacity-10 hover:transition-all hover:ease-in-out hover:duration-400 relative group'>
                    <div className='absolute hidden group-hover:block group-hover:animate-fadeIn bg-white text-center text-gray-900 w-11/12 bottom-4 left-1/2 text-[12px] -translate-x-1/2 tracking-wider text-sm py-4 px-8 font-bold cursor-pointer hover:bg-opacity-90 uppercase'>
                      READ THE FULL STORY
                    </div>
                  </div>
                </a>
              </div>
              <div className='text-center lg:text-left my-8'>
                {" "}
                <a href='#' className='hover:text-coffee-400'>
                  <div className='text-xl mb-3 '>
                    Recent research suggests that heavy coffee drinkers may reap
                    health benefits.
                  </div>
                </a>
                <div className='text-gray-500 leading-7 mb-3  text-[16px]'>
                  It is a paradisematic country, in which roasted parts of
                  sentences fly into your mouth.
                </div>
                <div className='text-gray-500 leading-7 mb-3 text-[12px]  font-semibold tracking-widest'>
                  OCTOBER 9, 2018
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`subscribe-us ${
            !isLargeScreen ? "mobile-screen" : ""
          } h-[350px] bg-[#1d1f2e] flex flex-col justify-center items-center mb-24`}
        >
          <div className='flex justify-center items-center mb-3 '>
            <div className=' w-8 h-[0.8px] bg-gray-500'></div>
            <div className='uppercase mx-4 tracking-widest text-gray-400 font-bold text-[12px] text-center '>
              SIGN UP AND GET FREE COFFEE BAGS
            </div>
            <div className=' w-8 h-[0.8px] bg-gray-500'></div>
          </div>
          <div className='text-4xl mb-3 text-white text-center'>
            Coffee Updates
          </div>
          <div className='ct-form flex  flex-col md:flex-row mt-4 gap-3 '>
            {" "}
            <div className='ct-form-item'>
              {" "}
              <input
                type='name'
                placeholder='CUSTOMER@COFFEESTYLE.IO'
                className='px-6 py-4 w-[350px] bg-inherit border-[1px] border-gray-700 outline-none text-white leading-5 hover:border-gray-300 duration-500 focus:border-gray-300 placeholder:text-xs placeholder:tracking-widest placeholder:font-semibold'
              />
            </div>
            <div className='ct-form-item'>
              {" "}
              <button
                type='submit'
                className={`ct-button ${
                  !isMediumScreen ? "mobile-screen-btn" : ""
                } px-8 py-3.5 text-[13px] bg-white text-gray-900 font-semibold hover:bg-gray-100 tracking-widest`}
              >
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>
      </main>
      <footer className='lg:w-[77%] w-[95%] mx-auto pb-24 flex flex-col lg:flex-row lg:text-left text-center gap-14'>
        <div className='basis-2/6'>
          <div className='text-xl font-bold tracking-wide'>CoffeeStyle.</div>
          <div className='text-[14px] text-[#1d1f2eb3] mt-5'>
            Delivering the best coffee life since 1996. From coffee geeks to the
            real ones.
          </div>
          <div>
            <a
              href='#'
              className='hover:text-coffee-400 text-[14px]  text-[#1d1f2e4d] duration-300 cursor-text'
            >
              <div className='mt-20  '>CoffeeStyle Inc. © 1996</div>
            </a>
          </div>
        </div>
        <div className='basis-1/6'>
          {" "}
          <div className='text-[12px] text-[#1d1f2eb3] font-semibold tracking-wider'>
            MENU
          </div>
          <div className='mt-5'>
            {" "}
            <a
              href='#'
              className='hover:text-coffee-400 text-[14px] text-[#1d1f2eb3] '
            >
              <div className='text-md mb-3 '>Home</div>
            </a>{" "}
            <a
              href='#'
              className='hover:text-coffee-400 text-[14px] text-[#1d1f2eb3] '
            >
              <div className='text-md mb-3 '>Our Products</div>
            </a>{" "}
            <a
              href='#'
              className='hover:text-coffee-400 text-[14px] text-[#1d1f2eb3] '
            >
              <div className='text-md mb-3 '>About</div>
            </a>{" "}
            <a
              href='#'
              className='hover:text-coffee-400 text-[14px] text-[#1d1f2eb3] '
            >
              <div className='text-md mb-3 '>Contact</div>
            </a>{" "}
            <a
              href='#'
              className='hover:text-coffee-400 text-[14px] text-[#1d1f2eb3] '
            >
              <div className='text-md mb-3 '>Styleguide</div>
            </a>
          </div>
        </div>
        <div className='basis-1/6'>
          {" "}
          <div className='text-[12px] text-[#1d1f2eb3] font-semibold tracking-wider'>
            FOLLOW US
          </div>
          <div className='mt-5'>
            {" "}
            <a
              href='#'
              className='hover:text-coffee-400 text-[14px] text-[#1d1f2eb3]'
            >
              <div className='text-md mb-3 '>Facebook</div>
            </a>{" "}
            <a
              href='#'
              className='hover:text-coffee-400 text-[14px] text-[#1d1f2eb3]'
            >
              <div className='text-md mb-3 '>Instagram</div>
            </a>{" "}
            <a
              href='#'
              className='hover:text-coffee-400 text-[14px] text-[#1d1f2eb3]'
            >
              <div className='text-md mb-3 '>Pinterest</div>
            </a>{" "}
            <a
              href='#'
              className='hover:text-coffee-400 text-[14px] text-[#1d1f2eb3]'
            >
              <div className='text-md mb-3 '>Twitter</div>
            </a>
          </div>
        </div>
        <div className='basis-2/6'>
          {" "}
          <div className='text-[12px] text-[#1d1f2eb3] font-semibold tracking-wider'>
            {" "}
            CONTACT US
          </div>
          <div>
            {" "}
            <div className=' mt-5 text-[14px] text-[#1d1f2eb3]   tracking-wider'>
              We’re Always Happy to Help
            </div>
            <a
              href='#'
              className='hover:text-coffee-400 text-[24px] mb-3 text-gray-600 font-medium duration-300 '
            >
              <div className=' mt-6'>us@coffeestyle.io</div>
            </a>{" "}
            <a
              href='#'
              className='hover:text-coffee-400 text-[14px]  text-[#1d1f2e4d] duration-300'
            >
              <div className=' mt-16'>Powered by Webflow</div>
            </a>{" "}
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
