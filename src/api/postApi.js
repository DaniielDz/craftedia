const API_URL = "http://localhost:3000/api/post"

export const create = async (formData, images) => {
    try {
        const {
            title,
            category,
            firstTxt,
            secondTxt,
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
                category,
                firstTxt,
                secondTxt,
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

export const getAll = async (page) => {
    try {
        const response = await fetch(`${API_URL}?page=${page}&limit=10`)
        const data = await response.json()

        if (!response.ok) {
            throw new Error(data.message || "Error al obtener los datos")
        }

        return data
    } catch (error) {
        throw new Error(error.message || "Error de conexión con el servidor")
    }
}