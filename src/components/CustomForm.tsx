import React, { useEffect, useState } from "react"
import { z } from 'zod';



const UserData = z.object({
  fistName: z.string(),
  lastName: z.string(),
  email: z.string(),
  country: z.string(),
  streetAddress: z.string(),
  city: z.string(),
  state: z.string(),
  postCode: z.string(),
  Offers: z.string(),
  pushNotifications: z.string()
});
type TUserData = z.infer<typeof UserData>;

const CustomForm = ({reload}) => {
  const [userData, setUserData] = useState<any>({})

  function setData(e) {
    setUserData((preData) => ({ ...preData, [e.target.name]: e.target.value }))
  

  }

  async function sendPost() {
    const url = "https://l24qh5du6gfqk37yznmswi4xtm0tycdy.lambda-url.ap-south-1.on.aws";
    try {
      const response = await fetch(url, {
        method: "POST", body: JSON.stringify(userData),
      });
      
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
      await response.json();
      setUserData({})
      reload()

    } catch (error) {
      setUserData({})
      reload()
      
      // window.location.reload();
    }
  }

  return (
    <div>
      <div className="p-10 space-y-12 border">

        <div className="pb-12 border-gray-900/10">
          <h2 className="text-base font-semibold leading-7 text-gray-900">Personal Information</h2>
          <div className="grid grid-cols-1 mt-10 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                First name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="firstName"
                  onChange={setData}
                  value={userData?.firstName??''}
                  id="first-name"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                Last name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="lastName"
                  id="last-name"
                  value={userData?.lastName??''}
                  onChange={setData}
                  autoComplete="family-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-4">
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  onChange={setData}
                  value={userData.email??''}
                  autoComplete="email"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
                Country
              </label>
              <div className="mt-2">
                <select
                  id="country"
                  name="country"
                  onChange={setData}
                  value={userData?.country??''}
                  autoComplete="country-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option>United States</option>
                  <option>Canada</option>
                  <option>Mexico</option>
                </select>
              </div>
            </div>

            <div className="col-span-full">
              <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-gray-900">
                Street address
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  value={userData?.streetAddress??''}
                  name="streetAddress"
                  id="street-address"
                  onChange={setData}

                  autoComplete="street-address"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2 sm:col-start-1">
              <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">
                City
              </label>
              <div className="mt-2">
                <input
                  value={userData?.city??''}

                  type="text"
                  name="city"
                  id="city"
                  onChange={setData}

                  autoComplete="address-level2"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="region" className="block text-sm font-medium leading-6 text-gray-900">
                State / Province
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="region"
                  id="region"
                  value={userData?.region??''}

                  onChange={setData}

                  autoComplete="address-level1"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="postal-code" className="block text-sm font-medium leading-6 text-gray-900">
                ZIP / Postal code
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="postalCode"
                  value={userData?.postalCode??''}

                  id="postal-code"
                  onChange={setData}

                  autoComplete="postal-code"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="pb-12 border-gray-900/10">
          <h2 className="text-base font-semibold leading-7 text-gray-900">Notifications</h2>


          <div className="mt-10 space-y-10">
            <fieldset>
              <div className="mt-2 space-y-6">
                <div className="relative flex gap-x-3">
                  <div className="flex items-center h-6">
                    <input
                      id="offers"
                      name="offers"
                      type="checkbox"
                      onChange={setData}
                      value={userData?.offers??''}
                      className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-600"
                    />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-medium text-gray-900">
                      Offers
                    </label>
                  </div>
                </div>
              </div>
            </fieldset>
            <fieldset>
              <div className="mt-2 space-y-6">
                <div className="flex items-center gap-x-3">
                  <input
                    id="push-nothing"
                    name="pushNotifications"
                    type="radio"
                    onChange={setData}
                    value={userData?.pushNotifications??''}

                    className="w-4 h-4 text-indigo-600 border-gray-300 focus:ring-indigo-600"
                  />
                  <label htmlFor="push-nothing" className="block text-sm font-medium leading-6 text-gray-900">
                    Push notifications
                  </label>
                </div>
              </div>
            </fieldset>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-end mt-6 gap-x-6">
        <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
          Cancel
        </button>
        <button
          type="submit"
          onClick={sendPost}
          className="px-3 py-2 text-sm font-semibold text-white bg-indigo-600 rounded-md shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Save
        </button>
      </div>
    </div>
  )

}



export default CustomForm