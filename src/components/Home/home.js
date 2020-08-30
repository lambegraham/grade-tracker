import React from "react";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';


export default function Home() {
    return HomeContent();
}

function submitButton() {

}


export const HomeContent = () => {

    const [fname, setFName] = React.useState(HomeContent.fname);
    const [lname, setLName] = React.useState(HomeContent.lname);
    const [uname, setUName] = React.useState(HomeContent.uname);


    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Username</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <input
                                value={fname || ""}
                                onChange={e => {
                                    setFName(e.target.value);
                                }}>
                            </input>
                        </td>
                        <td>
                            <input
                                value={lname || ""}
                                onChange={e => {
                                    setLName(e.target.value);
                                }}>
                            </input>
                        </td>

                        <td>
                            <input
                                value={uname || ""}
                                onChange={e => {
                                    setUName(e.target.value);
                                }}>
                            </input>
                        </td>
                    </tr>
                </tbody>
            </Table>
            <Button onClick={submitButton}>Submit</Button>
        </div>
    )
}


