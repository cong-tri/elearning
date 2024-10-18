import React, { useContext } from 'react'

import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';

import { MainContext } from '../../../context/main-provider';
import moment from 'moment';

const AdminProfile: React.FC = () => {
    const { userProfile } = useContext(MainContext)
    if (!userProfile) return <div>No user profile have been found</div>

    return (
        <div className="profile-container">
            <div className="card">
                <div className="card-header">
                    <h2 className="fw-bold">My Profile</h2>
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-4 text-center py-4">
                            <Avatar shape='circle' size={120} icon={<UserOutlined />} />
                            <div>
                                <h4>Admin {userProfile.name.firstname} {userProfile.name.lastname}</h4>
                            </div>
                        </div>
                        <div className="col py-4">
                            <div className='hstack'>
                                <div>
                                    <h4 className='fw-bold'>
                                        Registration Date
                                    </h4>
                                </div>
                                <div className='ms-auto'>
                                    <h4>{moment(userProfile.created_at).format("MMM Do YY")}</h4>
                                </div>
                            </div>
                            <div className='hstack my-4'>
                                <div>
                                    <h4 className='fw-bold'>
                                        Firstname
                                    </h4>
                                </div>
                                <div className='ms-auto'>
                                    <h4>{userProfile.name.firstname}</h4>
                                </div>
                            </div>
                            <div className='hstack my-4'>
                                <div>
                                    <h4 className='fw-bold'>
                                        Lastname
                                    </h4>
                                </div>
                                <div className='ms-auto'>
                                    <h4>{userProfile.name.lastname}</h4>
                                </div>
                            </div>
                            <div className='hstack my-4'>
                                <div>
                                    <h4 className='fw-bold'>
                                        Username
                                    </h4>
                                </div>
                                <div className='ms-auto'>
                                    <h4>{userProfile.username}</h4>
                                </div>
                            </div>
                            <div className='hstack my-4'>
                                <div>
                                    <h4 className='fw-bold'>
                                        Email
                                    </h4>
                                </div>
                                <div className='ms-auto'>
                                    <h4>{userProfile.email}</h4>
                                </div>
                            </div>
                            <div className='hstack my-4'>
                                <div>
                                    <h4 className='fw-bold'>
                                        Phone number
                                    </h4>
                                </div>
                                <div className='ms-auto'>
                                    <h4>{userProfile.phone}</h4>
                                </div>
                            </div>
                            <div className='hstack my-4'>
                                <div>
                                    <h4 className='fw-bold'>
                                        Address
                                    </h4>
                                </div>
                                <div className='ms-auto'>
                                    <h4>{userProfile.address}</h4>
                                </div>
                            </div>
                            <div className='hstack my-4'>
                                <div>
                                    <h4 className='fw-bold'>
                                        Description
                                    </h4>
                                </div>
                                <div className='ms-auto'>
                                    <h4>{userProfile.description}</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminProfile;
