// ЗАДАЧА 1

const text = document.querySelector("p");
text.innerText = "Привет, JavaScript!";

// ЗАДАЧА 2

const rootNode = document.querySelector(".root");

const stringsArray = ["рисунок", "пейзаж", "натюрморт", "портрет", "шарж"];
 
const commonList = document.createElement('ol');
const stringsNodeArray = stringsArray.map(word => {
    const newNode = document.createElement("li");
    newNode.innerText = word;
    return newNode;
    });

commonList.append(...stringsNodeArray);
rootNode.append(commonList);

// ЗАДАЧА 3

const linksNode = document.querySelector(".link");

const elements = [
       {
            link: "https://mail.ru",
            label: "Mail.ru"
       },
       {
           link: "https://amazon.de",
           label: "AMAZON"
       },
       {
           link: "https://mail.google.com",
           label: "GOOGLE MAIL"
       },
       ];
    
    const linksNodeArray = elements.map(({link, label}) => {
            const linkElemNode = document.createElement("a");
            linkElemNode.innerText = label;
            linkElemNode.href = link;
            linkElemNode.style.display = "block";
            return linkElemNode;           
         });
    
    linksNode.append(...linksNodeArray);

// Условие: Подготовьте массив из объектов со свойствами label и link. Создайте функцию, которая проходится циклом по этмоу массиву и создает ссылки, ведущие на link с содержимым label.