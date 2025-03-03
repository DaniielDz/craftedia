const API_URL = "http://localhost:3000/api/auth";

// Login
export const loginRequest = async (email, password) => {
    const response = await fetch(`${API_URL}/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        credentials: "include", // Incluye las cookies en la solicitud
        body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
        throw new Error("Error en el login");
    }

    return response.json();
};

// Logout
export const logoutRequest = async () => {
    const response = await fetch(`${API_URL}/logout`, {
        method: "POST",
        credentials: "include", // Incluye las cookies en la solicitud
    });

    if (!response.ok) {
        throw new Error("Error en el logout");
    }

    return response.json();
};

export const checkAuthStatus = async () => {
    const response = await fetch(`${API_URL}/check-auth`, {
        credentials: "include", // Incluye las cookies en la solicitud
    });

    if (!response.ok) {
        // Si la respuesta no es exitosa, lanza un error con el mensaje del backend
        const errorData = await response.json(); // Parsea la respuesta JSON del backend
        throw new Error(errorData.message || "Error verificando autenticación");
    }

    return response.json();
};