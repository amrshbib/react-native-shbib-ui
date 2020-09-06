## Table of Contents

- [1. Getting Started](#1-getting-started)
- [2. Usage](#2-usage)
- [3. Components supported](#3-components-supported)

## 1. Getting Started:

**Installation**

_Install react-native-shbib-ui:_

```js
npm install react-native-shbib-ui --save
```

**or**

```js
yarn add react-native-shbib-ui
```

## 2. Usage:

_App.js_

```js
import {Button} from 'react-native-shbib-ui';

<Button />;
```

## 3. Components supported:

- [x] [Avatar](#avatar)
- [x] [Badge](#badge)
- [x] [Tab](#tab)
- [x] [Header](#header)
- [x] [Button](#button)
- [x] [Spinner](#spinner)
- [x] [Divider](#divider)

## Avatar

_Demo_
<img src="https://raw.githubusercontent.com/amrshbib/react-native-shbib-ui/master/screenshots/Avatar.png" width="300">

_App.js_

```js
import React from 'react';
import {Avatar} from 'react-native-shbib-ui';
import {View} from 'react-native';
export default class AvatarExample extends React.Component {
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center'}}>
        <Avatar title="AS" titleSize={50} />
        <Avatar
          containerStyle={{marginTop: 10}}
          title="AS"
          titleColor="orange"
          source={require('./src/Assets/Images/avatar1.jpg')}
        />
        <Avatar
          containerStyle={{marginTop: 10}}
          source={require('./src/Assets/Images/avatar2.jpg')}
          avatarSize={150}
        />
      </View>
    );
  }
}
```

_Props_

| Prop name        | Description                   | Type        | Default value |
| ---------------- | ----------------------------- | ----------- | ------------- |
| `containerStyle` | Container style for component | object      | -             |
| `avatarStyle`    | Divider color                 | object      | -             |
| `titleStyle`     | Divider border width          | object      | -             |
| `source`         | Divider border width          | imageSource | -             |
| `title`          | Divider border width          | string      | -             |
| `avatarSize`     | Badge value                   | number      | -             |
| `titleSize`      | Badge size                    | number      | -             |
| `titleColor`     | Value font size               | string      | -             |

## Badge

_Demo_
<img src="https://raw.githubusercontent.com/amrshbib/react-native-shbib-ui/master/screenshots/Badge.png" width="300">

_App.js_

```js
import React from 'react';
import {View} from 'react-native';
import {Badge} from 'react-native-shbib-ui';
export default class BadgeExample extends React.Component {
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center'}}>
        <Badge
          valueSize={20}
          valueColor={'white'}
          badgeSize={30}
          badgeColor={'orange'}
        />
        <Badge
          containerStyle={{marginTop: 10}}
          value={'1'}
          valueSize={20}
          valueColor={'white'}
          badgeSize={30}
          badgeColor={'red'}
        />
        <Badge
          containerStyle={{marginTop: 10}}
          value={'10'}
          valueSize={20}
          valueColor={'white'}
          badgeSize={35}
          badgeColor={'green'}
        />
        <Badge
          containerStyle={{marginTop: 10}}
          value={'100'}
          valueSize={20}
          valueColor={'white'}
          badgeSize={40}
          badgeColor={'blue'}
        />
        <Badge
          containerStyle={{marginTop: 10}}
          value={'1000'}
          valueSize={20}
          valueColor={'white'}
          badgeColor={'grey'}
        />
      </View>
    );
  }
}
```

_Props_

| Prop name        | Description                   | Type   | Default value |
| ---------------- | ----------------------------- | ------ | ------------- |
| `containerStyle` | Container style for component | object | -             |
| `badgeStyle`     | Divider color                 | object | -             |
| `valueStyle`     | Divider border width          | object | -             |
| `value`          | Badge value                   | string | -             |
| `badgeSize`      | Badge size                    | number | -             |
| `valueSize`      | Value font size               | number | 20            |
| `badgeColor`     | Badge color                   | string | -             |
| `valueColor`     | Value color                   | string | 'white'       |

## Tab

_Demo_
<img src="https://raw.githubusercontent.com/amrshbib/react-native-shbib-ui/master/screenshots/Tab.png" width="300">

_App.js_

```js
import React from 'react';
import {Tab} from 'eact-native-shbib-ui';
import {View, TouchableOpacity, Text} from 'react-native';
export default class TabExample extends React.Component {
  render() {
    return (
      <Tab
        scrollEnabled={false}
        bounces={false}
        horizontal
        containterStyle={{marginTop: 50}}
        renderTabActive={(item, setActiveTab) => (
          <TouchableOpacity onPress={setActiveTab}>
            <View style={styles.tabActive}>
              <Text style={styles.textActive}>{item.title}</Text>
            </View>
          </TouchableOpacity>
        )}
        renderTabNotActive={(item, setActiveTab) => (
          <TouchableOpacity onPress={setActiveTab}>
            <View style={styles.tabNotActive}>
              <Text style={styles.textNotActive}>{item.title}</Text>
            </View>
          </TouchableOpacity>
        )}
        items={[
          {
            title: 'Tab1',
            content: (
              <View style={styles.text}>
                <Text>First Tab</Text>
              </View>
            ),
          },
          {
            title: 'Tab2',
            content: (
              <View style={styles.text}>
                <Text>Second Tab</Text>
              </View>
            ),
          },
          {
            title: 'Tab3',
            content: (
              <View style={styles.text}>
                <Text>Third Tab</Text>
              </View>
            ),
          },
        ]}
      />
    );
  }
}

const styles = {
  tabActive: {
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 4,
    borderBottomColor: 'blue',
    paddingHorizontal: width * 0.1,
    paddingVertical: 20,
  },
  tabNotActive: {
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 4,
    borderBottomColor: 'transparent',
    paddingHorizontal: width * 0.1,
    paddingVertical: 20,
  },
  textActive: {
    fontSize: 15,
    color: 'black',
    textAlign: 'center',
    fontWeight: '800',
  },
  textNotActive: {
    fontSize: 15,
    color: 'black',
    textAlign: 'center',
    fontWeight: '800',
    color: 'grey',
  },
  text: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
};
```

_Props_

| Prop name            | Description                     | Type     | Default value |
| -------------------- | ------------------------------- | -------- | ------------- |
| `containerStyle`     | Container style for component   | object   | -             |
| `items`              | Tabs render                     | array    | -             |
| `renderTabActive`    | Component render active tab     | function | -             |
| `renderTabNotActive` | Component render not active tab | function | -             |
| `horizontal`         | Renders items horizontally      | boolean  | -             |
| `scrollEnabled`      |                                 | boolean  | -             |
| `bounces`            |                                 | boolean  | -             |

## Header

_Demo_
<img src="https://raw.githubusercontent.com/amrshbib/react-native-shbib-ui/master/screenshots/Header.png" width="300">

_App.js_

```js
import React from 'react';
import {Text} from 'react-native';
import {Header} from 'react-native-shbib-ui';
export default class HeaderExample extends React.Component {
  render() {
    return (
      <Header
        color="#f5f5f5"
        size={70}
        containerStyle={{}}
        rightComponent={() => <Text>right</Text>}
        centerComponent={() => <Text>center</Text>}
        leftComponent={() => <Text>left</Text>}
      />
    );
  }
}
```

_Props_

| Prop name         | Description                               | Type     | Default value |
| ----------------- | ----------------------------------------- | -------- | ------------- |
| `containerStyle`  | Container style for component             | object   | -             |
| `style`           | Style for header                          | object   | -             |
| `color`           | Set background color for header           | string   | -             |
| `size`            | Set size for header                       | number   | -             |
| `customHeader`    | Custom design of header                   | function | -             |
| `leftComponent`   | Components render to the left in Header   | function | -             |
| `centerComponent` | Components render to the center in Header | function | -             |
| `rightComponent`  | Components render to the right in Header  | function | -             |

## Button

_Demo_
<img src="https://raw.githubusercontent.com/amrshbib/react-native-shbib-ui/master/screenshots/Button.png" width="300">

_App.js_

```js
import React from 'react';
import {View} from 'react-native';
import {Button} from 'react-native-shbib-ui';
export default class ButtonExample extends React.Component {
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'space-around'}}>
        <Button buttonSize={100} buttonColor={'red'} rounded />
        <Button buttonSize={125} buttonColor={'orange'} rounded />
        <Button buttonSize={150} buttonColor={'green'} title={'Click me'} />
        <Button buttonSize={175} buttonColor={'blue'} loading />
        <Button
          buttonSize={200}
          buttonColor={'black'}
          disabled
          titleSize={30}
          titleColor={'black'}
        />
      </View>
    );
  }
}
```

_Props_

| Prop name        | Description                                  | Type                       | Default value           |
| ---------------- | -------------------------------------------- | -------------------------- | ----------------------- |
| `containerStyle` | Styling for Component container              | object                     | -                       |
| `disabledStyle`  | Add additional styling for disabled button   | object                     | -                       |
| `buttonStyle`    | Add additional styling for button            | object                     | -                       |
| `titleStyle`     | Add additional styling for title             | number                     | -                       |
| `loadingStyle`   | Add additional styling for loading component | object                     | -                       |
| `title`          | Title for button                             | string                     | Button                  |
| `onPress`        | Handler to be called when the user press     | function                   | false                   |
| `loading`        | Display a loading spinner                    | boolean                    | -                       |
| `loadingColor`   | Spinner color                                | string                     | 'white'                 |
| `loadingSize`    | Spinner size                                 | iOS:string, Android:number | IOS:'small', Android:20 |
| `rounded`        | Rounded Button                               | boolean                    | false                   |
| `disabled`       | Disables click option for button             | boolean                    | false                   |
| `buttonColor`    | Button color                                 | string                     | -                       |
| `buttonSize`     | Button size                                  | number                     |                         |
| `titleColor`     | Title color                                  | string                     | -                       |
| `titleSize`      | Title size                                   | number                     | -                       |
| `activeOpacity`  | Active opacity for button                    | number                     | 1                       |

## Spinner

_Demo_
<img src="https://raw.githubusercontent.com/amrshbib/react-native-shbib-ui/master/screenshots/Spinner.png" width="300">

_App.js_

```js
import React from 'react';
import {View} from 'react-native';
import {Spinner} from 'react-native-shbib-ui';
export default class SpinnerExample extends React.Component {
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'space-around'}}>
        <Spinner color={'red'} size={'small'} />
        <Spinner color={'green'} size={'large'} />
        <Spinner color={'blue'} size={'large'} />
        <Spinner color={'black'} size={'small'} />
      </View>
    );
  }
}
```

_Props_

| Prop name        | Description                   | Type   | Default value |
| ---------------- | ----------------------------- | ------ | ------------- |
| `containerStyle` | Container style for component | object | -             |
| `color`          | Set spinner color             | string | -             |
| `size`           | Set size for spinner          | number | -             |

## Divider

_Demo_
<img src="https://raw.githubusercontent.com/amrshbib/react-native-shbib-ui/master/screenshots/Divider.png" width="300">

_App.js_

```js
import React from 'react';
import {View} from 'react-native';
import {Divider} from 'react-native-shbib-ui';
export default class DividerExample extends React.Component {
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'space-around'}}>
        <Divider
          containerStyle={{}}
          color={'red'}
          borderWidth={1}
          width={100}
        />
        <Divider
          containerStyle={{}}
          color={'green'}
          borderWidth={2}
          width={200}
        />
        <Divider
          containerStyle={{}}
          color={'blue'}
          borderWidth={3}
          width={300}
        />
        <Divider
          containerStyle={{}}
          color={'grey'}
          borderWidth={4}
          width={400}
        />
        <Divider containerStyle={{}} color={'black'} borderWidth={5} />
      </View>
    );
  }
}
```

_Props_

| Prop name        | Description                   | Type   | Default value |
| ---------------- | ----------------------------- | ------ | ------------- |
| `containerStyle` | Container style for component | object | -             |
| `color`          | Divider color                 | string | -             |
| `borderWidth`    | Divider border width          | number | 1             |
| `width`          | Divider width                 | number | -             |
