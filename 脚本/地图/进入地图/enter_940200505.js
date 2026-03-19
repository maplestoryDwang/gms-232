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
      cm.npc_ChangeController(3001234, 'oid=251994', 1580, -31, 24, 1530, 1630, 1, false, 0, false);
      cm.npc_ChangeController(3001282, 'oid=251995', 1847, 0, 14, 1797, 1897, 1, false, 0, false);
      cm.npc_ChangeController(3001282, "oid=251996", 2017, 29, 8, 1967, 2067, 1, false, 0, false);
      cm.npc_ChangeController(3001283, 'oid=251997', 1240, 29, 4, 1190, 1290, 0, false, 0, false);
      cm.npc_ChangeController(3001283, 'oid=251998', 1130, 29, 1, 1080, 1180, 0, false, 0, false);
      cm.npc_ChangeController(3001284, 'oid=251999', 837, -13, 22, 787, 887, 0, false, 0, false);
      cm.npc_ChangeController(3001284, "oid=252000", 1008, 29, 6, 958, 1058, 0, false, 0, false);
      cm.npc_ChangeController(3001284, "oid=252001", 2328, 29, 19, 2278, 2378, 1, false, 0, false);
      cm.npc_ChangeController(3001284, "oid=252002", 945, 29, 2, 895, 995, 0, false, 0, false);
      cm.npc_ChangeController(3001283, 'oid=252003', 1321, -11, 12, 1271, 1371, 0, false, 0, false);
      cm.npc_ChangeController(3001282, "oid=252004", 1919, 29, 10, 1869, 1969, 1, false, 0, false);
      cm.npc_ChangeController(3001283, "oid=252005", 2451, 29, 17, 2401, 2501, 1, false, 0, false);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, false);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.curNodeEventEnd(true);
      cm.inGameDirectionEvent_AskAnswerTime(2000);
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Bottom("#face4#敌人数量可不是开玩笑的……哈啊，看我不让敌人全军覆没……我走啦。", 37, 3001270, false, true, 1);
      } else {
        if (status === V++) {
          cm.effect_Voice("Voice3.img/cadena/Q7/Female/0", 128);
          cm.inGameDirectionEvent_同时移动镜头和人(2, 200);
          cm.inGameDirectionEvent_AskAnswerTime(2000);
        } else {
          if (status === V++) {
            cm.OverlapScreenDetail19(0, 1000, 3000, 1);
            cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_AskAnswerTime(300);
            } else {
              if (status === V++) {
                cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                cm.npc_ChangeController(3001281, "oid=685690", 2130, -38, 7, 2080, 2180, 1, false, 0, false);
                cm.npc_SetSpecialAction("oid=685690", "summon", 0, 0);
                cm.inGameDirectionEvent_AskAnswerTime(300);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                } else {
                  if (status === V++) {
                    cm.effect_OnUserEff("Effect/OnUserEff.img/emotion/oh");
                    cm.sendNormalTalk_Bottom("#face0#说是来交易，却攻击我的部下。你到底什么来头。", 37, 3001281, false, true, 1);
                  } else {
                    if (status === V++) {
                      cm.effect_Voice("Voice3.img/cadena/Q7/Female/1", 128);
                      cm.sendNormalTalk_Bottom("#face4##b(包围城堡的幽灵主人……头上有断角，笑容卑劣……)#k", 37, 3001270, true, true, 1);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face4##b(让我人生万劫不复的人现在……就在我的眼前吗？)#k", 37, 3001270, true, true, 1);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_OneTimeAction(4, 300);
                          cm.sendNormalTalk_Bottom("#face4##b(……我压制不住心中的怒火。这跟平时战斗完全是两种心情……)#k", 37, 3001270, true, true, 1);
                        } else {
                          if (status === V++) {
                            cm.effect_Voice("Voice3.img/cadena/Q7/Female/2", 128);
                            cm.sendNormalTalk_Bottom("#face4##b(叛徒麦格纳斯……今天我一定要杀了你！)#k", 37, 3001270, true, true, 1);
                          } else {
                            if (status === V++) {
                              cm.effect_Voice("Voice3.img/cadena/Q7/Female/3", 128);
                              cm.inGameDirectionEvent_同时移动镜头和人(2, 50);
                              cm.inGameDirectionEvent_AskAnswerTime(500);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face4#走喽喽喽喽喽喽喽喽喽喽喽喽喽喽喽！！！！！！！！！！", 37, 3001270, false, true, 1);
                              } else {
                                if (status === V++) {
                                  cm.effect_Voice("Voice3.img/cadena/Q7/Female/4", 128);
                                  cm.inGameDirectionEvent_MoveAction(6);
                                  cm.inGameDirectionEvent_OneTimeAction("魔链影士_蓄力", 0);
                                  cm.inGameDirectionEvent_头顶图片(["Skill/6410.img/skill/64100000/effect"], [0, 0, 0, 1, 0, 0, 0, 0, 0]);
                                  cm.fieldEffect_PlayFieldSound("Sound/Skill.img/64100000/Use", 100);
                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_MoveAction(6);
                                    cm.inGameDirectionEvent_OneTimeAction('魔链影士_前冲甩鞭', 0);
                                    cm.inGameDirectionEvent_头顶图片(["Skill/6410.img/skill/64101001/effect"], [0, 0, 0, 1, 0, 0, 0, 0, 0]);
                                    cm.inGameDirectionEvent_头顶图片(["Skill/6410.img/skill/64101001/effect0"], [0, 0, 0, 1, 0, 0, 0, 0, 0]);
                                    cm.fieldEffect_PlayFieldSound("Sound/Skill.img/64101001/Use", 100);
                                    cm.fieldEffect_InsertCanvas(1, 255, 240, 240, 240, 1300, 0);
                                    cm.inGameDirectionEvent_AskAnswerTime(1600);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                    } else if (status === V++) {
                                      cm.npc_LeaveField("oid=685690");
                                      cm.dispose();
                                      cm.warp(402000002, 1, true);
                                      cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                      cm.setInGameDirectionMode(false, true, false);
                                      cm.setStandAloneMode(false);
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