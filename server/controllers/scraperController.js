require('dotenv').config({path: './.env'});
var HTMLParser = require('node-html-parser');

class ScraperApi {
  constructor(){
    this.eventList= [];
    this.matchedFoods=[];
  }

  async ratFoodScraper(searchStr){
    try {
    const scraperapiClient = require('scraperapi-sdk')(process.env.KEY)
    let foodResult = await scraperapiClient.get('http://www.isamurats.co.uk/vegetables-and-fruits.html')
    searchStr = this.capitaliseSearch(searchStr)
    foodResult = this.parseHTML(foodResult)
    this.ratFoodResults(searchStr, foodResult)
    } catch (err) {
      console.log(err);
    }
   }

  capitaliseSearch(searchStr){
    return searchStr.charAt(0).toUpperCase() + searchStr.slice(1);
  }

  ratFoodResults(searchStr, foodResult){
    const foodSearch = foodResult.querySelectorAll('strong');
    this.matchedFoods = [];
    foodSearch.forEach(food=> {
      if (food.textContent.includes(searchStr)){
        let foodName = food.textContent;
        let foodContent = (food.nextSibling).textContent;
        this.matchedFoods.push({foodName, foodContent});
      }
    })
    return this.matchedFoods;
  }

  
  async ratEventsScraper(){
    try{
      const scraperapiClient = require('scraperapi-sdk')(process.env.KEY)
      let eventApiResult = await scraperapiClient.get('https://www.nfrs.org/shows/next/')
      eventApiResult = this.parseHTML(eventApiResult)
      this.ratEventsResults(eventApiResult)
    } catch (err) {
      console.log(err);
    }
  }

  ratEventsResults(eventApiResult){
    let totalShows = this.showCalculator(eventApiResult)
    const removeWhitespaceRegex = /^(?=\n)$|^\s*|\s*$|\n\n+/gm;
    eventApiResult = eventApiResult.querySelector('p').nextElementSibling;
    let event = (eventApiResult.textContent.replace(removeWhitespaceRegex, ""));
    this.eventList = [];
    this.eventList.push({event})
    for (let i = 0; i < 6; i++){
      eventApiResult = eventApiResult.nextElementSibling;
      event = (eventApiResult.textContent.replace(removeWhitespaceRegex, ""));
      this.eventList.push({event})
    }
    // this.eventList = JSON.parse(this.eventList)
    return this.eventList
  }

  showCalculator(data){
    let showsNum = data.querySelector('h2').textContent
    const findIntegerRegex = /\d+/g;
    showsNum = showsNum.match(findIntegerRegex);
    showsNum = parseInt(showsNum.join(""));
    return showsNum;
  }

  parseHTML(data){
    return HTMLParser.parse(data)
   }
}

// const scraper = new ScraperApi();

// scraper.ratFoodScraper("Apple").then(()=>{
//   scraper.matchedFoods.forEach(food=>{
//     console.log(food.join('\n'))
//   });
// })

// scraper.ratEventsScraper().then(()=>{
//   console.log(scraper.eventList)
//   // scraper.eventList.forEach(item => console.log(item))
// })


module.exports = ScraperApi;
