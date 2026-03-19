var status = -1;
var selectionLog = [];
function action(f, E, e) {
  if (cm.isQuestFinished(34761) && cm.getQuestStatus(34763) == 0) {
    action1(f, E, e);
  } else {
    cm.cancelItem(2210205);
    cm.dispose();
  }
}
function action1(f, E, e) {
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
      cm.npc_ChangeController(3002029, "oid=62891", 483, 158, 6, 433, 533, 1, false, false);
      cm.updateInfoQuest(34770, "20=h2;21=h0;22=h0;23=h0;24=h0;25=h0;19=B;29=h1");
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_ChangeEquipment([1103064]);
      cm.setStandAloneMode(true);
      cm.sendNormalTalk_Bottom("#face12#这里……！", 37, 3002110, false, true);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Bottom("树……和云连在了一起……！", 57, 0, true, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("#face7#真的！真的有！不是梦！", 37, 3002110, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#face13#但是西诺……去哪儿了？", 37, 3002110, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("西诺……？", 57, 0, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face0#不，不！不是想这些的时候！\r\n从这里往右走，应该就能见到狐神！", 37, 3002110, true, true);
              } else {
                if (status === V++) {
                  cm.updateInfoQuest(34761, "col=1;enter=1;exp=1");
                  cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                } else if (status === V++) {
                  cm.cancelItem(2210205);
                  cm.setStandAloneMode(false);
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;