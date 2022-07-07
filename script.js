const header = document.querySelector('#header')
const intro = document.querySelector('#intro')
const skills = document.querySelector('#skills')
const randomQuote = document.querySelector('#quote')

const quotes = ['"I walk slowly but never backwords" -- Abraham Lincoln','"Those who dare to fail miserably can achieve greatly"--John F. Kennedy','"Only in darkness can you see the stars"-- Dr Martin Luther King Jr','"If everbody is thinking alike, then somebody isnt thinking"-- George S. Patton',"“A true hero isn’t measured by the size of his strength, but by the size of his heart.” --Zeus, Disney's Hercules",'"Try not to become a person of success, but rather try to become a person of value." -- Albert Einstein"',' "It is not the strongest of the species that survive, nor the most intelligent, but the one most responsive to change." -- Charles Darwin']
let randomIndex = Math.floor(quotes.length * Math.random());





header.textContent = "Welcome, "
intro.textContent = "My name is Jesus Oyervides jr, I am a proactive and personable aspiring full-stack web developer currently pursuing a Web Development Boot Camp professional certification from the University of Texas in Austin. A strong team player and proven leader, taking point on multiple group projects. Passionate about web development, and a quick learner of web development technologies."
skills.textContent="I am skilled and familiar with many web based technologies that are necessary for full stack development. Technologies such as Javascript, node.js, MySQL, Sequelize, Express.js and Express-sessions."

randomQuote.textContent=quotes[randomIndex]



console.log(quotes[randomIndex])





