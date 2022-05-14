import React from 'react'

const Table = ({query}) => {
    return (
        <table class="table table-hover table-dark">
            <thead>
                <tr>
                    <th scope="col">#ID</th>
                    <th scope="col">Title</th>
                    <th scope="col">Body</th>
                </tr>
            </thead>
            <tbody>
                {query.map((item) => (
                    <tr key={item.id}>
                        <th scope="row">{item.id}</th>
                        <th>{item.title}</th>
                        <th>{item.body}</th>
                    </tr>
                ))}

            </tbody>
        </table>
    )
}

export default Table