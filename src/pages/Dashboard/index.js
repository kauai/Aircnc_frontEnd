import React,{ useEffect, useState } from 'react'
import api from '../../services/api'
import './styles.css'
import { Link } from 'react-router-dom'

export default function Dashboard() {
    const [ spots, setSpots ] = useState([])

    useEffect(() => {
       (async () => {
         const user_id = localStorage.getItem('user')
         const response = await api.get('/dashboard',{ 
             headers:{ user_id }
         })
         setSpots(response.data)
        })()
    },[])

    return <>
       <ul className="spot-list">
            {
              spots.map(item => {
                  return (
                    <li key={item._id}>
                        <header style={{backgroundImage:`url(${item.thumbnail_url})`}}/>
                        <b>{item.company}</b>
                        <span> {item.price ? `R$${item.price}/dia`: 'Gratuito'}</span>
                    </li>
                )
              })
            }
       </ul>
       <Link to="/new"><button className="btn">Cadastrar novo spot</button></Link>
    </>
}