import Search from "../search/Search";
import UserList from "./user-list/UserList";
import Pagination from "./pagination/Pagination";
import { useEffect, useState } from "react";

const baseUrl = 'http://localhost:3030/jsonstore'


export default function UserSection() {

    const [users, setUsers] = useState([])

    useEffect(() => {
        (async function getUsers() {
            try {
                const response = await fetch(`${baseUrl}/users`)
                const result = await response.json()
                const usersResult = Object.values(result)
                setUsers(usersResult)
                console.log(usersResult)
            } catch (error) {
                alert(error.message)
            }

        })()
    }, [])

    return (
        <section className="card users-container">

            <Search />
            <UserList users={users}/>
            <button className="btn-add btn">Add new user</button>
            <Pagination />

        </section>
    );
}