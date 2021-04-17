import React from 'react';

import DATA from '../Components/Data'

function AddBook(fullname) {

    return (
        DATA[0].data.push({
            id: DATA.length + 1,
            fullname: fullname,
            avatar: '',
            pages: []
        }),
        console.log(DATA[0].data)
        
    )
}

export default AddBook