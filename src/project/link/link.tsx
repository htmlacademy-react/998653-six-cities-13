import type { HTMLAttributes } from 'react';

import { Link as RouterLink } from 'react-router-dom';

type LinkProps = Pick<
	HTMLAttributes<HTMLAnchorElement>,
	'children' | 'className'
> & {
	href: string;
};

export function AppLink({children, href, ...props}:LinkProps) {
	const isExternal = href.startsWith('http://');
	const isAncor = href.startsWith('#');
	if(isExternal){
		return (
			<a href={href} rel ="noopener noreferrer" target="_blank" {...props}>
				{children}
			</a>
		);
	}

	if(isAncor) {
		return (
			<a href = {href} {...props}>
				{children}
			</a>
		);
	}

	return (
		<RouterLink to={href} {...props}></RouterLink>
	);
}


