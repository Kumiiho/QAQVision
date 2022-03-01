const {
    Builder,
    By,
    Key,
    until,
    Capabilities
} = require("selenium-webdriver");

const remote = require ('selenium-webdriver/remote')
const caps = new Capabilities();
caps.setPageLoadStrategy("eager");

function sleep(time)
      {
      return new Promise((resolve)=>{
      setTimeout(() => {
      console.log('Pause '+time+' ms'); 
      resolve();
      }, time);
 })}
 (async function pruebaQa() {
    let driver = await new Builder().forBrowser('chrome').build();
   
    await driver.manage().window().setRect({
        width: 1300,
        height: 720
    });
})();