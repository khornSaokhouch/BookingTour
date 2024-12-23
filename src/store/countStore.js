import { create } from "zustand";

const useLocationStore = create((set) => ({
  locations: [],
  setLocation: (location) => set({ locations: [location] }), // Example implementation
  deleteLocation: (id) =>
    set((state) => ({
      locations: state.locations.filter((loc) => loc.id !== id),
    })),
  updateLocation: (location) =>
    set((state) => ({
      locations: state.locations.map((loc) =>
        loc.id === location.id ? location : loc
      ),
    })),
  addLocation: (location) =>
    set((state) => ({
      locations: [...state.locations, location],
    })),
}));

export default useLocationStore;
