import { useEffect, useState } from "react";
import User from "../componets/User";
import axios, { Axios } from 'axios'

function Users() {
    const [users, setUsers] = useState([
        // {
        //     'name': 'siva',
        //     'username': 'sivasaikrishna',
        //     address: {
        //         streetno: '1-119',
        //         village: 'koppukonda',
        //         district: 'guntur'
        //     },
        //     phoneno: '123844904',
        //     zipcode: '522647'
        // },
        // {
        //     name: 'paarvathi',
        //     username: 'sivasaikrishna',
        //     address: {
        //         streetno: '1-119',
        //         village: 'koppukonda',
        //         district: 'guntur'
        //     },
        //     phoneno: '123844904',
        //     zipcode: '522647'
        // },
        // {
        //     name: 'rudrani',
        //     username: 'sivasaikrishna',
        //     address: {
        //         streetno: '1-119',
        //         village: 'koppukonda',
        //         district: 'guntur'
        //     },
        //     phoneno: '123844904',
        //     zipcode: '522647'

        // },
        // {
        //     name: 'sivapriya',
        //     username: 'sivasaikrishna',
        //     address: {
        //         streetno: '1-119',
        //         village: 'koppukonda',
        //         district: 'guntur'
        //     },
        //     phoneno: '123844904',
        //     zipcode: '522647'
        // },
        // {
        //     name: 'sivaaaa',
        //     username: 'sivasaikrishna',
        //     address: {
        //         streetno: '1-119',
        //         village: 'koppukonda',
        //         district: 'guntur'
        //     },
        //     phoneno: '123844904',
        //     zipcode: '522647'
        // },
        // {
        //     name: 'sivaani',
        //     username: 'sivasaikrishna',
        //     address: {
        //         streetno: '1-119',
        //         village: 'koppukonda',
        //         district: 'guntur'
        //     },
        //     phoneno: '123844904',
        //     zipcode: '522647'

        // },
        // {
        //     name: 'umaa',
        //     username: 'sivasaikrishna',
        //     address: {
        //         streetno: '1-119',
        //         village: 'koppukonda',
        //         district: 'guntur'
        //     },
        //     phoneno: '123844904',
        //     zipcode: '522647'

        // },
        // {
        //     name: 'srimatha',
        //     username: 'sivasaikrishna',
        //     address: {
        //         streetno: '1-119',
        //         village: 'koppukonda',
        //         district: 'guntur'
        //     },
        //     phoneno: '123844904',
        //     zipcode: '522647'

        // },

    ]);
    useEffect(() =>{
        axios.get('https://jsonplaceholder.typicode.com/users').then((response)=>{
            console.log(response.data);
            setUsers(response.data)

        }).catch(error =>{

        });

    },[]);
    const deleteuser = (index) => {
        const _users = users.filter((user,i) => i !== index);
        setUsers(_users);   
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-sm">
                    <h3 className="text-center primary">Users</h3>
                    <div className="row">
                        {
                            users.map((user,index) => (
                                <div className="col-sm-4">
                                    <User user={user} index={index} deleteuser={deleteuser}/>
                                </div>
                            ))
                        }
                    </div>

                </div>

            </div>
        </div>

    )
}
export default Users;