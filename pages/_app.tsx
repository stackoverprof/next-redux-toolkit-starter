import React from 'react';
import Head from 'next/head';
import { AppProps } from 'next/dist/shared/lib/router/router';
import ProgressBar from 'nextjs-progressbar';
import { Provider } from 'react-redux';
import store from '@core/redux/store';
import ContextProvider from '@core/contexts';

import '@core/styles/tailwind.css';
import '@core/styles/typefaces.css';

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
	return (
		<>
			<Head>
				<link rel="icon" href="/favicon.ico" />
				<meta name="theme-color" content="#000000" />
			</Head>
			<ProgressBar
				color="#000"
				startPosition={0.3}
				stopDelayMs={200}
				height={3}
				options={{showSpinner: false}}
			/>
			
			<Provider store={store}>
				<ContextProvider>
					<Component {...pageProps} />
				</ContextProvider>
			</Provider>
		</>
	);
};

export default App;
