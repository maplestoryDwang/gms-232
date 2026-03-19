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
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 200, 0);
      cm.userSetFieldFloating(221030805, 5, 5, 50);
      cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
      cm.setAmbience("SoundEff.img/urus/bombCountDown", 100, 60);
      cm.sendNormalTalk_Bottom("#face1#喂，你这个蠢货！！！", 37, 2052002, false, true);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/cannonDie", 100);
        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 300, 0);
        cm.sendNormalTalk_Bottom("#face2#赶紧逃！！！！！", 37, 2052000, true, true);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_AskAnswerTime(3000);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#face2#我的UFO！！！我的分期付款！！！", 37, 2052008, false, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face2#穿戴好降落伞跳！！", 37, 2052002, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face2#呼救！呼救！！", 37, 2052005, true, true);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                } else if (status === V++) {
                  cm.gainExp(3668312);
                  cm.forceCompleteQuest(3494);
                  cm.dispose();
                  cm.warp(221000002, 0);
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