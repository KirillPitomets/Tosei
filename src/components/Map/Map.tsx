import React, { FC } from 'react';
// ======= Styles ======
import cl from './Map.module.scss'
import cn from 'classnames'
// ======= Map Components ======
import { marker } from '../UI/MapMarker/MapMarker'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

const position: number[] = [43.100290594576855, 131.97300374337777]
let positionCenter: number[] = [43.09800309567443, 131.9653862695967]

if (window.innerWidth <= 440) {
	positionCenter = [43.103014264477935, 131.9722607548627]
}

type Props = {
	mapClassName?: string
}

const Map: FC<Props> = ({ mapClassName, children }) => {

	return (
		<div className={cn(cl.map, mapClassName)}>
			<MapContainer className={cl.map__map} center={[positionCenter[0], positionCenter[1]]} zoom={15} >
				<TileLayer
					attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				/>
				<Marker position={[position[0], position[1]]} icon={marker} >
					<Popup>
						Улица фадеева, 47с1
					</Popup>
				</Marker>
			</MapContainer>

			{children}
		</div>
	);
};

export default Map;