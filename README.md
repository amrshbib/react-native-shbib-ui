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
- [x] [Tab](#tab)
- [x] [Swiper](#swiper)
- [x] [Stepper](#stepper)
- [x] [Card](#card)
- [x] [MediaGrid](#mediagrid)
- [x] [Header](#header)
- [x] [Button](#button)
- [x] [Badge](#badge)
- [x] [Spinner](#spinner)
- [x] [Divider](#divider)
- [x] [CheckBox](#checkbox)
- [x] [RadioButton](#radiobutton)
- [x] [Progress](#Progress)

## Avatar

_Demo_
<img src="https://raw.githubusercontent.com/amrshbib/react-native-shbib-ui/master/Demo/Avatar.png" width="300">

_App.js_

```js
import React from 'react';
import {Avatar} from 'react-native-shbib-ui';
import {View} from 'react-native';
export default class AvatarExample extends React.Component {
  render() {
    return (
      <View style={styles.root}>
        <Avatar
          containerStyle={styles.avatarContainer}
          title="AS"
          titleSize={50}
        />
        <Avatar
          containerStyle={styles.avatarContainer}
          title="AS"
          titleColor="orange"
          source={require('./src/Assets/Images/avatar1.jpg')}
        />
        <Avatar
          containerStyle={styles.avatarContainer}
          source={require('./src/Assets/Images/avatar2.jpg')}
          avatarSize={150}
        />
      </View>
    );
  }
}
const styles = {
  root: {
    flex: 1,
    justifyContent: 'center',
  },
  avatarContainer: {
    marginTop: 10,
  },
};
```

_Props_

| Prop name        | Description                   | Type        | Default value |
| ---------------- | ----------------------------- | ----------- | ------------- |
| `containerStyle` | Container style for component | object      | -             |
| `avatarStyle`    | Divider color                 | object      | -             |
| `titleStyle`     | Title style                   | object      | -             |
| `source`         | Image source                  | imageSource | -             |
| `title`          | Avatar title                  | string      | -             |
| `avatarSize`     | Badge value                   | number      | -             |
| `titleSize`      | Badge size                    | number      | -             |
| `titleColor`     | Value font size               | string      | -             |

## Tab

_Demo_
<img src="https://raw.githubusercontent.com/amrshbib/react-native-shbib-ui/master/Demo/Tab.gif" width="300">

_App.js_

```js
import React from 'react';
import {Tab} from 'react-native-shbib-ui';
import {View, TouchableOpacity, Text} from 'react-native';
export default class TabExample extends React.Component {
  render() {
    return (
      <Tab
        scrollEnabled={false}
        bounces={false}
        horizontal
        containterStyle={styles.tabContainer}
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
                <Text style={styles.textHint}>First Tab</Text>
              </View>
            ),
          },
          {
            title: 'Tab2',
            content: (
              <View style={styles.text}>
                <Text style={styles.textHint}>Second Tab</Text>
              </View>
            ),
          },
          {
            title: 'Tab3',
            content: (
              <View style={styles.text}>
                <Text style={styles.textHint}>Third Tab</Text>
              </View>
            ),
          },
        ]}
      />
    );
  }
}

const styles = {
  tabContainer: {
    marginTop: 50,
  },
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
    fontSize: 18,
    color: 'black',
    textAlign: 'center',
    fontWeight: '800',
  },
  textNotActive: {
    fontSize: 18,
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
  textHint: {
    fontSize: 25,
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

## Swiper

_Demo_
<img src="https://raw.githubusercontent.com/amrshbib/react-native-shbib-ui/master/Demo/Swiper.gif" width="300">

_App.js_

```js
import React from 'react';
import {View, Image} from 'react-native';
import {Swiper} from 'react-native-shbib-ui';
export default class SwiperExample extends React.Component {
  render() {
    var data = [
      {src: require('Image1.jpg')},
      {src: require('Image2.jpg')},
      {src: require('Image3.jpg')},
    ];
    return (
      <Swiper
        containerStyle={{flex: 1}}
        onScroll={() => {}}
        activeDotColor={'#1976D2'}
        inActiveDotColor={'grey'}
        data={data}
        initIndex={0}
        renderItem={({item, index}) => (
          <View style={{backgroundColor: item.color, flex: 1}}>
            <Image source={item.src} />
          </View>
        )}
      />
    );
  }
}
```

_Props_

| Prop name          | Description                                                   | Type     | Default value |
| ------------------ | ------------------------------------------------------------- | -------- | ------------- |
| `containerStyle`   | Container style for component                                 | object   | -             |
| `data`             | Chunk of data(object)                                         | array    | -             |
| `renderItem`       | Callback which takes a chunk of data and returns a component. | function | -             |
| `onScroll`         | Callback that is called when the Item is swiped               | function | -             |
| `activeDotColor`   | Active dot color                                              | string   | -             |
| `inActiveDotColor` | InActive dot color                                            | string   | -             |
| `initIndex`        | Set default active item                                       | number   | -             |

## Stepper

_Demo_
<img src="https://raw.githubusercontent.com/amrshbib/react-native-shbib-ui/master/Demo/Stepper.gif" width="300">

_App.js_

```js
import React from 'react';
import {View, Text} from 'react-native';
import {Button, Stepper} from 'react-native-shbib-ui';

export default StepperExample = () => {
  FirstScreen = ({next, back}) => (
    <View style={styles.screenContent}>
      <Text style={styles.text}>First Screen</Text>
      <View style={styles.buttonContent}>
        <Button title={'Prev Step'} onPress={back} />
        <Button title={'Next Step'} onPress={next} />
      </View>
    </View>
  );
  SecondScreen = ({next, back}) => (
    <View style={styles.screenContent}>
      <Text style={styles.text}>Second Screen</Text>
      <View style={styles.buttonContent}>
        <Button title={'Prev Step'} onPress={back} />
        <Button title={'Next Step'} onPress={next} />
      </View>
    </View>
  );
  ThirdScreen = ({next, back}) => (
    <View style={styles.screenContent}>
      <Text style={styles.text}>Third Screen</Text>
      <View style={styles.buttonContent}>
        <Button title={'Prev Step'} onPress={back} />
        <Button title={'Next Step'} onPress={next} />
      </View>
    </View>
  );
  return (
    <View style={styles.root}>
      <Stepper steps={[FirstScreen, SecondScreen, ThirdScreen]} />
    </View>
  );
};
const styles = {
  root: {
    flex: 1,
    justifyContent: 'center',
  },
  screenContent: {
    alignSelf: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 30,
  },
  buttonContent: {
    marginTop: 100,
    flexDirection: 'row',
  },
};
```

_Props_

| Prop name        | Description                   | Type              | Default value |
| ---------------- | ----------------------------- | ----------------- | ------------- |
| `containerStyle` | Container style for component | object            | -             |
| `steps`          | Container style for component | array of function | -             |

## Card

_Demo_
<img src="https://raw.githubusercontent.com/amrshbib/react-native-shbib-ui/master/Demo/Card.png" width="300">

_App.js_

```js
import React from 'react';
import {View, Text} from 'react-native';
import {Card} from 'react-native-shbib-ui';

export default CardExample = () => {
  const text =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
  return (
    <View style={styles.root}>
      <Card containerStyle={styles.cardContainer} style={styles.card1Styles}>
        <Text>{text}</Text>
      </Card>
      <Card containerStyle={styles.cardContainer} style={styles.card2Styles}>
        <Text>{text}</Text>
      </Card>
    </View>
  );
};

const styles = {
  root: {
    flex: 1,
    justifyContent: 'center',
  },
  cardContainer: {
    alignSelf: 'center',
  },
  card1Styles: {
    width: 300,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card2Styles: {
    marginTop: 20,
    width: 300,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
};
```

_Props_

| Prop name        | Description                   | Type   | Default value |
| ---------------- | ----------------------------- | ------ | ------------- |
| `containerStyle` | Container style for component | object | -             |

## MediaGrid

_Demo_
<img src="https://raw.githubusercontent.com/amrshbib/react-native-shbib-ui/master/Demo/MediaGrid.png" width="300">

_App.js_

```js
import React from 'react';
import {MediaGrid, Card} from 'react-native-shbib-ui';
import {View} from 'react-native';
export default class MediaGridExample extends React.Component {
  render() {
    var data = [require('Image1.jpg')];
    var data1 = [require('Image1.jpg'), require('Image2.jpg')];
    var data2 = [
      require('Image1.jpg'),
      require('Image2.jpg'),
      require('Image3.jpg'),
    ];
    var data3 = [
      require('Image1.jpg'),
      require('Image2.jpg'),
      require('Image3.jpg'),
      require('Image4.jpg'),
      require('Image5.jpg'),
    ];
    return (
      <View style={styles.root}>
        <Card style={styles.cardStyle}>
          <MediaGrid media={data} />
        </Card>
        <Card style={styles.cardStyle}>
          <MediaGrid media={data1} />
        </Card>
        <Card style={styles.cardStyle}>
          <MediaGrid media={data2} />
        </Card>
        <Card style={styles.cardStyle}>
          <MediaGrid media={data3} />
        </Card>
      </View>
    );
  }
}
const styles = {
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardStyle: {
    padding: 10,
    marginTop: 10,
  },
};
```

_Props_

| Prop name        | Description                   | Type        | Default value |
| ---------------- | ----------------------------- | ----------- | ------------- |
| `containerStyle` | Container style for component | object      | -             |
| `data`           | Chunk of Image source         | imageSource | -             |

## Header

_Demo_
<img src="https://raw.githubusercontent.com/amrshbib/react-native-shbib-ui/master/Demo/Header.png" width="300">

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
<img src="https://raw.githubusercontent.com/amrshbib/react-native-shbib-ui/master/Demo/Button.gif" width="300">

_App.js_

```js
import React from 'react';
import {View} from 'react-native';
import {Button} from 'react-native-shbib-ui';
export default class ButtonExample extends React.Component {
  render() {
    return (
      <View style={styles.root}>
        <Button
          buttonSize={100}
          buttonColor={'#FFA726'}
          rounded
          title={'Rounded'}
        />
        <Button buttonSize={150} buttonColor={'#66BB6A'} title={'Click me'} />
        <Button buttonSize={175} buttonColor={'#26C6DA'} loading />
        <Button
          buttonSize={200}
          disabled
          titleSize={30}
          titleColor={'black'}
          title={'Disabled'}
        />
      </View>
    );
  }
}
const styles = {
  root: {
    flex: 1,
    justifyContent: 'space-around',
  },
};
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
| `loadingSize`    | Spinner size                                 | iOS:string, Android:number | iOS:'small', Android:20 |
| `rounded`        | Rounded Button                               | boolean                    | false                   |
| `disabled`       | Disables click option for button             | boolean                    | false                   |
| `buttonColor`    | Button color                                 | string                     | -                       |
| `buttonSize`     | Button size                                  | number                     |                         |
| `titleColor`     | Title color                                  | string                     | -                       |
| `titleSize`      | Title size                                   | number                     | -                       |
| `activeOpacity`  | Active opacity for button                    | number                     | 1                       |

## Badge

_Demo_
<img src="https://raw.githubusercontent.com/amrshbib/react-native-shbib-ui/master/Demo/Badge.png" width="300">

_App.js_

```js
import React from 'react';
import {View} from 'react-native';
import {Badge} from 'react-native-shbib-ui';
export default class BadgeExample extends React.Component {
  render() {
    return (
      <View style={styles.root}>
        <Badge
          valueSize={20}
          valueColor={'white'}
          badgeSize={30}
          badgeColor={'orange'}
        />
        <Badge
          containerStyle={styles.avatarContainer}
          value={'1'}
          valueSize={20}
          valueColor={'white'}
          badgeSize={30}
          badgeColor={'red'}
        />
        <Badge
          containerStyle={styles.avatarContainer}
          value={'10'}
          valueSize={20}
          valueColor={'white'}
          badgeSize={35}
          badgeColor={'green'}
        />
        <Badge
          containerStyle={styles.avatarContainer}
          value={'100'}
          valueSize={20}
          valueColor={'white'}
          badgeSize={40}
          badgeColor={'blue'}
        />
        <Badge
          containerStyle={styles.avatarContainer}
          value={'1000'}
          valueSize={20}
          valueColor={'white'}
          badgeColor={'grey'}
        />
      </View>
    );
  }
}
const styles = {
  root: {
    flex: 1,
    justifyContent: 'center',
  },
  avatarContainer: {
    marginTop: 10,
  },
};
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

## Spinner

_Demo_
<img src="https://raw.githubusercontent.com/amrshbib/react-native-shbib-ui/master/Demo/Spinner.gif" width="300">

_App.js_

```js
import React from 'react';
import {View} from 'react-native';
import {Spinner} from 'react-native-shbib-ui';
export default class SpinnerExample extends React.Component {
  render() {
    return (
      <View style={styles.root}>
        <Spinner color={'#FFA726'} size={'small'} />
        <Spinner color={'#66BB6A'} size={'large'} />
        <Spinner color={'#26C6DA'} size={'large'} />
        <Spinner color={'black'} />
      </View>
    );
  }
}
const styles = {
  root: {
    flex: 1,
    justifyContent: 'space-around',
  },
};
```

_Props_

| Prop name        | Description                   | Type   | Default value |
| ---------------- | ----------------------------- | ------ | ------------- |
| `containerStyle` | Container style for component | object | -             |
| `color`          | Set spinner color             | string | -             |
| `size`           | Set size for spinner          | number | -             |

## Divider

_Demo_
<img src="https://raw.githubusercontent.com/amrshbib/react-native-shbib-ui/master/Demo/Divider.png" width="300">

_App.js_

```js
import React from 'react';
import {View} from 'react-native';
import {Divider} from 'react-native-shbib-ui';
export default class DividerExample extends React.Component {
  render() {
    return (
      <View style={styles.root}>
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
const styles = {
  root: {
    flex: 1,
    justifyContent: 'space-around',
  },
};
```

_Props_

| Prop name        | Description                   | Type   | Default value |
| ---------------- | ----------------------------- | ------ | ------------- |
| `containerStyle` | Container style for component | object | -             |
| `color`          | Divider color                 | string | -             |
| `borderWidth`    | Divider border width          | number | 1             |
| `width`          | Divider width                 | number | -             |

## CheckBox

_Demo_
<img src="https://raw.githubusercontent.com/amrshbib/react-native-shbib-ui/master/Demo/CheckBox.png" width="300">

_App.js_

```js
import React from 'react';
import {View} from 'react-native';
import {CheckBox} from 'react-native-shbib-ui';
export default class CheckBoxExample extends React.Component {
  render() {
    return (
      <View style={styles.root}>
        <CheckBox label={'Check Box1'} labelSize={20} iconSize={25} />
        <CheckBox
          checked={true}
          label={'Check Box2'}
          labelColor={'red'}
          labelSize={20}
          iconColor={'red'}
          iconSize={25}
        />
        <CheckBox
          iconColor={'orange'}
          labelColor={'orange'}
          label={'Check Box3'}
          labelSize={20}
          iconSize={25}
        />
      </View>
    );
  }
}
const styles = {
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
};
```

_Props_

| Prop name        | Description                                                         | Type     | Default value |
| ---------------- | ------------------------------------------------------------------- | -------- | ------------- |
| `containerStyle` | Container style for component                                       | object   | -             |
| `checked`        | State value of an item from set of choices                          | boolean  | -             |
| `onPress`        | Handler to be called when the user selects / unselects the checkbox | function | -             |
| `iconSize`       | Icon size                                                           | number   | -             |
| `iconColor`      | Icon color                                                          | string   | -             |
| `label`          | Checkbox label                                                      | string   | -             |
| `labelSize`      | Label size                                                          | number   | -             |
| `labelColor`     | Label color                                                         | string   | -             |

## RadioButton

_Demo_
<img src="https://raw.githubusercontent.com/amrshbib/react-native-shbib-ui/master/Demo/RadioButton.png" width="300">

_App.js_

```js
import React from 'react';
import {View} from 'react-native';
import {RadioButton} from 'react-native-shbib-ui';
export default class RadioButtonExample extends React.Component {
  render() {
    return (
      <View style={styles.root}>
        <RadioButton label={'Radio button1'} labelSize={20} iconSize={25} />
        <RadioButton
          checked={true}
          label={'Radio button2'}
          labelColor={'red'}
          labelSize={20}
          iconColor={'red'}
          iconSize={25}
        />
        <RadioButton
          iconColor={'orange'}
          labelColor={'orange'}
          label={'Radio button3'}
          labelSize={20}
          iconSize={25}
        />
      </View>
    );
  }
}
const styles = {
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
};
```

_Props_

| Prop name        | Description                                                             | Type     | Default value |
| ---------------- | ----------------------------------------------------------------------- | -------- | ------------- |
| `containerStyle` | Container style for component                                           | object   | -             |
| `checked`        | State value of an item from set of choices                              | boolean  | -             |
| `onPress`        | Handler to be called when the user selects / unselects the radio button | function | -             |
| `iconSize`       | Icon size                                                               | number   | -             |
| `iconColor`      | Icon color                                                              | string   | -             |
| `label`          | Radio button label                                                      | string   | -             |
| `labelSize`      | Label size                                                              | number   | -             |
| `labelColor`     | Label color                                                             | string   | -             |

## Progress

_Demo_
<img src="https://raw.githubusercontent.com/amrshbib/react-native-shbib-ui/master/Demo/Progress.png" width="300">

_App.js_

```js
import React from 'react';
import {Progress} from './src/react-native-shbib-ui';
import {View} from 'react-native';
export default class ProgressExample extends React.Component {
  render() {
    return (
      <View style={styles.root}>
        <Progress.Bar
          value={30}
          primaryColor="#FFAB40"
          secondaryColor="#FFD180"
          width={150}
          height={20}
        />
        <Progress.Bar
          value={60}
          primaryColor="#FF3D00"
          secondaryColor="#FF9E80"
          width={200}
          height={25}
        />
        <Progress.Bar
          value={40}
          primaryColor="#00E676"
          secondaryColor="#B9F6CA"
          width={250}
          height={30}
        />
        <Progress.Bar
          value={80}
          primaryColor="#1976D2"
          secondaryColor="#BBDEFB"
          width={300}
          height={35}
        />
      </View>
    );
  }
}
const styles = {
  root: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
};
```

_Props_

| Prop name        | Description                   | Type   | Default value |
| ---------------- | ----------------------------- | ------ | ------------- |
| `containerStyle` | Container style for component | object | -             |
| `style`          | Progress style                | object | -             |
| `value`          | Progress fill                 | number | -             |
| `primaryColor`   | Fill color                    | string | -             |
| `secondaryColor` | Background color              | string | -             |
| `width`          | Progress width                | number | -             |
| `height`         | Progress height               | number | -             |
