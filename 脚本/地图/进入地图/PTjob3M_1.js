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
      if (cm.getJob() != 2410) {
        cm.playerMessage(5, "这里没有事情了，快点离开吧。");
        cm.dispose();
        return;
      }
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, true, false);
      cm.npc_ChangeController(1403004, "oid=734669", 290, 175, 4, 240, 340, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=734669", "summon", 0, 0);
      cm.inGameDirectionEvent_MoveAction(2);
      cm.inGameDirectionEvent_AskAnswerTime(1000);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_MoveAction(0);
        cm.inGameDirectionEvent_AskAnswerTime(500);
      } else {
        if (status === V++) {
          cm.sendNormalTalk("呃？有入侵者？好久不在，有人闯进来了吗？#o9001045#没有出故障，但是这次其他的事情有点麻烦……", 17, 0, false, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("不全部消灭掉的话，就没办法进仓库了吧？看来得马上清理掉才行。必须清理干净！", 17, 0, true, true);
          } else if (status === V++) {
            cm.spawnMobLimit(9001046, 1, 290, 175, 100);
            cm.spawnMobLimit(9001046, 1, 290, 175, 100);
            cm.spawnMobLimit(9001046, 1, 290, 175, 100);
            cm.spawnMobLimit(9001046, 1, 290, 175, 100);
            cm.spawnMobLimit(9001046, 1, 290, 175, 100);
            cm.spawnMobLimit(9001046, 1, 290, 175, 100);
            cm.spawnMobLimit(9001046, 1, 290, 175, 100);
            cm.spawnMobLimit(9001046, 1, 290, 175, 100);
            cm.npc_LeaveField("oid=734669");
            cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
            cm.setInGameDirectionMode(false, true, false);
            cm.dispose();
          }
        }
      }
    }
  }
}