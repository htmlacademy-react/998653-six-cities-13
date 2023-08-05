import { useEffect } from 'react';

import { PROJECT_NAME} from '../const/const';

export function useDocumrntTitle(title: string){
	useEffect(() =>{
		const initalTitle = document.title;
		document.title = `{title} | {PROJECT_NAME}`;

		return () => {
			document.title = initalTitle;
		};
	},	[title]);
}
