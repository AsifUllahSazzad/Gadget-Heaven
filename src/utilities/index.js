// Add to Card
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

    if(!value) return;

    const localSt = getStoredData(type);

        localSt.push(value);
    
        const localStorageSave = JSON.stringify(localSt);
    
        localStorage.setItem(type, localStorageSave);

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