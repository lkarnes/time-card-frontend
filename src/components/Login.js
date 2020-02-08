import React, {useState, useEffect} from 'react';
import axios from 'axios';

export default function EmployeeLogin(){
    const [companies, setCompanies] = useState([])
    useEffect(()=>{
        axios.get('/registration/companies').then(companies => {
            setCompanies(companies);
        })
    },[])
    const [userInfo, setUserInfo] = useState({
        name: '',
        job_title:'', 
        password: '',
        email: '',
        phone_number: null,
        hourly_rate: null,
        company_name: null,
    })

    const handleChange = e => {
        setUserInfo({
            ...userInfo,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = () => {

    }
    return (
        <div className='form-box'>
            <h3>Employee Login</h3>
            <form className='form-body' onSubmit={handleSubmit}>
                <p>Name</p>
                <input type='text' name='name' value={userInfo.name} onChange={handleChange}/>
                <p>Job Title</p>
                <input type='text' name='job_title' value={userInfo.job_title} onChange={handleChange}/>
                <p>Password</p>
                <input type='password' name='password' value={userInfo.password} onChange={handleChange}/>
                <p>Email</p>
                <input type='email' name='email' value={userInfo.email} onChange={handleChange}/>
                <p>Phone Number</p>
                <input type='tel' name='phone_number' value={userInfo.phone_number} onChange={handleChange}/>
                <p>Hourly Wage</p>
                <input type='number' name='hourly_rate' value={userInfo.hourly_rate} onChange={handleChange}/>
                <p>Company</p>
                <input type='search' name='company_name' value={userInfo.company_name} onChange={handleChange}/>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}