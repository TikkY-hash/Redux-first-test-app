export default class fakeBookData {

    books = [
        {
            id : 1,
            title : "Production-Ready Microservices",
            author : "Susan J.Flower",
            price : 32,
            image : "https://images-na.ssl-images-amazon.com/images/I/71kPW3SLQSL.jpg"
        },
        {
            id : 2,
            title : "Release It!",
            author : "Michael T.Nygard",
            price : 45,
            image : "https://kupichitay.com.ua/wp-content/uploads/2020/03/u_files_store_3_694640.jpg"
        }
    ]

    getBookData =  async () => {
        return await this.books
    }

}