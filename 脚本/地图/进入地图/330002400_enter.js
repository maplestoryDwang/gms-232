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
      cm.setAmbience("Ambience.img/ding", 100, 60);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.sendNormalTalk_Bottom("你们……有没有听到深更半夜音乐室中传出的声音？", 37, 1530180, false, true);
      cm.curNodeEventEnd(true);
      cm.effect_Voice("Voice2.img/Friends/CH4_00/1", 100);
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Bottom("你们肯定没有听到吧。如果听到那声音……你们就不能平安坐在这里了……", 37, 1530180, true, true);
        cm.effect_Voice("Voice2.img/Friends/CH4_00/2", 100);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
          cm.inGameDirectionEvent_AskAnswerTime(500);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(4000);
            cm.effect_Text(["#fn黑体##fs26##r卡珊德拉怪谈剧场"], [100, 2500, 4, 0, 0, 1, 4, 0, 0, 0]);
          } else if (status === V++) {
            cm.dispose();
            cm.warp(330002401, 0);
            cm.setInGameDirectionMode(false, true, false);
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