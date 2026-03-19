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
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, true, true);
      cm.npc_ChangeController(1530360, "oid=20955052", -90, 124, 17, -140, -40, 1, false, false);
      cm.npc_SetSpecialAction("oid=20955052", 'summon', 0, 0);
      cm.npc_ChangeController(1530060, "oid=20955053", -371, 124, 20, -421, -321, 0, true, false);
      cm.npc_SetSpecialAction("oid=20955053", 'summon', 0, 0);
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.inGameDirectionEvent_AskAnswerTime(1000);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Bottom("不行，小姐。", 37, 1530360, false, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("为什么？我今天要和朋友一起出去玩，你别来接我了。", 37, 1530060, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("放学后不是约好和别家公司的总经理一起吃晚餐的吗？下课后我来接你。", 37, 1530360, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("哼！我不管，反正今天我想怎样就怎样。", 37, 1530060, true, true);
            } else {
              if (status === V++) {
                cm.npc_SetForceMove("oid=20955053", -1, 400, 100);
                cm.inGameDirectionEvent_AskAnswerTime(3000);
              } else {
                if (status === V++) {
                  cm.npc_LeaveField("oid=20955053");
                  cm.npc_LeaveField("oid=20955053");
                  cm.sendNormalTalk_Bottom("呃……一直都很文静听话的小姐今天这是怎么了……莫非这就是所谓的青春期？", 37, 1530360, false, true);
                } else {
                  if (status === V++) {
                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                    cm.inGameDirectionEvent_AskAnswerTime(2000);
                  } else if (status === V++) {
                    cm.effect_Voice("Ambience.img/schoolbell", 100);
                    cm.dispose();
                    cm.warp(330002107, 0);
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;