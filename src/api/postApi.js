const API_URL = "http://localhost:3000/api/post"

export const create = async (postType, formData, images) => {
    try {
        const response = await fetch(API_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                postType: postType,
                formData: formData,
                gallery: images
            })
        })
        const data = await response.json()

        return data.message
    } catch (error) {
        throw new Error(error || "Error de conexión con el servidor")
    }
}

export const getById = async (type, id) => {
    try {
        const response = await fetch(`${API_URL}/${id}?type=${type}`)
        const data = await response.json()
        

        if (!response.ok) {
            return data.message
        }

        return data.data
    } catch (error) {
        throw new Error(error || "Error de conexión con el servidor")
    }
}

export const getAll = async (type, page = 1, path = '', title = '') => {
    try {
        const response = await fetch(`${API_URL}?type=${type}&page=${page}&limit=10&path=${path}&title=${title}`)
        const data = await response.json()

        if (!response.ok) {
            throw new Error(data.message || "Error al obtener los datos")
        }

        return data
    } catch (error) {
        throw new Error(error.message || "Error de conexión con el servidor")
    }
}

export const update = async (id, type, changedFields, gallery, newTags) => {  
    const response = await fetch(`${API_URL}/${id}?type=${type}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            updatedFields: changedFields, 
            gallery,
            newTags
        }),
    });

    if (!response.ok) {
        throw new Error("Error al actualizar el post");
    }

    const data = await response.json();
    return data.message; // Mensaje de éxito
};

export const deletePost = async (id, type) => {
    try {
        const response = await fetch(`${API_URL}/${id}?type=${type}`, {
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