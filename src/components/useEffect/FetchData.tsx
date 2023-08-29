// The useEffect Hook adds the ability to perform side effects from a function component.
// Some examples of side effects are: fetching data, directly updating the DOM, and timers.
// useEffect accepts two arguments. The second argument is optional.
// useEffect(<function>, <dependency>)

import { useEffect, useState } from "react";

export type dataProps={
    id:string
    title : string
    image:string
    description : string
}

const FetchData = () => {
  const url = "https://fakestoreapi.com/products";
  const [data, setData] = useState([]);

  const fetchInfo = () => {
    return fetch(url)
      .then((res) => res.json())
      .then((d) => setData(d));
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  return (
    <div className="App" style={{backgroundColor:"#d0f3f5"}}>
      <h1 style={{ color: "black" }}>This is useEffect Hook example - FETCH API</h1>
      <div className="container" style={{display:"flex" ,flexWrap:"wrap",margin:"30px", backgroundColor:"#dff4f5"}}>
        {data.map((dataObj : dataProps) => {
          return (
            <div className="card" style={{ width: "18rem",margin:"30px"}} key={dataObj.id}>
              <img src={dataObj.image} className="card-img-top" alt={dataObj.title} />
              <div className="card-body">
                <h5 className="card-title">{dataObj.title}</h5>
                <p className="card-text">
                  {dataObj.description}
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FetchData;
