import React, { useContext } from 'react'

import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';

import moment from 'moment';
import Breadcrumb from '../../components/user/breadcrumb';
import { key } from '../../constants/constants';
import { getCookie } from 'typescript-cookie';

const Profile: React.FC = () => {

    const token = getCookie(key.info) ?? "";
    const user = token !== "" ? JSON.parse(token) : null;

    // if (!userProfile) return <div>No user profile have been found</div>

    return (
        <>
            <Breadcrumb data={{ label: "Profile", path: "Profile" }} />
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
                                    <h4>Admin {user.name.firstname} {user.name.lastname}</h4>
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
                                        <h4>{moment(user.created_at).format("MMM Do YY")}</h4>
                                    </div>
                                </div>
                                <div className='hstack my-4'>
                                    <div>
                                        <h4 className='fw-bold'>
                                            Firstname
                                        </h4>
                                    </div>
                                    <div className='ms-auto'>
                                        <h4>{user.name.firstname}</h4>
                                    </div>
                                </div>
                                <div className='hstack my-4'>
                                    <div>
                                        <h4 className='fw-bold'>
                                            Lastname
                                        </h4>
                                    </div>
                                    <div className='ms-auto'>
                                        <h4>{user.name.lastname}</h4>
                                    </div>
                                </div>
                                <div className='hstack my-4'>
                                    <div>
                                        <h4 className='fw-bold'>
                                            Username
                                        </h4>
                                    </div>
                                    <div className='ms-auto'>
                                        <h4>{user.username}</h4>
                                    </div>
                                </div>
                                <div className='hstack my-4'>
                                    <div>
                                        <h4 className='fw-bold'>
                                            Email
                                        </h4>
                                    </div>
                                    <div className='ms-auto'>
                                        <h4>{user.email}</h4>
                                    </div>
                                </div>
                                <div className='hstack my-4'>
                                    <div>
                                        <h4 className='fw-bold'>
                                            Phone number
                                        </h4>
                                    </div>
                                    <div className='ms-auto'>
                                        <h4>{user.phone}</h4>
                                    </div>
                                </div>
                                <div className='hstack my-4'>
                                    <div>
                                        <h4 className='fw-bold'>
                                            Address
                                        </h4>
                                    </div>
                                    <div className='ms-auto'>
                                        <h4>{user.address}</h4>
                                    </div>
                                </div>
                                <div className='hstack my-4'>
                                    <div>
                                        <h4 className='fw-bold'>
                                            Description
                                        </h4>
                                    </div>
                                    <div className='ms-auto'>
                                        <h4>{user.description}</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Profile;
