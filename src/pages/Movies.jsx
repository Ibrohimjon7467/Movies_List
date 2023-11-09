function Movies({ data }) {
  return (
    <div className="w-full">
      <h1 className="text-3xl">Recommended for you</h1>
      {data.map((info) => {
        const {id, img, title} = info
        return (
          <div className="flex" key={id}>
            <img src={img} alt={title}/>
            <div>
              <h1>{title}</h1>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Movies