import Pet from '../components/Pet'
import { useLoaderData, Form } from 'react-router-dom'


function Index(props) {
    const allPets = useLoaderData()

    return (
        <div>
            <h1>Who's the new guy?</h1>
            <Form action="/create" method="post">
                <input type="text" name="name" id="name" placeholder="name of pet" />
                <input type="text" name="age" id="age" placeholder="age of pet"/>
                <button>Create</button>
            </Form>
            <hr />
            {allPets.map((pet, i) => <Pet pet={pet} key={i}/>)}
        </div>
        
    )
}

export default Index