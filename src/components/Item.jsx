import React from "react";

function Item() {

    return (
        <>
            <div className="flex-column w-[220px] gap-1 mx-auto">
                <div className="w-[100%] h-[300px] rounded">
                    <img src="./public/icons/1.jpg" className="w-[100%] rounded" alt="" />
                </div>

                <div className="p-[10px]">
                    <p className="text-sm">Подсолнечное масло Sofia, рафинированное и...</p>

                    <div className="text-xs flex items-center gap-2 text-[gray]">
                        <img src="" alt="" />
                        <p>4.9</p>
                        <p>(550 оценок)</p>
                    </div>

                    <div className="w-[36%] text-xs bg-[#ffff00] rounded py-[1px] pl-[5px] ml-[5px] my-[10px]">
                        <p>1 680 / мес</p>
                    </div>

                    <div className="flex justify-between items-center ml-[5px]">
                        <div className="flex-column">
                            <p className="text-xs line-through px-1 text-[gray]">19 000</p>
                            <h3>14 000</h3>
                        </div>
                        <div className="right">
                            <img src="./public/icons/2.svg" className="w-[35px] border-[#c8c8c8] border-2 rounded-full p-[5px]" alt="" />
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Item