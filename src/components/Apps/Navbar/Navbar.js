import React, { useContext } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { MyContext } from '../../../context/AppContext';

const Navbar = () => {
  const location = useLocation();
  const isSearchPage = location.pathname === "/search";
  const { setSearching } = useContext(MyContext);
  const handleSearch = (e) => {
    let value = e.target.value;
    if (value === "") {
      setSearching(false);
      return;
    };
    setSearching(true);
  }
  return (
    <div className='h-[117px] bg-primary-bg px-[40px] flex justify-between items-center border-b-[1px] border-black'>
      <div className='flex gap-[20px]'>
        <div className=' flex gap-[20px]'>
          <button className='w-[50px] h-[50px] bg-black rounded-[50%] text-white'>
            <i className="fa-solid fa-arrow-left"></i>
          </button>
          <button className='w-[50px] h-[50px] bg-black rounded-[50%] text-white'>
            <i className="fa-solid fa-arrow-right"></i>
          </button>
        </div>
        {isSearchPage && <div className='flex text-[23px] items-center bg-primary-bg border-[4px] border-white rounded-[500px]'>
          <i className="px-4 fa-solid fa-magnifying-glass text-[#33363F]"></i>
          <input onChange={handleSearch} className='w-[500px] px-[10px] h-[42px] text-[20px] outline-none font-semibold bg-primary-bg rounded-[500px]' type="text" placeholder='Bạn muốn tìm nội dung gì?' />
        </div>}
      </div>
      <div className='flex gap-[21px] items-center'>
        <Link to={"/auth/signup"} className='text-[25px] block'>Đăng ký</Link>
        <Link to={"/auth/signin"} className='text-[25px] border-black border-[1px] rounded-[500px] py-[18px] px-[48px]'>Đăng nhập</Link>
      </div>
    </div>
  )
}

export default Navbar