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
  } else {
    if (status === V++) {
      cm.sendNormalTalk_Bottom("#face0#你们养过花花象吧，去抓一个试试。", 37, 9400590, false, true);
      cm.spawnMobLimit(9402308, 1, 670, 105, 1);
      cm.spawnMobLimit(9402305, 1, 830, 105, 1);
      cm.spawnMobLimit(9402315, 1, 880, 105, 1);
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Bottom("#b斯洛克也一起去吧。", 57, 0, true, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("#face0#哦？我只是给你们带路的？", 37, 9400590, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#b我也会一起抓的，每个人获得30个花花象的肉就行了。", 57, 0, true, true);
          } else if (status === V++) {
            cm.playerMessage(-1, "获得花花象的肉补充粮食。");
            cm.addPopupSay(9400590, 3000, "#face0#就你那样插，能插的进去吗？", '', 0);
            cm.addPopupSay(9400597, 3000, "#face0#你能不能给我安静点，啊？", '', 0);
            cm.addPopupSay(9400590, 3000, "#face0#喂喂，你们把它关起来有什么用，会自己死吗？", '', 0);
            cm.addPopupSay(0, 3000, '#b斯洛克！', '', 0);
            cm.addPopupSay(9400590, 3000, "#face0#啊？怎么了？", '', 0);
            cm.dispose();
            cm.forceJoinEvent("莫奈德_地图_Act3.6_收集象肉");
          }
        }
      }
    }
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;