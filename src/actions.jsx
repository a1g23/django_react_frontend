import { redirect } from "react-router-dom";

const URL = import.meta.env.VITE_BASE_URL 

// Create Action

export const createAction = async({request}) => {
    console.log("here")
    //get form data
    const formData = await request.formData()

    // construct request body
    const newPet = {
        name: formData.get("name"),
        age: formData.get("age")
    }

    // send request to our backend
    await fetch(`${URL}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newPet)
    })

    //redirect 
    return redirect("/")
}


// Update Action
export const updateAction = async({request, params}) => {
    //get the formdata
    const formData = await request.formData()
    //get the pet id
    const id = params.id
    // construst new pet
    const updatedPet = {
        name: formData.get("name"),
        age: formData.get("age")
    }
    // send request to backend
    await fetch(`${URL}${id}/`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(updatedPet)
    })
    // redirect to index page
    return redirect(`/pets/${id}`)
}


// Delete Action

export const deleteAction = async({params}) => {
    //get the pet id
    const id = params.id
    // send request to backend
    await fetch(`${URL}${id}/`, {
        method: "DELETE"
    })
    // redirect to index page
    return redirect("/")
}