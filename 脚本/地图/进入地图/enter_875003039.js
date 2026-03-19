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
      cm.npc_ChangeController(9401285, 'oid=206946', -395, 337, 24, -445, -345, 0, false, 0, false);
      cm.npc_ChangeController(9401277, "oid=206947", -345, 337, 24, -395, -295, 0, false, 0, false);
      cm.npc_ChangeController(9401287, "oid=206948", -490, 337, 24, -540, -440, 0, false, 0, false);
      cm.npc_ChangeController(9401288, 'oid=206949', -445, 337, 24, -495, -395, 0, false, 0, false);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, false);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.inGameDirectionEvent_ForcedFlip(1);
      cm.npc_ChangeController(9401305, "oid=2154475", -150, 330, 24, -200, -100, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=2154475", "summon", 0, 0);
      cm.npc_ChangeController(9401304, "oid=2154476", -80, 330, 24, -130, -30, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=2154476", "summon", 0, 0);
      cm.npc_ChangeController(9401303, "oid=2154477", -10, 330, 24, -60, 40, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=2154477", "summon", 0, 0);
      cm.sendNewEffects(17, [0, 1000, 2000, -230, 380]);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1200);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1400);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("你好！墨玄师父！\r\n也许你已经不记得了，我是被你的拳法迷住，才加入了玄山派。\r\n我一定会继续努力，成为像师父一样强大而又正义的人！", 37, 9401305, false, true, 1);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_AskAnswerTime(1000);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_同时移动镜头和人(2, 30);
                cm.sendNormalTalk_Bottom("#face0#我……我也是！", 37, 9401304, false, true, 1);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_ForcedFlip(-1);
                    cm.sendNormalTalk_Bottom("#face2#墨玄" + (cm.getPlayer().getGender() == 0 ? '师兄' : '师姐') + "，托你的福，现在又有了很多新弟子，空空如也的门派也重新开始热闹起来。", 37, 9401277, false, true, 1);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face2#云景师姐虽然嘴上抱怨说教新弟子很累，但心里不知道有多高兴。", 37, 9401277, true, true, 1);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face1##b太好了……我还怕给你添了太多麻烦呢……能帮上忙，真是太好了。", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face1#哎呀，客气什么呢！我们不都在为玄山派而努力嘛。", 37, 9401277, true, true, 1);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face2#" + (cm.getPlayer().getGender() == 0 ? '师兄' : '师姐') + "，让你一个人去，我才是感到很抱歉呢。别忘了我们永远都在你的身后！", 37, 9401277, true, true, 1);
                          } else {
                            if (status === V++) {
                              cm.teachSkill(170000001, 4, 10);
                              cm.fieldEffect_PlayFieldSound("Sound/SoundEffWz2.img/Mukhyun/skillUp", 100);
                              cm.getTopMsgFont("<玄山气势>技能的等级提升。", 3, 20, 20, 0, 0);
                              cm.sendNormalTalk_Bottom("#face1##b谢谢。", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face1#谢谢你，" + (cm.getPlayer().getGender() == 0 ? '师兄' : '师姐') + '。', 37, 9401277, true, true, 1);
                              } else {
                                if (status === V++) {
                                  cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 600, 0);
                                  cm.inGameDirectionEvent_AskAnswerTime(900);
                                } else {
                                  if (status === V++) {
                                    cm.sendNewEffects(14, [0, 2000, 1000]);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNewEffects(19, [0]);
                                    } else if (status === V++) {
                                      cm.forceCompleteQuest(65959);
                                      cm.npc_LeaveField("oid=2154475");
                                      cm.npc_LeaveField("oid=2154476");
                                      cm.npc_LeaveField("oid=2154477");
                                      cm.dispose();
                                      cm.warp(875000001, 1, false);
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