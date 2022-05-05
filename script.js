const header = document.querySelector('#header')
const intro = document.querySelector('#intro')
const skills = document.querySelector('#skills')
const randomQuote = document.querySelector('#quote')

const quotes = ['"I walk slowly but never backwords" -- Abraham Lincoln','"Those who dare to fail miserably can achieve greatly"--John F. Kennedy','"Only in darkness can you see the stars"-- Dr Martin Luther King Jr','"If everbody is thinking alike, then somebody isnt thinking"-- George S. Patton',"“A true hero isn’t measured by the size of his strength, but by the size of his heart.” --Zeus, Disney's Hercules",'"Try not to become a person of success, but rather try to become a person of value." -- Albert Einstein"',' "It is not the strongest of the species that survive, nor the most intelligent, but the one most responsive to change." -- Charles Darwin']
let randomIndex = Math.floor(quotes.length * Math.random());





header.textContent = "My Portfolio"
intro.textContent = "My name is Jesus Oyervides jr, I am currently a student in the UT full stack software development bootcamp. Welcome to my portfolio page! I am excited to show you what projects I have worked on."
skills.textContent="The current languages I know thus far are, HTML, CSS and Javascript. I am currently learning Node.js and will learn many more. Please explore my page to see what I've worked on."

randomQuote.textContent=quotes[randomIndex]



console.log(quotes[randomIndex])





