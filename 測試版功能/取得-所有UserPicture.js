
const fs = require('fs');
const puppeteer = require('puppeteer-core');

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
fs.writeFileSync('data.json', JSON.stringify(jsonData, null, 2));

console.log('已新增 profilePicture 屬性並更新 filtered_following.json 檔案');

// 使用示例
const values = [
  "a56619091",
  "jayway_0511",
  "goodnightpoem",
  "shanete0122",
  "joyce_.i",
  "bai910110",
  "1018__wen",
  "kikilalakuku",
  "octans_99",
  "nueve.l7",
  "_66hui_",
  "eason1233",
  "bbh.0915",
  "gu_taiwan",
  "julie11_19",
  "casper90920",
  "felirafelira",
  "kim131924",
  "jefflee4",
  "funnycute8857",
  "77hu.__",
  "__alantai",
  "ponji8787",
  "__yang_28",
  "web_talks",
  "yoyo__0122",
  "chin.0217",
  "treeholehk.psychology",
  "shenghsingao",
  "jygh__en",
  "ph_hsuan_",
  "0923_chan",
  "arthur900224y",
  "cumeizi",
  "___ruizhen___",
  "bapa_nike",
  "simpsons__meme",
  "loneeeeer",
  "yumao.904",
  "han910319",
  "__yonghuan",
  "yukai__1104",
  "_zhu.1022",
  "dfg12030339",
  "du_du.ll2l",
  "tungmoneng",
  "gonsakon",
  "kkkkkkkkkouo",
  "deer.27.lu",
  "yu_wen0211",
  "momohuang9057",
  "yirou_____",
  "meow.meme.w",
  "this.web",
  "_____qing_",
  "chou_billy",
  "github",
  "weixiang5471",
  "kled911221",
  "hungshihshieng",
  "nicole_891228",
  "xing_y1n0914",
  "pc_08_07",
  "fetalkpodcast",
  "chiyun_0414",
  "1crazy_monkey",
  "_spongebob_meme_0714",
  "janes_zzz",
  "loser74147414",
  "cyxi_0318",
  "doctormeme_tw",
  "whylin4170",
  "dacon.come",
  "luzi5486",
  "sdkxw1",
  "_yuutting",
  "chen.zheng.yuan",
  "t.studio_design",
  "sp_v4s_1012",
  "zhao12.83",
  "92_eter",
  "liu_xian_1210",
  "ansonwei14",
  "youenluuuuu",
  "joanne910220",
  "chang_ye",
  "jh_.0808",
  "hung___1129",
  "alan_chen_0719",
  "919hank",
  "alan.12.28",
  "posey_1689",
  "yyyilin_10",
  "188._.lyh",
  "worldofivo",
  "clashroyale",
  "hfw8623",
  "ching1122__",
  "lily_peiting",
  "cjw230922",
  "x.i.a.o_0223",
  "boss_s0808",
  "yin_bella1",
  "shami.yo_",
  "kkss12345834",
  "zhe_0214",
  "_poison0805",
  "caiyu_lin_dais",
  "ke_09_13",
  "artmajeur",
  "h.appypotato",
  "yen_09.25",
  "eva_art1998",
  "xzav.__.ier.__.824",
  "leeyou328",
  "lr.ene77",
  "reginasorr",
  "sarah20011209",
  "jason_10.12",
  "xue_zhang_0714",
  "good_memerep",
  "loboeric_",
  "fanting06_09",
  "yan_hong_0811",
  "zih_wun",
  "christine_020711",
  "ao_munchkincat",
  "54junying",
  "xiaohan_0527",
  "zhang_jian_0422",
  "owen_lin106",
  "peiyin_0630",
  "__daiyu",
  "yoyu_0.35",
  "redtea.1012",
  "imy.910220",
  "bohan_huang_0822",
  "tigra9337",
  "_jian06",
  "justin_91530",
  "wei.zhi_",
  "07.05_han",
  "yulin__1218",
  "wadeari0723",
  "cai_jt014596",
  "james.lu6764",
  "yu_xin_0125",
  "hua.0526",
  "sakuame0422",
  "tongsyue_jou_mei",
  "chipai_1218",
  "dogg_w_i_e",
  "li_yong_ren",
  "yoooooio123",
  "oneminlaw",
  "incrediville_tw",
  "wanchiger",
  "beer_o2o8",
  "christwu__",
  "tianyangge",
  "baxuan_ig",
  "egg_things",
  "shinybearnrd",
  "wofulcibei",
  "kobepsychology",
  "taurustw88",
  "onece.chungsir",
  "onece.co",
  "__dooing__",
  "s.yukichii",
  "beginneros",
  "kote218",
  "eisland.tw",
  "discovery",
  "inves_engineer",
  "chomiputi",
  "kome_komecha",
  "_maron_fran",
  "str_network",
  "wordssharinghouse",
  "sparksine",
  "superbadpainter",
  "cat_silva.s",
  "oilheadjunior",
  "lonely.crocodile",
  "shuyu.minmin",
  "yogusuke",
  "miugram0126",
  "godgwawa",
  "yu_xuan_0228",
  "alain_cat",
  "youfat_tw",
  "dcard.tw",
  "kan.ch_o",
  "zhyen__",
  "dear.mycats",
  "joanne901221",
  "lum0403",
  "wolf900219",
  "jerrynn12",
  "plainlaw.me",
  "poenchen0509",
  "9n.731",
  "ddo_o_da",
  "haru.200308",
  "wordup_tw",
  "1117meow",
  "milo.akamaimu",
  "ragdoll.baron",
  "super_fish2020_",
  "chinkaopei",
  "dear.mir_",
  "dreamsubmarine",
  "nekonoyomogi",
  "hatto0112",
  "plainme_life",
  "belly_mm",
  "ttshow.you",
  "tangtang.shortlegs",
  "sonicrockkimo",
  "shirasu_nya",
  "shizuwarahinata",
  "timon_wang",
  "key.y1102",
  "jie_zhi_y",
  "wooo_1119",
  "hellohorlung",
  "fun860611",
  "tunamayo_1124",
  "puffymoney_",
  "fuu_fusagoro",
  "unico_uniuni",
  "__merryday",
  "purinharumaki_karameru",
  "lesiswei5523",
  "613perfect_boy182",
  "commonwealth_magazine",
  "clover_roy",
  "yu900911",
  "__yi.0_1016",
  "bugcat_capoo",
  "dric",
  "ballchi_meow",
  "___dsdaily___",
  "a_nya.0606",
  "allure.lynn152style",
  "foongyixin.ba",
  "whitechubbs",
  "spongepaige",
  "lativ_ig",
  "mister_phobia",
  "nicoleclcw",
  "wei._1025",
  "jks_shop",
  "omochi__0726",
  "kabosu0425",
  "marumaru06260908",
  "peanut.britishcat",
  "fighterstudiohk1",
  "meimeimei1022",
  "papaya.cat",
  "__ao.siberian__",
  "janjan_20210503",
  "blesseddaynotes",
  "eeveeandyoshi",
  "diaryofollie",
  "r_po0608",
  "techgeekz.official",
  "mashu.cat",
  "coding_comedy",
  "achrafcodes",
  "coconut.___________",
  "uye_doka",
  "v.chiou",
  "bryan.___.77",
  "battlebots",
  "nitpinnnn_1225",
  "wumeon"
]
processUsernames(values);
console.log(`總共有 " ${values.length} " 資料需要查詢`);
