import React from 'react';

const ListMovies = (props) => {
    const renderlist = ({datalist}) =>{
        if(datalist){
            return datalist.map((item) => {
                return(
                    <div key={item.id}>{item.name}</div>
                )
            })
        }
    }
    return(
        <div>
            {renderlist(props)}
        </div>
    )
}


export default ListMovies