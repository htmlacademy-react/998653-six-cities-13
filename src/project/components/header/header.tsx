import classNames from 'classnames';
import { useLocation } from 'react-router-dom';

import { AppRoute } from '../../const/const';
import { AppLink } from '../../link/link';

export function Header() {
	const { pathname } = useLocation();

	return(
		<header className="header">
			<div className="container">
				<div className="header__wrapper">
					<div className="header__left">
						<AppLink
							className={classNames(
								'header__logo-link',
								{
									'header__logo-link--active': pathname === AppRoute.Main,
								}
							)} href={AppRoute.Main}
						>
							<img
								className="header__logo"
								src="img/logo.svg"
								alt="6 cities logo"
								width={81}
								height={41}
							/>
						</AppLink>
					</div>
					<nav className="header__nav">
						<ul className="header__nav-list">
							<li className="header__nav-item user">
								<AppLink className="header__nav-link header__nav-link--profile"
									href={AppRoute.Favorites}
								>
									<div className="header__avatar-wrapper user__avatar-wrapper" />
									<span className="header__user-name user__name">
                Oliver.conner@gmail.com
									</span>
									<span className="header__favorite-count">3</span>
								</AppLink>
							</li>
							<li className="header__nav-item">
								<AppLink className="header__nav-link"
									href={AppRoute.Login}
								>
									<span className="header__signout">Sign out</span>
								</AppLink>
							</li>
						</ul>
					</nav>
				</div>
			</div>
		</header>

	);
}
