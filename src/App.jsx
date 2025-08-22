import { useState } from 'react';

function App() {
  const [show, setShow] = useState(true);

  if (!show) return null;

  return (
    <body>
      <div className="fixed top-0 left-0 w-full border-black rounded-2xl border-2 min-h-20 flex gap-8 items-center pl-10 bg-white z-50">
        <span className="font-sans text-2xl font-semibold text-black">Download Onchain APP</span>
        <div className="w-[600px] h-full flex justify-around items-center">
          {/* App Store */}
          <a
            href="https://www.apple.com/sg/app-store/"
            className=" border-black rounded-2xl border-2 w-[240px] h-[60px] flex items-center pl-4 gap-2"
          >
            <img src="./src/assets/apple.png" alt="" className="w-[40px] h-[40px]" />
            <div className="w-[200px] h-[40px] flex flex-col justify-center items-start">
              <p className="font-sans text-sm font-semibold text-black">Download on the</p>
              <p className="font-sans text-2xl font-semibold text-black">App Store</p>
            </div>
          </a>

          {/* Google Play */}
          <a
            href="https://play.google.com/store/games?device=windows"
            className=" border-black rounded-2xl border-2 w-[240px] h-[60px] flex items-center pl-4 gap-2"
          >
            <img src="./src/assets/google-play.png" alt="" className="w-[40px] h-[40px]" />
            <div className="w-[200px] h-[40px] flex flex-col justify-center items-start">
              <p className="font-sans text-sm font-semibold text-black">GET IT ON</p>
              <p className="font-sans text-2xl font-semibold text-black">Google Play</p>
            </div>
          </a>
        </div>

        <a href="#" className="underline font-sans  font-semibold mt-4 text-base text-black">Download APK</a>
        {/* 关闭按钮 */}
        <button
          onClick={() => setShow(false)}
          className="absolute top-2 right-4 text-black text-2xl font-bold cursor-pointer"
        >
          X
        </button>
      </div>
    </body>

  );
}


export default App;


import './index.css'
import logo from './assets/file.png'
import Baidu from './components/Baidu'
import XuanChuan from './components/XuanChuan'
import ReSou from './components/ReSou'
function App() {
  return (
    <>
      <div className='h-[60px] w-full min-w-[1494px] pl-6 flex justify-between'>
        <div className='w-full max-w-[542px] h-full flex items-center justify-between'>
          <a href="https://news.baidu.com/" target="_blank" rel="noopener noreferrer" className='text-[#222] text-[13px] leading-[23px] font-sans'>新闻</a>
          <a href="https://www.hao123.com/?src=from_pc" target="_blank" rel="noopener noreferrer" className='text-[#222] text-[13px] leading-[23px] font-sans'>hao123</a>
          <a href="https://map.baidu.com/" target="_blank" rel="noopener noreferrer" className='text-[#222] text-[13px] leading-[23px] font-sans'>地图</a>
          <a href="https://tieba.baidu.com/" target="_blank" rel="noopener noreferrer" className='text-[#222] text-[13px] leading-[23px] font-sans'>贴吧</a>
          <a href="https://haokan.baidu.com/?sfrom=baidu-top" target="_blank" rel="noopener noreferrer" className='text-[#222] text-[13px] leading-[23px] font-sans'>视频</a>
          <a href="https://image.baidu.com/" target="_blank" rel="noopener noreferrer" className='text-[#222] font-sans text-[13px] leading-[23px]'>图片</a>
          <a href="https://pan.baidu.com/?from=1026962h" target="_blank" rel="noopener noreferrer" className='text-[#222] font-sans text-[13px] leading-[23px]'>网盘</a>
          <a href="https://wenku.baidu.com/?fr=bdpcindex" target="_blank" rel="noopener noreferrer" className='text-[#222] font-sans text-[13px] leading-[23px]'>文库</a>
          <a href="https://chat.baidu.com/search?isShowHello=1&pd=csaitab&setype=csaitab&extParamsJson=%7B%22enter_type%22%3A%22home_tab%22%7D" target="_blank" rel="noopener noreferrer" className='w-[26px] h-[14px]'><img src={logo} alt="" /></a>
          <a href="https://www.baidu.com/more/" target="_blank" rel="noopener noreferrer" className='text-[#222] font-sans text-[13px] leading-[23px]'>更多</a>
        </div>
        <div className='w-full max-w-[354px] h-full pl-50 pr-6'>
          <div className='h-full flex items-center gap-8'>
            <div className='cursor-pointer text-[#222] font-sans text-[13px] leading-[23px]'>设置</div>
            <a href="#" className='h-6 w-12 bg-[#4e6ef2] rounded-sm flex items-center justify-center text-[#fff] font-sans text-[13px] leading-[23px]'>登录</a>
          </div>
        </div>
      </div>
      <Baidu />
      <XuanChuan />
      <ReSou />
    </>
  )
}

export default App
>>>>>>> a0395a8 (822界面提交（仅用于学习）)
