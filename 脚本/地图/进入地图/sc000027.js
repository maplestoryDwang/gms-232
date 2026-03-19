var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
function action(f, E, e) {
  var V = "action" + cm.getNumberFromQuestCustomData(58900);
  eval(V)(f, E, e);
}
function action0(f, E, e) {
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
      if (!cm.isQuestFinished(58927) && cm.isQuestFinished(58926) || !cm.isQuestFinished(58940) && cm.isQuestFinished(58939) || !cm.isQuestFinished(58968) && cm.isQuestFinished(58967)) {
        cm.dispose();
        return;
      }
      cm.npc_ChangeController(9130119, "oid=539102978", 105, 163, 4, 55, 155, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=539102978", "summon", 0, 0);
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, true, true);
      cm.setStandAloneMode(true);
      cm.sendNormalTalk('………。', 5, 9130119, false, true);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk("………。", 5, 9130119, true, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk(" 这个女人怎么回事？为什么不说话，就这么呆呆站着？", 17, 0, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("问答无用。", 5, 9130119, true, true);
          } else if (status === V++) {
            cm.eventSKill(0);
            cm.setInGameDirectionMode(false, true, false);
            cm.setStandAloneMode(false);
            cm.npc_LeaveField("oid=539102978");
            cm.npc_LeaveField("oid=539102978");
            cm.spawnMobLimit(9450038, 1, 364, 187, 1);
            cm.updateInfoQuest(58973 + cm.getNumberFromQuestCustomData(58900), "m035=clear;dr1=clear;m037=clear;m038=clear;m039=clear");
            cm.dispose();
          }
        }
      }
    }
  }
}
function action1(f, E, e) {
  action0(f, E, e);
}
function action2(f, E, e) {
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
      if (!cm.isQuestFinished(58927) && cm.isQuestFinished(58926) || !cm.isQuestFinished(58940) && cm.isQuestFinished(58939) || !cm.isQuestFinished(58968) && cm.isQuestFinished(58967)) {
        cm.dispose();
        return;
      }
      cm.mapleHeroBecomeNpc(2, 1);
      cm.gainSkillBuff(80011079);
      cm.npc_ChangeController(9130119, "oid=457900112", 105, 163, 4, 55, 155, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=457900112", "summon", 0, 0);
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, true, true);
      cm.setStandAloneMode(true);
      cm.sendNormalTalk("………。", 5, 9130119, false, true);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk("………。", 5, 9130119, true, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk("你还是和以前一样不说话啊。", 17, 0, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("既然你们都在这里，那“她” 肯定是要在这里做什么了。", 17, 0, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk('问答无用。', 5, 9130119, true, true);
            } else if (status === V++) {
              cm.eventSKill(0);
              cm.setInGameDirectionMode(false, true, false);
              cm.setStandAloneMode(false);
              cm.npc_LeaveField("oid=457900112");
              cm.npc_LeaveField("oid=457900112");
              cm.spawnMobLimit(9450038, 1, 364, 187, 1);
              cm.updateInfoQuest(58972, "m035=clear;dr1=clear;m037=clear;m038=clear;m039=clear");
              cm.dispose();
            }
          }
        }
      }
    }
  }
}