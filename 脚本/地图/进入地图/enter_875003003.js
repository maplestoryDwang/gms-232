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
      cm.npc_ChangeController(9401303, "oid=206883", -348, 337, 24, -398, -298, 1, false, 0, false);
      cm.npc_ChangeController(9401304, "oid=206884", -296, 337, 24, -346, -246, 1, false, 0, false);
      cm.npc_ChangeController(9401305, "oid=206885", -245, 337, 24, -295, -195, 1, false, 0, false);
      cm.npc_ChangeController(9401306, "oid=206886", -192, 337, 24, -242, -142, 1, false, 0, false);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, false);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.npc_ChangeController(9401366, "oid=366962", -590, 330, 24, -640, -540, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=366962", "summon", 0, 0);
      cm.inGameDirectionEvent_ForcedFlip(-1);
      cm.sendNewEffects(17, [0, 1000, 2000, -500, 370]);
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
            cm.inGameDirectionEvent_AskAnswerTime(600);
          } else {
            if (status === V++) {
              cm.fieldEffect_PlayFieldSound("Sound/Skill.img/175001002/Use", 100);
              cm.inGameDirectionEvent_OneTimeAction(2128, 0);
              cm.inGameDirectionEvent_头顶图片(["Skill/17500.img/skill/175001002/effect"], [0, 0, 0, 1, 0, 0, 0, 0, 0]);
              cm.inGameDirectionEvent_AskAnswerTime(600);
            } else {
              if (status === V++) {
                cm.fieldEffect_PlayFieldSound("Sound/Skill.img/175001002/Hit", 100);
                cm.fieldEffect_PlayFieldSound("Sound/SoundEffWz2.img/Mukhyun/destroy", 100);
                cm.npc_SetSpecialAction("oid=366962", "die", 0, 0);
                cm.inGameDirectionEvent_AskAnswerTime(1200);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("哇，哇！", 37, 9401306, false, true, 1);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("木、木人桩！", 37, 9401303, true, true, 1);
                  } else {
                    if (status === V++) {
                      cm.npc_ChangeController(9401277, "oid=366964", -850, 330, 24, -900, -800, 0, true, 0, false);
                      cm.npc_SetSpecialAction('oid=366964', "summon", 0, 0);
                      cm.npc_SetForceMove("oid=366964", 1, 180, 200);
                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/whatl", "oid=366964"], [0, 0, 0, 1, 0, 1, 0, 0, 0]);
                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=366964"], [0, 0, 0, 1, 0, 1, 0, 0, 0]);
                          cm.sendNormalTalk_Bottom("#face5#那是什么声音？难道你把木人桩打飞了，墨玄" + (cm.getPlayer().getGender() == 0 ? '师兄' : '师姐') + '？！', 37, 9401277, false, true, 1);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face5#这可……不是普通木人桩。", 37, 9401277, true, true, 1);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face0##b可能质量不太好。", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face4#……怎么可能？\r\n这是我父亲的商团供应的东西，不可能有次品。\r\n" + (cm.getPlayer().getGender() == 0 ? '师兄' : '师姐') + "，一定是你的力量变得更强了！", 37, 9401277, true, true, 1);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom('#face4#墨玄' + (cm.getPlayer().getGender() == 0 ? '师兄' : '师姐') + '！和我对练一场吧？', 37, 9401277, true, true, 1);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face1##b素笑，别太兴奋。", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face3#呼~~~呜！", 37, 9401277, true, true, 1);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face3#虽说我们玄山派拳法是越练越强的武功，但墨玄" + (cm.getPlayer().getGender() == 0 ? '师兄' : '师姐') + "也太开挂了！", 37, 9401277, true, true, 1);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face2##b哈哈，看来我还差得很远。", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face4#我一定会追上你的，" + (cm.getPlayer().getGender() == 0 ? '师兄' : '师姐') + "！\r\n对了，别岔开话题！拜托和我对练一场~好不好？", 37, 9401277, true, true, 1);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face1##b（素笑的性格一向是九头牛都拉不回来的……还是做好对练的准备吧。）", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
                                            } else {
                                              if (status === V++) {
                                                cm.playerMessage(5, "可通过基本快捷键(S) / 选择型(C)，打开角色的属性窗。");
                                                cm.getTopMsgFont("可通过基本快捷键(S) / 选择型(C)，打开角色的属性窗。", 3, 20, 20, 0, 0);
                                                cm.playerMessage(5, "每次升级时可以获得AP，使用AP可以提升指定能力值。");
                                                cm.getTopMsgFont("每次升级时可以获得AP，使用AP可以提升指定能力值。", 3, 20, 20, 0, 0);
                                                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 600, 0);
                                                cm.inGameDirectionEvent_AskAnswerTime(900);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNewEffects(14, [0, 2000, 1000]);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNewEffects(19, [0]);
                                                  } else if (status === V++) {
                                                    cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                    cm.warp(875000000, 3, false);
                                                    cm.setInGameDirectionMode(false, true, false);
                                                    cm.forceCompleteQuest(65923);
                                                    cm.gainExp(1000);
                                                    cm.npc_LeaveField("oid=366962");
                                                    cm.npc_LeaveField("oid=366964");
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