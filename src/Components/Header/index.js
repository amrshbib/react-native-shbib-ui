
import React from 'react';
import { View } from 'react-native';
import styles from './styles';
import props from './props'

const Header=({
  containerStyle,
  style,
  customHeader,
  leftComponent,
  centerComponent,
  rightComponent,
  color,
  size
}) => {
  return (
    <View style={styles.root(containerStyle)}>
      <View style={styles.headerWrap(size,color,style)}>
        <View style={styles.headerContent(size)}>
          {
            !!customHeader?
              customHeader()
              :
              <>
                <View style={styles.headerItem('left')}>
                  {!!leftComponent&&leftComponent()}
                </View>
                <View style={styles.headerItem('center')}>
                  {!!centerComponent&&centerComponent()}
                </View>
                <View style={styles.headerItem('right')}>
                  {!!rightComponent&&rightComponent()}
                </View>
              </>
          }
        </View>
      </View>
    </View>

  );
};

export default Header;

props(Header)





