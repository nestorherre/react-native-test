import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { ActivityIndicator, FlatList, Image, Text, View, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'
import { RootStackParams } from '../../navigation/StackNavigation'
import { globalStyles, colors } from '../../theme/appTheme';
import { useImagesURL } from './hooks/useImagesURL'

interface Props extends StackScreenProps<RootStackParams,'DetailScreen'>{};

export const DetailScreen = ({route}: Props) => {
    const breed = route.params.breed;

    const {imagesURLList, isLoading} = useImagesURL(breed);

    return (
        <SafeAreaView style={globalStyles.container}>
            <Text style={globalStyles.headerText}>{breed}</Text>
            { isLoading ? 
                <ActivityIndicator size={40} color={colors.primary}/> : 
                <FlatList
                    data={imagesURLList}
                    renderItem={
                        ({item}: any) =>
                            <View style={styles.imageContainer}>
                                <Image 
                                source={{uri: item}}
                                style={styles.image}
                                />
                            </View> 
                            
                             }
                    numColumns={2}
                />
            }
        </SafeAreaView>
    )
}

export const styles = StyleSheet.create({
    imageContainer: {
        paddingHorizontal: 10,
        paddingBottom: 20,
        flex: 1,
    },
    image: {
        height: 250,
        borderRadius: 20,
    }
});