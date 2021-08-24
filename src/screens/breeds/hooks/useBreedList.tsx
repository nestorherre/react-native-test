import React, { useEffect, useState } from 'react'
import dogAPI from '../../../api/dogAPI';
import { BreedListResp } from '../../../api/interfaces/BreedListResp';

export const useBreedList = () => {
    
    const [breedList, setBreedList] = useState<string[]>()
    const [isLoading, setIsLoading] = useState(true)

    const getBreeds = async () => {
        const respList = await dogAPI.get<BreedListResp>('/breeds/list/all');
        
        setBreedList(Object.keys(respList.data.message));
        setIsLoading(false);
    }

    useEffect(() => {
        getBreeds();
    }, [])
    
    return {
        breedList,
        isLoading,
    }
}
