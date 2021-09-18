import React from "react";
import BootstrapTable from 'react-bootstrap-table-next';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.css';
import './private.css';

const Private = () => {



    const products = [
        { id: 1, name: 'George', animal: 'Monkey'},
        { id: 2, name: 'Jeffrey', animal: 'Giraffe' },
        { id: 3, name: 'Alice', animal: 'Giraffe' },
        { id: 4, name: 'Alice', animal: 'Tiger' }
    ];

    const columns = [
        { dataField: 'id', text: 'Id',  sort:true },
        { dataField: 'name', text: 'Name' },
        { dataField: 'animal', text: 'Animal' }
    ];

    const defaultSorted = [{
        dataField: 'name',
        order: 'desc'
    }];

    const selectRow = {
        mode:'checkbox',
        text: 'Delete'
    }

    return(
        <BootstrapTable bootstrap4 keyField='id' data={products} columns={columns} defaultSorted={defaultSorted} selectRow={selectRow}/>
    )
}

export default Private;