import {useEffect, useState} from "react";
import axiosClient from "../axios-client.js";
import {Link} from "react-router-dom";
import {useStateContext} from "../context/ContextProvider.jsx";

export default function Series() {
    const [series, setSeries] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchSeries();
    }, []);

    const fetchSeries = () => {
        setLoading(true);
        axiosClient.get('/series')
            .then(({ data }) => {
                setLoading(false);
                setSeries(data.data);
            })
            .catch(error => {
                console.error('Error fetching series:', error);
                setLoading(false);
            });
    };

    return (
        <div>
            <div style={{display: 'flex', justifyContent: "space-between", alignItems: "center"}}>
                <h1>Series</h1>
                <Link className="btn-add" to="/series/new">Add new</Link>
            </div>
            <div className="card animated fadeInDown">
                <table>
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Start Year</th>
                        <th>End Year</th>
                        <th>Genre</th>
                        <th>Path</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    {loading &&
                        <tbody>
                        <tr>
                            <td colSpan="7" class="text-center">
                                Loading...
                            </td>
                        </tr>
                        </tbody>
                    }
                    {!loading &&
                        <tbody>
                        {series.map(s => (
                            <tr key={s.id}>
                                <td>{s.id}</td>
                                <td>{s.name}</td>
                                <td>{s.start_year}</td>
                                <td>{s.end_year}</td>
                                <td>{s.genre}</td>
                                <td>{s.path}</td>
                                <td>
                                    <Link className="btn-edit" to={'/series/' + s.id}>Edit</Link>
                                    &nbsp;
                                    <button className="btn-delete" onClick={ev => onDeleteClick(s)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    }
                </table>
            </div>
        </div>
    )
}
