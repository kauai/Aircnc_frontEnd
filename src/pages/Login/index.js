import React,{ useState } from 'react'
import api from '../../services/api'

export default function Login({ history }) {
    
    const [ email, setForm ] = useState('')

    async function handleSubmit(e) {
        e.preventDefault()
        try {
        
        const { _id } = (await api.post('/sessions',{ email })).data
        localStorage.setItem('user',_id)
        history.push('/dashboard')

        } catch (error) {
            console.log(error) 
        }
    }

    return (
        <>
            <p>Ofereça <b>spots</b> para programadores e encontre <b>talentos</b> para sua empresa</p>
            <form onSubmit={handleSubmit} action="#">
                <label htmlFor="email">Email*</label>
                <input value={email} onChange={e => setForm(e.target.value)} type="email" id="email" placeholder="Seu melhor email"/>
                <button className="btn" type="submit">Entrar</button>
            </form>
        </>
   )
}