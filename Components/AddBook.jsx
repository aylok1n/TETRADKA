import React from 'react';

function AddBook(DATA, fullname) {
    DATA[0].data.push({
        id: DATA.length + 1,
        fullname: fullname,
        avatar: '',
        pages: []
    }),
    console.log(DATA[0].data)
    return (
       DATA
    )
}

export default AddBook