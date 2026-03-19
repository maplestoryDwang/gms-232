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
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.npc_ChangeController(2159429, "oid=1135991", 1290, -20, 7, 1240, 1340, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=1135991", 'summon', 0, 0);
      cm.npc_ChangeController(2159430, "oid=1135992", 1320, -20, 7, 1270, 1370, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=1135992", 'summon', 0, 0);
      cm.npc_ChangeController(2159431, "oid=1135993", 1230, -20, 5, 1180, 1280, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=1135993", "summon", 0, 0);
      cm.npc_ChangeController(2159432, "oid=1135994", 1260, -20, 5, 1210, 1310, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=1135994", "summon", 0, 0);
      cm.npc_ChangeController(2159433, "oid=1135995", 1350, -20, 7, 1300, 1400, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=1135995", "summon", 0, 0);
      cm.npc_ChangeController(2159437, "oid=1135996", 1500, -20, 8, 1450, 1550, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=1135996", 'summon', 0, 0);
      cm.npc_ChangeController(2159437, "oid=1135997", 1600, -20, 15, 1550, 1650, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=1135997", 'summon', 0, 0);
      cm.npc_ChangeController(2159437, "oid=1135998", 1700, -20, 16, 1650, 1750, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=1135998", "summon", 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(500);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.sendNormalTalk("我错了……抽泣抽泣。", 1, 2159430, false, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk("我再也不开这种玩笑了。", 1, 2159432, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("全都是因为乌里卡！是她说要让那个骑士吃苦头，才会受到这种惩罚。", 1, 2159433, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk("我，我不知道黑色之翼的手下真的会出现。这里不是只有我们才知道的据点吗？", 1, 2159429, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk("你们这些家伙，还不给我闭嘴？！", 1, 2159437, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk("……呃。", 1, 2159433, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk("竟然在这种地方玩过家家，假扮反抗者。你们这些无可救药的家伙，我一定要好好教训教训你们。", 1, 2159437, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk("孩子们只不过是在做游戏，因为这就惩罚他们，是不是太过分了？", 1, 2159431, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk("闭嘴！看来应该先教训教训你。过来！", 1, 2159437, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk("(情况大概明白了。乌里卡果然是在骗人……不过还是应该帮帮她。)", 17, 2159437, true, true);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_SetHideEffect(0);
                            cm.inGameDirectionEvent_MoveAction(2);
                            cm.inGameDirectionEvent_AskAnswerTime(2500);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_MoveAction(0);
                              cm.sendNormalTalk('嗯？你又是谁！', 1, 2159437, false, true);
                            } else if (status === V++) {
                              cm.forceStartQuest(20939, '');
                              cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                              cm.setInGameDirectionMode(false, true, false);
                              cm.npc_LeaveField("oid=1135991");
                              cm.npc_LeaveField("oid=1135992");
                              cm.npc_LeaveField("oid=1135993");
                              cm.npc_LeaveField("oid=1135994");
                              cm.npc_LeaveField("oid=1135995");
                              cm.npc_LeaveField("oid=1135996");
                              cm.npc_LeaveField("oid=1135997");
                              cm.npc_LeaveField("oid=1135998");
                              cm.dispose();
                              cm.warp(930030003, 0, false);
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
  }
}