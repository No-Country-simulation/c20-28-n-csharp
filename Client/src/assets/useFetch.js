import { useState, useEffect } from "react";

export function useFetchWithToken(url, token) {
    const [data, setData] = useState();
    const headers = { 'Authorization': 'Bearer ' + token };

    useEffect(() => {
        fetch(url, { headers })
            .then(response => {
                {
                    if (!response.ok) {
                        throw new Error("Error en la solicitud, status: " + response.status);
                    } return response.json();
                }
            })
            //  .then(datos => console.log("datos", datos))
            .then(datas => setData(datas))
    }, []);

    return { data };

}

export function useFetchPostWithToken(url, token, bodyPeticion) {
    const [data, setData] = useState();
    const headers = { 'Authorization': 'Bearer ' + token, 'Content-Type': "application/json" };
    useEffect(() => {fetch(url, {
        method: "POST",
        headers,
        body: JSON.stringify(bodyPeticion),
        })
        .then(response=>response.json())
        .then(data =>setData({data}))
        ;
    }, []);

    // useEffect(() => {
    //     fetch(url, { headers })
    //         .then(response => {
    //             {
    //                 if (!response.ok) {
    //                     throw new Error("Error en la solicitud, status: " + response.status);
    //                 } return response.json();
    //             }
    //         })
    //         //  .then(datos => console.log("datos", datos))
    //         .then(datas => setData(datas))
    // }, []);

    return { data };

}