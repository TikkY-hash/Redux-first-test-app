export default class bookDataBase {
     getBookData = async () => {
        const data = await fetch('http://localhost:8000/books')

        if(!data.ok) {
            throw new Error(`Something going wrong, status ${data.status}`)
        }

        return await data.json()
    }
}