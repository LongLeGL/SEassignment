import React, { useState, useEffect } from 'react'
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap
} from "react-leaflet"
import L from "leaflet"
import "./Map.css"
const center = [10.827576, 106.67681]
var old_lat;
var old_lng;
const Map = () => {
    // const[oldpoint, setOldpoint] = useState([])
    // const[current, setCurrentpoint] = useState([])
    
  const [destination ,setDestination] = useState([])
  const mcps = [
    {
      ID: "MCP001",
      name: "MCP Phú Nhuận",
      coordinate: [10.793778, 106.684757],
    },
    {
        ID: "MCP002",
        name: "MCP quận 10",
        coordinate: [10.827576, 106.67681],
    },
    {
        ID: "MCP003",
        name: "MCP Bình Thạnh",
        coordinate: [10.804235, 106.71847],
    },
    {
        ID: "MCP004",
        name: "MCP Gò Vấp",
        coordinate: [10.838429750926348, 106.66953995139976]
    },
    {
        ID: "MCP005",
        name: "MCP Vàm Thuật",
        coordinate: [10.878228213161284, 106.66001057604655]
    }
  ]
//   const handleChangeOld = (old) => {
//     setOldpoint(...old)
//   }
//   const handleChangeCurrent = (current) => {
//     setCurrentpoint(...current)
//   }
  const handleChangeRoute = (coordinate) => {
    setDestination([...coordinate])
    
  }
  
//   handleChangeOld([10.772093436939588, 106.6578857044717]);
  function Routing() {
  const map = useMap();
  
  useEffect(() => {
    if (!map) return;

    const routingControl = L.Routing.control({
      waypoints: [L.latLng(old_lat, old_lng), L.latLng(destination[0], destination[1])],
    lineOptions: {
      styles: [{color: "#638aa7",weight: 4}]
    },
    routeWhileDragging: false,
    addWaypoints: false,
    draggableWaypoints: false,
    }).addTo(map);
    old_lat = destination[0];
    old_lng = destination[1];
    // handleChangeOld(current);
    // return () => map.removeControl(routingControl);
  }, [map]);

  return null;
}

  return (
    <div>
      <MapContainer 
        zoom={12}
        center = {center}   
        style={{width: '51vw', height: '60vh'}}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {mcps.map(mcp => (
          <Marker position={mcp.coordinate}>
            <Popup>
              <ul>
                <li>{mcp.ID}</li>
                <li>{mcp.name}</li>
              </ul>
              <button onClick={() => handleChangeRoute(mcp.coordinate)}>Thêm</button>
            </Popup>
          </Marker>
        ))}
        
          <Routing />
      </MapContainer>
    </div>
  )
}

export default Map