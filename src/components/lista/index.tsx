const Listado = ({data}: { data: any }) => {
    if (!data) return <></>
    return <div className="container-eco__seccion-notas grid grid-cols-1 md:grid-cols-4 gap-4 mb-2.5">
        {data.map((item: any, key: number) => {
            const {image, section, title, autor} = item;
            return <div key={`lista-item-notas-${key}`} className="container-eco__seccion-notas_item">
                <div className="container-eco__seccion-notas_item--image rounded-md"><img src={image} alt=""/></div>
                <div className="font-bold capitalize">{section}</div>
                <div className="font-bold">{title}</div>
                <div className="">{autor}</div>
            </div>
        })}
    </div>
}

export default Listado;
