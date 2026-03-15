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
      cm.addNumberForQuestInfo(40514, "count", 1);
      cm.setNumberForQuestInfo(40514, '18', 1);
      cm.sendNormalTalk("嗯？你说想看我的手腕？哦哦 #p2400000#的手腕就是为了给两位抓，才长了两个的！好了，快抓住我的手腕吧！", 32, 2460018, false, true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk(" ……嗯？不是抓住而是看？真遗憾。", 32, 2460018, true, true);
      } else if (status === V++) {
        cm.playerMessage(5, "皮埃的手腕很干净。没有蜘蛛纹身。");
        cm.dispose();
      }
    }
  }
}