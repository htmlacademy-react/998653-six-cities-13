import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './project/components/app/app';
import { TemporalData } from './project/const/index';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);

root.render(
	<React.StrictMode>
		<App offersAmount={TemporalData.OfferAmount} />
	</React.StrictMode>
);
