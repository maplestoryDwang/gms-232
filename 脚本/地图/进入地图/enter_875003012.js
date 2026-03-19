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
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.npc_ChangeController(9401278, "oid=78357290", -380, 80, 17, -430, -330, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=78357290", 'summon', 0, 0);
      cm.npc_ChangeController(9401277, "oid=78357291", -230, 80, 16, -280, -180, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=78357291", 'summon', 0, 0);
      cm.npc_ChangeController(9401298, "oid=78357292", -600, 80, 17, -650, -550, 0, false, 0, false);
      cm.npc_SetSpecialAction("oid=78357292", 'summon', 0, 0);
      cm.inGameDirectionEvent_ForcedFlip(-1);
      cm.Npc_Fadeout("oid=78357292", 0, 0);
      cm.sendNewEffects(17, [0, 1000, 2000, -300, 125]);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.sendNormalTalk_Bottom("#face1#哎呀，聊了半天，不知不觉跑到这里来了。", 37, 9401278, false, true, 1);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("#face0##b这里？", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#face1#因为山里的野兽变得狂暴，这座房子的围墙完全被毁掉了。", 37, 9401278, true, true, 1);
          } else {
            if (status === V++) {
              cm.sendNewEffects(13, [1000, -150, 0]);
            } else {
              if (status === V++) {
                cm.Npc_Fadeout("oid=78357292", 255, 1000);
                cm.inGameDirectionEvent_AskAnswerTime(1000);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=78357292"], [0, 0, 0, 1, 0, 1, 0, 0, 0]);
                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("哎呀呀，这是谁啊！这不是玄山派的众位大侠吗？", 37, 9401298, false, true, 1);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face0##b我是玄山派墨玄。", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, false, true, 1);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face0#我是玄山派素笑。", 37, 9401277, true, true, 1);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("你们到这里来干什么……难道？！", 37, 9401298, true, true, 1);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face1#（眨眼）", 37, 9401278, true, true, 1);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face1##b哈哈，我怎么能视而不见呢。", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face1#我们墨玄大侠就是那样的人，哈哈哈。", 37, 9401278, true, true, 1);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("多谢，多谢！\r\n躲避野兽的时候不小心扭伤了腰，连树都砍不了……要是又有野兽出现，真不知道该如何是好！\r\n真的非常感谢！", 37, 9401298, true, true, 1);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face0##b等把篱笆修好之后再说谢谢吧。", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
                                    } else {
                                      if (status === V++) {
                                        cm.updateInfoQuest(65931, "fence=1");
                                        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 600, 0);
                                        cm.inGameDirectionEvent_AskAnswerTime(900);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNewEffects(14, [0, 2000, 1000]);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNewEffects(19, [0]);
                                          } else if (status === V++) {
                                            cm.forceCompleteQuest(65930);
                                            cm.gainExp(1570);
                                            cm.dispose();
                                            cm.warp(875001104, 1, true);
                                            cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                            cm.setInGameDirectionMode(false, true, false);
                                            cm.npc_LeaveField("oid=78357290");
                                            cm.npc_LeaveField("oid=78357291");
                                            cm.npc_LeaveField("oid=78357292");
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