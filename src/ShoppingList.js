import React from 'react'

export default function ShoppingList(props){
	const items= props.items;
	return (<React.Fragment>
			<p className="items">Items</p>
			<ol className="item-list">
			{items.map((item, index) => <li key={index}>{item}</li>)}
			</ol>
		</React.Fragment>);
}