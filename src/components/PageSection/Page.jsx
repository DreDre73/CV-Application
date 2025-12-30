import '../../styles/Page.css'
import { useState } from 'react'

function Page({personalInfo}){

    return (
        <>
            <h1>{personalInfo.name}</h1>
            <h3>{personalInfo.email}</h3>
            <h3>{personalInfo.phoneNumber}</h3>
            <h3>{personalInfo.linkedin}</h3>
            <h3>{personalInfo.github}</h3>
        </>
    )
}

export default Page