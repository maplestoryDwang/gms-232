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
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.npc_ChangeController(1530410, "oid=37861409", 1442, 3, 27, 1392, 1492, 1, true, false);
      cm.npc_SetSpecialAction("oid=37861409", 'summon', 0, 0);
      cm.npc_SetSpecialAction("oid=37861409", 'die', -1, 1);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1200);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1400);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_AskAnswerTime(1000);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("不行……不行……这样不行……", 37, 1530410, false, true);
          } else {
            if (status === V++) {
              cm.fieldEffect_PlayBGM("Bgm02.img/EvilEyes", 0, 0);
              cm.sendNormalTalk_Bottom("不能又剩下我一个单身啊……不可以……我已经很努力地捣乱了啊！", 37, 1530410, true, true);
            } else {
              if (status === V++) {
                cm.fieldEffect_ScreenMsg("Map/Effect2.img/spinOff1/Akayrum");
                cm.inGameDirectionEvent_AskAnswerTime(6000);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_AskAnswerTime(3000);
                } else {
                  if (status === V++) {
                    cm.fieldEffect_InsertCanvas(1, 255, 240, 240, 240, 1300, 0);
                    cm.inGameDirectionEvent_AskAnswerTime(1600);
                  } else {
                    if (status === V++) {
                      cm.npc_SetSpecialAction("oid=37861409", 'die', -1, 1);
                      cm.forceStartQuest(32823, '');
                      cm.forceStartQuest(33036, '');
                      cm.npc_ChangeController(1530533, "oid=37867634", 1342, 3, 20, 1292, 1392, 1, true, false);
                      cm.npc_SetSpecialAction("oid=37867634", "summon", 0, 0);
                      cm.fieldEffect_PlayBGM("Bgm09.img/TimeAttack", 0, 0);
                      cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1300, 0);
                      cm.inGameDirectionEvent_AskAnswerTime(1600);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_PushMoveInfo(0, 120, 1342, 3);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_AskAnswerTime(1200);
                          cm.effect_Text(["#r#fn黑体##fs26#天煞孤星闹事者！#k"], [100, 4000, 5, 80, 0, 1, 4, 0, 0, 0]);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_AskAnswerTime(5000);
                            cm.effect_Voice("Voice2.img/Friends/Narration_01/4", 100);
                            cm.effect_Text(["#fn黑体##fs16#因长时间的孤独而产生的闹事者. "], [100, 1500, 5, 80, 50, 1, 4, 0, 0, 0]);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("闹事者？！这种时候埃尔文和莉莉到底跑哪儿去了？在事情扩大之前必须将它消灭才行！", 57, 0, false, true);
                            } else if (status === V++) {
                              cm.dispose();
                              cm.warp(330001700, 2);
                              cm.setInGameDirectionMode(false, true, false);
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