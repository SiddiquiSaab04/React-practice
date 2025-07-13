import { create } from "zustand";

const authStore = create((set) => ({
    user: (() => {
        try {
            const stored = sessionStorage.getItem("user");
            return stored ? JSON.parse(stored) : null;
        } catch (e) {
            console.error("Parse error 🚨:", e);
            return null;
        }
    })(),
    token: sessionStorage.getItem("token") || null,
    //global login function
    login: (userData, accessToken) => {
        sessionStorage.setItem('token', accessToken)
        sessionStorage.setItem('user', JSON.stringify(userData)); // 🔥

        set({ user: userData, token: accessToken })
    }
    //
}))

export default authStore;