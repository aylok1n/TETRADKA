import React from 'react';

import DATA from './Data'

function AddBook(fullname) {
    DATA[0].data.push({
        id: DATA.length + 1,
        fullname: fullname,
        avatar: '',
        pages: []
    }),
    console.log(DATA[0].data)
    return (
        console.log(DATA)
    )
}

export default AddBook