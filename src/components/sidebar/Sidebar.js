import React from 'react';
import AcUnitIcon from '@material-ui/icons/AcUnit';
import { SidebarData } from './SidebarData';
import Cards from './Cards';

const Sidebar = () => {
	return (
		<div className="sidebar">
			<div className="sidebar__logo">
				<AcUnitIcon />
				<span>ForeCaster</span>
			</div>
			<hr style={{ borderColor: '#676cf8' }} />
			<ul className="sidebar__list">
				{SidebarData.map((val, key) => {
					return (
						<li
							className="row"
							id={
								window.location.pathname === val.link
									? 'active'
									: ''
							}
							key={key}
							onClick={() =>
								(window.location.pathname = val.link)
							}
						>
							<div id="icon">{val.icon}</div>
							<div id="title">{val.title}</div>
						</li>
					);
				})}
			</ul>
			<div className="card__component">
				<Cards />
			</div>
		</div>
	);
};

export default Sidebar;
