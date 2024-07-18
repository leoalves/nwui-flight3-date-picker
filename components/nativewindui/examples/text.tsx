import { View } from 'react-native';

import { Text } from '~/components/nativewindui/Text';

function TextExample() {
  return (
    <View className="gap-2">
      <Text variant="largeTitle" className="text-center">
        Large Title
      </Text>
      <Text variant="title1" className="text-center">
        Title 1
      </Text>
      <Text variant="title2" className="text-center">
        Title 2
      </Text>
      <Text variant="title3" className="text-center">
        Title 3
      </Text>
      <Text variant="heading" className="text-center">
        Heading
      </Text>
      <Text variant="body" className="text-center">
        Body
      </Text>
      <Text variant="callout" className="text-center">
        Callout
      </Text>
      <Text variant="subhead" className="text-center">
        Subhead
      </Text>
      <Text variant="footnote" className="text-center">
        Footnote
      </Text>
      <Text variant="caption1" className="text-center">
        Caption 1
      </Text>
      <Text variant="caption2" className="text-center">
        Caption 2
      </Text>
    </View>
  );
}