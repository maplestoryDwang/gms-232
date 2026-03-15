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
      if (cm.getJob() != 2410) {
        cm.playerMessage(5, "只有成为2转幻影后才能进行转职。");
        cm.dispose();
        return;
      }
      cm.updateInfoQuest(1073, "2400=10;2410=201;2411=201");
      cm.forceStartQuest(25113, '1');
      cm.sendNormalTalk("箱子应该放在了这个箱子里……呃，看来应该整理一下。因为怕麻烦，所以全都堆在了里面……那时候根本不想研究什么技能…… 啊，找到了！可以转职了！", 3, 1403001, false, true);
    } else if (status === V++) {
      cm.gainItem(1142377, 1);
      cm.changeJob(2411);
      cm.dispose();
    }
  }
}