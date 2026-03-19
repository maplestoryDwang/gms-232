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
      cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
      cm.setAmbience("Ambience.img/secretmissionbase", 100, 60);
      cm.setPartner(1, 1540765, 80001594, 0);
      cm.setPartner(1, 1540766, 80001595, 0);
      cm.setPartner(1, 1540767, 80001596, 0);
      cm.updateInfoQuest(33151, "onBoard=1;dagoth=1;monpa=4;halo=1;password=1");
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_MoveAction(3);
      cm.inGameDirectionEvent_AskAnswerTime(3000);
      cm.curNodeEventEnd(true);
      cm.useItem(2023418);
      cm.useItem(2023419);
      cm.useItem(2023420);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
        cm.inGameDirectionEvent_MoveAction(0);
        cm.inGameDirectionEvent_AskAnswerTime(1400);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("队长，上面有电缆的皮套脱落了。\r\n那里#r好像还有电流通过#k，你最好小心点。", 37, 1540502, false, true);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_PushMoveInfo(0, 2000, -12, -1084);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_AskAnswerTime(2545);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_PushMoveInfo(1, 1000, 0, 0);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_AskAnswerTime(569);
                } else if (status === V++) {
                  cm.setInGameDirectionMode(false, true, false);
                  cm.updateInfoQuest(33151, "onBoard=1;dagoth=1;monpa=4;ropeOut=1;halo=1;ropetalk=1;password=1;黑色之翼密码锁=1");
                  cm.dispose();
                }
              }
            }
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