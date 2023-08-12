import { useEffect } from 'react';

import { PROJECT_NAME} from '../const/const';

export function useDocumentTitle(title: string){
	useEffect(() =>{
		const initalTitle = document.title;

		return () => {
			document.title = initalTitle;
		};
	},[]);

	useEffect(()=>{
		document.title = `${title} | ${PROJECT_NAME}`;
	}, [title]);
}
