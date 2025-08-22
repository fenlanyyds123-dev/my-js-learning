import logo from '../assets/file2.png'
const Baidu = () => {
    return (
        <>
            <div className='w-full h-[129px] flex justify-center'>
                <a href="https://www.baidu.com/s?wd=%E7%99%BE%E5%BA%A6%E7%83%AD%E6%90%9C&sa=ire_dl_gh_logo_texing&rsv_dl=igh_logo_pcs" className='w-full max-w-[270px] h-full'>
                    <img src={logo} alt="" />
                </a>
            </div>
            <div className='w-full h-[97px]  flex justify-center mt-4'>
                <div className='w-full max-w-[798px] h-full  border-2 rounded-2xl border-[#4e6ef2] flex flex-col items-center pt-3'>
                    <textarea
                        id="chat-textarea"
                        className="w-full max-w-[760px] h-[30px] text-[14px] leading-[30px] pl-2 pr-2 focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
                        rows={1}
                        placeholder="林诗栋3-1淘汰德国老将"
                    />
                    <div className='w-full max-w-[770px] h-[53px]  flex items-center justify-between'>
                        <div className='w-full max-w-[107px] h-10 border border-gray-400 rounded-xl flex items-center justify-center gap-[6px] cursor-pointer'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path xmlns="http://www.w3.org/2000/svg" d="M9.99962 3.56027C12.9286 1.80482 15.7468 1.4081 17.1461 2.80734C18.5453 4.20558 18.1468 7.02324 16.3912 9.95187C18.1471 12.8808 18.5461 15.6989 17.1471 17.0984C15.7477 18.4977 12.9288 18.0996 9.99962 16.3435C7.07099 18.0991 4.25333 18.4975 2.85509 17.0984C1.45595 15.6992 1.853 12.8805 3.60802 9.95187C1.853 7.02337 1.45596 4.20455 2.85509 2.80636C4.25329 1.40759 7.07143 1.80565 9.99962 3.56027ZM4.43224 11.197C3.23935 13.4025 2.9844 15.344 3.79649 16.1569C4.6086 16.9691 6.54976 16.7131 8.75548 15.5202C7.96542 14.9464 7.18096 14.2784 6.42735 13.5251C5.67394 12.7717 5.00603 11.987 4.43224 11.197ZM15.568 11.196C14.994 11.9863 14.3265 12.7715 13.5729 13.5251C12.8192 14.2788 12.034 14.9462 11.2438 15.5202C13.4499 16.7134 15.3923 16.9681 16.2047 16.1569C17.017 15.3447 16.7615 13.4023 15.568 11.196ZM10.0006 5.14035C9.12238 5.7335 8.2287 6.46303 7.36974 7.32199C6.51095 8.18077 5.78118 9.07393 5.1881 9.95187C5.78132 10.8303 6.51057 11.7245 7.36974 12.5837C8.22856 13.4425 9.12252 14.1714 10.0006 14.7644C10.8787 14.1713 11.7726 13.4425 12.6315 12.5837C13.4905 11.7246 14.219 10.8302 14.8121 9.95187C14.2191 9.074 13.4901 8.1806 12.6315 7.32199C11.7725 6.46301 10.8788 5.7335 10.0006 5.14035ZM9.99767 8.50851C10.3805 8.50851 10.7484 8.6597 11.0191 8.93039C11.2899 9.20113 11.442 9.56898 11.442 9.95187C11.442 10.3346 11.2897 10.7017 11.0191 10.9724C10.7484 11.2431 10.3806 11.3952 9.99767 11.3952C9.6149 11.3951 9.24782 11.243 8.97716 10.9724C8.70651 10.7017 8.55435 10.3347 8.55431 9.95187C8.55431 9.56898 8.70641 9.20113 8.97716 8.93039C9.2478 8.65987 9.61501 8.5086 9.99767 8.50851ZM8.75548 4.38351C6.55014 3.19109 4.60849 2.93675 3.79649 3.74875C2.98472 4.56095 3.23966 6.50237 4.43224 8.70773C5.00602 7.91753 5.67307 7.13219 6.42638 6.37863C7.18016 5.6251 7.96523 4.95737 8.75548 4.38351ZM16.2047 3.74875C15.3925 2.93662 13.4506 3.19148 11.2447 4.38449C12.0349 4.95825 12.8203 5.62537 13.5738 6.37863C14.3272 7.13226 14.9941 7.91764 15.568 8.70773C16.7605 6.50207 17.0159 4.56084 16.2047 3.74875Z" fill="currentColor" fill-opacity="0.85"></path></svg>
                            <span className='font-sans text-[13px] leading-[23px]]'>深度搜索</span>
                        </div>
                        <div className='w-full max-w-[200px] h-full flex items-center justify-between pl-2 pr-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" class="week-svg_3KTGJ"><path d="M11.4405 5.94065L7.25022 10.1309C6.52703 10.8541 6.52703 12.0266 7.25022 12.7498V12.7498C7.97342 13.473 9.14595 13.473 9.86914 12.7498L11.3095 11.3094L14.0594 8.55957L14.7141 7.90484C16.1605 6.45845 16.1605 4.1134 14.7141 2.66701V2.66701C13.2677 1.22062 10.9227 1.22062 9.4763 2.66701L3.97658 8.16673C1.807 10.3363 1.807 13.8539 3.97658 16.0235V16.0235C6.14616 18.1931 9.66374 18.193 11.8333 16.0235L16.6783 11.1785" stroke="currentColor" stroke-width="1.48148"></path></svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" class="week-svg_3KTGJ"><path d="M1.85254 4.81475C1.85254 3.58745 2.84746 2.59253 4.07476 2.59253H15.9266C17.1539 2.59253 18.1488 3.58745 18.1488 4.81475V15.1851C18.1488 16.4124 17.1539 17.4073 15.9266 17.4073H4.07476C2.84746 17.4073 1.85254 16.4124 1.85254 15.1851V4.81475Z" stroke="currentColor" stroke-width="1.48148"></path><circle cx="13.7134" cy="7.14282" r="1.75926" stroke="currentColor" stroke-width="1.48148"></circle><path d="M1.85254 14.2326L5.08479 9.72923C5.81885 8.70649 7.25508 8.49716 8.25052 9.26783L17.4999 16.4286" stroke="currentColor" stroke-width="1.48148"></path></svg>
                            <div className='w-full max-w-[108px] h-[44px] border rounded-[15px] bg-[linear-gradient(136deg,#286aff,#4e6ef2,#7274f9,#9f66f9)] text-[#fff] font-sans flex justify-center items-center cursor-pointer'>百度一下</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Baidu