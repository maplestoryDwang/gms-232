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
      cm.setInGameDirectionMode(true, false, false);
      cm.npc_ChangeController(3001015, "oid=1105904", 530, -33, 4, 480, 580, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=1105904", "summon", 0, 0);
      cm.npc_ChangeController(3000122, "oid=1105905", 483, 164, 9, 433, 533, 0, false, 0, false);
      cm.npc_SetSpecialAction("oid=1105905", 'summon', 0, 0);
      cm.npc_ChangeController(3000122, "oid=1105906", 413, 164, 9, 363, 463, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=1105906", 'summon', 0, 0);
      cm.npc_ChangeController(3000128, "oid=1105907", 353, 164, 11, 303, 403, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=1105907", "summon", 0, 0);
      cm.npc_ChangeController(3000122, "oid=1105908", 193, 164, 14, 143, 243, 0, false, 0, false);
      cm.npc_SetSpecialAction("oid=1105908", "summon", 0, 0);
      cm.npc_ChangeController(3000122, "oid=1105909", 103, 164, 16, 53, 153, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=1105909", "summon", 0, 0);
      cm.npc_ChangeController(3000122, "oid=1105910", 13, 164, 17, -37, 63, 0, false, 0, false);
      cm.npc_SetSpecialAction("oid=1105910", 'summon', 0, 0);
      cm.npc_ChangeController(3000125, "oid=1105911", -83, 164, 19, -133, -33, 0, false, 0, false);
      cm.npc_SetSpecialAction("oid=1105911", "summon", 0, 0);
      cm.sendNormalTalk("哇……哇……一次来这么多敌人，还要一个不漏的全部赶到峡谷中去，这可不是件容易事。", 17, 3001015, false, true);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.sendNormalTalk("总之快要结束了。你看那边。", 1, 3000018, true, true);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_PushMoveInfo(0, 600, 293, 182);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(2854);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(1000);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk("太好了，全被赶进峡谷了！伊黛娜！就是现在！", 17, 3000018, false, true);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_PushMoveInfo(0, 600, 293, 182);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_AskAnswerTime(2554);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk("爆莉萌天使，干得好。现在轮到我的终极魔法出场了！\r\n\r\n#Wbasic#\r\n#fUI/UIWindow2.img/QuestIcon/8/0# 219,678\r\n可进行任务“伊黛娜的终极魔法，爆！”", 1, 3001015, false, true);
                      } else {
                        if (status === V++) {
                          cm.npc_SetSpecialAction("oid=1105904", "HyperMagic", 0, 1);
                          cm.inGameDirectionEvent_AskAnswerTime(2280);
                        } else {
                          if (status === V++) {
                            cm.fieldEffect_ScreenMsg("tdAnbur/idea_hyperMagic");
                            cm.inGameDirectionEvent_AskAnswerTime(3600);
                          } else if (status === V++) {
                            cm.forceCompleteQuest(31651);
                            cm.gainExp(219678);
                            cm.npc_LeaveField("oid=1105904");
                            cm.npc_LeaveField("oid=1105905");
                            cm.npc_LeaveField("oid=1105906");
                            cm.npc_LeaveField("oid=1105907");
                            cm.npc_LeaveField("oid=1105908");
                            cm.npc_LeaveField("oid=1105909");
                            cm.npc_LeaveField("oid=1105910");
                            cm.npc_LeaveField("oid=1105911");
                            cm.dispose();
                            cm.warp(940100001, 0, false);
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