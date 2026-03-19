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
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.inGameDirectionEvent_PushMoveInfo(0, 2000, -1628, -313);
      cm.curNodeEventEnd(true);
      cm.cancelItem(2023418);
      cm.cancelItem(2023419);
      cm.cancelItem(2023420);
    } else {
      if (status === V++) {
        cm.npc_ChangeController(1540450, "oid=22704286", -1700, -250, 36, -1750, -1650, 1, true, 0, false);
        cm.npc_SetSpecialAction("oid=22704286", 'summon', 0, 0);
        cm.npc_ChangeController(1540451, "oid=22704287", -1610, -250, 34, -1660, -1560, 1, true, 0, false);
        cm.npc_SetSpecialAction("oid=22704287", "summon", 0, 0);
        cm.npc_ChangeController(1540452, "oid=22704288", -1520, -250, 33, -1570, -1470, 1, true, 0, false);
        cm.npc_SetSpecialAction("oid=22704288", "summon", 0, 0);
        cm.npc_ChangeController(1540453, "oid=22704289", -1430, -250, 33, -1480, -1380, 1, true, 0, false);
        cm.npc_SetSpecialAction("oid=22704289", "summon", 0, 0);
        cm.npc_ChangeController(1540461, "oid=22704290", -1200, -350, 13, -1250, -1150, 1, true, 0, false);
        cm.npc_SetSpecialAction("oid=22704290", "summon", 0, 0);
        cm.npc_ChangeController(1540461, "oid=22704291", -1150, -350, 13, -1200, -1100, 1, true, 0, false);
        cm.npc_SetSpecialAction("oid=22704291", "summon", 0, 0);
        cm.npc_ChangeController(1540461, "oid=22704292", -1100, -350, 12, -1150, -1050, 1, true, 0, false);
        cm.npc_SetSpecialAction("oid=22704292", "summon", 0, 0);
        cm.npc_ChangeController(1540462, "oid=22704293", -1950, -250, 28, -2000, -1900, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=22704293", 'summon', 0, 0);
        cm.npc_ChangeController(1540463, "oid=22704294", -2000, -250, 28, -2050, -1950, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=22704294", "summon", 0, 0);
        cm.npc_ChangeController(1540461, "oid=22704295", -2050, -250, 29, -2100, -2000, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=22704295", "summon", 0, 0);
        cm.npc_ChangeController(1540461, "oid=22704296", -2100, -250, 29, -2150, -2050, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=22704296", "summon", 0, 0);
        cm.npc_ChangeController(1540461, "oid=22704297", -2150, -250, 29, -2200, -2100, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=22704297", 'summon', 0, 0);
        cm.npc_ChangeController(1540465, "oid=22704298", -1320, -250, 35, -1370, -1270, 1, true, 0, false);
        cm.npc_SetSpecialAction("oid=22704298", "summon", 0, 0);
        cm.npc_ChangeController(1540464, "oid=22704299", -1280, -250, 21, -1330, -1230, 1, true, 0, false);
        cm.npc_SetSpecialAction("oid=22704299", "summon", 0, 0);
        cm.npc_ChangeController(1540465, "oid=22704300", -1240, -250, 21, -1290, -1190, 1, true, 0, false);
        cm.npc_SetSpecialAction("oid=22704300", "summon", 0, 0);
        cm.npc_ChangeController(1540465, "oid=22704301", -1200, -250, 21, -1250, -1150, 1, true, 0, false);
        cm.npc_SetSpecialAction("oid=22704301", "summon", 0, 0);
        cm.npc_ChangeController(1540465, "oid=22704302", -1160, -250, 21, -1210, -1110, 1, true, 0, false);
        cm.npc_SetSpecialAction("oid=22704302", "summon", 0, 0);
        cm.npc_ChangeController(1540466, "oid=22704303", -2050, -380, 10, -2100, -2000, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=22704303", "summon", 0, 0);
        cm.npc_ChangeController(1540466, "oid=22704304", -2090, -380, 10, -2140, -2040, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=22704304", "summon", 0, 0);
        cm.npc_ChangeController(1540466, "oid=22704305", -2130, -380, 10, -2180, -2080, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=22704305", "summon", 0, 0);
        cm.npc_ChangeController(1540466, "oid=22704306", -2170, -380, 10, -2220, -2120, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=22704306", "summon", 0, 0);
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1200);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1400);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(2000);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_AskAnswerTime(2000);
              cm.effect_NormalSpeechBalloon('结束……了吗?', 1, 0, 0, 2000, 0, 0, 0, 0, 4, 1540452, cm.getPlayer().getId());
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(1000);
                cm.effect_NormalSpeechBalloon("结束了. ", 1, 0, 0, 1000, 0, 0, 0, 0, 4, 1540453, cm.getPlayer().getId());
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_AskAnswerTime(3000);
                  cm.effect_NormalSpeechBalloon("已经看不到敌人了. ", 1, 0, 0, 2000, 0, 0, 0, 0, 4, 1540451, cm.getPlayer().getId());
                } else {
                  if (status === V++) {
                    cm.npc_SetSpecialAction("oid=22704286", "smile", 0, 1);
                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                  } else {
                    if (status === V++) {
                      cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/victoryshout", 100);
                      cm.npc_SetSpecialAction("oid=22704290", "cheer", -1, 1);
                      cm.npc_SetSpecialAction("oid=22704293", "cheer", -1, 1);
                      cm.npc_SetSpecialAction("oid=22704294", "cheer", -1, 1);
                      cm.npc_SetSpecialAction("oid=22704295", "cheer", -1, 1);
                      cm.npc_SetSpecialAction("oid=22704296", "cheer", -1, 1);
                      cm.npc_SetSpecialAction("oid=22704297", "cheer", -1, 1);
                      cm.npc_SetSpecialAction("oid=22704291", "cheer", -1, 1);
                      cm.npc_SetSpecialAction("oid=22704292", 'cheer', -1, 1);
                      cm.npc_SetSpecialAction("oid=22704299", "cheer", -1, 1);
                      cm.npc_SetSpecialAction("oid=22704298", "cheer", -1, 1);
                      cm.npc_SetSpecialAction("oid=22704303", "cheer", -1, 1);
                      cm.npc_SetSpecialAction("oid=22704304", 'cheer', -1, 1);
                      cm.npc_SetSpecialAction("oid=22704305", "cheer", -1, 1);
                      cm.npc_SetSpecialAction("oid=22704306", 'cheer', -1, 1);
                      cm.npc_SetSpecialAction("oid=22704300", "cheer", -1, 1);
                      cm.npc_SetSpecialAction("oid=22704301", "cheer", -1, 1);
                      cm.npc_SetSpecialAction("oid=22704302", "cheer", -1, 1);
                      cm.inGameDirectionEvent_AskAnswerTime(1500);
                      cm.effect_NormalSpeechBalloon("胜利啦!", 1, 0, 0, 2500, 0, 0, 0, 0, 4, 1540461, cm.getPlayer().getId());
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_AskAnswerTime(1500);
                        cm.effect_NormalSpeechBalloon("我们赢了!", 1, 0, 0, 2500, 0, 0, 0, 0, 4, 1540463, cm.getPlayer().getId());
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_AskAnswerTime(1500);
                          cm.effect_NormalSpeechBalloon("#h0#, 你击沉了黑色天堂!", 1, 0, 0, 4000, 0, 0, 0, 0, 4, 1540465, cm.getPlayer().getId());
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_AskAnswerTime(3000);
                            cm.effect_NormalSpeechBalloon("这不算什么啊!", 1, 0, 0, 2500, 0, 0, 0, 0, 4, 1540466, cm.getPlayer().getId());
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_AskAnswerTime(2000);
                              cm.effect_NormalSpeechBalloon("请对接下来的目的地做出指示, 女皇. ", 1, 0, 0, 2000, 0, 0, 0, 0, 4, 1540451, cm.getPlayer().getId());
                            } else {
                              if (status === V++) {
                                cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
                                cm.setAmbience("Ambience.img/secretmissionbase", 100, 60);
                                cm.inGameDirectionEvent_AskAnswerTime(2000);
                                cm.effect_NormalSpeechBalloon("...", 1, 0, 0, 2000, 0, 0, 0, 0, 4, 1540450, cm.getPlayer().getId());
                              } else {
                                if (status === V++) {
                                  cm.setNpcSpecialActionReset("oid=22704290");
                                  cm.setNpcSpecialActionReset("oid=22704293");
                                  cm.setNpcSpecialActionReset("oid=22704294");
                                  cm.setNpcSpecialActionReset("oid=22704295");
                                  cm.setNpcSpecialActionReset("oid=22704296");
                                  cm.setNpcSpecialActionReset("oid=22704297");
                                  cm.setNpcSpecialActionReset("oid=22704291");
                                  cm.setNpcSpecialActionReset("oid=22704292");
                                  cm.setNpcSpecialActionReset("oid=22704299");
                                  cm.setNpcSpecialActionReset("oid=22704298");
                                  cm.setNpcSpecialActionReset("oid=22704303");
                                  cm.setNpcSpecialActionReset("oid=22704304");
                                  cm.setNpcSpecialActionReset("oid=22704305");
                                  cm.setNpcSpecialActionReset("oid=22704306");
                                  cm.setNpcSpecialActionReset("oid=22704300");
                                  cm.setNpcSpecialActionReset("oid=22704301");
                                  cm.setNpcSpecialActionReset("oid=22704302");
                                  cm.sendNormalTalk_Bottom("……女皇？", 37, 1540451, false, true);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face0#等一下。\r\n我有种……奇怪的感觉。", 37, 1540450, false, true);
                                    } else {
                                      if (status === V++) {
                                        cm.fieldEffect_BackgroundCanvas(4, 125, 125, 125, 2000, 0, 0);
                                        cm.fieldEffect_BackgroundCanvas(5, 125, 125, 125, 2000, 0, 0);
                                        cm.inGameDirectionEvent_AskAnswerTime(800);
                                      } else {
                                        if (status === V++) {
                                          cm.fieldEffect_BackgroundCanvas(2, 125, 125, 125, 2000, 0, 0);
                                          cm.fieldEffect_BackgroundCanvas(3, 125, 125, 125, 2000, 0, 0);
                                          cm.inGameDirectionEvent_AskAnswerTime(2200);
                                        } else {
                                          if (status === V++) {
                                            cm.npc_setForceFlip("oid=22704286", 1);
                                            cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=22704286"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                            cm.npc_setForceFlip("oid=22704287", 1);
                                            cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=22704287"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                            cm.npc_setForceFlip("oid=22704288", 1);
                                            cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=22704288"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                            cm.npc_setForceFlip("oid=22704289", 1);
                                            cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=22704289"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                            cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=22704293"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                            cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=22704294"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                            cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=22704295"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                            cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=22704296"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                            cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=22704297"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                            cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=22704303"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                            cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=22704304"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                            cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=22704305"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                            cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=22704306"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                            cm.npc_setForceFlip("oid=22704290", 1);
                                            cm.npc_setForceFlip("oid=22704291", 1);
                                            cm.npc_setForceFlip("oid=22704292", 1);
                                            cm.npc_setForceFlip("oid=22704299", 1);
                                            cm.npc_setForceFlip("oid=22704298", 1);
                                            cm.npc_setForceFlip("oid=22704300", 1);
                                            cm.npc_setForceFlip("oid=22704301", 1);
                                            cm.npc_setForceFlip("oid=22704302", 1);
                                            cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=22704290"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                            cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=22704291"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                            cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=22704292"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                            cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=22704299"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                            cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=22704298"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                            cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=22704300"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                            cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=22704301"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                            cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=22704302"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                            cm.inGameDirectionEvent_AskAnswerTime(2000);
                                          } else if (status === V++) {
                                            cm.dispose();
                                            cm.warp(350024010, 0, true);
                                            cm.npc_LeaveField("oid=22704286");
                                            cm.npc_LeaveField("oid=22704286");
                                            cm.npc_LeaveField("oid=22704287");
                                            cm.npc_LeaveField("oid=22704287");
                                            cm.npc_LeaveField("oid=22704288");
                                            cm.npc_LeaveField("oid=22704288");
                                            cm.npc_LeaveField("oid=22704289");
                                            cm.npc_LeaveField("oid=22704289");
                                            cm.npc_LeaveField("oid=22704290");
                                            cm.npc_LeaveField("oid=22704290");
                                            cm.npc_LeaveField("oid=22704291");
                                            cm.npc_LeaveField("oid=22704291");
                                            cm.npc_LeaveField("oid=22704292");
                                            cm.npc_LeaveField("oid=22704292");
                                            cm.npc_LeaveField("oid=22704293");
                                            cm.npc_LeaveField("oid=22704293");
                                            cm.npc_LeaveField("oid=22704294");
                                            cm.npc_LeaveField("oid=22704294");
                                            cm.npc_LeaveField("oid=22704295");
                                            cm.npc_LeaveField("oid=22704295");
                                            cm.npc_LeaveField("oid=22704296");
                                            cm.npc_LeaveField("oid=22704296");
                                            cm.npc_LeaveField("oid=22704297");
                                            cm.npc_LeaveField("oid=22704297");
                                            cm.npc_LeaveField("oid=22704298");
                                            cm.npc_LeaveField("oid=22704298");
                                            cm.npc_LeaveField("oid=22704299");
                                            cm.npc_LeaveField("oid=22704299");
                                            cm.npc_LeaveField("oid=22704300");
                                            cm.npc_LeaveField("oid=22704300");
                                            cm.npc_LeaveField("oid=22704301");
                                            cm.npc_LeaveField("oid=22704301");
                                            cm.npc_LeaveField("oid=22704302");
                                            cm.npc_LeaveField("oid=22704302");
                                            cm.npc_LeaveField("oid=22704303");
                                            cm.npc_LeaveField("oid=22704303");
                                            cm.npc_LeaveField("oid=22704304");
                                            cm.npc_LeaveField("oid=22704304");
                                            cm.npc_LeaveField("oid=22704305");
                                            cm.npc_LeaveField("oid=22704305");
                                            cm.npc_LeaveField("oid=22704306");
                                            cm.npc_LeaveField("oid=22704306");
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