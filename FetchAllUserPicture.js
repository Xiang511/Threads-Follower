
const fs = require('fs');
const puppeteer = require('puppeteer-core');


// 讀取 JSON 檔案
const filteredFollowingValuesdata = fs.readFileSync('filteredFollowingValues.json', 'utf8');

// 解析 JSON 資料
const filteredFollowingValues= JSON.parse(filteredFollowingValuesdata);

// 提取 value 值並組成新陣列
const valuesArray = filteredFollowingValues.map(item => item.value);

// 將新陣列寫入新的 JSON 檔案
fs.writeFileSync('values.json', JSON.stringify(valuesArray, null, 2));

console.log('提取完成，結果已寫入 values.json');







let not_found_list = []
async function getProfilePicture(username) {
  const browser = await puppeteer.launch({
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe', // 指定 Chrome 瀏覽器的路徑
    headless: true,
  });
  const page = await browser.newPage();
  await page.goto(`https://www.threads.net/${username}`, { waitUntil: 'networkidle2' });
  
  try {
    await page.waitForSelector('img[alt*="的大頭貼照"]', { timeout: 1000 });

  } catch (error) {
    console.log(`${username} not found`);
    not_found_list.push(username);
    await browser.close();
    return null;
  }

  const profilePictureElement = await page.$('img[alt*="的大頭貼照"]');
  const profilePictureUrl = await profilePictureElement.getProperty('src');
  const profilePictureUrlValue = await profilePictureUrl.jsonValue();

  // 下載抓取到的圖片
  const viewSource = await page.goto(profilePictureUrlValue);

  
  if (!fs.existsSync('profile_pictures')) {
    fs.mkdirSync('profile_pictures');
  }

  const filePath = `profile_pictures/${username}_profile_picture.png`;

  if (fs.existsSync(filePath)) {
    console.log(`${username} already exists!`);
    await browser.close();
    return profilePictureUrlValue;
  }

  fs.writeFile(filePath, await viewSource.buffer(), function (err) {
    if (err) {
      return console.log(err);
    }
    console.log(`${username} was saved!`);
  });

  await browser.close();

  return profilePictureUrlValue;
}

async function processUsernames(values) {
  for (const username of values) {
    const profilePictureUrl = await getProfilePicture(username);   
}
}
const data = fs.readFileSync('filteredFollowingValues.json', 'utf8');

// 解析 JSON 資料
const jsonData = JSON.parse(data);

// 遍歷每個物件並新增 profilePicture 屬性
jsonData.forEach(item => {
  item.profilePicture = `profile_pictures/${item.value}_profile_picture.png`;
});

// 將更新後的資料寫回 JSON 檔案
fs.writeFileSync('將這個檔案上傳至網站.json', JSON.stringify(jsonData, null, 2));

console.log('已新增 profilePicture 屬性並更新 filtered_following.json 檔案');

// 使用示例

//取的values.json的值
const  valuesdata = fs.readFileSync('values.json', 'utf8');
const values = JSON.parse(valuesdata);

processUsernames(values);
console.log(`總共有 " ${values.length} " 資料需要查詢`);
