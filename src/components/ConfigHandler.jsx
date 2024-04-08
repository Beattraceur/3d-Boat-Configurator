import { createContext, useContext, useEffect, useState } from 'react';
import { useImmerReducer } from 'use-immer';
import ProductFinder from './ProductFinder.jsx';

const ProductDataContext = createContext(null);
export function useProductDataContext() {
	return useContext(ProductDataContext);
}

const ConfigDispatchContext = createContext(null);
const DisplayContext = createContext({});
export function useConfigDispatchContext() {
	return useContext(ConfigDispatchContext);
}
export function useDisplayContext() {
	return useContext(DisplayContext);
}
export default function ConfigHandler() {
	const [productData, setProductData] = useState(null);
	const [priceData, setPriceData] = useState(null);
	const [config, configDispatch] = useImmerReducer(
		configReducer,
		null,
		getInitialConfig,
	);

	useEffect(() => {
		localStorage.setItem('config', JSON.stringify(config));
	}, [config]);
	const [boatMaterial, setBoatMaterial] = useState('wood');
	const [sailMaterial, setSailMaterial] = useState('sail');
	const [displayPaddleOars, setDisplayPaddleOars] = useState(false);
	const [displayTeakBenches, setDisplayTeakBenches] = useState(false);
	const [displayLaserEngraving, setDisplayLaserEngraving] = useState(false);
	const [displayEngineSupport, setDisplayEngineSupport] = useState(false);
	const [displayLadder, setDisplayLadder] = useState(false);
	const [displayAwning, setDisplayAwning] = useState(false);
	const [displayLifeJacket, setDisplayLifeJacket] = useState(false);
	useEffect(() => {
		config.Woodcolor !== undefined
			? setBoatMaterial(config.Woodcolor)
			: setBoatMaterial('wood');
		config.FabricSails !== undefined
			? setSailMaterial(config.FabricSails)
			: setSailMaterial('sail');
		config.Ladder !== undefined
			? setDisplayLadder(true)
			: setDisplayLadder(false);
		config.PaddleOars !== undefined
			? setDisplayPaddleOars(true)
			: setDisplayPaddleOars(false);
		config.TeakBenches !== undefined
			? setDisplayTeakBenches(true)
			: setDisplayTeakBenches(false);
		config.LaserEngraving !== undefined
			? setDisplayLaserEngraving(true)
			: setDisplayLaserEngraving(false);
		config.EngineSupport !== undefined
			? setDisplayEngineSupport(true)
			: setDisplayEngineSupport(false);
		config.Awning !== undefined
			? setDisplayAwning(true)
			: setDisplayAwning(false);
		config.LifeJacket !== undefined
			? setDisplayLifeJacket(config.LifeJacket)
			: setDisplayLifeJacket(false);
	}, [config]);

	return (
		<ProductDataContext.Provider
			value={[productData, setProductData, priceData, setPriceData]}
		>
			<ConfigDispatchContext.Provider value={[config, configDispatch]}>
				<DisplayContext.Provider
					value={{
						boatMaterial,
						sailMaterial,
						displayLadder,
						displayPaddleOars,
						displayTeakBenches,
						displayLaserEngraving,
						displayEngineSupport,
						displayAwning,
						displayLifeJacket,
					}}
				>
					<ProductFinder />
				</DisplayContext.Provider>
			</ConfigDispatchContext.Provider>
		</ProductDataContext.Provider>
	);
}

function configReducer(config, message) {
	// console.log(message);
	switch (message.action) {
		case 'true':
			// console.log('set', message.currentOption, 'to', message.item);
			config[message.currentOption] = message.index;
			break;
		case 'false':
			// console.log('in', message.currentOption, 'delete', message.item);
			delete config[message.currentOption];
			break;
		case 'reset':
			console.log('reset');
			return {};
		default:
			break;
	}
}

function getInitialConfig() {
	try {
		const config = JSON.parse(localStorage.getItem('config'));

		return config === null ? {} : config;
	} catch (error) {
		console.log(error);
	}
	return {};
}
