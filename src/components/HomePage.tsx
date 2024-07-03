// import CustomForm from '../components/CustomForm.tsx'

import React from "react"
import CustomForm from "./CustomForm"
import Intro from "./Intro"
import Table from "./Table"

const HomePage = () => {


    return <div>
        <Intro />
        <CustomForm />
       <Table/>
    </div>

}
export default HomePage