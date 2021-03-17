// @ts-nocheck
import React, { useState } from 'react'
import './CountryMap.scss'
import { MapContainer, TileLayer, Marker, Popup, GeoJSON } from 'react-leaflet'


interface Props {
    capitalGeo: Array,
    capitalName: string | undefined,
    countryGeo: Array
}


const CountryMap: React.FC<Props> = (props) => {
    const [fullScreenMap, setFullScreenMap] = useState(false)
    let mapCls = ['country_map']

    const countryStyle = {
        fillColor: 'red',
        fillOpacity: 0.75,
        color: 'black',
        weight: '1'
    }

    if (fullScreenMap) {
        mapCls.push('full_screen_map')
    }

    return (
        <div className={mapCls.join(' ')}>
            <div className='map_fullscreen_btn' onClick={() => {
                setFullScreenMap(!fullScreenMap)
            }}><img src="/assets/icons/full_screen.png" alt="full screen btn" /></div>
            <MapContainer center={props.capitalGeo} zoom={3} scrollWheelZoom={true} className='map_container'>
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <GeoJSON style={countryStyle} data={props.countryGeo} />
                <Marker position={props.capitalGeo}>
                    <Popup style={{ color: 'green' }}>
                        {props.capitalName}
                    </Popup>
                </Marker>
            </MapContainer>
        </div >
    )
}

export default CountryMap