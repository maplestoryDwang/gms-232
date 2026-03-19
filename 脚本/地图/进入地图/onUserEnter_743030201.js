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
      cm.inGameDirectionEvent_MoveAction(0);
      cm.npc_ChangeController(9330204, 'oid=857375', 807, -100, 5, 757, 857, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=857375", 'summon', 0, 0);
      cm.setSessionValue('Suha7', "857375");
      cm.updateInfoQuest(39391, "level=1");
      cm.gainExp(913);
      cm.updateInfoQuest(1073, "508=10;0=1");
      cm.teachSkill(1227, 0, -1);
      cm.teachSkill(1227, 1, 1);
      cm.updateInfoQuest(52410, "job=1;bohab=1;equip=1");
      cm.updateInfoQuest(52410, "job=1;Level=1;bohab=1;equip=1");
      cm.sendNormalTalk("快点坐上船！", 1, 9330204, false, true);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.sendNormalTalk("赶紧。", 1, 9330204, true, true);
      } else {
        if (status === V++) {
          cm.npc_SetSpecialAction("oid=857375", "move", 0, 1);
          cm.npc_SetForceMove("oid=857375", -1, 837, 160);
          cm.inGameDirectionEvent_AskAnswerTime(4000);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_MoveAction(1);
            cm.inGameDirectionEvent_AskAnswerTime(3000);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_MoveAction(5);
              cm.inGameDirectionEvent_AskAnswerTime(100);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_MoveAction(1);
                cm.inGameDirectionEvent_AskAnswerTime(100);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_MoveAction(2);
                  cm.inGameDirectionEvent_AskAnswerTime(100);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_MoveAction(0);
                    cm.sendNormalTalk("秀禾，这艘船有点奇怪？也没有锚！真奇怪，慢慢的移动了！", 3, 9330204, false, true);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                    } else {
                      if (status === V++) {
                        cm.npc_ChangeController(9330212, "oid=857380", 263, -31, 5, 213, 313, 0, true, 0, false);
                        cm.npc_SetSpecialAction("oid=857380", 'summon', 0, 0);
                        cm.npc_ChangeController(9330212, "oid=857381", 288, -31, 5, 238, 338, 0, true, 0, false);
                        cm.npc_SetSpecialAction("oid=857381", "summon", 0, 0);
                        cm.npc_ChangeController(9330212, "oid=857382", 200, -31, 5, 150, 250, 1, true, 0, false);
                        cm.npc_SetSpecialAction("oid=857382", "summon", 0, 0);
                        cm.npc_ChangeController(9330212, 'oid=857383', 430, -31, 5, 380, 480, 1, true, 0, false);
                        cm.npc_SetSpecialAction("oid=857383", "summon", 0, 0);
                        cm.npc_ChangeController(9330212, 'oid=857384', 170, -31, 5, 120, 220, 1, true, 0, false);
                        cm.npc_SetSpecialAction("oid=857384", "summon", 0, 0);
                        cm.npc_ChangeController(9330212, "oid=857385", 230, -31, 5, 180, 280, 1, true, 0, false);
                        cm.npc_SetSpecialAction("oid=857385", 'summon', 0, 0);
                        cm.npc_ChangeController(9330213, "oid=857386", 380, -31, 5, 330, 430, 1, true, 0, false);
                        cm.npc_SetSpecialAction("oid=857386", "summon", 0, 0);
                        cm.npc_ChangeController(9330212, 'oid=857387', 490, -31, 5, 440, 540, 1, true, 0, false);
                        cm.npc_SetSpecialAction("oid=857387", 'summon', 0, 0);
                        cm.npc_ChangeController(9330212, "oid=857388", 545, -31, 5, 495, 595, 1, true, 0, false);
                        cm.npc_SetSpecialAction("oid=857388", 'summon', 0, 0);
                        cm.npc_ChangeController(9330212, "oid=857389", 600, -31, 5, 550, 650, 1, true, 0, false);
                        cm.npc_SetSpecialAction('oid=857389', "summon", 0, 0);
                        cm.npc_ChangeController(9330212, 'oid=857390', 612, -31, 5, 562, 662, 1, true, 0, false);
                        cm.npc_SetSpecialAction("oid=857390", "summon", 0, 0);
                        cm.npc_ChangeController(9330213, "oid=857391", 678, -31, 5, 628, 728, 1, true, 0, false);
                        cm.npc_SetSpecialAction("oid=857391", "summon", 0, 0);
                        cm.npc_ChangeController(9330212, 'oid=857392', 701, -31, 5, 651, 751, 1, true, 0, false);
                        cm.npc_SetSpecialAction("oid=857392", "summon", 0, 0);
                        cm.npc_ChangeController(9330212, "oid=857393", 731, -31, 5, 681, 781, 1, true, 0, false);
                        cm.npc_SetSpecialAction("oid=857393", 'summon', 0, 0);
                        cm.npc_ChangeController(9330212, "oid=857394", 800, -31, 5, 750, 850, 1, true, 0, false);
                        cm.npc_SetSpecialAction('oid=857394', "summon", 0, 0);
                        cm.sendNormalTalk("秀禾!刚刚看到的皇帝的部下！", 3, 9330204, false, true);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk("快要出发了。", 1, 9330204, false, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk("父...父亲呢? 父亲说他应该会到渡口啊。", 3, 9330204, true, true);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk("被至尊宝控制住了!赶紧抓住那两个家伙! ", 1, 9330205, false, true);
                                } else {
                                  if (status === V++) {
                                    cm.npc_ChangeController(9330205, "oid=857396", 490, -31, 5, 440, 540, 0, true, 0, false);
                                    cm.npc_SetSpecialAction("oid=857396", "summon", 0, 0);
                                    cm.setSessionValue("Sunyo4", "857396");
                                    cm.npc_SetForceMove("oid=857396", -1, 300, 100);
                                    cm.sendNormalTalk("秀禾，这是什么意思呢！？父亲？父亲？现在不管父亲就走了吗？", 3, 9330204, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk("什么，回答一下。赶快!", 3, 9330204, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk('宏武团长不会来。', 1, 9330204, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk("什么?!!!", 3, 9330204, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk("我说谎了。团长不会回来了。", 1, 9330204, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                            } else if (status === V++) {
                                              cm.forceCompleteQuest(52409);
                                              cm.npc_LeaveField('oid=857375');
                                              cm.npc_LeaveField("oid=857380");
                                              cm.npc_LeaveField('oid=857381');
                                              cm.npc_LeaveField("oid=857382");
                                              cm.npc_LeaveField("oid=857383");
                                              cm.npc_LeaveField("oid=857384");
                                              cm.npc_LeaveField("oid=857385");
                                              cm.npc_LeaveField("oid=857386");
                                              cm.npc_LeaveField("oid=857387");
                                              cm.npc_LeaveField('oid=857388');
                                              cm.npc_LeaveField("oid=857389");
                                              cm.npc_LeaveField("oid=857390");
                                              cm.npc_LeaveField("oid=857391");
                                              cm.npc_LeaveField("oid=857392");
                                              cm.npc_LeaveField("oid=857393");
                                              cm.npc_LeaveField("oid=857394");
                                              cm.npc_LeaveField("oid=857396");
                                              cm.dispose();
                                              cm.warp(743020400, 0, false);
                                              cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
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
          }
        }
      }
    }
  }
}