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
      cm.inGameDirectionEvent_MoveAction(1);
      cm.inGameDirectionEvent_AskAnswerTime(30);
    } else {
      if (status === V++) {
        cm.updateInfoQuest(26011, '');
        cm.inGameDirectionEvent_MoveAction(0);
        cm.npc_ChangeController(3000110, "oid=29959544", -2400, 0, 13, -2450, -2350, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=29959544", "summon", 0, 0);
        cm.npc_ChangeController(3000114, "oid=29959545", -2200, 0, 4, -2250, -2150, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=29959545", "summon", 0, 0);
        cm.npc_ChangeController(3000119, "oid=29959546", -2100, 0, 12, -2150, -2050, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=29959546", "summon", 0, 0);
        cm.inGameDirectionEvent_头顶图片(["Effect/Direction9.img/effect/story/BalloonMsg0/5"], [1200, 0, -120, 0, 0, 0, 0, 0]);
        cm.inGameDirectionEvent_AskAnswerTime(900);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_头顶图片(["Effect/Direction9.img/effect/story/BalloonMsg2/1", "oid=29959546"], [1200, 0, -120, 1, 0, 1, 0, 0]);
          cm.inGameDirectionEvent_AskAnswerTime(900);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_头顶图片(["Effect/Direction9.img/effect/story/BalloonMsg1/13"], [1200, 0, -120, 0, 0, 0, 0, 0]);
            cm.inGameDirectionEvent_AskAnswerTime(900);
          } else if (status === V++) {
            cm.npc_LeaveField("oid=29959544");
            cm.npc_LeaveField("oid=29959544");
            cm.npc_LeaveField("oid=29959545");
            cm.npc_LeaveField("oid=29959545");
            cm.npc_LeaveField("oid=29959546");
            cm.npc_LeaveField("oid=29959546");
            cm.playerMessage(-1, "请消灭所有敌人。");
            cm.spawnMobLimit(9300539, 1, -2450, 29, 100);
            cm.spawnMobLimit(9300539, 1, -2450, 29, 100);
            cm.spawnMobLimit(9300539, 1, -2400, 29, 100);
            cm.spawnMobLimit(9300539, 1, -2400, 29, 100);
            cm.spawnMobLimit(9300539, 1, -2350, 29, 100);
            cm.spawnMobLimit(9300539, 1, -2350, 29, 100);
            cm.spawnMobLimit(9300539, 1, -2300, 29, 100);
            cm.spawnMobLimit(9300539, 1, -2300, 29, 100);
            cm.spawnMobLimit(9300540, 1, -2250, 29, 100);
            cm.spawnMobLimit(9300540, 1, -2250, 29, 100);
            cm.spawnMobLimit(9300540, 1, -2200, 29, 100);
            cm.spawnMobLimit(9300540, 1, -2200, 29, 100);
            cm.spawnMobLimit(9300540, 1, -2150, 29, 100);
            cm.spawnMobLimit(9300540, 1, -2150, 29, 100);
            cm.spawnMobLimit(9300541, 1, -2100, 29, 100);
            cm.spawnMobLimit(9300541, 1, -2100, 29, 100);
            cm.spawnMobLimit(9300541, 1, -2050, 29, 100);
            cm.spawnMobLimit(9300541, 1, -2050, 29, 100);
            cm.spawnMobLimit(9300541, 1, -2000, 29, 100);
            cm.spawnMobLimit(9300541, 1, -2000, 29, 100);
            cm.eventSKill(0);
            cm.setInGameDirectionMode(false, true, false);
            cm.dispose();
          }
        }
      }
    }
  }
}