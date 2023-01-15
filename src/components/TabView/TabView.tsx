import React, { useState } from 'react';
import './TabView.scss';

const TabView = ({title, tabs = {}}: any) => {
	const [activeTabIndex, setActiveTabIndex] = useState(0);

	const activateTab = (index: number) => {
		setActiveTabIndex(index);
	};

	return (
		<div className='TabView'>
			{title && <h4 className='TabView__title'>{title}</h4>}
			<div className='TabView__body'>
				{Object.keys(tabs).length === 0 ?
					(<div>No Tabs</div>)  : (
						<div>
							<div className="tabs">
								{tabs.map((tab: any, index: number) => (
									<label
										key={index}
										className={index === activeTabIndex ? 'active-tab' : 'tab'}
										onClick={() => activateTab(index)}
									>
										{tab.name}
									</label>
								))}
							</div>
						</div>
					)}
			</div>
			<div className="content">{tabs[activeTabIndex].content}</div>
		</div>
	);
};

export default TabView;
