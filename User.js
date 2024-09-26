import { useState } from "react";

function User(props) {
    const { user,index,deleteuser} = props;
    const [isshowmodel,setIsshowmodel]=useState(false);
    const deleteUser = () =>{
        setIsshowmodel(true);
    }
    const confirmdelete =() =>{
        deleteuser(index);
        setIsshowmodel(false); 

    }
    
    return (
        <div className="row">
            <div className="col-sm">
                <div style={{ boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19)', padding: '20px',margin:'20px' }}>
                <h5 className="text-end" onClick={deleteUser}><button className="btn btn-danger">delete</button></h5>    
                <h5>name:<span>{user.name}</span></h5>
                <h5>username:<span>{user.username}</span></h5>
                <h5> address:<span>{user.address.street}</span></h5>
                <h5>zipcode:<span>{user.email}</span></h5>
                <h5>phoneno:<span>{user.phone}</span></h5>
                </div>
            </div>
            {
                isshowmodel &&
                <div class="modal" style={{ display: 'block', backgroundColor: 'rgb(0,0,0,0.5' }} tabindex="-1">
                    <div class="modal-dialog modal-dialog-centered" >
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title">deleteproduct</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <p>Are you sure want to delte product</p>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                                <button type="button" class="btn btn-primary" onClick={() => confirmdelete()}>delete</button>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
}
export default User;