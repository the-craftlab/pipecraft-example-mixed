import { renderHome } from '../src/frontend/app.js'
import { handleRequest } from '../src/backend/server.js'
if (renderHome() !== '<h1>Home</h1>') { throw new Error('frontend fail') }
if (handleRequest().status !== 200) { throw new Error('backend fail') }
console.log('ok')
