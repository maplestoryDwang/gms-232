var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
function action(f, W, U) {
  if (cm.getMapId() == 350130800) {
    action3(f, W, U);
  } else if (cm.getMapId() == 350130700) {
    action2(f, W, U);
  } else {
    action1(f, W, U);
  }
}
function action1(f, W, U) {
  if (status == 0 && f == 0) {
    cm.dispose();
    return;
  }
  if (cm.getNumberFromQuestInfo(33996, "check3") > 0) {
    cm.sendNormalTalk_Bottom("操作了开关，但似乎只关闭了部分探测仪…看来还要继续穿越障碍啊。", 37, 1540880, false, true);
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
      cm.npc_SetSpecialAction("oid=305885618", "off", -1, 1);
      cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/HofM/act3/powerdown", 100);
      cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/HofM/act3/swithch", 100);
      cm.Hidden_background("HofM_trap3", 1, 0, 2, 0);
      cm.Hidden_background("HofM_trap4", 1, 0, 2, 0);
      cm.sendNormalTalk_Bottom("操作了开关，但似乎只关闭了部分探测仪…看来还要继续穿越障碍啊。", 37, 1540880, false, true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Bottom("#face13#负责供应所有电力的供电装置好像在最后。", 37, 1540805, true, true);
      } else if (status === V++) {
        cm.updateInfoQuest(33996, "check3=1;check7=1;check=1");
        cm.dispose();
      }
    }
  }
}
function action2(f, W, U) {
  if (status == 0 && f == 0) {
    cm.dispose();
    return;
  }
  if (cm.getNumberFromQuestInfo(33996, "check2") > 0) {
    cm.sendNormalTalk_Bottom("操作了开关，但似乎只关闭了部分探测仪…看来还要继续穿越障碍啊。", 37, 1540880, false, true);
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
      cm.npc_SetSpecialAction("oid=306064895", "off", -1, 1);
      cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/HofM/act3/powerdown", 100);
      cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/HofM/act3/swithch", 100);
      cm.Hidden_background("HofM_trap3", 1, 0, 2, 0);
      cm.Hidden_background("HofM_trap4", 1, 0, 2, 0);
      cm.sendNormalTalk_Bottom("#face13#好吧，夜光法师。距离最后的供电装置剩不了多远了。", 37, 1540805, false, true);
    } else if (status === V++) {
      cm.updateInfoQuest(33996, "check2=1;check3=1;check4=1;check6=5;check7=1;check=1");
      cm.dispose();
    }
  }
}
function action3(f, W, U) {
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
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.sendNormalTalk_Bottom("到达最后的供电装置了。", 37, 1540880, false, true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Bottom("#face13#真帅，夜光法师，来，大家都准备好了吧？", 37, 1540805, true, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("#face13#一旦我倒数完，就关掉电源，来，开始倒数，3……2……1……", 37, 1540805, true, true);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(500);
          } else {
            if (status === V++) {
              cm.npc_SetSpecialAction("oid=306107269", 'off', -1, 1);
              cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/HofM/act3/powerdown", 100);
              cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/HofM/act3/swithch", 100);
              cm.inGameDirectionEvent_AskAnswerTime(1000);
            } else {
              if (status === V++) {
                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                cm.inGameDirectionEvent_AskAnswerTime(500);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_AskAnswerTime(500);
                } else {
                  if (status === V++) {
                    cm.fieldEffect_KinesisEXP(Math.pow(cm.getLevel(), 3) * 3);
                    cm.forceCompleteQuest(34003);
                    cm.gainExp(Math.pow(cm.getLevel(), 3) * 3);
                    cm.updateInfoQuest(33963, "34001=1;34002=1;34003=1");
                    cm.inGameDirectionEvent_AskAnswerTime(3000);
                    cm.effect_Voice("Field.img/masteryBook/EnchantSuccess", 100);
                  } else if (status === V++) {
                    cm.dispose();
                    cm.warp(350131000, 0, true);
                    cm.setInGameDirectionMode(false, true, false);
                    cm.npc_LeaveField("oid=306107269");
                    cm.npc_LeaveField("oid=306107269");
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}