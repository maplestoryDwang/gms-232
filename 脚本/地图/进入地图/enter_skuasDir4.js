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
      cm.onActionBarResult(15, 1010, 0, 3, 0);
      cm.onActionBarResult(15, 1010, 0, 3, 1);
      cm.onActionBarResult(15, 1010, 0, 3, 2);
      cm.onActionBarResult(15, 1010, 0, 3, 3);
      cm.onActionBarResult(15, 1010, 0, 3, 4);
      cm.updateInfoQuest(64001, "dir1=1;man=298;stage=3;enemy=513;seq=0;mine=0;Fidx=0;companion=146;dir0=0");
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.npc_ChangeController(9400668, "oid=7550099", -1270, 145, 14, -1320, -1220, 0, true, false);
      cm.npc_SetSpecialAction("oid=7550099", "summon", 0, 0);
      cm.inGameDirectionEvent_ForcedFlip(-1);
      cm.inGameDirectionEvent_AskAnswerTime(1200);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
        cm.inGameDirectionEvent_同时移动镜头和人(1, 300);
        cm.sendNewEffects(18, [2000, 1000, 2000, -250, 50]);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_AskAnswerTime(1500);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_OneTimeAction(7, 0);
            cm.inGameDirectionEvent_AskAnswerTime(300);
          } else {
            if (status === V++) {
              cm.fieldEffect_ScreenMsg("Map/EffectPL.img/MainStream/Skuas/screenEff/finishAttack");
              cm.inGameDirectionEvent_AskAnswerTime(900);
            } else {
              if (status === V++) {
                cm.npc_SetSpecialAction("oid=7550099", "die1", 1, 0);
                cm.fieldEffect_PlayFieldSound("PL_3min/CubeBreak", 100);
                cm.inGameDirectionEvent_AskAnswerTime(1000);
              } else {
                if (status === V++) {
                  cm.npc_LeaveField("oid=7550099");
                  cm.npc_LeaveField("oid=7550099");
                  cm.sendNormalTalk_Bottom("击退了敌将！！！", 57, 0, false, true);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(1440);
                  } else {
                    if (status === V++) {
                      cm.sendNewEffects(14, [0, 2000, 1000, 0, 0]);
                    } else {
                      if (status === V++) {
                        cm.sendNewEffects(19, [0]);
                      } else {
                        if (status === V++) {
                          cm.setInGameDirectionMode(false, true, false);
                          cm.updateInfoQuest(64001, "dir1=1;man=110;stage=3;enemy=513;seq=0;mine=0;Fidx=0;companion=146;dir0=0");
                          cm.fieldEffect_复合图片动画(["Map/EffectPL.img/3min/clearS/skeleton_clear", "animation_text01_01", '', ''], [0, 0, 1, 0, 0, 0, 0, 0]);
                          cm.fieldEffect_PlayFieldSound("PL_3min/Clear", 100);
                          cm.sendNormalTalk_Bottom("#face0#万岁！！！", 37, 9400597, false, true);
                        } else {
                          if (status === V++) {
                            cm.playerMessage(-1, "战线被击溃，正在撤退。");
                            cm.sendNormalTalk_Bottom("#face1#损失惨重……退到掩体后面去！", 37, 9400581, true, true);
                          } else if (status === V++) {
                            cm.updateInfoQuest(64002, "man=42;stage=4;enemy=5;man0=0;man1=0;companion=4");
                            cm.dispose();
                            cm.warp(867233500, 0);
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