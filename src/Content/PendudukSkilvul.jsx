import React, { useState, useEffect } from 'react';
import axios from 'axios';

function PendudukSkilvul() {
    const [dataPenduduk, setDataPenduduk] = useState([]);
    const [filterAge, setFilterAge] = useState(false);
    const [filterDomisili, setFilterDomisili] = useState(false);

    useEffect(() => {
        axios.get('https://65261c4e67cfb1e59ce7e741.mockapi.io/penduduk_skilvul')
        .then(response => {
            setDataPenduduk(response.data);
        })
        .catch(error => {
            console.log(error);
        });
    }, []);

    const filteredData = dataPenduduk.filter(penduduk => 
        (!filterAge || penduduk.age > 20) && (!filterDomisili || penduduk.domisili === "Jakarta")
    );

    return (
        <div className="container">
            <h2>Daftar Penduduk Skilvul</h2>

            <div>
    <label>
        <input 
            type="checkbox"
            checked={filterAge}
            onChange={() => setFilterAge(!filterAge)}
        /> Usia di atas 20
    </label>
    <label>
        <input 
            type="checkbox"
            checked={filterDomisili}
            onChange={() => setFilterDomisili(!filterDomisili)}
        /> Domisili Jakarta
    </label>
</div>


            <ul>
                {filteredData.map(penduduk => (
                    <li key={penduduk.id}>
                        Nama: {penduduk.name}, Usia: {penduduk.age}, Domisili: {penduduk.domisili}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default PendudukSkilvul;
