const stations = [
  '東京',
  '品川',
  '新横浜',
  '小田原',
  '熱海',
  '三島',
  '新富士',
  '静岡',
  '掛川',
  '浜松',
  '豊橋',
  '三河安城',
  '名古屋',
  '岐阜羽島',
  '米原',
  '京都',
  '新大阪',
  '新神戸',
  '西明石',
  '姫路',
  '相生',
  '岡山',
  '新倉敷',
  '福山',
  '新尾道',
  '三原',
  '東広島',
  '広島',
  '新岩国',
  '徳山',
  '新山口',
  '厚狭',
  '新下関',
  '小倉',
  '博多',
  '博多南',
  '新鳥栖',
  '久留米',
  '筑後船小屋',
  '新大牟田',
  '新玉名',
  '熊本',
  '新八代',
  '新水俣',
  '出水',
  '川内',
  '鹿児島中央',
  '上野',
  '大宮',
  '小山',
  '宇都宮',
  '那須塩原',
  '新白河',
  '郡山',
  '福島',
  '白石蔵王',
  '仙台',
  '古川',
  'くりこま高原',
  '一ノ関',
  '水沢江刺',
  '北上',
  '新花巻',
  '盛岡',
  'いわて沼宮内',
  '二戸',
  '八戸',
  '七戸十和田',
  '新青森',
  '奥津軽いまべつ',
  '木古内',
  '新函館北斗',
  '熊谷',
  '本庄早稲田',
  '高崎',
  '上毛高原',
  '越後湯沢',
  '浦佐',
  '長岡',
  '燕三条',
  '新潟',
  '安中榛名',
  '軽井沢',
  '佐久平',
  '上田',
  '長野',
  '飯山',
  '上越妙高',
  '糸魚川',
  '黒部宇奈月温泉',
  '富山',
  '新高岡',
  '金沢',
];

const getHalfResult = (options) => {
  let i = 0;
  let resultArray = [];
  let pickupedIndex = [];
  while (i < parseInt(options.length / 2)) {
    const randomIndex = Math.floor(Math.random() * options.length);

    if (pickupedIndex.indexOf(randomIndex) >= 0) {
      continue;
    }

    resultArray.push(options[randomIndex]);
    pickupedIndex.push(randomIndex);

    i++;
  }

  return resultArray;
};

export { stations, getHalfResult };
