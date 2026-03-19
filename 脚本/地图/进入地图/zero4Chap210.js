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
      cm.npc_ChangeController(2450037, 'oid=26518', 117, -90, 6, 67, 167, 1, false, 0, false);
      cm.npc_ChangeController(2450038, "oid=26519", 192, -90, 6, 142, 242, 1, false, 0, false);
      cm.npc_ChangeController(2450039, "oid=26520", -93, -90, 6, -143, -43, 0, false, 0, false);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, true, true);
      cm.inGameDirectionEvent_AskAnswerTime(500);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk("我在等你们。你们还没把那个绑匪带走吧？我信任你们才没有过问的……那个家伙，不是又想制造什么事端吧？", 33, 2450034, false, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk("事端？什么意思？", 41, 2400005, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("#p2450004#察觉到了有种不寻常的能量在运行。看来得确认下才行。", 33, 2450034, true, true);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_AskAnswerTime(500);
            } else if (status === V++) {
              cm.dispose();
              cm.warp(325000100, 0, false);
              cm.setInGameDirectionMode(false, true, false);
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