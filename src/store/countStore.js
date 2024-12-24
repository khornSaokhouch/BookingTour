import { create } from "zustand";

const useLocationStore = create((set, get) => ({
  locations: [
    {
      id: 1,
      nameLocation: "Se",
      status: "status",
    },
  ],
  lastId: 1, // Initialize lastId with the highest existing ID

  setLocation: (location) =>
    set((state) => {
      const updatedLocations = [...state.locations];
      const index = updatedLocations.findIndex((loc) => loc.id === location.id);
      if (index !== -1) {
        updatedLocations[index] = location; // Update existing location
      } else {
        const newId = get().lastId + 1;
        const newLocation = { ...location, id: newId };
        updatedLocations.push(newLocation); // Add new location
        return { locations: updatedLocations, lastId: newId };
      }
      return { locations: updatedLocations };
    }),

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
    set((state) => {
      const newId = get().lastId + 1;
      const newLocation = { ...location, id: newId };
      return {
        locations: [...state.locations, newLocation],
        lastId: newId,
      };
    }),
}));

export default useLocationStore;
