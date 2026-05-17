function Cuadro({ url, texto }: { url: string; texto: string }) {
  return (
    <div>
      <h2>Cuadro</h2>
      <img className="cuadro-img" src={url} alt={texto} />
   
    <p>esto es una prueba de datos</p>
     </div>
  )
}

export default Cuadro