import React from 'react';
import DashboardIcon from '@material-ui/icons/Dashboard';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import ExploreIcon from '@material-ui/icons/Explore';
import DateRangeIcon from '@material-ui/icons/DateRange';
import SettingsIcon from '@material-ui/icons/Settings';

export const SidebarData = [
	{
		title: 'Dashboard',
		icon: <DashboardIcon />,
		link: '/dashboard',
	},
	{
		title: 'Statistics',
		icon: <EqualizerIcon />,
		link: '/statistics',
	},
	{
		title: 'Map',
		icon: <ExploreIcon />,
		link: '/map',
	},
	{
		title: 'Calendar',
		icon: <DateRangeIcon />,
		link: '/calendar',
	},
	{
		title: 'Settings',
		icon: <SettingsIcon />,
		link: '/settings',
	},
];
