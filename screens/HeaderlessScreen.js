import React from 'react';
import {Text, View, Button} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

function HeaderlessScreen({navigation}) {
  return (
    <SafeAreaView>
      <View>
        <Text>Header가 없음</Text>
        {/*ios는 헤더가 없으면 뒤로가기를 사용할 수 없으므로 별도 버튼 필요*/}
        <Button onPress={() => navigation.pop()} title={'뒤로가기'} />
      </View>
    </SafeAreaView>
  );
}

export default HeaderlessScreen;
