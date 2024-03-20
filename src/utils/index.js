const api = 'http://localhost:3000'

export async function sendRequest(sendMethod, enpoint, data = null) {
    let url = `${api}/${enpoint}`
    let options = {
        method: sendMethod,
        headers: {
            'Content-Type': 'application/json'
        }
    }

    data ? (options.body = JSON.stringify(data)) : ''

    try {
        const response = await fetch(url, options)
        return await response.json()
    } catch (err) {
        console.log('Error: ' + err)
    }
}

const $ = (dom) => document.querySelector(dom)
const $$ = (doms) => document.querySelectorAll(doms)

const user = JSON.parse(localStorage.getItem('user')) ?? ''

export { $, $$, user }
