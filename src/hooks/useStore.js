import create from 'zustand';
import { persist } from 'zustand/middleware';

const useStore = create(
  persist(
    (set) => ({
      toggleSidebar: true,
      setToggleSidebar: (toggle) => set({ toggleSidebar: toggle }),
   
      appMode: '',
      setAppMode: (theme) => set({ appMode: theme }),

      appThemeColor: "redish",
      setAppThemeColor: (color) => set({ appThemeColor: color }),

      isLogin: "",
      setIsLogin: (data) => set({isLogin: data}),
    }),
    {
      name: 'zustand-state', 
      getStorage: () => localStorage,
    }
  )
);

export default useStore;
