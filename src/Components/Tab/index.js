import React,{ useState } from "react";
import { View,FlatList,Text } from "react-native";
import styles from "./styles";

const Tab=({
	containterStyle,
	items,
	renderTabActive,
	renderTabNotActive,
	horizontal,
	scrollEnabled,
	bounces
}) => {
	const [activeTab,setActiveTab]=useState(0);
	isActive=index => index===activeTab;
	renderButton=(item,index) => {
		return (
			this.isActive(index)?
				renderTabActive(item,() => setActiveTab(index))
				:
				renderTabNotActive(item,() => setActiveTab(index))
		);
	}
	return (
		<>
			<View style={styles.root(containterStyle)}>
				<FlatList
					showsHorizontalScrollIndicator={false}
					data={items}
					renderItem={({ item,index }) => (
						this.renderButton(item,index)
					)}
					horizontal={horizontal? true:false}
					scrollEnabled={scrollEnabled}
					bounces={bounces}
				/>
			</View>
			{items[activeTab].content}
		</>
	);
}

export default Tab;
props(Tab);

