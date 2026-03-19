var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
function action(f, E, e) {
  var V = 'action' + cm.getNumberFromQuestCustomData(58900);
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
      cm.setStandAloneMode(true);
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, true, true);
      cm.npc_ChangeController(9130118, "oid=539059594", 139, 88, 5, 89, 189, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=539059594", "summon", 0, 0);
      cm.sendNormalTalk('你是怎么回事？', 5, 9130118, false, true);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk('……你在这儿干嘛？', 17, 0, true, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk("我？你当然不知道我是谁了。我正在操纵盟军的士兵呢，这不是明摆着吗？", 5, 9130118, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("这些卑贱的人就应该被操纵。你也是一样呢。", 5, 9130118, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk("就让我来使你过上无忧无虑的生活吧。", 5, 9130118, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk("别搞笑了，凭什么？", 17, 0, true, true);
              } else if (status === V++) {
                cm.npc_LeaveField("oid=539059594");
                cm.npc_LeaveField("oid=539059594");
                cm.spawnMobLimit(9450035, 1, 139, 146, 100);
                cm.eventSKill(0);
                cm.setInGameDirectionMode(false, true, false);
                cm.setStandAloneMode(false);
                cm.updateInfoQuest(58973 + cm.getNumberFromQuestCustomData(58900), 'm035=clear');
                cm.dispose();
              }
            }
          }
        }
      }
    }
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
      cm.setStandAloneMode(true);
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, true, true);
      cm.npc_ChangeController(9130118, "oid=539851555", 139, 88, 5, 89, 189, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=539851555", "summon", 0, 0);
      cm.sendNormalTalk("什么啊，这丫头？我很不喜欢啊。", 5, 9130118, false, true);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk("你……？你是谁，在这干什么？ ", 17, 0, true, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk("我？你当然不知道我是谁了。我正在操纵盟军的士兵呢，这不是明摆着吗？", 5, 9130118, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("这些卑贱的人就应该被操纵。你也是一样呢。", 5, 9130118, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk("就让我来使你过上无忧无虑的生活吧。", 5, 9130118, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk("哼，你以为我会被你那种邪恶的咒术师抓住吗？", 17, 0, true, true);
              } else if (status === V++) {
                cm.npc_LeaveField("oid=539851555");
                cm.npc_LeaveField("oid=539851555");
                cm.spawnMobLimit(9450035, 1, 139, 146, 100);
                cm.eventSKill(0);
                cm.setInGameDirectionMode(false, true, false);
                cm.setStandAloneMode(false);
                cm.updateInfoQuest(58974, "m035=clear");
                cm.dispose();
              }
            }
          }
        }
      }
    }
  }
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
      cm.setStandAloneMode(true);
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, true, true);
      cm.npc_ChangeController(9130118, "oid=457862936", 139, 88, 5, 89, 189, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=457862936", "summon", 0, 0);
      cm.sendNormalTalk("哦？你是菖蒲？", 5, 9130118, false, true);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk(" 你是……？弥弄矩……", 17, 0, true, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk("嗬，我还以为你消失了，看来去了盟军就没回来的传闻是真的啊。", 5, 9130118, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("呵呵，反正我不关心你在做什么。", 5, 9130118, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk(" 你……在这里做什么？", 17, 0, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk("这不是明摆着吗？我正在操纵盟军士兵的精神，用处多多，“她”就派我来了。", 5, 9130118, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk("“她”可恨你了。看到你就说要杀了你呢？呵呵 ", 5, 9130118, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk("她指示的事情你都做完了啊。工作既然结束了……你不去看看其他朋友吗？嗬 ", 5, 9130118, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk("朋友？别搞笑了。谁是朋友啊。", 17, 0, true, true);
                    } else if (status === V++) {
                      cm.npc_LeaveField("oid=457862936");
                      cm.npc_LeaveField("oid=457862936");
                      cm.spawnMobLimit(9450035, 1, 139, 146, 100);
                      cm.eventSKill(0);
                      cm.setInGameDirectionMode(false, true, false);
                      cm.setStandAloneMode(false);
                      cm.updateInfoQuest(58972, "m035=clear");
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