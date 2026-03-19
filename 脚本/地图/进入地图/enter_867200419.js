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
      cm.npc_ChangeController(9400589, "oid=4211129", -720, 280, 13, -770, -670, 0, true, false);
      cm.npc_SetSpecialAction("oid=4211129", "summon", 0, 0);
      cm.npc_ChangeController(9400582, "oid=4211130", -850, 280, 14, -900, -800, 1, true, false);
      cm.npc_SetSpecialAction("oid=4211130", 'summon', 0, 0);
      cm.npc_ChangeController(9400611, "oid=4211131", -970, 280, 9, -1020, -920, 0, true, false);
      cm.npc_SetSpecialAction("oid=4211131", "summon", 0, 0);
      cm.npc_ChangeController(9400611, "oid=4211132", -1090, 280, 7, -1140, -1040, 0, true, false);
      cm.npc_SetSpecialAction("oid=4211132", "summon", 0, 0);
      cm.npc_ChangeController(9400611, "oid=4211133", -1300, 280, 6, -1350, -1250, 1, true, false);
      cm.npc_SetSpecialAction("oid=4211133", "summon", 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(500);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Bottom("#face0#是要刮暴风雪了吗？我感觉腰疼，歇会儿再继续吧。", 37, 9400589, false, true);
      } else {
        if (status === V++) {
          cm.npc_SetSpecialAction("oid=4211130", "movingattack", -1, 0);
          cm.npc_SetSpecialAction("oid=4211131", "attack1", -1, 0);
          cm.sendNewEffects(17, [2000, 1000, 2000, -480, 380]);
        } else {
          if (status === V++) {
            cm.npc_SetForceMove("oid=4211129", 1, 280, 80);
            cm.inGameDirectionEvent_AskAnswerTime(1000);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_ForcedFlip(1);
              cm.inGameDirectionEvent_同时移动镜头和人(2, 316);
              cm.inGameDirectionEvent_AskAnswerTime(501);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(2000);
              } else {
                if (status === V++) {
                  cm.npc_setForceFlip("oid=4211129", -1);
                  cm.sendNormalTalk_Bottom("#face0#你也休息一下吧。先前交战过后的疲劳都还没缓解呢。", 37, 9400589, false, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face0#我快点做完，回去再休息~", 37, 9400582, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face0#你是怕艾丽卡等久了吧。", 37, 9400589, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face0#那我也不能坐着。", 37, 9400589, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face0#不不-老人家有特别优待，你坐着就好。", 37, 9400582, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face0##h0#你就……。", 37, 9400582, true, true);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_ForcedFlip(-1);
                              cm.sendNormalTalk_Bottom('#b……', 57, 0, true, true);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_AskAnswerTime(500);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_同时移动镜头和人(1, 200);
                                  cm.sendNewEffects(12, [2000, -850, 330, 0, 0]);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face0#哈哈，多谢理解！", 37, 9400582, false, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#b看来你真的很关心艾丽卡呢。", 57, 0, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_OneTimeAction(5, 50000);
                                          cm.sendNormalTalk_Bottom("#face0#嗯？我是艾丽卡的护卫骑士啊，对她来说，我就是白马王子。", 37, 9400582, false, true);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#b见习学者地位很高吗？", 57, 0, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face0#呵呵，我们艾丽卡可不是一般的见习学者。", 37, 9400582, true, true);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#face0#她是最！年！轻！的天才！集亚皮纳斯最漂亮！最性感！最清纯！等等修饰语于一身的学者。", 37, 9400582, true, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face0#听说她是高级学者的闺女。", 37, 9400589, true, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("#b……啊！", 57, 0, true, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("#face0#你这感叹什么意思？！我才不在乎这些……", 37, 9400582, true, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("#b咦，你怎么声音越说越小了？", 57, 0, true, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("#face0#……", 37, 9400582, true, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("#face0#……老实说，一方面确实是为了报答鲁克豪威尔……但现在我是真心想保护艾丽卡。", 37, 9400582, true, true);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("#face0#50个！全集齐了！咱们快回去吧！", 37, 9400582, true, true);
                                                            } else if (status === V++) {
                                                              cm.updateInfoQuest(64021, "dir1=1");
                                                              if (!cm.haveItem(4036370, 50)) {
                                                                cm.gainItem(4036370, 50 - cm.getItemQuantity(4036370));
                                                              }
                                                              cm.dispose();
                                                              cm.warp(867200404, 0);
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