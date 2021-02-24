const playwright = require('playwright');

(async () => {

    const browser = await playwright.firefox.launch({
        "headless": false,
        "slowMo": 50
    });
    //Page
    const page = await browser.newPage();

    await page.goto('https://uppy.io/examples/xhrupload/', { "waitUntil": 'networkidle' });

    const handle = await page.$('input[type="file"]');
    await handle.setInputFiles("C:/Users/karth/Downloads/ea.JPG")
 
    //await browser.close();

})();