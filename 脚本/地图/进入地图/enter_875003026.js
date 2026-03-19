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
      cm.npc_ChangeController(9401369, 'oid=206920', -370, 280, 17, -420, -320, 1, false, 0, false);
      cm.npc_ChangeController(9401370, "oid=206921", -315, 280, 17, -365, -265, 1, false, 0, false);
      cm.npc_ChangeController(9401371, "oid=206922", -254, 280, 18, -304, -204, 1, false, 0, false);
      cm.npc_ChangeController(9401372, "oid=206923", -492, 280, 17, -542, -442, 0, false, 0, false);
      cm.npc_ChangeController(9401373, 'oid=206924', -631, 280, 17, -661, -581, 0, false, 0, false);
      cm.npc_ChangeController(9401374, "oid=206925", -681, 280, 21, -731, -681, 0, false, 0, false);
      cm.npc_ChangeController(9401278, 'oid=206926', -756, 151, 11, -806, -706, 0, false, 0, false);
      cm.npc_ChangeController(9401299, "oid=206927", -812, 151, 11, -862, -762, 0, false, 0, false);
      cm.npc_ChangeController(9401287, 'oid=206928', -202, 280, 18, -252, -152, 1, false, 0, false);
      cm.npc_ChangeController(9401288, "oid=206929", -557, 280, 17, -607, -507, 0, false, 0, false);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.npc_ChangeController(9401277, "oid=2152900", -515, 100, 16, -565, -465, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=2152900", "summon", 0, 0);
      cm.setNPC_Fadein(9401299, 1);
      cm.setNPC_Fadein(9401288, 1);
      cm.setNPC_Fadein(9401287, 1);
      cm.sendNewEffects(17, [0, 1000, 2000, -430, 325]);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.sendNormalTalk_Bottom("上次没能参加玄山派入门考试，我不知道有多伤心！", 37, 9401369, false, true, 1);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("没想到这么快就重新开始招募门徒了……真让人激动。", 37, 9401370, true, true, 1);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("我一定要加入玄山派！", 37, 9401371, true, true, 1);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("但是……有传闻说玄山派遭到了攻击……", 37, 9401370, true, true, 1);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("嗯？难道玄山派？！", 37, 9401371, true, true, 1);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("没错，玄山派是江湖南部最强门派！", 37, 9401369, true, true, 1);
                } else {
                  if (status === V++) {
                    cm.sendNewEffects(12, [1000, -500, 180]);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_AskAnswerTime(300);
                    } else {
                      if (status === V++) {
                        cm.npc_setForceFlip("oid=2152900", -1);
                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom('#face3#' + (cm.getPlayer().getGender() == 0 ? '师兄' : '师姐') + "！请你宣布考试开始！", 37, 9401277, false, true, 1);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face1##b不是你准备的考试吗？你来吧。", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face3#但是，" + (cm.getPlayer().getGender() == 0 ? '师兄' : '师姐') + '……', 37, 9401277, true, true, 1);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face1##b不，你好像更合适。", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face4#……明白了！" + (cm.getPlayer().getGender() == 0 ? '师兄' : '师姐') + '！', 37, 9401277, true, true, 1);
                                } else {
                                  if (status === V++) {
                                    cm.npc_setForceFlip("oid=2152900", 1);
                                    cm.inGameDirectionEvent_AskAnswerTime(300);
                                  } else {
                                    if (status === V++) {
                                      cm.npc_SetForceMove("oid=2152900", 1, 30, 100);
                                      cm.sendNewEffects(17, [1000, 2000, 1500, -470, 250]);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face0#玄山派第34代弟子招募考试现在开始。", 37, 9401277, false, true, 1);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face0#只要沿着旁边的路往上走，到达玄山派就行。", 37, 9401277, true, true, 1);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("先爬上去的人就能通过吗？", 37, 9401369, true, true, 1);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#face0#虽然速度很重要，但上山路上做出的每个行动都会体现在分数中。", 37, 9401277, true, true, 1);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face0#想中途放弃的人可以随时下去。", 37, 9401277, true, true, 1);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("#face1#那我们在玄山派见吧。", 37, 9401277, true, true, 1);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.inGameDirectionEvent_AskAnswerTime(2000);
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
                                                            cm.npc_LeaveField("oid=2152900");
                                                            cm.dispose();
                                                            cm.warp(875003027, 0, false);
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
        }
      }
    }
  }
}