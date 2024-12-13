import { create } from "zustand";

const useConversation = create((set) => ({
	selectedConversation: null,
	setSelectedConversation: (selectedConversation) => set({ selectedConversation }), //like usestate, a value and a function to set the value
	messages: [],
	setMessages: (messages) => set({ messages }),
}));

export default useConversation;