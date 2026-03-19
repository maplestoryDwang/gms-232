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
      cm.setStandAloneMode(true);
      cm.npc_ChangeController(9400569, "oid=建筑残骸69", 1696, 362, 45, 1646, 1746, 1, false, false);
      cm.npc_SetSpecialAction("oid=建筑残骸69", "summon", 0, 0);
      cm.npc_ChangeController(9400577, 'oid=建筑残骸77', 1175, 92, 68, 1125, 1225, 1, false, false);
      cm.npc_SetSpecialAction("oid=建筑残骸77", "summon", 0, 0);
      cm.npc_ChangeController(9400578, "oid=建筑残骸78", 1440, 312, 45, 1390, 1490, 1, false, false);
      cm.npc_SetSpecialAction("oid=建筑残骸78", "summon", 0, 0);
      cm.Hidden_background("guide136", 0);
      cm.Hidden_background("guide137", 0);
      cm.Hidden_background("guide135", 0);
      cm.npc_ChangeController(9400591, "oid=2280795", 1180, 253, 45, 1130, 1230, 0, true, false);
      cm.npc_SetSpecialAction("oid=2280795", "summon", 0, 0);
      cm.npc_setForceFlip("oid=2280795", 1);
      cm.forceStartQuest(64160, "down");
      cm.npc_ChangeController(9400593, "oid=2280796", 1055, 200, 74, 1005, 1105, 0, true, false);
      cm.npc_SetSpecialAction("oid=2280796", "summon", 0, 0);
      cm.forceStartQuest(64166, "sad");
      cm.npc_ChangeController(9400580, "oid=2280797", 1350, 280, 45, 1300, 1400, 1, true, false);
      cm.npc_SetSpecialAction("oid=2280797", "summon", 0, 0);
      cm.npc_ChangeController(9400582, "oid=2280798", 1400, 280, 45, 1350, 1450, 1, true, false);
      cm.npc_SetSpecialAction("oid=2280798", 'summon', 0, 0);
      cm.onTeleport(0, 3, cm.getPlayer().getId(), 1450, 280);
      cm.inGameDirectionEvent_ForcedFlip(-1);
      cm.sendNewEffects(17, [0, 1000, 2000, 1220, 320]);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_AskAnswerTime(1000);
      } else {
        if (status === V++) {
          cm.fieldEffect_PlayFieldSound("Sound/PL_MONAD.img/EP1/ACT1/hawaru2", 128);
          cm.inGameDirectionEvent_AskAnswerTime(2500);
          cm.effect_NormalSpeechBalloon("呜哇啊啊啊，妈妈别找了……", 1, 0, 0, 2000, 9400593, cm.getPlayer().getId());
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(2500);
            cm.effect_NormalSpeechBalloon("妈妈……呜哇哇", 1, 0, 0, 2000, 9400593, cm.getPlayer().getId());
          } else {
            if (status === V++) {
              cm.npc_SetForceMove("oid=2280797", -1, 80, 50);
              cm.inGameDirectionEvent_AskAnswerTime(1000);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face0#述拉大婶，你在找什么？别把手弄伤了。", 37, 9400580, false, true);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom('……我的女儿……', 37, 9400591, false, true);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_AskAnswerTime(2000);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("我女儿的照片……帽子……", 37, 9400591, false, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face0#……你手会弄伤的，别翻了，我来帮你找。", 37, 9400580, true, true);
                        } else {
                          if (status === V++) {
                            cm.npc_SetForceMove("oid=2280797", -1, 100, 70);
                            cm.sendNormalTalk_Bottom("#b……找什么？", 57, 0, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face0#我听说，大婶有个女儿失踪了。", 37, 9400582, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face0#她平时一直把女儿的照片和帽子贴身带着……要是连那些也弄丢了……", 37, 9400582, true, true);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                } else {
                                  if (status === V++) {
                                    cm.npc_setForceFlip("oid=2280797", 1);
                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                  } else {
                                    if (status === V++) {
                                      cm.npc_SetForceMove("oid=2280798", -1, 100, 50);
                                      cm.sendNormalTalk_Bottom("#b（信中老婆婆也说她孙女失踪了。）", 57, 0, false, true);
                                    } else {
                                      if (status === V++) {
                                        cm.askMenu_Bottom("#b（失踪的人竟不止一两个吗？）#b\r\n#L0#先去帮述拉，跟她打听一下吧。#l", 57, 0);
                                      } else if (status === V++) {
                                        cm.forceCompleteQuest(64017);
                                        cm.forceStartQuest(64018, '');
                                        cm.warp(867200400, 4, true);
                                        cm.setStandAloneMode(false);
                                        cm.setInGameDirectionMode(false, true, false);
                                        cm.npc_LeaveField("oid=2280792");
                                        cm.npc_LeaveField("oid=2280792");
                                        cm.npc_LeaveField("oid=2280793");
                                        cm.npc_LeaveField("oid=2280793");
                                        cm.npc_LeaveField("oid=2280794");
                                        cm.npc_LeaveField("oid=2280794");
                                        cm.npc_LeaveField("oid=2280795");
                                        cm.npc_LeaveField("oid=2280795");
                                        cm.npc_LeaveField("oid=2280796");
                                        cm.npc_LeaveField("oid=2280796");
                                        cm.npc_LeaveField("oid=2280797");
                                        cm.npc_LeaveField("oid=2280797");
                                        cm.npc_LeaveField("oid=2280798");
                                        cm.npc_LeaveField("oid=2280798");
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;