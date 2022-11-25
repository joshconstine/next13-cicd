'use client'

import { Cormorant_SC } from "@next/font/google";
import React, { ChangeEvent, useState } from "react";
// import aws from "../../../pages/api/creatingAws";

const FileUplod = () => {
    const [messege, setMessege] = useState<string>('')
    const [file, setFile] = useState<any>()

    const storeFile = (e: ChangeEvent<HTMLInputElement>): void => {
        const input = e.target as HTMLInputElement;
        if (!input.files?.length) {
            return;
        }

        const uploadedFile = input.files[0];
        setFile(uploadedFile)
    }

    const uploadPhoto = async (e: React.SyntheticEvent) => {
        const filename = encodeURIComponent(file.name)
        const fileType = encodeURIComponent(file.type)

        try {
            const res = await fetch(
                `/api/s3/upload-url?file=${filename}&fileType=${fileType}`, { mode: "no-cors" }
            )
            const { url, fields } = await res.json()
            const formData = new FormData()
            Object.entries({ ...fields, file }).forEach(([key, value]) => {
                formData.append(key, value as string)
            })
            const upload = await fetch(url, {
                method: 'POST',
                body: formData,
            })

            if (upload.ok) {
                console.log('Uploaded successfully!')
            } else {
                console.error('Upload failed.')
            }
        } catch (e) {
            console.log(e)
        }
    }
    return (<>
        <p>Upload file:</p>
        <input type='file' onChange={(e) => storeFile(e)} />
        <input type='button' onClick={uploadPhoto} defaultValue='send' />
    </>);
}

export default FileUplod;