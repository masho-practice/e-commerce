import {create} from 'zustand';
import axios from 'axios';

const useProductStore = create((set)=> ({
    products: [],
    loading: false,
    error: null,

    fetchProducts: async () => {
        set({ loading: true, error: null});
        try {
            const response = await axios.get('https://dummyjson.com/products');
            
            set({products:response.data.products, loading:false});
        } catch (error) {
            set({error:"Failed to fetch products", loading:false})            
        }        
    },

    fetchProduct: async (id) => {
        set({Loading: true, error: null})
        try {
            const response = await axios.get(`https://dummyjson.com/products/${id}`);
            set({product: response.data, loading:false})
        } catch (error) {
            set({error:'failed to fetch product', loading: false})            
        }
    }
}))

export default useProductStore;