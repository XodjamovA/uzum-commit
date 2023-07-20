import React from "react"
import Item from "../components/Item"


const Home = () => {
    return (
        <>
            <div className="w-[1320px] mx-auto flex justify-between items-center">
                <Item />
                <Item />
                <Item />
                <Item />
            </div>
        </>
    )
}


export default Home