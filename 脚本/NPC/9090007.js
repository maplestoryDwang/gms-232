var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
function action(f, W, U) {
  if (status == 0 && f == 0) {
    cm.dispose();
    return;
  }
  if (f == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = U;
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.askMenu(" 看样子你应该有事情想问我吧。说吧，你想知道什么。\r\n#b#L0# 我想在New 婚礼公园举行婚礼！#l\r\n#L1# 如何求婚？#l\r\n#L2# 如何参加婚礼呢？ #l", 0, 9201590);
    } else {
      if (status === V++) {
        switch (U) {
          case 0:
            cm.sendNormalTalk("接受求婚后，新郎、新娘进入礼拜堂，就会在New 婚礼公园中出现只属于二人的婚礼拱形门~ 想要参加婚礼的宾客只要#b双击婚礼拱形门的名牌#k就能进入礼拜堂了。", 0, 9090007, false, true);
            status = -1;
            break;
          case 1:
            cm.sendNormalTalk("对方接受求婚后，立即进入为结婚准备的小小婚礼礼堂。求婚前，也别忘了联系想要道贺的宾客哦！", 0, 9201590, true, true);
            status = -1;
            break;
          case 2:
            cm.sendNormalTalk("小屋婚礼结束后，新郎新娘以及宾客均可以获得#b特别增益#k~！#b幸运的那个人#k可以获得比别人#b更好的特别增益#k~ 敬请期待吧?", 0, 9201590, true, false);
            break;
        }
      } else if (status === V++) {
        cm.dispose();
      } else {
        cm.dispose();
      }
    }
  }
}