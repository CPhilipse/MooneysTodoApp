import React from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import * as styles from './header.style';
import Pages from '../../../../enum/Pages';
import Separator from '../../../../components/Separator';

const Header = ({navigation, data}) => {
  return (
    <>
      <View>
        <ScrollView contentContainerStyle={styles.container} horizontal showsHorizontalScrollIndicator={false}>
          {data.map(({id, category, todos}, i) => {
            return (
              <TouchableOpacity
                key={i}
                style={styles.categoryContainer}
                onPress={() =>
                  navigation.navigate(Pages.CATEGORY, {category, todos})
                }>
                <Text style={styles.category}>{category}</Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>
      <Separator />
    </>
  );
};

export default Header;
