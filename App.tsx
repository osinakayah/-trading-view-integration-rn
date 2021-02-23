import * as React from 'react';
import { StyleSheet, Text, Dimensions } from 'react-native';
import { WebView } from 'react-native-webview';

const windowWidth = Dimensions.get('window').width;
export default class App extends React.Component {
  render() {
      return <WebView
        onError={(syntheticEvent) => {
          const { nativeEvent } = syntheticEvent;
          console.warn('WebView error: ', nativeEvent);
        }}
        source={require("./dist/index.html")}
        // source={{uri: 'https://nairaland.com'}}
        onHttpError={(syntheticEvent) => {
          const { nativeEvent } = syntheticEvent;
          console.warn(
              'WebView received error status code: ',
              nativeEvent.statusCode,
          );
        }}
        allowFileAccess={true}
        allowFileAccessFromFileURLs={true}
        allowUniversalAccessFromFileURLs={true}
        renderError={(errorName) => <Text>{errorName}</Text>}
        style={{ marginTop: 30, width: windowWidth}} />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
