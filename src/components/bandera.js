const Bandera=(props)=>{
    const {selects,score, setScore} = props
    if(selects.cor==undefined) return <div>loading...</div>
    const check=(n)=>{
        if(selects.num==n){
            setScore({...score,bien:score.bien+1})
        }
        else{
            setScore({...score,bad:score.bad+1})
        }
    }

    return (
        <div className='container'>
            <div className="card">
                <div className="card-image">
                    <figure className="image is-128x128">
                        <img crossOrigin='anonymous' src={'https://countryflagsapi.com/png/'+selects.choices[selects.cor-1].Numeric} />
                    </figure>
                </div>
                <div className="card-content">

                    <div className="content">
                        De que pais es esta bandera?
                    </div>
                    <footer className="card-footer">
                        {
                            selects.choices.map(c=>{
                                return <a onClick={()=>check(c.Numeric)} key={c.Numeric} className="card-footer-item">{c.Country}</a>

                            })
                        }
                    </footer>
                </div>
            </div>
            <span className="tag is-success">Correctas: {score.bien}</span>
            <span className="tag is-danger">Incorrectas: {score.bad}</span>
        </div>
    )
}

export default Bandera
