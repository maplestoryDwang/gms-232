var status = -1;
var selectionLog = [];
function action(f, E, e) {
  if (status == 0 && f == 0) {
    cm.dispose();
    return;
  }
  status++;
  selectionLog[status] = e;
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else if (status === V++) {
    cm.Hidden_background("ribbon01", 0);
    cm.Hidden_background("ribbon02", 0);
    cm.Hidden_background("ribbon03", 0);
    cm.playerMessage(-1, "消灭怪物并进入森林深处吧");
    cm.setPartner(1, 9400580, 80011692, 0);
    cm.setPartner(1, 9400595, 80011701, 0);
    cm.addPopupSay(0, 3000, "#b那个花花象是……", '', 0);
    cm.addPopupSay(9400580, 3000, "#face0#没错。它就是#h0#在卡夫塔佩救了的那个小石。", '', 0);
    cm.addPopupSay(9400595, 3000, "#face0#哞哞！", '', 0);
    cm.spawnMobLimit(9402242, 1, 375, 28, 100);
    cm.spawnMobLimit(9402243, 1, 340, 317, 100);
    cm.spawnMobLimit(9402242, 1, 365, 402, 100);
    cm.spawnMobLimit(9402242, 1, 600, 402, 100);
    cm.spawnMobLimit(9402242, 1, 575, 315, 100);
    cm.spawnMobLimit(9402242, 1, 750, 402, 100);
    cm.spawnMobLimit(9402243, 1, -416, 402, 100);
    cm.spawnMobLimit(9402242, 1, -799, 402, 100);
    cm.spawnMobLimit(9402243, 1, -112, 402, 100);
    cm.spawnMobLimit(9402242, 1, 105, 402, 100);
    cm.Hidden_background("ribbon01", 1);
    cm.addPopupSay(9400580, 3000, "#face0#悄悄地进入森林里吧~~~ ", '', 0);
    cm.addPopupSay(0, 3000, "#b... ", '', 0);
    cm.addPopupSay(9400580, 3000, "#face0#不要吵醒别人，小心又小心！", '', 0);
    cm.addPopupSay(0, 3000, "#b谁生活在沉睡森林里呢~ ", '', 0);
    cm.addPopupSay(9400580, 3000, "#face0#啊？哈瓦尔也给#h0#唱了歌啊。", '', 0);
    cm.spawnMobLimit(9402242, 1, 348, 402, 100);
    cm.spawnMobLimit(9402242, 1, 328, 402, 100);
    cm.spawnMobLimit(9402243, 1, -863, 401, 100);
    cm.spawnMobLimit(9402242, 1, -881, 402, 100);
    cm.spawnMobLimit(9402243, 1, -44, 402, 100);
    cm.dispose();
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;