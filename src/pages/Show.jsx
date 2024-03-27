import { Form, useLoaderData, Link } from "react-router-dom"


function Show(props) {

    const aPet = useLoaderData()
    // optional chaining `?.`
    const id = aPet?.url.split("/")[4]

    return (
        <div>
            <h1>{aPet.name}</h1>
            <h1>{aPet.age}</h1>
            
            <Form action={`/update/${id}/`} method="POST">
                <input type="text" id="name" name="name" defaultValue={aPet.name}/>
                <input type="number" id="age" name="age" defaultValue={aPet.name}/>
                <button>Update</button>
            </Form>

            <Form action={`/delete/${id}/`} method="POST">
                <button>Delete</button>
            </Form>

            <Link to="/">
                <button>go back</button>
            </Link>
            
        </div>
    )
}

export default Show