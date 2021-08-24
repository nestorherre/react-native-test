import React, { useEffect, useState } from 'react'
import {Image, Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import dogAPI from '../../../api/dogAPI';
import { BreedRandomImageResp } from '../../../api/interfaces/BreedRandomImageResp';
import { useNavigation } from '@react-navigation/native';
import { colors } from '../../../theme/appTheme';
import { defaultImage } from '../../../utils/constants';

interface Props {
    breed: string,
}

export const CustomImage = ({breed}: Props) => {

    const [imageUri, setImageUri] = useState(defaultImage);
    const [isLoading, setIsLoading] = useState(true)
    const navigation = useNavigation();
    
    var isMounted: boolean;
    
    const getBreedRandomImageURL = async () => {
        const resp = await dogAPI.get<BreedRandomImageResp>(`/breed/${breed}/images/random`);
        
        if (isMounted) {
            setImageUri(resp.data.message);
            setIsLoading(false);
        }
    }

    useEffect(() => {
        isMounted = true;
        getBreedRandomImageURL();

        return () => {
            isMounted = false;
        }
    }, [])

    return (
        <TouchableOpacity
            onPress={()=> navigation.navigate('DetailScreen', {breed: breed})}
            activeOpacity={0.9}
            style={styles.card}
        >   
            <View style={styles.imageContainer}>
                <Image
                    source={{
                        uri: imageUri
                    }}
                    style={styles.image}
                />
            </View>
            <Text style={styles.imageText}>{breed}</Text>
        </TouchableOpacity>
    )
}

export const styles = StyleSheet.create({
    card: {
        flex: 1,
        justifyContent: 'center',
        paddingVertical: 30,
    },
    imageContainer: {
        flex: 9,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.43,
        shadowRadius: 9.51,
        elevation: 15,
        borderRadius: 20,
    },
    image: {
        width: 280,
        flex: 1,
        borderRadius: 20,
        borderWidth: 3,
        borderColor: 'white'
    },
    imageText: {
        flex: 1,
        textAlign: 'center',
        color: colors.secondary,
        fontSize: 25,
        fontWeight: '800',
        textTransform: 'capitalize',
        marginTop: 5,
    }
});
