import React,{ useState,useEffect } from 'react'
import { View,Text,FlatList,Image } from 'react-native'
import { styles } from './styles'

export const Swiper=({
  data,
  renderItem,
  containerStyle,
  activeDotColor,
  inActiveDotColor,
  onScroll,
  initIndex
}) => {

  const [interval,setInterval]=useState(1);
  const [intervals,setIntervals]=useState(1);
  const [width,setWidth]=useState(0);

  const init=(width) => {
    setWidth(width);
    setIntervals(data.length);
    { !!flatListRef&&flatListRef.scrollToIndex({ animated: false,index: initIndex }) }
  }

  const getInterval=(offset) => {
    for (let i=1;i<=intervals;i++) {
      if (offset<(width/intervals)*i*0.8)
        return i;
      if (i==intervals)
        return i;
    }
  }

  let bullets=[];
  for (let i=1;i<=intervals;i++) {
    bullets.push(
      <Text key={i} style={styles.dot(interval===i,activeDotColor,inActiveDotColor)}>
        &bull;
      </Text>
    );
  }

  return (
    <View style={styles.root(containerStyle)}>
      <FlatList
        ref={(ref) => { flatListRef=ref; }}
        horizontal={true}
        contentContainerStyle={styles.flatListContainer()}
        showsHorizontalScrollIndicator={false}
        onContentSizeChange={(w,h) => init(w)}
        onScroll={data => {
          onScroll()
          setWidth(data.nativeEvent.contentSize.width);
          setInterval(getInterval(data.nativeEvent.contentOffset.x));
        }}
        scrollEventThrottle={200}
        pagingEnabled
        decelerationRate="fast"
        data={data}
        bounces={false}
        renderItem={((data) => (
          <View style={styles.swiperContnet()}>
            {renderItem(data)}
          </View>
        ))}
      />
      <View style={styles.dotContent()}>
        {bullets}
      </View>
    </View>
  )
}

export default Swiper;