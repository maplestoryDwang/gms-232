var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
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
      cm.setInGameDirectionMode(true, true, false);
      cm.inGameDirectionEvent_MoveAction(0);
      cm.inGameDirectionEvent_MoveAction(4);
      cm.npc_ChangeController(3000141, "oid=2593384", -150, 220, 3, -200, -100, 0, false, 0, false);
      cm.npc_SetSpecialAction("oid=2593384", 'summon', 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1200);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.effect_Direction("Effect/Direction10.img/angelicTuto/Scene3", 0, 0, 0);
        cm.npc_ChangeController(3000104, "oid=2593421", -380, 220, 1, -430, -330, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=2593421", "summon", 0, 0);
        cm.npc_SetForceMove("oid=2593421", 1, 100, 100);
        cm.inGameDirectionEvent_头顶图片(["Effect/Direction10.img/effect/tuto/BalloonMsg1/5", "oid=2593421"], [900, 0, -120, 1, 0, 1, 0, 0, 0]);
        cm.inGameDirectionEvent_AskAnswerTime(900);
      } else {
        if (status === V++) {
          cm.effect_Direction("Effect/Direction10.img/angelicTuto/Scene3", 0, 0, 0);
          cm.inGameDirectionEvent_头顶图片(["Effect/Direction10.img/effect/story/BalloonMsg1/0", "oid=2593421"], [1200, 0, -120, 1, 0, 1, 0, 0, 0]);
          cm.npc_ChangeController(3000106, "oid=2593423", -330, 220, 1, -380, -280, 0, false, 0, false);
          cm.npc_SetSpecialAction("oid=2593423", "summon", 0, 0);
          cm.npc_ChangeController(3000107, "oid=2593424", -420, 220, 11, -470, -370, 0, true, 0, false);
          cm.npc_SetSpecialAction("oid=2593424", "summon", 0, 0);
          cm.inGameDirectionEvent_AskAnswerTime(900);
        } else {
          if (status === V++) {
            cm.effect_Direction("Effect/Direction10.img/angelicTuto/Scene3", 0, 0, 0);
            cm.inGameDirectionEvent_头顶图片(["Effect/Direction10.img/effect/story/BalloonMsg1/0", "oid=2593423"], [1200, 0, -120, 1, 0, 1, 0, 0, 0]);
            cm.inGameDirectionEvent_头顶图片(["Effect/Direction10.img/effect/story/BalloonMsg1/0", "oid=2593424"], [1200, 0, -120, 1, 0, 1, 0, 0, 0]);
            cm.inGameDirectionEvent_AskAnswerTime(900);
          } else {
            if (status === V++) {
              cm.effect_Direction("Effect/Direction10.img/angelicTuto/Scene3", 0, 0, 0);
              cm.sendNormalTalk("这到底是怎么回事……", 1, 3000107, false, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk("卡伊尔！！！ #h0#！", 1, 3000104, true, true);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_头顶图片(["Effect/BasicEff.img/Kaiser_Transform4_S", "oid=2593384"], [0, 0, 0, 1, 0, 1, 0, 0, 0]);
                  cm.inGameDirectionEvent_AskAnswerTime(900);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_头顶图片(["Effect/Direction10.img/effect/tuto/BalloonMsg1/6", "oid=2593423"], [1200, 0, -120, 1, 0, 1, 0, 0, 0]);
                    cm.inGameDirectionEvent_AskAnswerTime(300);
                  } else {
                    if (status === V++) {
                      cm.effect_Direction("Effect/Direction10.img/angelicTuto/Scene3", 0, 0, 0);
                      cm.inGameDirectionEvent_头顶图片(["Effect/Direction10.img/effect/tuto/BalloonMsg1/7", "oid=2593424"], [1200, 0, -120, 1, 0, 1, 0, 0, 0]);
                      cm.inGameDirectionEvent_AskAnswerTime(600);
                    } else {
                      if (status === V++) {
                        cm.effect_Direction("Effect/Direction10.img/angelicTuto/Scene3", 0, 0, 0);
                        cm.inGameDirectionEvent_头顶图片(["Effect/Direction10.img/effect/story/BalloonMsg0/0", "oid=2593421"], [1200, 0, -120, 1, 0, 1, 0, 0, 0]);
                        cm.sendNormalTalk("狂龙战士终于出现了。卡塔利安，快把他们俩带去医疗所吧。", 1, 3000106, false, true);
                      } else if (status === V++) {
                        cm.effect_Direction("Effect/Direction10.img/angelicTuto/Scene3", 0, 0, 0);
                        cm.effect_Direction("Effect/Direction10.img/angelicTuto/Scene3", 0, 0, 0);
                        cm.npc_LeaveField("oid=2593384");
                        cm.npc_LeaveField("oid=2593421");
                        cm.npc_LeaveField("oid=2593423");
                        cm.npc_LeaveField("oid=2593424");
                        cm.dispose();
                        cm.warp(940011060, 0, false);
                        cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
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