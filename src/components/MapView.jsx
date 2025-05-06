import { useEffect, useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";

function ResizeMap() {
  const map = useMap();
  useEffect(() => {
    map.invalidateSize();
  }, [map]);
  return null;
}

export default function MapView() {
  const mapRef = useRef(null);
  const latitude = -6.560177677770337;
  const longitude = 106.72558755567896;

  return (
  <div className="bg-main2">
  <div className="min-h-screen flex flex-col items-center justify-center text-center p-12 font-casual2" data-aos="fade-up">
  <p className="font-semibold">Tempat:</p>
  <p className="mb-4">Gedung, jalan</p>

  <div className="aspect-video w-full max-w-2xl rounded-xl overflow-hidden shadow-md">
    <MapContainer
      center={[latitude, longitude]}
      zoom={13}
      ref={mapRef}
      style={{ height: "100%", width: "100%" }}
    >
      <ResizeMap />
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={[latitude, longitude]}>
        <Popup>
          <a
            href={`https://www.google.com/maps?q=${latitude},${longitude}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline"
          >
            Buka di Google Maps
          </a>
        </Popup>
      </Marker>
    </MapContainer>
  </div>
</div>
</div>

  );
}
