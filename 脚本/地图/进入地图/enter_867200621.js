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
      cm.setInGameDirectionMode(true, false, true);
      cm.npc_ChangeController(9400589, "oid=4234189", -58, 450, 1, -108, -8, 0, true, false);
      cm.npc_SetSpecialAction("oid=4234189", "summon", 0, 0);
      cm.npc_ChangeController(9400590, "oid=4234190", 15, 450, 1, -35, 65, 0, true, false);
      cm.npc_SetSpecialAction("oid=4234190", "summon", 0, 0);
      cm.npc_ChangeController(9400587, "oid=4234191", 155, 450, 2, 105, 205, 1, true, false);
      cm.npc_SetSpecialAction("oid=4234191", "summon", 0, 0);
      cm.npc_ChangeController(9400593, "oid=4234192", 587, 450, 2, 537, 637, 1, true, false);
      cm.npc_SetSpecialAction("oid=4234192", 'summon', 0, 0);
      cm.npc_ChangeController(9400591, "oid=4234193", 451, 450, 2, 401, 501, 1, true, false);
      cm.npc_SetSpecialAction("oid=4234193", "summon", 0, 0);
      cm.inGameDirectionEvent_ForcedFlip(-1);
      cm.inGameDirectionEvent_AskAnswerTime(500);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_PushScaleInfo(1500, 2000, 1500, 150, 450);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_AskAnswerTime(500);
        } else {
          if (status === V++) {
            cm.npc_SetSpecialAction("oid=4234190", "attack2", -1, 0);
            cm.sendNormalTalk_Bottom("#face0#你们是要饿死我吗？为什么只给我这点食物？", 37, 9400590, false, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face0#哈~~！你们忘了是谁在出发之前冒着性命危险去收集食物吗？", 37, 9400590, true, true);
            } else {
              if (status === V++) {
                cm.setNpcSpecialActionReset("oid=4234190");
                cm.sendNormalTalk_Bottom("#face0#斯洛克！你没看见现在大家都一样又冷又饿吗？", 37, 9400587, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face0#那你呢，你吃了多少，这么中气十足！？", 37, 9400590, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face0#我不强求你为大家舍身忘我！但请你不要再说这种瓦解乡亲们团结的话！", 37, 9400587, true, true);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_PushScaleInfo(3000, 2000, 3000, 400, 450);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=4234190"], [0, 0, 0, 1, 0, 1, 0, 0]);
                        cm.inGameDirectionEvent_AskAnswerTime(500);
                      } else {
                        if (status === V++) {
                          cm.npc_SetForceMove("oid=4234190", 1, 250, 120);
                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face0#哦！你在那儿啊，#h0#！是你负责分粮？", 37, 9400590, false, true);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_AskAnswerTime(500);
                            } else {
                              if (status === V++) {
                                cm.npc_setForceFlip("oid=4234191", 1);
                                cm.npc_SetForceMove("oid=4234189", 1, 250, 120);
                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face0#斯洛克你别闹，#h0#只是做了目前情况下最好的选择！", 37, 9400589, false, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face0#为了让我们大家一起活下去，辛苦你吃点亏吧。", 37, 9400589, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face0#嗬-？我凭什么要忍着吃亏跟你们在一起？", 37, 9400590, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                      } else {
                                        if (status === V++) {
                                          cm.askMenu_Bottom("#face0#与其跟你们这帮乌合之众一起吃苦，还是我一个人行动更痛快些，哼！#b\r\n#L0#给斯洛克追加分粮。#l\r\n#L1#劝解纠纷，并表示不能给他更多食物。#l", 37, 9400590);
                                        } else {
                                          if (status === V++) {
                                            selectionLog[66] = e;
                                            if (selectionLog[66] == 0) {
                                              cm.sendNormalTalk_Bottom("#face0#早就应该这样做了！", 37, 9400587, false, true);
                                            } else {
                                              cm.sendNormalTalk_Bottom("#face0#在这种情况下，比起感情用事地应对，还是遵守至今为止的规则更靠谱。", 37, 9400587, false, true);
                                            }
                                          } else {
                                            if (status === V++) {
                                              if (selectionLog[66] == 0) {
                                                cm.sendNormalTalk_Bottom("#face0#能干活的人就应该多分吃的！", 37, 9400587, false, true);
                                              } else {
                                                cm.sendNormalTalk_Bottom("#face0#哼，没有我的帮助，看你们怎么到得了目的地？！", 37, 9400590, true, true);
                                              }
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#face0#像你这样热衷引发矛盾的人只会给集体带来危害。", 37, 9400587, true, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                } else if (status === V++) {
                                                  cm.setNumberForQuestInfo(64006, 'Ec', 7);
                                                  cm.warp(867200500, 6);
                                                  cm.setInGameDirectionMode(false, true, false);
                                                  cm.npc_LeaveField("oid=4234189");
                                                  cm.npc_LeaveField("oid=4234189");
                                                  cm.npc_LeaveField("oid=4234190");
                                                  cm.npc_LeaveField("oid=4234190");
                                                  cm.npc_LeaveField("oid=4234191");
                                                  cm.npc_LeaveField("oid=4234191");
                                                  cm.npc_LeaveField("oid=4234192");
                                                  cm.npc_LeaveField("oid=4234192");
                                                  cm.npc_LeaveField("oid=4234193");
                                                  cm.npc_LeaveField("oid=4234193");
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