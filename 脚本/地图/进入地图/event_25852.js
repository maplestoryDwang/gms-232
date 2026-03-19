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
      cm.setSessionValue('kill_count', '0');
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, true, true);
      cm.inGameDirectionEvent_MoveAction(1);
      cm.inGameDirectionEvent_AskAnswerTime(30);
    } else {
      if (status === V++) {
        cm.updateInfoQuest(26011, '');
        cm.inGameDirectionEvent_MoveAction(0);
        cm.npc_ChangeController(3000110, "oid=202678232", 350, 0, 9, 300, 400, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=202678232", "summon", 0, 0);
        cm.npc_ChangeController(3000111, "oid=202678233", 250, 0, 4, 200, 300, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=202678233", "summon", 0, 0);
        cm.npc_ChangeController(3000114, "oid=202678235", 150, 0, 2, 100, 200, 1, true, 0, false);
        cm.npc_SetSpecialAction("oid=202678235", "summon", 0, 0);
        cm.npc_ChangeController(3000119, "oid=202678236", 0, 0, 3, -50, 50, 1, true, 0, false);
        cm.npc_SetSpecialAction("oid=202678236", "summon", 0, 0);
        cm.sendNormalTalk("啊！发现了奇怪的人！", 17, 0, false, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk("啊！发现个美少女！", 1, 3000110, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("正经点！那女生就是爆莉萌天使。", 1, 3000114, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk("你们这帮坏家伙！又跑来这里干什么坏事！！", 17, 3000114, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk("她这么可爱，就放过她吧？", 1, 3000114, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk("不行！已经被她发现我们的行踪，不能放过她。把她抓起来，省的碍事。", 1, 3000119, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk("好主意。", 1, 3000110, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk("喂，我说，你们的阴谋我都听到咯？还有，要被抓的人不是我，是你们几个坏蛋！", 17, 3000110, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk("都给我上！噢噢噢！", 1, 3000119, true, true);
                      } else if (status === V++) {
                        cm.npc_LeaveField("oid=202678232");
                        cm.npc_LeaveField("oid=202678232");
                        cm.npc_LeaveField("oid=202678233");
                        cm.npc_LeaveField("oid=202678233");
                        cm.npc_LeaveField("oid=202678235");
                        cm.npc_LeaveField("oid=202678235");
                        cm.npc_LeaveField("oid=202678236");
                        cm.npc_LeaveField("oid=202678236");
                        cm.playerMessage(-1, '请消灭所有敌人。');
                        cm.spawnMobLimit(9300550, 1, 350, 29, 100);
                        cm.spawnMobLimit(9300550, 1, 350, 29, 100);
                        cm.spawnMobLimit(9300550, 1, 250, 29, 100);
                        cm.spawnMobLimit(9300550, 1, 250, 29, 100);
                        cm.spawnMobLimit(9300551, 1, 150, 29, 100);
                        cm.spawnMobLimit(9300551, 1, 150, 29, 100);
                        cm.spawnMobLimit(9300552, 1, 0, 29, 100);
                        cm.spawnMobLimit(9300552, 1, 0, 29, 100);
                        cm.eventSKill(0);
                        cm.setInGameDirectionMode(false, true, false);
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