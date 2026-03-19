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
      cm.setAmbience("SoundEff.img/ReverseCity/subinLoop", 128, 100);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, false);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.setStandAloneMode(true);
      cm.onTeleport(0, 3, cm.getPlayer().getId(), -40, -12);
      cm.npc_ChangeController(3004651, "oid=123506916", -140, -10, 2, -190, -90, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=123506916", 'summon', 0, 0);
      cm.npc_ChangeController(3004666, "oid=123506917", 240, -10, 2, 190, 290, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=123506917", "summon", 0, 0);
      cm.npc_ChangeController(3004666, "oid=123506918", 340, -10, 3, 290, 390, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=123506918", 'summon', 0, 0);
      cm.npc_ChangeController(3004666, "oid=123506919", 440, -10, 3, 390, 490, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=123506919", "summon", 0, 0);
      cm.npc_ChangeController(3004663, "oid=123506920", 300, -40, 3, 250, 350, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=123506920", 'summon', 0, 0);
      cm.Npc_Fadeout("oid=123506920", 0, 500);
      cm.npcMove(3004663, 0, -130, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 0, 90, -100);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_AskAnswerTime(300);
      } else {
        if (status === V++) {
          cm.userSetFieldFloating(993176009, 3, 3, 700);
          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1200);
        } else {
          if (status === V++) {
            cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 2000, 0);
            cm.inGameDirectionEvent_AskAnswerTime(2500);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("那是全新类型的机械！", 56, 0, false, true, 1);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face0#之前对付的是搜、搜索型，那个是战斗型。", 36, 3004651, true, true, 1);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face0#虽然飞行型机动性更好，但由于重量问题，活、活力会略显不足。", 36, 3004651, true, true, 1);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face0#而战斗型可以附着在天花板上，重、重量和火力都得到了增强。", 36, 3004651, true, true, 1);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face0#听说里面放入了老鼠之类的小型生命体，\r\n还有反转重、重力的智能机器人。", 36, 3004651, true, true, 1);
                    } else {
                      if (status === V++) {
                        cm.Npc_Fadeout("oid=123506920", 255, 500);
                        cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/ReverseCity/drone2", 100);
                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face0#贝尔，没想到你会成为我的敌人……", 36, 3004677, false, true, 1);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face0#嗯，那、那也没办法。", 36, 3004651, true, true, 1);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face0#嗯～是突然有什么事情触动了你吗？", 36, 3004677, true, true, 1);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face0#算了……没关系。反正你也做不了什么。\r\n我切断了铁路，继续往前走就是死路。", 36, 3004677, true, true, 1);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face0#没、没关系。我知道怎么复原。在下下格就能进行操作。", 36, 3004651, true, true, 1);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face0#我早有所料，所以把格与格之间移动的门全都关掉了。", 36, 3004677, true, true, 1);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face0#没关系。我、我知道怎么开门。", 36, 3004651, true, true, 1);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face0#但，但是那样的话，列车速度就会降低，最后会停下来。", 36, 3004677, true, true, 1);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face0#没关系。\r\n我知道驾驶列车的方、方法。", 36, 3004651, true, true, 1);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face0#切，为什么？！你怎么会知道这些？！", 36, 3004677, true, true, 1);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face0#在写、写这本东西的时候学会的。", 36, 3004651, true, true, 1);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#face0##b#i4036637# #r#t4036637##k\r\n\r\n作者：贝尔·葛朗斯   发行：生活出版社\r\n#fn黑体#作者寄语：对幸存者而言，最重要的不是技术，也不是知识。\r\n而是#b强烈的求生意志#k。", 36, 3004651, true, true, 1);
                                              } else {
                                                if (status === V++) {
                                                  cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                } else {
                                                  if (status === V++) {
                                                    cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/ddam", "oid=123506920"], [0, 0, -100, 1, 0, 1, 0, 0, 0]);
                                                    cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/ddam", "oid=1"], [0, 0, 0, 1, 0, 1, 0, 0, 0]);
                                                    cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                  } else if (status === V++) {
                                                    cm.warp(450014140, 0, true);
                                                    cm.updateInfoQuest(37612, "dir2=1;dir=1");
                                                    cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                    cm.setInGameDirectionMode(false, true, false);
                                                    cm.setStandAloneMode(false);
                                                    cm.npc_LeaveField("oid=123506916");
                                                    cm.npc_LeaveField("oid=123506917");
                                                    cm.npc_LeaveField("oid=123506918");
                                                    cm.npc_LeaveField("oid=123506919");
                                                    cm.npc_LeaveField("oid=123506920");
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