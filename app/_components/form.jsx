'use client'
import Link from 'next/link'
import { FaArrowLeft } from "react-icons/fa";
import {useState} from 'react'
import {useRouter} from 'next/navigation'
import axios from 'axios'
export default function Form() {
    const router = useRouter()
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [dateOfBirth, setDateOfBirth] = useState("")
    const [organization, setOrganization] = useState("")
    const [expertiseLevel, setExpertiseLevel] = useState("Novice")
    const [message, setMessage] = useState("")

    const [error, setError] = useState({
        firstName: false,
        lastName: false,
        dateOfBirth: false,
        organization: false
    })

    
    const handleForm = async (e) => {
        e.preventDefault()
        let newError = {...error}
        newError.firstName = (firstName == "") ? true:false
        newError.lastName = (lastName == "") ? true:false
        newError.dateOfBirth = (dateOfBirth == "") ? true:false
        newError.organization = (organization == "") ? true:false
        setError(newError)
        if (newError.firstName || newError.lastName || newError.dateOfBirth || newError.organization) {
            router.push("/registration")
        } else {
            const data = {
                firstName: firstName,
                lastName: lastName,
                dateOfBirth: dateOfBirth,
                organization: organization,
                expertiseLevel: expertiseLevel,
                message: message
            }
            console.log(data)
            try {
                const response = await axios.post("http://127.0.0.1:1337/api/registered-users", {data})
                console.log(response);
            } catch (err) {
                console.log(err)
                router.push("/registration")
            }
            router.push("/")
        }
    }

    return (
        <div className="h-[63rem] xs:h-[60rem] 460:h-[46rem] bg-[#e7e7e7] flex justify-center items-center">
            <form className="w-10/12 xs:w-[23rem] 460:w-[27rem] 640:w-[33rem] md:w-[38rem] px-8 py-10 bg-white flex flex-col items-center gap-4 rounded rounded-xl" method="post" onSubmit={handleForm}>
                <p className="w-full relative font-semibold text-2xl mb-10 text-center"><Link className="absolute left-0 hover:cursor-pointer" href="/"><FaArrowLeft className="inline" size={20}/></Link> Registration</p>
                <div className="w-full flex flex-col 460:flex-row gap-6">
                    <div className="w-full flex flex-col gap-2">
                        <label className="font-semibold" htmlFor="firstName">First name<span className="text-red-400">*</span></label>
                        <input className="w-full p-2 border border-gray-300 rounded-lg text-gray-500 focus:outline-none" type="text" id="firstName" name="firstName" placeholder="First name" defaultValue={firstName}
                        onChange={(e) => setFirstName(e.target.value)}/>
                        {error.firstName && <p className="w-full text-red-500">Please provide first name</p>}
                    </div>
                    <div className="w-full flex flex-col gap-2">
                        <label className="font-semibold" htmlFor="lastName">Last name<span className="text-red-400">*</span></label>
                        <input className="w-full p-2 border border-gray-300 rounded-lg text-gray-500 focus:outline-none" type="text" id="lastName" name="lastName" placeholder="Last name" defaultValue={lastName}
                        onChange={(e) => setLastName(e.target.value)}/>
                        {error.lastName && <p className="w-full text-red-500">Please provide last name</p>}
                    </div>
                </div>

            <div className="w-full flex flex-col 460:flex-row gap-6">
                    <div className="w-full flex flex-col gap-2">
                        <label className="font-semibold" htmlFor="dateOfBirth">Date of birth<span className="text-red-400">*</span></label>
                        <input className="w-full p-2 border border-gray-300 rounded-lg text-gray-500 focus:outline-none" type="date" id="dateOfBirth" name="dateOfBirth" defaultValue={dateOfBirth}
                        onChange={(e) => setDateOfBirth(e.target.value)}/>
                        {error.dateOfBirth && <p className="w-full text-red-500">Please provide date of birth</p>}
                    </div>
                    <div className="w-full flex flex-col gap-2">
                        <label className="font-semibold" htmlFor="organization">University/Company<span className="text-red-400">*</span></label>
                        <input className="w-full p-2 border border-gray-300 rounded-lg text-gray-500 focus:outline-none" type="text" id="organization" name="organization" placeholder="University/Company" defaultValue={organization}
                        onChange={(e) => setOrganization(e.target.value)}/>
                        {error.organization && <p className="w-full text-red-500">Please provide organization</p>}
                    </div>
                </div>

                <div className="w-full flex gap-6">
                    <div className="w-full flex flex-col gap-2">
                        <label className="font-semibold" htmlFor="expertiseLevel">Your expertise levels</label>
                        <select className="w-full p-2 border border-gray-300 rounded-lg text-gray-500 focus:outline-none" id="expertiseLevel" name="expertiseLevel" defaultValue={expertiseLevel}
                        onChange={(e) => setExpertiseLevel(e.target.value)}>
                            <option className="hidden" value="DEFAULT" disabled></option>
                            <option value="novice">Novice</option>
                            <option value="intermediate">Intermediate</option>
                            <option value="advanced">Advanced</option>
                            <option value="expert">Expert</option>
                        </select>
                    </div>
                    <div className="w-full flex flex-col gap-2 invisible">
                        <label className="font-semibold" htmlFor="blank">Blank</label>
                        <input className="w-full p-2 border border-gray-300 rounded-lg text-gray-500 focus:outline-none" type="text" id="blank" placeholder="Blank"/>
                    </div>
                </div>

                <div className="w-full flex gap-6">
                    <div className="w-full flex flex-col gap-2">
                        <label className="font-semibold" htmlFor="message">What do you expect to learn from this course</label>
                        <textarea  className="w-full h-32 p-2 border border-gray-300 rounded-lg text-gray-500 focus:outline-none resize-none" name="message" id="message" placeholder="Your message" defaultValue={message}
                        onChange={(e) => setMessage(e.target.value)} ></textarea>
                    </div>
                </div>

                <input className="w-full mt-8 p-2 text-white bg-black hover:bg-[#564147] hover:cursor-pointer font-semibold rounded rounded-lg" type="submit" value="Register"/>
            </form>
        </div>

    )
}