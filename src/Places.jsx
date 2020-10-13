import React from 'react';
import Card from './Card';
import Data from './Data';

const Places = () =>{
    return(
        <>
          <h1 className="text-center text-warning py-3 bg-dark">Top 6 Beautiful Places</h1>
          <div className="row container-fluid">
            {Data.map((val) => {
              return(
                <Card
                  img={val.img}
                  title={val.title}
                  para={val.para}
                  link={val.link}
                />
              )
            })}
          </div>
          <div>hello</div>
        </>    
      )
}

export default Places;