import axios from 'axios'

const ExchangeService = {

    async fetchData() {
        return new Promise(async(resolve, reject) => {
            const url = 'http://localhost:5000/api/v1/exchanges'
            const headers = {
                'x-access-token': localStorage.getItem('token')
            }
            await axios.get(url, { headers: headers })
                .then((res) => {
                    resolve(res.data)
                })
                .catch((error) => {
                    console.log("Errorrr", error);
                    reject(error)
                });
        })
    },

    async getDolars() {
        return new Promise(async(resolve, reject) => {
            const url = 'https://s3.amazonaws.com/dolartoday/data.json'
            await axios.get(url)
                .then((res) => {
                    resolve(res['data']['USD']);
                })
                .catch((error) => {
                    console.log(error);
                    reject(error);
                })
        })
    }
}

export default ExchangeService;