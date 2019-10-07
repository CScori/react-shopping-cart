context makes it more difficult

a way to overcome prop drilling

consumer and provider passed high level// wrapped around the app so all can pull without passing

take a state amd pass child comp

const [name, setName] = useState('')

pass as prop // as is or as new comp fl
const person = (props) => {
    return <h1>{props.name}</h1>
}


const PersonContext = createContext(); <this creates context object - this returns provider and consumer -- they are objects to be wrapped


<PersonContext.Provider> <this is normal wrapping>
<Person name={name}>
<PersonContext.Provider>

or destructure 
const {Provider} = PersonContext
<Provider> <this is less common>
<Person name={name}>
<=Provider>

PASSING
<PersonContext.Provider value={name}>


CONSUMING in Context === minus props

const Person = () => {
    const name = useContext(PersonCOntext< this is where we pass props)
}

if the context is opject / objects cant be rendered without spacing person.name