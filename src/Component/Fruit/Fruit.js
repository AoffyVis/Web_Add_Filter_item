function Fruit({name, URL, index}) {
  
    return (
    <>
        <div className='friut_detail' key={index}>
            <div className="friut_name">
                <span>{name}</span>
            </div>
            <div className="fruit_image">
                <img src={URL} alt="" />
            </div>
        </div>
    </>
  );
}

export default Fruit;
