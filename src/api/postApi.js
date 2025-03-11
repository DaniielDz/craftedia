const API_URL = "http://localhost:3000/api/post"

export const create = async (formData, images) => {
    try {
        const {
            title,
            path,
            firstTxtField,
            secondTxtField,
            progress,
            version,
            resolution,
            optifine,
            download,
            seconds,
            tags,
            embed } = formData

        const response = await fetch(API_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                title,
                path,
                firstTxtField,
                secondTxtField,
                progress,
                version,
                resolution,
                optifine,
                download,
                seconds,
                tags,
                embed,
                gallery: images
            })
        })
        const data = await response.json()

        return data.message
    } catch (error) {
        throw new Error(error || "Error de conexión con el servidor")
    }
}

export const getById = async (id) => {
    try {
        const response = await fetch(`${API_URL}/${id}`)
        const data = await response.json()

        if (!response.ok) {
            return data.message
        }

        return data.data
    } catch (error) {
        throw new Error(error || "Error de conexión con el servidor")
    }
}

export const getAll = async (page = 1, path = '') => {
    try {
        const response = await fetch(`${API_URL}?page=${page}&limit=10&path=${path}`)
        const data = await response.json()

        if (!response.ok) {
            throw new Error(data.message || "Error al obtener los datos")
        }

        return data
    } catch (error) {
        throw new Error(error.message || "Error de conexión con el servidor")
    }
}

export const update = async (id, changedFields, newImages) => {
    const response = await fetch(`${API_URL}/${id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            ...changedFields, // Campos modificados
            newImages, // Imágenes nuevas
        }),
    });

    if (!response.ok) {
        throw new Error("Error al actualizar el post");
    }

    const data = await response.json();
    return data.message; // Mensaje de éxito
};

export const deletePost = async (id) => {
    try {
        const response = await fetch(`${API_URL}/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (!response.ok) {
            const data = await response.json();
            throw new Error(data.message || "Error al eliminar el post");
        }

        const data = await response.json();
        return data;
    } catch (error) {
        throw new Error(error.message || "Error de conexión con el servidor");
    }
}