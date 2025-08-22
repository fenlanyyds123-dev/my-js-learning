import Zhiding from '../assets/置顶.svg'
import Hot from '../assets/file3.svg'
const ReSou = () => {
    return (
        <div className="w-full h-[400px] flex flex-col items-center pt-[48px]">
            <div className="w-full max-w-[760px] h-[24px] flex justify-between">
                <a href="https://top.baidu.com/board?platform=pc&sa=pcindex_entry" className="w-full max-w-[69px] flex items-center gap-1">
                    <img src="https://psstatic.cdn.bcebos.com/basics/aichat/hot_search_x3_1747880381000.png" alt="" className="w-[55px] h-[14px]" />
                    <span class="text-[#9195a3] text-[14px]">&gt;</span>
                </a>
                <div className="w-full max-w-[60px] h-full flex items-center gap-1 cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-[16px] h-[16px] text-[#9195a3]">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
                    </svg>
                    <span className="text-[13px] text-[#9195a3] font-sans">换一换</span>
                </div>
            </div>
            <div className="w-full max-w-[760px] h-[200px] mt-[30px] flex gap-4">
                <ul className="w-full max-w-[369px] h-full  flex flex-col">
                    <li className="w-full h-[36px] flex items-center gap-4">
                        <img src={Zhiding} alt="" className='w-[18px] h-[18px]' />
                        <span className='text-[16px] font-sans text-[#333] leading-[36px] cursor-pointer'>描绘新时代西藏发展新画卷</span>
                    </li>
                    <li className="w-full h-[36px] flex items-center gap-4">
                        <span className='text-[#fe2d46] text-[16px] font-sans w-[18px] h-[18px] flex items-center justify-center'>1</span>
                        <span className='text-[16px] font-sans text-[#333] leading-[36px] cursor-pointer'>被错误羁押6千天男子申请国赔1911万</span>
                        <img src={Hot} alt="" className='w-4 h-4' />
                    </li>
                    <li className="w-full h-[36px] flex items-center gap-4">
                        <span className='text-[#f60] text-[16px] font-sans w-[18px] h-[18px] flex items-center justify-center'>2</span>
                        <span className='text-[16px] font-sans text-[#333] leading-[36px] cursor-pointer'>人民日报三问尖扎黄河特大桥事故</span>
                        <img src={Hot} alt="" className='w-4 h-4' />
                    </li>
                    <li className="w-full h-[36px] flex items-center gap-4">
                        <span className='text-[#faa90e] text-[16px] font-sans w-[18px] h-[18px] flex items-center justify-center'>3</span>
                        <span className='text-[16px] font-sans text-[#333] leading-[36px] cursor-pointer'>今年全国已吸收外资4673.4亿元</span>
                    </li>
                    <li className="w-full h-[36px]  flex items-center gap-4">
                        <span className='text-[#9195a3] text-[16px] font-sans w-[18px] h-[18px] flex items-center justify-center'>4</span>
                        <span className='text-[16px] font-sans text-[#333] leading-[36px] cursor-pointer'>黄渤担心遗传父母的阿尔兹海默症</span>
                    </li>
                </ul>
                <ul className="w-full max-w-[369px] h-full ">
                    <li className="w-full h-[36px] flex items-center gap-4 ">
                        <span className='text-[#9195a3] text-[16px] font-sans w-[18px] h-[18px] flex items-center justify-center'>5</span>
                        <span className='text-[16px] font-sans text-[#333] leading-[36px] cursor-pointer'>男子打胰岛素1月后发现针套没摘</span>
                    </li>
                    <li className="w-full h-[36px] flex items-center gap-4 ">
                        <span className='text-[#9195a3] text-[16px] font-sans w-[18px] h-[18px] flex items-center justify-center'>6</span>
                        <span className='text-[16px] font-sans text-[#333] leading-[36px] cursor-pointer'>中方回应“乌称不需中国提供安保”</span>
                    </li>
                    <li className="w-full h-[36px] flex items-center gap-4 ">
                        <span className='text-[#9195a3] text-[16px] font-sans w-[18px] h-[18px] flex items-center justify-center'>7</span>
                        <span className='text-[16px] font-sans text-[#333] leading-[36px] cursor-pointer'>内蒙古自治区政府主席王莉霞被查</span>
                        <img src={Hot} alt="" className='w-4 h-4' />
                    </li>
                    <li className="w-full h-[36px] flex items-center gap-4 ">
                        <span className='text-[#9195a3] text-[16px] font-sans w-[18px] h-[18px] flex items-center justify-center'>8</span>
                        <span className='text-[16px] font-sans text-[#333] leading-[36px] cursor-pointer'>女子悬赏上海一套房寻子：6代单传</span>
                    </li>
                    <li className="w-full h-[36px] flex items-center gap-4 ">
                        <span className='text-[#9195a3] text-[16px] font-sans w-[18px] h-[18px] flex items-center justify-center'>9</span>
                        <span className='text-[16px] font-sans text-[#333] leading-[36px] cursor-pointer'>17岁少年因欠债未还被好友殴打致死</span>
                    </li>
                </ul>
            </div>
        </div>

    )
}

export default ReSou