import React, { useEffect, useState } from "react";
import axiosClient from "../axios-client.js";
import { useStateContext } from "../context/ContextProvider.jsx";
import '../css/info.css'

export default function Info() {
    const [usersWithSeries, setUsersWithSeries] = useState([]);
    const [loading, setLoading] = useState(false);
    const { setNotification } = useStateContext();

    useEffect(() => {
        getUsersWithSeries();
    }, []);

    const getUsersWithSeries = () => {
        setLoading(true);
        axiosClient.get('/users')
            .then(({ data }) => {
                setLoading(false);
                if (Array.isArray(data.data)) {
                    const mappedUsers = data.data.map(user => {
                        return {
                            id: user.id,
                            name: user.name,
                            email: user.email,
                            created_at: user.created_at,
                            series_id: user.series_id,
                            series: null
                        };
                    });

                    // Pobieranie danych o seriach dla każdego usera
                    Promise.all(mappedUsers.map(user => {
                        if (user.series_id !== null && user.series_id !== undefined) { // Dodanie warunku
                            return axiosClient.get(`/series/${user.series_id}`)
                                .then(({ data }) => data)
                                .catch(error => {
                                    console.error(`Error fetching series for user ${user.id}:`, error);
                                    return null;
                                });
                        } else {
                            return Promise.resolve(null); // Jesli series_id jest null, zwroc null
                        }
                    })).then(seriesData => {
                        // Przypisanie danych o serialu do odpowiedniego usera
                        seriesData.forEach((series, index) => {
                            if (series) {
                                mappedUsers[index].series = series;
                            }
                        });
                        setUsersWithSeries(mappedUsers);
                    }).catch(error => {
                        console.error('Error fetching series for all users:', error);
                        setNotification('Failed to fetch series data');
                    });
                } else {
                    console.error('Data received from server is not an array:', data);
                    setNotification('Failed to fetch users data');
                }
            })
            .catch(error => {
                setLoading(false);
                console.error('Error fetching users:', error);
                setNotification('Failed to fetch users data');
            });
    };

    return (
        <div>
            <h1>Users and their Series</h1>
            <div className="user-data">
                {loading && <p>Loading...</p>}
                {!loading && (
                    <ul>
                        {usersWithSeries.map(user => (
                            <li key={user.id}>
                                <strong>ID: {user.id}</strong><br />
                                <strong>Name: {user.name}</strong><br />
                                <strong>Email: {user.email}</strong><br />
                                <strong>Create Date: {user.created_at}</strong><br />
                                <strong>Series:</strong><br />
                                {user.series ? (
                                    <ul>
                                        <li>ID: {user.series.id}</li>
                                        <li>Name: {user.series.name}</li>
                                        <li>Start Year: {user.series.start_year}</li>
                                        <li>End Year: {user.series.end_year}</li>
                                        <li>Genre: {user.series.genre}</li>
                                        <li>Path: {user.series.path}</li>
                                    </ul>
                                ) : (
                                    <p>No series found for this user</p>
                                )}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
}
