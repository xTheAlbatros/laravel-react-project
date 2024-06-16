import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axiosClient from "../axios-client.js";
import { useStateContext } from "../context/ContextProvider.jsx";

export default function SeriesForm() {
    const navigate = useNavigate();
    let { id } = useParams();
    const [series, setSeries] = useState({
        id: null,
        name: '',
        start_year: '',
        end_year: '',
        genre: '',
        path: ''
    });
    const [errors, setErrors] = useState(null);
    const [loading, setLoading] = useState(false);
    const { setNotification } = useStateContext();

    useEffect(() => {
        if (id) {
            setLoading(true);
            axiosClient.get(`/series/${id}`)
                .then(({ data }) => {
                    setLoading(false);
                    setSeries(data);
                })
                .catch(() => {
                    setLoading(false);
                });
        }
    }, [id]);

    const handleFileChange = (ev) => {
        const file = ev.target.files[0];
        if (file) {
            const filePath = `/src/assets/series/${file.name}`;
            setSeries({ ...series, path: filePath });
        }
    };

    const onSubmit = (ev) => {
        ev.preventDefault();
        if (series.id) {
            axiosClient.put(`/series/${series.id}`, series)
                .then(() => {
                    setNotification('Series was successfully updated');
                    navigate('/series');
                })
                .catch(err => {
                    const response = err.response;
                    if (response && response.status === 422) {
                        setErrors(response.data.errors);
                    }
                });
        } else {
            axiosClient.post('/series', series)
                .then(() => {
                    setNotification('Series was successfully created');
                    navigate('/series');
                })
                .catch(err => {
                    const response = err.response;
                    if (response && response.status === 422) {
                        setErrors(response.data.errors);
                    }
                });
        }
    };

    return (
        <>
            {series.id && <h1>Update Series: {series.name}</h1>}
            {!series.id && <h1>New Series</h1>}
            <div className="card animated fadeInDown">
                {loading && (
                    <div className="text-center">
                        Loading...
                    </div>
                )}
                {errors && (
                    <div className="alert">
                        {Object.keys(errors).map(key => (
                            <p key={key}>{errors[key][0]}</p>
                        ))}
                    </div>
                )}
                {!loading && (
                    <form onSubmit={onSubmit}>
                        <input
                            value={series.name}
                            onChange={ev => setSeries({ ...series, name: ev.target.value })}
                            placeholder="Name"
                        />
                        <input
                            value={series.start_year}
                            onChange={ev => setSeries({ ...series, start_year: ev.target.value })}
                            placeholder="Start Year"
                        />
                        <input
                            value={series.end_year}
                            onChange={ev => setSeries({ ...series, end_year: ev.target.value })}
                            placeholder="End Year"
                        />
                        <input
                            value={series.genre}
                            onChange={ev => setSeries({ ...series, genre: ev.target.value })}
                            placeholder="Genre"
                        />
                        <input
                            type="file"
                            onChange={handleFileChange}
                        />
                        <button className="btn">Save</button>
                    </form>
                )}
            </div>
        </>
    );
}
