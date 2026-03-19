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
      cm.inGameDirectionEvent_MoveAction(2);
      cm.inGameDirectionEvent_AskAnswerTime(30);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_MoveAction(0);
        cm.npc_ChangeController(2159335, "oid=866799", 550, 35, 5, 500, 600, 1, false, 0, false);
        cm.npc_SetSpecialAction("oid=866799", "summon", 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1500);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_头顶图片(["Effect/Direction6.img/effect/job/balloonMsg2/0"], [1200, 0, -120, 0, 0, 0, 0, 0, 0]);
          cm.inGameDirectionEvent_AskAnswerTime(1200);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_头顶图片(["Skill/3112.img/skill/31121005/effect", "oid=0"], [0, 222, 69, 1, 1, 1, 0, 1, 0]);
            cm.inGameDirectionEvent_头顶图片(["Skill/3112.img/skill/31121005/effect0", "oid=0"], [0, 222, 69, 1, -1, 1, 0, 1, 0]);
            cm.fieldEffect_PlayFieldSound("demonSlayer/31121005", 100);
            cm.inGameDirectionEvent_OneTimeAction(370, 0);
            cm.inGameDirectionEvent_AskAnswerTime(1980);
          } else {
            if (status === V++) {
              cm.sendNormalTalk("#b(释放精气的感觉知道了……但是无法维持很久。)#k", 3, 2159335, false, true);
            } else if (status === V++) {
              cm.npc_LeaveField("oid=866799");
              cm.spawnMobLimit(9001042, 1, 550, 69, 100);
              cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
              cm.setInGameDirectionMode(false, true, false);
              cm.dispose();
              cm.scheduleWarpTask(50, 310010000);
              cm.addPopupSay(0, 6000, "击杀后等待时间结束。");
            }
          }
        }
      }
    }
  }
}