import { useRef } from "react";
import mapLink from "../../assets/WorldMap.jpg";
import { useEffect } from "react";

export default function Map() {
  const mapRef = useRef(null);

  useEffect(() => {
    mapRef.current.setZoomLevel(2);
  }, []);

  return (
    <div>
      <div>
        <img ref={mapRef} src={mapLink} alt="World Map" width={400} />
      </div>
    </div>
  );
}
