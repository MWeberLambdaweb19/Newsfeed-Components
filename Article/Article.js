// Because classes are not hoisted you will need to start your code at the bottom of the page.  Look for the comment "START HERE"

class ArticleClass {
  constructor(article) {
    // assign this.domElement to the passed in domElement
    this.article = article;
    // create a reference to the ".expandButton" class. 
    this.expandButton = this.article.querySelector('.expandButton');
    this.expandButton.innerText = "Click to Expand"
    this.closeButton = this.article.querySelector('.closeButton');
    // Using your expandButton reference, update the text on your expandButton to say "expand"
    this.expandArticle = this.expandArticle.bind(this);
    // Set a click handler on the expandButton reference, calling the expandArticle method.
    this.expandButton.addEventListener("click", () => this.expandArticle())
    this.closeButton.addEventListener("click", this.expandArticle)
  }

  expandArticle() {
    // Using our reference to the domElement, toggle a class to expand or hide the article.
    this.expandButton.classList.toggle('hide-btn')
    this.closeButton.classList.toggle('hide-btn')
    this.closeButton.innerText = "Click to Close"
    this.article.classList.toggle('article-open')
    console.log(this.article.classList)
    console.log(this.expandButton.classList)
    console.log(this.closeButton.classList)
  }
}

/* START HERE: 

- Select all classes named ".article" and assign that value to the articles variable.  

- With your selection in place, now chain .forEach() on to the articles variable to iterate over the articles NodeList and create a new instance of Article by passing in each article as a parameter to the Article class.

*/

let articles = document.querySelectorAll('.article');
articles.forEach(function(articleContent){
  return new ArticleClass(articleContent)
})

class ArticleWriter {
  constructor(articleStuff){
  this.h1 = articleStuff.h1;
  this.date = articleStuff.date;
  this.content = articleStuff.content;
  }
}

const ArticleNew = new ArticleWriter(
  {
  h1: [document.createElement('h1'), 'THIS ARTICLE TITLE'],
  date: [document.createElement('p'), new Date],
  content: [document.createElement('p'), "Content goes here ad nauseum"],
  }
)

console.log(ArticleWriter)
console.log(ArticleNew)