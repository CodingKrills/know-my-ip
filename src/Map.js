import React, { useState, useEffect } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

export default function Map() {

    var [lat, setLat] = useState(0.00);
    var [lon, setLon] = useState(0.00);
    var [loading, setLoading] = useState(true);


    useEffect(() => {

        var lat, lon;

        function getLocation() {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(showPosition);
            }
        }

        function showPosition(position) {

            lat = position.coords.latitude;
            lon = position.coords.longitude;

            setLat(lat);
            setLon(lon)
            setLoading(false)

            console.log("latitute ======" + position.coords.latitude + "longitude ====== " + position.coords.longitude)
        }

        getLocation();

        console.log("MAIN", lat + lon)

    }, [lat, lon])






    // console.log(props.latitude, props.longitude)

    return (
        <div className="container map">

            {loading ? <>Loading .....</> : <>


                <MapContainer center={[lat, lon]} zoom={4} scrollWheelZoom={false}>
                    <TileLayer
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={[lat, lon]}>
                        <Popup>
                            A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                    </Marker>
                </MapContainer>


            </>

            }

        </div>
    )
}
