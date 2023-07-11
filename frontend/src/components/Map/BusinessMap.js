import { useMemo } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import { useHistory } from "react-router-dom";
import "./BusinessMapStyle.css";

export default function BusinessMap({ business }) {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_ETHAN_MAPS_API_KEY,
  });

  const center = useMemo(() => ({
    lat: parseFloat(business.latitude),
    lng: parseFloat(business.longitude),
  }), [business.latitude, business.longitude]);

  const markerPosition = useMemo(() => ({
    lat: parseFloat(business.latitude),
    lng: parseFloat(business.longitude),
  }), [business.latitude, business.longitude]);

  const history = useHistory();

  const handleMarkerClick = () => {
    history.push(`/businesses/${business.id}`);
  };

  if (!isLoaded) return <div>Loading...</div>;

  return (
    <div className="business-map-container">
      <GoogleMap zoom={17} center={center} mapContainerClassName="business-map-container">
        <Marker
          position={markerPosition}
          onClick={handleMarkerClick}
        />
      </GoogleMap>
    </div>
  );
}
