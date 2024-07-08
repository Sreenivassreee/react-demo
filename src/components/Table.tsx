

// import CustomForm from '../components/CustomForm.tsx'

import React, { useEffect, useState } from "react"
import CustomForm from "./CustomForm"
import Intro from "./Intro"

const Table = ({ needLoad }) => {
    const [people, setPeople] = useState([])

    useEffect(() => {
        fetch('https://nhxh2qm2etrhvihdkbtcx6bxmy0rdkwa.lambda-url.ap-south-1.on.aws/', {
            method: "GET",
        }).then((d) => d.json().then((data) => setPeople(data.message.reverse())))
        console.log(people)
    }, [needLoad])
    console.log("needLoad---------  ")   
    return <div className="">
        <h1 className="font-bold text-">USERS</h1>
        <div className="flow-root mt-8">
            <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                    <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
                        <table className="min-w-full divide-y divide-gray-300">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                        Id
                                    </th>
                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                        First Name
                                    </th>
                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                        Last Name
                                    </th>
                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                        Email
                                    </th>
                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                        city
                                    </th>
                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                        Post Code
                                    </th>
                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                        Region
                                    </th>
                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                        Street Address
                                    </th>  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                        Created At
                                    </th>
                                    <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                                        <span className="sr-only">Edit</span>
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {people.map((person: any) => (
                                    <tr key={person?._id ?? ''}>
                                        <td className="py-4 pl-4 pr-3 text-sm font-medium text-gray-900 whitespace-nowrap sm:pl-6">
                                            {person._id}
                                        </td>
                                        <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">{person.firstName}</td>
                                        <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">{person.lastName}</td>
                                        <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">{person.email}</td>
                                        <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">{person.city}</td>
                                        <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">{person.postalCode}</td>
                                        <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">{person.region}</td>
                                        <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">{person.streetAddress}</td>
                                        <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">{person.CreatedAt}</td>
                                        <td className="relative py-4 pl-3 pr-4 text-sm font-medium text-right whitespace-nowrap sm:pr-6">
                                            <a href="#" className="text-indigo-600 hover:text-indigo-900">
                                                Edit<span className="sr-only">, {person.name}</span>
                                            </a>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>



}
export default Table

