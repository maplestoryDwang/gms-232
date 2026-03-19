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
      cm.Hidden_background('guide', 0);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.setStandAloneMode(true);
      cm.forceStartQuest(64161, 'run');
      cm.npc_ChangeController(9400588, "oid=2277671", 135, -910, 44, 85, 185, 1, true, false);
      cm.npc_SetSpecialAction("oid=2277671", "summon", 0, 0);
      cm.inGameDirectionEvent_ForcedFlip(-1);
      cm.inGameDirectionEvent_AskAnswerTime(500);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.spawnMob(9402243, 1, 296, -1828);
        cm.spawnMob(9402242, 1, -660, -2110);
        cm.spawnMob(9402242, 1, -352, -2117);
        cm.spawnMob(9402246, 1, -94, -2082);
        cm.spawnMob(9402245, 1, -46, -1613);
        cm.sendNormalTalk_Bottom('哇啊啊啊！！！！', 37, 9400588, false, true);
      } else {
        if (status === V++) {
          cm.effect_OnUserEff("Effect/OnUserEff.img/emotionBalloon/exclamation3");
          cm.inGameDirectionEvent_PushScaleInfo(4000, 1000, 4000, 90, -960);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(1000);
          } else {
            if (status === V++) {
              cm.npc_SetForceMove("oid=2277671", -1, 300, 150);
              cm.inGameDirectionEvent_AskAnswerTime(3000);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("帮……帮帮我们！", 37, 9400588, false, true);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_AskAnswerTime(500);
                } else {
                  if (status === V++) {
                    cm.npc_SetForceMove("oid=2277671", 1, 100, 150);
                    cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_AskAnswerTime(500);
                    } else if (status === V++) {
                      cm.npc_ChangeController(9400588, "oid=2277700", 45, -650, 17, -5, 95, 1, true, false);
                      cm.npc_SetSpecialAction("oid=2277700", "summon", 0, 0);
                      cm.npc_setForceFlip("oid=2277700", 1);
                      cm.setStandAloneMode(false);
                      cm.setInGameDirectionMode(false, true, false);
                      cm.fieldEffect_ScreenMsg("monsterPark/stageEff/stage");
                      cm.fieldEffect_ScreenMsg("monsterPark/stageEff/number/3");
                      cm.Hidden_background("guide", 1);
                      cm.playerMessage(-1, "消灭区域内的所有怪物再下去。");
                      cm.spawnMob(9402243, 1, 20, -893);
                      cm.spawnMob(9402245, 1, 554, -943);
                      cm.spawnMob(9402246, 1, -531, -1080);
                      cm.spawnMob(9402245, 1, 58, -1069);
                      cm.spawnMob(9402245, 1, -482, -1080);
                      cm.spawnMob(9402242, 1, 386, -911);
                      cm.spawnMob(9402245, 1, 155, -897);
                      cm.spawnMob(9402242, 1, 62, -891);
                      cm.npc_LeaveField("oid=2277671");
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
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;