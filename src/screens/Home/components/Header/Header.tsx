import React from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import * as styles from './header.style';
import Pages from '../../../../enum/Pages';
import Separator from '../../../../components/Separator';
import Icon from 'react-native-vector-icons/Ionicons';
import Icons from '../../../../enum/Icons';
import {colors, metrics} from '../../../../themes';
import {Category} from '../../../../types/data';

type Props = {
  navigation: any;
  data: Category[];
};

const Header = ({navigation, data}: Props) => {
  return (
    <>
      <View>
        <ScrollView
          contentContainerStyle={styles.container}
          horizontal
          showsHorizontalScrollIndicator={false}>
          <TouchableOpacity
            style={styles.categoryContainer}
            onPress={() => navigation.navigate(Pages.ADD_CATEGORY)}>
            <Icon
              name={Icons.ADD}
              size={metrics.icons.small}
              color={colors.black}
            />
          </TouchableOpacity>
          {data.map(({id, category, todos}, i) => {
            return (
              <TouchableOpacity
                key={i}
                style={styles.categoryContainer}
                onPress={() =>
                  navigation.navigate(Pages.CATEGORY, {
                    category,
                    catId: id,
                    todos,
                  })
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
