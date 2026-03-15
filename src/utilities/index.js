// Old data save:
const getStoredData = () =>{
    const storeData = localStorage.getItem('Cart');

    if(storeData){
        return JSON.parse(storeData);
    }
    return [];
}

// Add a product to local storage
const addData = (value) =>{
    const localSt = getStoredData();

        localSt.push(value);
    
        const localStorageSave = JSON.stringify(localSt);
    
        localStorage.setItem('Cart', localStorageSave);

    }

// Remove product from local storage
    const removeData = (id) =>{
        const getData = getStoredData();
        
        const index = getData.findIndex((data) => data.id === id)

        if(index !== -1){
            getData.splice(index, 1);
        }
    
        localStorage.setItem('Cart', JSON.stringify(getData));
    }

export {addData, getStoredData, removeData};