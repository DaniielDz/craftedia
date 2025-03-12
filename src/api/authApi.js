const API_URL = "http://localhost:3000/api/auth";

export const loginRequest = async (username, password) => {
    try {
        const response = await fetch(`${API_URL}/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            credentials: "include", // Incluye las cookies en la solicitud
            body: JSON.stringify({ username, password }),
        });

        if (!response.ok) {
            let errorData = {}
            try {
                errorData = await response.json()
            } catch (parseError) {
                errorData.message = `Error ${response.status}: ${response.statusText}`
            }
            throw new Error(errorData.message || "Error en el login");
        }
        return response.json();
    } catch (error) {
        throw new Error(error.message || "Error de conexión con el servidor")
    }
};

export const singUpRequest = async (username, password) => {
    try {
        const response = await fetch(`${API_URL}/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            credentials: "include",
            body: JSON.stringify({ username, password }),
        });

        if (!response.ok) {
            let errorData = {}
            try {
                errorData = await response.json()
            } catch (parseError) {
                errorData.message = `Error ${response.status}: ${response.statusText}`
            }
            throw new Error(errorData.message || "Error en el login");
        }

        return response.json();
    } catch (error) {
        throw new Error(error.message || "Error de conexión con el servidor")
    }
};

export const logoutRequest = async () => {
    try {
        const response = await fetch(`${API_URL}/logout`, {
            method: "POST",
            credentials: "include", // Incluye las cookies en la solicitud
        });
        if (!response.ok) {
            let errorData = {}
            try {
                errorData = await response.json()
            } catch (parseError) {
                errorData.message = `Error ${response.status}: ${response.statusText}`
            }
            throw new Error(errorData.message || "Error en el login");
        }

        return response.json();
    } catch (error) {
        throw new Error(error.message || "Error de conexión con el servidor")
    }
};

export const checkAuthStatus = async () => {
    try {
        const response = await fetch(`${API_URL}/check-auth`, {
            credentials: "include",
        });

        if (!response.ok) {
            let errorData = {}
            try {
                errorData = await response.json()
            } catch (parseError) {
                errorData.message = `Error ${response.status}: ${response.statusText}`
            }
            throw new Error(errorData.message || "Error en el login");
        }

        return response.json();
    } catch (error) {
        throw new Error(error.message || "Error de conexión con el servidor")
    }
};