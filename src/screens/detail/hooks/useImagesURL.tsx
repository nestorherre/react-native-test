import React, { useEffect, useState } from 'react'
import dogAPI from '../../../api/dogAPI';
import { BreedImagesResp } from '../../../api/interfaces/BreedImagesResp';

export const useImagesURL = (breed: string) => {
    
    const [imagesURLList, setImagesURLList] = useState<string[]>()
    const [isLoading, setIsLoading] = useState(true)

    const getImagesURLList = async () => {
        const resp = await dogAPI.get<BreedImagesResp>(`/breed/${breed}/images`);

        setImagesURLList(resp.data.message);
        setIsLoading(false);
    }

    useEffect(() => {
        getImagesURLList();
    }, [])
    
    return {
        imagesURLList,
        isLoading,
    }
}
