import { Component } from "react";
import { Button, StyleSheet, Text,TextInput, View,} from "react-native";
import { TextInput } from "react-native-web";
export default class Counter extends Component {
  state = {
    count: 0,
    step: 2,
  };

  incrementar() {
    this.setState({ count: this.state.count + this.state.step });
  }

  decrementar() {
    this.setState({ count: this.state.count - this.state.step });
  }
  alteraStep(e) {
    console.log(e);
    this.setState({ step: parseInt(e.nativeEvent.text) });
  }
  alteraStep2(text) {
    this.setState({ step: parseInT(text) });
  }

  render() {
    return (
      <View style={styles.contador}>
        <TextInput
          value={this.state.step.toString()}
          onChange={(e) => this.alteraStep(e)}
        inputMode="numeric"
        keyboarType="numeric"
         />

        <TextInput
          defaultValue={this.state.step}
          onChangeText={(text) => this.alteraStep2(text)}
        inputMode="numeric"
        keyboarType="numeric"
        />

        <Text>Contador: {this.state.count}</Text>;
        <Button onPress={() => this.incrementar()} title="+" />
        <Button onPress={() => this.decrementar()} title="-" />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  contador: {
    flexDirection: "row",
    alignItems: "center",
  },
});
