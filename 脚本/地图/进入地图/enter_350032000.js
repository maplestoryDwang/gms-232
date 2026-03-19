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
      cm.npc_ChangeController(1540450, "oid=22432881", -2230, -370, 10, -2280, -2180, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=22432881", "summon", 0, 0);
      cm.npc_ChangeController(1540451, "oid=22432882", -2185, -327, 3, -2235, -2135, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=22432882", "summon", 0, 0);
      cm.npc_ChangeController(1540452, "oid=22432883", -2087, -370, 10, -2137, -2037, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=22432883", "summon", 0, 0);
      cm.npc_ChangeController(1540453, "oid=22432884", -2360, -370, 9, -2410, -2310, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=22432884", "summon", 0, 0);
      cm.npc_ChangeController(1540611, "oid=22432885", -1788, -245, 16, -1838, -1738, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=22432885", "summon", 0, 0);
      cm.npc_ChangeController(1540612, "oid=22432886", -1688, -245, 17, -1738, -1638, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=22432886", "summon", 0, 0);
      cm.npc_ChangeController(1540613, "oid=22432887", -1860, -245, 16, -1910, -1810, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=22432887", 'summon', 0, 0);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.inGameDirectionEvent_ForcedFlip(-1);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1200);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1400);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_PushMoveInfo(0, 100, -2092, -87);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(1000);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("虽然由于敌人的空袭，我们的作战计划有些延迟，但\r\n我们现在也控制了火势，那就没必要拖延下去了，我们出击吧。", 37, 1540451, false, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("贝尔，韩利泰，切奇，还有#h0#。\r\n大家请集中注意力。", 37, 1540452, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("在海盗部队扰乱敌人期间，\r\n请各位迂回侵入黑色天堂。\r\n请选择攻击敌人相对较弱的地方，快速到达敌人的甲板。", 37, 1540452, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("给，请收下，这是#r联盟特制信号弹。#k\r\n无论是谁，只要先到达黑色天堂，就请放出信号弹，传递信号。\r\n支援部队会帮助各位，与你们一起往内部进军的。", 37, 1540452, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("我们会快速完成任务，传递信号的！", 37, 1540613, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("如果一下子就把他们解决掉，会不会很无聊啊，队长？", 37, 1540611, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("真是的，韩利泰你在这种情况下还有心情开玩笑啊？", 37, 1540612, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("那各位，祝你们好运！", 37, 1540450, true, true);
                          } else {
                            if (status === V++) {
                              cm.npc_SetForceMove("oid=22432887", 1, 500, 150);
                              cm.npc_SetForceMove("oid=22432885", 1, 500, 150);
                              cm.npc_SetForceMove("oid=22432886", 1, 500, 150);
                              cm.inGameDirectionEvent_ForcedFlip(1);
                              cm.inGameDirectionEvent_AskAnswerTime(500);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_同时移动镜头和人(2, 800);
                                cm.inGameDirectionEvent_AskAnswerTime(2000);
                              } else {
                                if (status === V++) {
                                  cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                } else if (status === V++) {
                                  cm.dispose();
                                  cm.warp(350032400, 3, true);
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