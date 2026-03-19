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
      cm.npc_ChangeController(1540795, 'oid=57011', 1965, 399, 5, 1915, 2015, 1, false, 0, false);
      cm.updateInfoQuest(33915, "act1=350110600");
      cm.fieldEffect_复合图片动画(["Map/Effect2.img/Blizzard/skeleton", "normal", '', ''], [1, 1, 1, 0, 0, 0, 0, 0]);
      cm.setAmbience("Ambience.img/blizzard_soft", 80, 60);
      cm.Hidden_background("arrow_up", 1, 0, 0, 0);
      cm.showMapleHero();
      cm.sendNormalTalk_Bottom("好，现在差不多快到了。", 37, 1540807, false, true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Bottom("#face2#快到了？那前面的路好像封死了啊？", 37, 1540805, true, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("我们先到前面看看吧。", 37, 1540807, true, true);
        } else if (status === V++) {
          cm.setNumberForQuestInfo(33910, "check1", 0);
          cm.dispose();
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