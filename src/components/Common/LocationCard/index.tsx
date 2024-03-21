import { Map, MapMarker } from "react-kakao-maps-sdk";
import * as S from "./style";

const LocationCard = ({ latitude, longitude }: { latitude: number; longitude: number }) => {
  return (
    <S.LocationCardContainer className="map-container">
      <Map center={{ lat: latitude, lng: longitude }} style={{ width: "100%", height: "100%", borderRadius: "10px" }}>
        <MapMarker position={{ lat: latitude, lng: longitude }}></MapMarker>
      </Map>
    </S.LocationCardContainer>
  );
};

export default LocationCard;
