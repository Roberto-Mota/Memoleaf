import React from 'react';
import { TextInput, View } from 'react-native';
import Svg, { Path } from 'react-native-svg';

// POC unfinished
type inputProps = {
    placeholder: string,
    value: string,
    onChange: (nomeAtividade: string) => void;
}

export function LeafInput(props: inputProps) {
  return (
    <View style={{ position: 'relative', width: '80%', height: 56 }}>
      <Svg
        height="100%"
        width="100%"
        viewBox="0 0 100 56"
        style={{ position: 'absolute', top: 0, left: 0 }}
      >
        <Path
          d="M0,28 C0,0 100,0 100,28 C100,56 0,56 0,28 Z"
          fill="#363E33"
          stroke="#5B6644"
          strokeWidth="2"
        />
      </Svg>
      <TextInput
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          color: 'white',
          paddingHorizontal: 12,
          fontSize: 16,
          fontWeight: 'bold',
        }}
        placeholder={props.placeholder}
        placeholderTextColor="#D9D1BC"
        value={props.value}
        onChangeText={props.onChange}
      />
    </View>
  );
}
