'use client'
import React, { ReactElement } from "react"
const DeleteButton = ({ id }: { id: number }) => {
    const handleDelete = async (e: React.SyntheticEvent) => {
        e.preventDefault()
        const deleteComment = async () => {

            const data = {
                id,
            }
            const response = await fetch(`/api/comment`, {
                method: "DELETE",
                body: JSON.stringify(data)

            });
            return response.json();
        };
        deleteComment().then((data) => {
            alert(data.message);
        });
    }
    return (<button onClick={handleDelete}>
        delete
    </button>)
}

export default DeleteButton