import { passwords } from "./passwords/passwords.js"

let topSecret = passwords[Math.floor(Math.random()*passwords.length)]

for (const password of passwords) {
    if (topSecret == password) {
        console.log(`Aha! I found you, ${password}.`)
    }
}