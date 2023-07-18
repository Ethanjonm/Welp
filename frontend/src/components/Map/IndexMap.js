import { useMemo } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { getBusinesses } from '../../store/business';
import "./IndexMapStyle.css";

export default function IndexMap() {
    const businesses = useSelector(getBusinesses);

    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_ETHAN_MAPS_API_KEY,
    });

    if (!isLoaded) return <div>Loading...</div>
    return (
        <div className="IndexMap">
            <Map businesses={businesses} />
        </div>
    );

}

function Map({ businesses }) {
    const center = useMemo(() => ({ lat: 40.671450, lng: -73.963673 }), []);
    const history = useHistory();

    const markerPositions = useMemo(
        () =>
          Array.isArray(businesses)
            ? businesses.map((business) => ({
                lat: parseFloat(business.latitude),
                lng: parseFloat(business.longitude),
                id: business.id,
              }))
            : [],
        [businesses]
    );

    const handleMarkerClick = (businessId) => {
        history.push(`/businesses/${businessId}`);
    };

    return (
        <div className="map-container">
          <GoogleMap zoom={12} center={center} mapContainerClassName="map-container">
            {markerPositions.map((position, index) => (
              <Marker
                key={index}
                position={position}
                onClick={() => handleMarkerClick(position.id)}
              />
            ))}
          </GoogleMap>
        </div>
      );
}