import React from 'react'
import { Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import {  useSelector } from 'react-redux'
const TicketTable = () => {

    const {searchTicketList, isLoading,error} = useSelector((state)=>state.tickets)

    if (isLoading) return <h3>loading....</h3>
    if(error) return <h3>{error}</h3>
    
        return (
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Subject</th>
                        <th>Status</th>
                        <th>Opened Date</th>
                    </tr>
                </thead>
                <tbody>
                    {searchTicketList.length ?
                        searchTicketList.map((row) => (
                            <tr key={row._id}>
                                <td>{row._id}</td>
                                <td>
                                    <Link to={`/Ticket/${row._id}`} style ={{"textDecoration":"none"}}>
                                        {row.subject}
                                    </Link>
                                </td>
                                <td>{row.status}</td>
                                <td>{row.openAt && new Date(row.openAt).toLocaleString()}</td>
                            </tr>
                        )) : (
                            <tr>
                                <td colSpan="4" className='text-center'>No Tickets To Show</td>
                            </tr>
                        )
                    }

                </tbody>
            </Table>
        )
}

export default TicketTable

