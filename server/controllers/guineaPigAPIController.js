require('dotenv').config({path: './.env'});
var HTMLParser = require('node-html-parser');

class ScraperApi {
  constructor(){
    this.eventList= [];
    this.matchedFoods=[];
  }

  async guineaScraper(searchStr){
    try {
    const scraperapiClient = require('scraperapi-sdk')(process.env.KEY)
    let foodResult = await scraperapiClient.get('https://preciselypets.com/what-can-guinea-pigs-eat-safe-foods-list/')
    searchStr = this.capitaliseSearch(searchStr)
    foodResult = this.parseHTML(foodResult)
    this.guineaFoodResult(searchStr, foodResult)
    } catch (err) {
      console.log(err);
    }
   }

  capitaliseSearch(searchStr){
    return searchStr.charAt(0).toUpperCase() + searchStr.slice(1);
  }

  guineaFoodResult(searchStr,foodResult){
    const foodSearch = foodResult.querySelectorAll('h3')
    this.matchedFoods = [];
    const formatRegex=(/([A-Z])([A-Z])/g, '$1 $2');
    foodSearch.forEach(food=> {
      if (food.innerText.includes(searchStr)){
        let foodName = food.innerText;
        let foodContent = (food.nextElementSibling.textContent).replace(formatRegex)
        this.matchedFoods.push({foodName, foodContent});
      }
    })
    return this.matchedFoods;
  }

  
  async guineaEventsScraper(){
    try{
      const scraperapiClient = require('scraperapi-sdk')(process.env.KEY)
      let eventApiResult = await scraperapiClient.get('https://southerncavyclub.co.uk/show-dates/')
      eventApiResult = this.parseHTML(eventApiResult)
      this.guineaEventsResults(eventApiResult)
    } catch (err) {
      console.log(err);
    }
  }

  guineaEventsResults(eventApiResult){
    this.eventList = []
    let eventx = eventApiResult.querySelector('h4').nextElementSibling.nextElementSibling
    const removeWhitespaceRegex = /^\s+|\s+$|\s+(?=\s)/g;
    let events = []
      eventx = eventx.nextElementSibling
      events.push(eventx.textContent);
      for (let i = 0; i < 4; i++){
        eventx = eventx.nextElementSibling
        events.push(eventx.textContent)
      }
      let event = events.join('\n').replace(removeWhitespaceRegex, "")
      this.eventList.push({event})
      events = []
      for (let i = 0; i < 10; i++){
        eventx = eventx.nextElementSibling
        events.push(eventx.textContent)
      }
       event = events.join('\n').replace(removeWhitespaceRegex, "")
      this.eventList.push({event})
      return this.eventList
  }

  parseHTML(data){
    return HTMLParser.parse(data)
   }
}


// const scraper = new ScraperApi()
// scraper.guineaEventsScraper().then(()=>{console.log(scraper.eventList)})
module.exports = ScraperApi;
