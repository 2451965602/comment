const Application = require('@waline/vercel');
Waline.init({
  locale: {
    level0: '炼体',
    level1: '炼气',
    level2: '筑基',
    level3: '金丹',
    level4: '元婴',
    level5: '化神',
  },
});
module.exports = Application({
  async postSave(comment) {
    // do what ever you want after save comment
  },
});
