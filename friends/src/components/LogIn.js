import React, {useState} from 'react'

export default function LogIn() {

    const [info, setInfo]= useState({
        username: '',
        password: '',
    });

    const handleChanges= evt => {
        console.log(info);
        setInfo({
            ...info,
            [evt.target.name]: evt.target.value
        })
    }

    return (
        <div>
            <form>
                <input
                    placeholder='username'
                    name='username' 
                    value={info.username}
                    onChange={handleChanges}
                />
                <input 
                    placeholder='password'
                    name='username'
                    value={info.password}
                    onChange={handleChanges}
                />
                <button type='submit'>log in</button>
            </form>
        </div>
    )
}
