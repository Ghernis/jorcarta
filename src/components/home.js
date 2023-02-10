import { useState,useEffect } from 'react'
import generateRandomInteger from '../utils/utils'
import Bandera from './bandera'

const Home=()=>{
    const [data,setData]=useState([])
    const [selects,setSelects]=useState({})
    const [score,setScore]=useState({bien:0,bad:0})
    useEffect(()=>{
        fetch('data.json',{
            headers:{
                'Content-Type':'application/json',
                'Accept': 'application/json'
            }
        }
        )
            .then((r)=>r.json())
            .then((r)=>{
                const pick=generateRandomInteger(r.length)-1
                const inc=r.filter(d=>{
                    return r[pick].Numeric!=d.numeric
                })
                const cor=generateRandomInteger(3)
                let aux=[]
                switch(cor){
                    case 1:
                        aux=[
                            r[pick],
                            inc[generateRandomInteger(inc.length)],
                            inc[generateRandomInteger(inc.length)],
                        ]
                        break;
                    case 2:
                        aux=[
                            inc[generateRandomInteger(inc.length)],
                            r[pick],
                            inc[generateRandomInteger(inc.length)],
                        ]
                        break;
                    case 3:
                        aux=[
                            inc[generateRandomInteger(inc.length)],
                            inc[generateRandomInteger(inc.length)],
                            r[pick],
                        ]
                        break;
                }
                setSelects({
                    cor:cor,
                    num:r[pick].Numeric,
                    choices:aux
                })
                setData(r)
            })
    },[score])


    return (
        <Bandera selects={selects} score={score} setScore={setScore}/>
    )
}

export default Home
