import toast from 'react-hot-toast';

// Add to Card & Whishlist
// Old data save:
const getStoredData = (type) =>{
    const storeData = localStorage.getItem(type);


    if(storeData){
        return JSON.parse(storeData);
    }
    return [];
}

// Add a product to local storage
const addData = (value, type) =>{

    const localSt = getStoredData(type);

    if(type === 'wishlist'){
        const isExist = localSt.find((d) => d.id === value.id);

        if(isExist){
            toast.error('This item is already in your wishlist.');
        }
        else{
            localSt.push(value);
    
            const localStorageSave = JSON.stringify(localSt);
    
            localStorage.setItem(type, localStorageSave);
        }
    }

    if(type === 'cart'){
        localSt.push(value);
    
        const localStorageSave = JSON.stringify(localSt);
    
        localStorage.setItem(type, localStorageSave);
    }

}

// Remove product from local storage
    const removeData = (id, type) =>{
        const getData = getStoredData(type);
        
        const index = getData.findIndex((data) => data.id === id)

        if(index !== -1){
            getData.splice(index, 1);
        }
    
        localStorage.setItem(type, JSON.stringify(getData));
    }

export {addData, getStoredData, removeData};