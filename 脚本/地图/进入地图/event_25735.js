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
      cm.setSessionValue("kill_count", '0');
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, true, true);
      cm.inGameDirectionEvent_MoveAction(0);
      cm.npc_ChangeController(3000110, "oid=30159999", 350, 0, 9, 300, 400, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=30159999", 'summon', 0, 0);
      cm.npc_ChangeController(3000111, "oid=30160000", 450, 0, 11, 400, 500, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=30160000", "summon", 0, 0);
      cm.npc_ChangeController(3000114, "oid=30160001", 550, 0, 13, 500, 600, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=30160001", "summon", 0, 0);
      cm.npc_ChangeController(3000119, "oid=30160002", 700, 0, 12, 650, 750, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=30160002", "summon", 0, 0);
      cm.inGameDirectionEvent_头顶图片(["Effect/Direction9.img/effect/story/BalloonMsg2/0"], [1200, 0, -120, 0, 0, 0, 0, 0]);
      cm.inGameDirectionEvent_PushMoveInfo(0, 400, 450, -6);
    } else {
      if (status === V++) {
        cm.updateInfoQuest(26011, '');
        cm.inGameDirectionEvent_AskAnswerTime(1500);
      } else {
        if (status === V++) {
          cm.sendNormalTalk('肯定有什么阴谋。', 17, 0, false, true);
        } else {
          if (status === V++) {
            cm.forceForfeitQuest(49018);
            cm.sendNormalTalk("我必须要挽回上次的失误。", 1, 3000110, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk("是我太大意了。虽说是狂龙战士，可被那种小毛孩打败，真不甘心啊。", 1, 3000114, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk("下次我一定要万无一失地发动致命一击。", 1, 3000119, true, true);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_头顶图片(["Effect/Direction9.img/effect/story/BalloonMsg0/2", "oid=30159999"], [1200, 0, -120, 1, 0, 1, 0, 0]);
                  cm.inGameDirectionEvent_AskAnswerTime(900);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_头顶图片(["Effect/Direction9.img/effect/story/BalloonMsg1/2", "oid=30160002"], [1200, 0, -120, 1, 0, 1, 0, 0]);
                    cm.inGameDirectionEvent_AskAnswerTime(900);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_PushMoveInfo(0, 999999999, -85, -6);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk("这句话该是我说的吧。你们这帮家伙是干什么的！！", 17, 3000119, false, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk("真是个烦人的家伙，灭了他！", 1, 3000119, true, true);
                        } else if (status === V++) {
                          cm.npc_LeaveField("oid=30159999");
                          cm.npc_LeaveField("oid=30159999");
                          cm.npc_LeaveField("oid=30160000");
                          cm.npc_LeaveField("oid=30160000");
                          cm.npc_LeaveField("oid=30160001");
                          cm.npc_LeaveField("oid=30160001");
                          cm.npc_LeaveField("oid=30160002");
                          cm.npc_LeaveField("oid=30160002");
                          cm.playerMessage(-1, "请消灭所有敌人。");
                          cm.spawnMobLimit(9300536, 1, 350, 29, 100);
                          cm.spawnMobLimit(9300536, 1, 350, 29, 100);
                          cm.spawnMobLimit(9300536, 1, 450, 29, 100);
                          cm.spawnMobLimit(9300536, 1, 450, 29, 100);
                          cm.spawnMobLimit(9300536, 1, 500, 29, 100);
                          cm.spawnMobLimit(9300536, 1, 500, 29, 100);
                          cm.spawnMobLimit(9300537, 1, 550, 29, 100);
                          cm.spawnMobLimit(9300537, 1, 550, 29, 100);
                          cm.spawnMobLimit(9300537, 1, 600, 29, 100);
                          cm.spawnMobLimit(9300537, 1, 600, 29, 100);
                          cm.spawnMobLimit(9300538, 1, 700, 29, 100);
                          cm.spawnMobLimit(9300538, 1, 700, 29, 100);
                          cm.eventSKill(0);
                          cm.setInGameDirectionMode(false, true, false);
                          cm.gainExp(10);
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
  }
}