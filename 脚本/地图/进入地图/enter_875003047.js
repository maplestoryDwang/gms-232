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
      cm.npc_ChangeController(9401300, "oid=206958", -674, 94, 33, -724, -624, 1, false, 0, false);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, false);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_Hero9(0, 0);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.sendNewEffects(17, [0, 1000, 2000, -670, 120]);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_ForcedFlip(1);
        cm.inGameDirectionEvent_OneTimeAction(29, 1000000);
        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 3000, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1000);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("#face3#你……知道魔教吗？", 37, 9401278, false, true, 1);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#face3##b……据我所知，那是几十年前被灭门的门派。", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face3#没错……那是很久以前因为手段毒辣而被逐出江湖的门派。但他们后来卷土重来，给江湖带来了腥风血雨。", 37, 9401278, true, true, 1);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face3#他们变成了追求更强力量的狂信徒，成为了江湖的公敌。", 37, 9401278, true, true, 1);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face3#但是那种势头没能持续太久。\r\n教主死后，他们瞬间失去了力量，作鸟兽散了。", 37, 9401278, true, true, 1);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face3#本以为……已经消失在历史长河之中的魔教，最近又开始在各地四处活动。", 37, 9401278, true, true, 1);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face3##b难道……", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face3#没错。我怀疑袭击玄山派的人也是魔教。", 37, 9401278, true, true, 1);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face6##b为什么偏偏是玄山派？！", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face3#虽然具体的情况有待确认……但是玄山派位于江湖偏远之地，听到传闻的时候会不会有点晚呢？他们也许是想试试自己的力量，或者想逐步削弱正派……", 37, 9401278, true, true, 1);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face3#还只是推测。总之，进一步确认之后，我会再和你联系。\r\n辛苦了。", 37, 9401278, true, true, 1);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face5##b（……难道……）", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
                              } else {
                                if (status === V++) {
                                  cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                } else {
                                  if (status === V++) {
                                    cm.fieldEffect_ProcessOnOffLayer('00', "Effect/DirectionWz2.img/MukhyunStory/3", 0, 2000, 0, 0, 1, 4, 0, -1, 0, 0, 0);
                                    cm.fieldEffect_PlayBGM("BgmMH/GodOfWar", 0, 0);
                                    cm.fieldEffect_Hero9(-2, 3000);
                                    cm.sendNormalTalk_Bottom("#face5##b（如果那段记忆是我的……难道我是……魔教的教主？）", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, false, true, 1);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face3##b（教主死亡的时间和我出生的时间非常相近，还拥有强大的武力……难道……）", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
                                    } else {
                                      if (status === V++) {
                                        cm.fieldEffect_ProcessOnOffLayer('00', '', 2, 1000, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face3##b（难道……这种力量……是邪恶的……力量？）", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, false, true, 1);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face5##b（还无法确定。先不要随便下结论。）", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
                                          } else {
                                            if (status === V++) {
                                              cm.forceCompleteQuest(65970);
                                              cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 600, 0);
                                              cm.inGameDirectionEvent_AskAnswerTime(900);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNewEffects(14, [0, 2000, 1000]);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNewEffects(19, [0]);
                                                } else if (status === V++) {
                                                  cm.dispose();
                                                  cm.warp(211000000, 0, false);
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
  }
}