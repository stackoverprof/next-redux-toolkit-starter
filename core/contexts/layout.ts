import { useState } from 'react';
import { AlertType, LayoutStoreType } from './layout.types';

const LayoutStore = (): LayoutStoreType => {
	const [AlertValue, setAlertValue] = useState<AlertType | null>(null);

	const resetAlert = () => setAlertValue(null);

	return {
		AlertValue,
		Alert: setAlertValue,
		resetAlert,
	};
};

export default LayoutStore;
