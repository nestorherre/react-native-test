import React from 'react'
import { ActivityIndicator, Dimensions, StyleSheet, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useBreedList } from './hooks/useBreedList'
import { CustomImage } from './components/BreedCard';
import Carousel from 'react-native-snap-carousel'
import { colors, globalStyles } from '../../theme/appTheme';


const windowWidth = Dimensions.get('window').width;

export const BreedsScreen = () => {
    const {breedList, isLoading} = useBreedList();

    return (
        <SafeAreaView style={globalStyles.container}>

            <Text style={globalStyles.headerText}>Descubre</Text>

            { isLoading ? 
                <ActivityIndicator size={40} color={colors.primary}/> : 
                <Carousel
                    data={breedList!}
                    renderItem={
                        ({item}: any) => 
                            <CustomImage breed={item} />
                             }
                    sliderWidth={windowWidth}
                    itemWidth={280}
                    inactiveSlideOpacity={0.85}
                />
            }
        </SafeAreaView>
    )
}
