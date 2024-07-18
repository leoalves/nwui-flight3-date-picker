import * as React from 'react';
import { View } from 'react-native';

import { DatePicker } from '~/components/nativewindui/DatePicker';

export function DatePickerExample() {
  const [date, setDate] = React.useState(new Date());
  return (
    <View className='items-center'>
      <DatePicker
        value={date}
        mode='datetime'
        onChange={(ev) => {
          setDate(new Date(ev.nativeEvent.timestamp));
        }}
      />
    </View>
  );
}