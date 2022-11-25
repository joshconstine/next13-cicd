// 'use client'
// import React, { ReactElement } from "react"
// const DeleteButton = ({ id }: { id: number }) => {
//     const handleDelete = async (e: React.SyntheticEvent) => {
//         e.preventDefault()
//         const deleteComment = async () => {

//             const response = await fetch(`/api/comment/${id}`, {
//                 method: "DELETE",

//             });
//             return response.json();
//         };
//         deleteComment().then((data) => {
//             alert(data.message);
//         });
//     }
//     return (<button>
//         delete
//     </button>)
// }

// export default DeleteButton