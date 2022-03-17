export default function Card({image,titre,message}){
    return (
        <div className="card mb-5 mx-auto" style={{maxWidth: "400px"}}>
            <img src={image} className="card-img-top" alt="image"/>
            <div className="card-body">
                <h5 className="card-title">{titre}</h5>
                <p className="card-text">{message}</p>
            </div>
        </div>
    )
}