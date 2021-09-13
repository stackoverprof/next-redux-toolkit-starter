import { EnumType } from '@components/_shared/AlertHandler';

export interface LayoutStoreType {
	AlertValue: AlertType | null;
	Alert(arg0: AlertType | null): void;
	resetAlert(): void;
}

export interface AlertType {
	message: string;
	type?: EnumType;
}
