# killer-react-native-header
Basic Header component for react native

<strong>killer-react-native-header</strong> is a basic Header Component container. It also controls the status-bar and allows you to configure it via props. Content of the Header is controlled by the user

# How to install

<code>
  npm i --save @killerwink/killer-react-native-header
</code>

# How to use

Import the utility into your file.

```javascript
  import HeaderBar from '@killerwink/killer-react-native-header';
```


Add the component to your code & configure the props

Below are the example props available

```javascript
  const options={
            HeaderOptions: {
               height: 90, // integer value for the height of the header component
               padding: 10, // integer value for the internal padding of the header component
               backgroundColor: '#0081CF', // String Hex value for the color of the header component
            },
            StatusBarOptions: {
               backgroundColor: '#0081CF', // String Hex value for the color of the status-bar component
               barStyle: 'dark-content', // String value for the shade of the status-bar content one of ('default', 'light-content', 'dark-content')
               hidden: false, // Boolean value for the content of the status-bar content
            },
  };         
```

```javascript
   <HeaderBar options={options} />;
```

# Example Code

```javascript
import React from 'react';
import { Text } from 'react-native';
import HeaderBar from '@killerwink/killer-react-native-header';

  const options={
            HeaderOptions: {
               height: 90, // integer value for the height of the header component
               padding: 10, // integer value for the internal padding of the header component
               backgroundColor: '#0081CF', // String Hex value for the color of the header component
            },
            StatusBarOptions: {
               backgroundColor: '#0081CF', // String Hex value for the color of the status-bar component
               barStyle: 'dark-content', // String value for the shade of the status-bar content one of ('default', 'light-content', 'dark-content')
               hidden: false, // Boolean value for the content of the status-bar content
            },
  }; 

export const Header = () => {

    return (
        <HeaderBar options={options}>
          <Text>Content Here</Text>
        </HeaderBar>
    );
};
```
