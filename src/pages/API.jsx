import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';

import Modal from 'react-bootstrap/Modal';
import ModalBody from "react-bootstrap/ModalBody";
import ModalFooter from "react-bootstrap/ModalFooter";

import "./API.css";

import Table from 'react-bootstrap/Table';

export const API = () => {
    const [posts, setPosts] = useState([])

    useEffect(()=> {
        fetchPosts()
    },[])

    const fetchPosts = async () => {
        await axios.get('https://jsonplaceholder.typicode.com/posts').then(({data})=>{
            setPosts(data)
        })
    }

    return (
        <div className="api-table">
        <h5> API PAGE </h5>
        <div className="api-container">
            <div className="row">
                <div className="col-12">
                <Table striped bordered hover>
                    <thead>
                         <tr>
                         <th>ID</th>
                         <th>Title</th>
                         <th>Body</th>
                         <th>Action</th>
                         </tr>
                    </thead>
                    <tbody>
                    {
                        posts.length > 0 && (
                            posts.map((row, key)=>(
                                <tr key={key}>
                                    <td>{row.id}</td>
                                    <td>{row.title}</td>
                                    <td>{row.body}</td>
                                    <td>
                                    <Button className="api-button" href="api"> Button </Button>
                                    </td>
                                </tr>
                            ))
                        )
                    }
                    </tbody>
                </Table>
                </div>
            </div>
        </div>
    </div>
    )
}


export default API;
