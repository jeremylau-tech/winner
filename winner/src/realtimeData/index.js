import StartFirebase from "../utils/index.js";
import React from 'react';
import {ref, onValue} from 'firebase/database';
import {Table} from 'react-bootstrap';

const db = StartFirebase();

export class RealtimeData extends React.Component{
    constructor(){
        super();
        this.state = {
            tableData: []
        }
    }

    componentDidMount(){
        const dbRef = ref(db, 'Customer');
        onValue(dbRef, (snapshot)=> {
            let records = [];
            snapshot.forEach(childSnapshot=>{
                let keyName = childSnapshot.key;
                let data = childSnapshot.val();
                records.push({"key": keyName, "data": data})
            });
            this.setState({tableData: records});
        });
    }
    
    render(){
        return(
            <Table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>UserName</th>
                        <th>Fullname</th>
                        <th>Phone Number</th>
                        <th>Date of Birth</th>
                    </tr>

                    <tbody>
                        {this.state.tableData.map((row,index)=> {
                            return(
                            <tr>
                                <tr>{index}</tr>
                                <tr>{row.key}</tr>
                                <tr>{row.data.Fullname}</tr>
                                <tr>{row.data.Phonenumber}</tr>
                                <tr>{row.data.dateofbirth}</tr>
                            </tr>
                            )
                        })}

                    </tbody>
                </thead>
            </Table>
        )
    }
}