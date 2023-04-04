const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = 1025
canvas.height = 650

c.fillStyle = 'white'
c.fillRect(0, 0, canvas.width, canvas.height)

let y = 150

function animate() {
    window.requestAnimationFrame(animate)
    c.fillStyle = 'white'
    c.fillRect(0, 0, canvas.width, canvas.height)
    
    c.fillStyle = 'red'
    c.fillRect(200, y, 100, 100)
    y++
}

animate()
