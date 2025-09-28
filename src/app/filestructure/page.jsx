'use client';
import { useState } from "react";
import fileData  from "./data.json";

function FileStructure() {
    const [explorer, setExplorer] = useState(fileData);

    console.log(explorer);


    return <>
        <h1>File Structure</h1>
    </>
}

export default FileStructure;