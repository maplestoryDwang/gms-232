var status = -1;
var selectionLog = [];
function action(f, E, e) {
  if (cm.isQuestFinished(37101) && !cm.isQuestFinished(37102) && "31=h0;dir=on" === cm.getInfoQuest(37100)) {
    action1(f, E, e);
  } else {
    if (cm.isQuestActive(37111) && "dir=on" === cm.getInfoQuest(37117)) {
      action2(f, E, e);
    } else if (cm.isQuestActive(37102)) {
      action3(f, E, e);
    } else {
      cm.dispose();
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
      cm.npc_ChangeController(3004048, "oid=62054", 390, 189, 6, 340, 440, 1, false, false);
      cm.npc_ChangeController(3004047, "oid=62055", -141, 167, 3, -191, -91, 0, false, false);
      cm.npc_ChangeController(3004032, "oid=62056", 160, 172, 4, 110, 210, 1, false, false);
      cm.npc_ChangeController(3004049, 'oid=62057', -230, 171, 3, -280, -180, 0, false, false);
      cm.npc_ChangeController(3004031, "oid=62058", 78, 170, 4, 28, 128, 1, false, false);
      cm.npc_ChangeController(3004048, 'oid=62059', 509, 182, 7, 459, 559, 1, false, false);
      cm.npc_ChangeController(3004048, "oid=62060", 624, 169, 7, 574, 674, 1, false, false);
      cm.npc_ChangeController(3004014, "oid=7080276", -150, 100, 3, -200, -100, 0, true, false);
      cm.npc_SetSpecialAction("oid=7080276", "summon", 0, 0);
      cm.npc_ChangeController(3004014, "oid=7080277", -270, 100, 2, -320, -220, 0, true, false);
      cm.npc_SetSpecialAction("oid=7080277", "summon", 0, 0);
      cm.npc_ChangeController(3004014, "oid=7080278", -390, 100, 2, -440, -340, 0, true, false);
      cm.npc_SetSpecialAction("oid=7080278", "summon", 0, 0);
      cm.npc_ChangeController(3004014, "oid=7080279", 370, 100, 6, 320, 420, 1, true, false);
      cm.npc_SetSpecialAction("oid=7080279", "summon", 0, 0);
      cm.npc_ChangeController(3004014, "oid=7080280", 490, 100, 7, 440, 540, 1, true, false);
      cm.npc_SetSpecialAction("oid=7080280", "summon", 0, 0);
      cm.npc_ChangeController(3004014, "oid=7080281", 610, 100, 7, 560, 660, 1, true, false);
      cm.npc_SetSpecialAction("oid=7080281", "summon", 0, 0);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_AskAnswerTime(1000);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Bottom("#face0#就是这家伙轰了我们办公室吗？！", 37, 3004002, false, true);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1200);
        } else {
          if (status === V++) {
            cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
            cm.inGameDirectionEvent_AskAnswerTime(1400);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("（看样子刚才击落的某物刚巧落到了这间办公室！）", 57, 0, false, true);
            } else if (status === V++) {
              cm.updateInfoQuest(37100, "31=h0;dir=off");
              cm.setInGameDirectionMode(false, true, false);
              cm.setStandAloneMode(false);
              cm.dispose();
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
      cm.npc_ChangeController(3004048, 'oid=62054', 390, 189, 6, 340, 440, 1, false, false);
      cm.npc_ChangeController(3004047, "oid=62055", -141, 167, 3, -191, -91, 0, false, false);
      cm.npc_ChangeController(3004032, "oid=62056", 160, 172, 4, 110, 210, 1, false, false);
      cm.npc_ChangeController(3004049, "oid=62057", -230, 171, 3, -280, -180, 0, false, false);
      cm.npc_ChangeController(3004031, 'oid=62058', 78, 170, 4, 28, 128, 1, false, false);
      cm.npc_ChangeController(3004048, 'oid=62059', 509, 182, 7, 459, 559, 1, false, false);
      cm.npc_ChangeController(3004048, "oid=62060", 624, 169, 7, 574, 674, 1, false, false);
      cm.npc_ChangeController(3004014, "oid=7121643", -390, 100, 2, -440, -340, 0, true, false);
      cm.npc_SetSpecialAction("oid=7121643", "summon", 0, 0);
      cm.npc_ChangeController(3004014, "oid=7121644", 370, 100, 6, 320, 420, 1, true, false);
      cm.npc_SetSpecialAction("oid=7121644", 'summon', 0, 0);
      cm.npc_ChangeController(3004014, "oid=7121645", 490, 100, 7, 440, 540, 1, true, false);
      cm.npc_SetSpecialAction("oid=7121645", 'summon', 0, 0);
      cm.npc_ChangeController(3004014, "oid=7121646", 610, 100, 7, 560, 660, 1, true, false);
      cm.npc_SetSpecialAction("oid=7121646", "summon", 0, 0);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1200);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1400);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("#face1#这个怎么样？\r\n这款商品包含两天一夜的温泉住宿。\r\n只要在热腾腾的#b（放射性）#k温泉中泡上一会儿，顿时能感觉到浑身的疲惫一扫而光。", 37, 3004002, false, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#face0#哇~听着就很诱人呢~", 37, 3004001, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face0#只要你不介意多长根手指就行。", 37, 3004000, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face0#什么人！", 37, 3004002, true, true);
              } else {
                if (status === V++) {
                  cm.npc_ChangeController(3004000, "oid=7121890", -141, 111, 3, -191, -91, 0, true, false);
                  cm.npc_SetSpecialAction("oid=7121890", "summon", 0, 0);
                  cm.inGameDirectionEvent_SetHideEffect(0);
                  cm.sendNormalTalk_Bottom("#face2 #哎呀？你是？", 37, 3004001, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face0#呼呼呼。", 37, 3004000, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face0#朦胧月色下，暗影横出世，\r\n我就是恶臭垃圾堆中横空诞生的乱世英雄……", 37, 3004000, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("又来一个……？", 57, 0, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face0#有什么不明白的问题吗？\r\n你被人威胁了吗？你在找什么神秘物品吗？", 37, 3004000, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face2#无论有什么麻烦，尽管等我来解决！！", 37, 3004001, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face0#哼哼，哪儿有案件我去哪儿。我是潇洒的黑鸦侦探！", 37, 3004000, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face2#哇！我是你的粉丝~黑鸦侦探的案件日志！超精彩的！", 37, 3004001, true, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face0#多谢美女捧场，呵呵。", 37, 3004000, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face0#行了行了，知道你厉害，黑鸦。你过来又有什么事？", 37, 3004002, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face0#我听说你们在找飞艇上运载的货物。\r\n说来可惜，这位朋友到达时，物品已经消失了。", 37, 3004000, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face2#消失了？可恶！哪个家伙敢动我东西！", 37, 3004002, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face1#诶？那些是我的东西吧……", 37, 3004001, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face0#……", 37, 3004002, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face1#抱歉，我一时情急，说错话了。\r\n我只是瞬间感同身受，所以非常生气。", 37, 3004002, true, true);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#face0#噢~原来是这样。", 37, 3004001, true, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face0#总而言之……你是打算帮这位美女找东西？", 37, 3004002, true, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("#face0#正是如此。很棒吧？\r\n有我这位名侦探亲自出马。\r\n（其实已经找到了。）", 37, 3004000, true, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("#face0#（嘁，凡是那家伙掺和进来，准没好事……\r\n但若是没有他，也不可能重新找到丢失的物品……）", 37, 3004002, true, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("#face0#哼，随你便。我心胸宽广，就特别批准你协助。", 37, 3004002, true, true);
                                                      } else if (status === V++) {
                                                        cm.setInGameDirectionMode(false, true, false);
                                                        cm.setStandAloneMode(false);
                                                        cm.npc_LeaveField("oid=7121890");
                                                        cm.npc_LeaveField("oid=7121890");
                                                        cm.updateInfoQuest(37117, "dir=off");
                                                        cm.updateInfoQuest(37100, "31=h0;50=h1;32=h0;51=h1;33=h1;52=h1;dir=off;35=h1;36=h1;37=h1;47=h0;38=h0;39=h1");
                                                        cm.forceCompleteQuest(37111);
                                                        cm.gainItem(4036492, -50);
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
    }
  }
}
function action3(f, E, e) {
  if (status == 0 && f == 0) {
    cm.dispose();
    return;
  }
  status++;
  selectionLog[status] = e;
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else if (status === V++) {
    cm.npc_ChangeController(3004048, "oid=62054", 390, 189, 6, 340, 440, 1, false, false);
    cm.npc_ChangeController(3004047, 'oid=62055', -141, 167, 3, -191, -91, 0, false, false);
    cm.npc_ChangeController(3004032, "oid=62056", 160, 172, 4, 110, 210, 1, false, false);
    cm.npc_ChangeController(3004049, 'oid=62057', -230, 171, 3, -280, -180, 0, false, false);
    cm.npc_ChangeController(3004031, "oid=62058", 78, 170, 4, 28, 128, 1, false, false);
    cm.npc_ChangeController(3004048, "oid=62059", 509, 182, 7, 459, 559, 1, false, false);
    cm.npc_ChangeController(3004048, 'oid=62060', 624, 169, 7, 574, 674, 1, false, false);
    cm.npc_ChangeController(3004014, "oid=7082185", -150, 100, 3, -200, -100, 0, true, false);
    cm.npc_SetSpecialAction("oid=7082185", "summon", 0, 0);
    cm.npc_ChangeController(3004014, "oid=7082186", -270, 100, 2, -320, -220, 0, true, false);
    cm.npc_SetSpecialAction("oid=7082186", 'summon', 0, 0);
    cm.npc_ChangeController(3004014, "oid=7082187", -390, 100, 2, -440, -340, 0, true, false);
    cm.npc_SetSpecialAction("oid=7082187", "summon", 0, 0);
    cm.npc_ChangeController(3004014, "oid=7082188", 370, 100, 6, 320, 420, 1, true, false);
    cm.npc_SetSpecialAction("oid=7082188", "summon", 0, 0);
    cm.npc_ChangeController(3004014, "oid=7082189", 490, 100, 7, 440, 540, 1, true, false);
    cm.npc_SetSpecialAction("oid=7082189", "summon", 0, 0);
    cm.npc_ChangeController(3004014, "oid=7082190", 610, 100, 7, 560, 660, 1, true, false);
    cm.npc_SetSpecialAction("oid=7082190", "summon", 0, 0);
    cm.dispose();
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;