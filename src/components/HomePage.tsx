// import CustomForm from '../components/CustomForm.tsx'

import React, { useState } from "react"
import CustomForm from "./CustomForm"
import Intro from "./Intro"
import Table from "./Table"

const HomePage = () => {
const[reload,setReload]=useState()

    return <div>
        <Intro />
        <CustomForm reload={setReload} />
       <Table needLoad={reload}/>
    </div>

}
export default HomePage