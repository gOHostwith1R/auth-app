import React from "react";
import BootstrapTable from 'react-bootstrap-table-next';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.css';
import './private.css';

const Private = ({users}) => {

    const usersInfo = [];

    users.map((elem, index) => {
        return usersInfo.push({
            uid: elem._delegate.uid, name: elem._delegate.displayName, socialNetwork: elem._delegate.providerData[0].providerId,
            createdAt: elem._delegate.metadata.creationTime, lastLoginAt: elem._delegate.metadata.lastSignInTime, status: 'Active'
        })
    })

    const columns = [
        { dataField: 'uid', text: 'Uid',  sort:true },
        { dataField: 'name', text: 'Name',  sort:true },
        { dataField: 'socialNetwork', text: 'Social Network',  sort:true },
        { dataField: 'createdAt', text: 'Created',  sort:true },
        { dataField: 'lastLoginAt', text: 'Last Login',  sort:true },
        { dataField: 'status', text: 'Status' },
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
        <BootstrapTable bootstrap4 keyField='uid' data={usersInfo} columns={columns} defaultSorted={defaultSorted} selectRow={selectRow}/>
    )
}

export default Private;