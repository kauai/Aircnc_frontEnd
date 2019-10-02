import React,{ useState, useMemo } from 'react'
import cam from '../../assets/camera.svg'
import api from '../../services/api'
import './style.css'

export default function New({ history }) {

    const [ company, setCompany ] = useState('')
    const [ techs, setTechs ] = useState('')
    const [ price, setPrice ] = useState('')
    const [ thumbnail, setThumbnail ] = useState('')
    const preview = useMemo(() => {
       return thumbnail ? URL.createObjectURL(thumbnail) : null
    },[thumbnail])
    
   async function handleSubmit(e) {
      e.preventDefault()
      const data = new FormData()
      const user_id = localStorage.getItem('user')
      data.append('thumbnail',thumbnail)
      data.append('company',company)
      data.append('techs',techs)
      data.append('price',price)

      await api.post('/spots',data,{
          headers:{ user_id }
      })
      history.push('/dashboard')
    }

    return (
        <form onSubmit={handleSubmit} action="">
            <label className={thumbnail ? 'has-thumbnail' : ''} style={{ backgroundImage:`url(${preview})`,backgroundPosition:'center'}} id="thumbnail">
                <input 
                type="file" 
                onChange={e => setThumbnail(e.target.files[0])}/>
                <img src={cam}/>
            </label>
            <label htmlFor="company">Empresa</label>
            <input 
                onChange={e => setCompany(e.target.value)}
                value={ company }
                id="company" 
                placeholder="Sua empresa incrivel" 
                type="text"/>

            <label htmlFor="techs">Tecnologias (separadas por virgula)</label>
            <input 
                onChange={e => setTechs(e.target.value)}
                value={ techs }
                id="company" 
                placeholder="Quais tecnologias usam" 
                type="text"/>

            <label htmlFor="price">Valor da diaria (Em branco para gratuito)</label>
            <input 
                onChange={e => setPrice(e.target.value)}
                value={ price }
                id="company" 
                placeholder="Quais o preço" 
                type="text"/>

            <button className="btn">Cadastrar</button>
        </form>
    )
}