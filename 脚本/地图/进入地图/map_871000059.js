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
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.sendNewEffects(17, [0, 2000, 2000, 1050, 0]);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.onSetMapTagedObjectVisible(1, 'f1', 512);
        cm.onSetMapTagedObjectVisible(1, 'f2', 512);
        cm.onSetMapTagedObjectVisible(1, 'f3', 512);
        cm.onSetMapTagedObjectVisible(1, 'f4', 512);
        cm.onSetMapTagedObjectVisible(1, 'f5', 512);
        cm.npc_ChangeController(9400936, "oid=2616633", 940, -70, 39, 890, 990, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=2616633", 'summon', 0, 0);
        cm.npc_SetSpecialAction("oid=2616633", "stand", -1, 0);
        cm.npc_ChangeController(9400929, "oid=2616634", 970, -70, 39, 920, 1020, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=2616634", 'summon', 0, 0);
        cm.npc_SetSpecialAction("oid=2616634", 'stand', -1, 0);
        cm.npc_ChangeController(9400935, "oid=2616635", 910, -70, 39, 860, 960, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=2616635", 'summon', 0, 0);
        cm.npc_SetSpecialAction("oid=2616635", 'stand', -1, 0);
        cm.npc_ChangeController(9400928, "oid=2616636", 880, -70, 39, 830, 930, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=2616636", "summon", 0, 0);
        cm.npc_SetSpecialAction("oid=2616636", 'stand', -1, 0);
        cm.npc_ChangeController(9400932, "oid=2616637", 1080, -70, 39, 1030, 1130, 1, true, 0, false);
        cm.npc_SetSpecialAction("oid=2616637", "summon", 0, 0);
        cm.npc_SetSpecialAction("oid=2616637", "stand", -1, 0);
        cm.npc_ChangeController(9400931, "oid=2616638", 1020, -70, 39, 970, 1070, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=2616638", "summon", 0, 0);
        cm.npc_SetSpecialAction("oid=2616638", "stand", -1, 0);
        cm.npc_ChangeController(9400933, "oid=2616639", 1110, -70, 39, 1060, 1160, 1, true, 0, false);
        cm.npc_SetSpecialAction("oid=2616639", "summon", 0, 0);
        cm.npc_SetSpecialAction("oid=2616639", "stand", -1, 0);
        cm.onTeleport(0, 3, cm.getPlayer().getId(), 1180, -70);
        cm.inGameDirectionEvent_同时移动镜头和人(1, 10);
        cm.npc_ChangeController(9401060, "oid=2616640", 200, 120, 59, 150, 250, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=2616640", "summon", 0, 0);
        cm.npc_SetSpecialAction("oid=2616640", 'stand', -1, 0);
        cm.npc_ChangeController(9401062, "oid=2616641", 300, 120, 59, 250, 350, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=2616641", "summon", 0, 0);
        cm.npc_SetSpecialAction("oid=2616641", "stand", -1, 0);
        cm.npc_ChangeController(9401061, "oid=2616642", 250, 120, 59, 200, 300, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=2616642", "summon", 0, 0);
        cm.npc_SetSpecialAction("oid=2616642", "stand", -1, 0);
        cm.npc_ChangeController(9401064, "oid=2616643", 340, 120, 59, 290, 390, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=2616643", "summon", 0, 0);
        cm.npc_SetSpecialAction("oid=2616643", "stand", -1, 0);
        cm.npc_ChangeController(9401063, "oid=2616644", 380, 120, 59, 330, 430, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=2616644", "summon", 0, 0);
        cm.npc_SetSpecialAction("oid=2616644", "stand", -1, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1000);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 3000, 0);
          cm.sendNormalTalk_Bottom('#b大家新年快乐！', 57, 0, false, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#face2#大家，新年快乐~~！！", 37, 9400920, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face2#新年快乐~~！！", 37, 9400921, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face1#新年快乐~~！！", 37, 9400926, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face1#我们特鲁迪也新年快乐啊。", 37, 9400924, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face1#米兰达新年快乐！", 37, 9400923, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face1#大家新年快乐啊！！从今天起，庆典就正式开始了，请大家尽情欢乐吧！", 37, 9400922, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face2#在新年到来之际，我略微发挥了些实力。请期待艾米牌特制料理！\r\n就这样一起分享的话……咦？", 37, 9400920, true, true);
                      } else {
                        if (status === V++) {
                          cm.npc_SetForceMove("oid=2616640", 1, 10, 20);
                          cm.npc_SetForceMove("oid=2616641", 1, 10, 20);
                          cm.inGameDirectionEvent_AskAnswerTime(300);
                        } else {
                          if (status === V++) {
                            cm.npc_SetForceMove("oid=2616643", 1, 10, 20);
                            cm.inGameDirectionEvent_AskAnswerTime(300);
                          } else {
                            if (status === V++) {
                              cm.npc_SetForceMove("oid=2616644", 1, 10, 20);
                              cm.npc_SetForceMove("oid=2616642", 1, 10, 20);
                              cm.sendNewEffects(17, [2000, 2000, 2000, 500, 300]);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_AskAnswerTime(2000);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face0#啊……呜呜……", 37, 9401060, false, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face0#啊……怎么办……", 37, 9401062, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face0#这个嘛……不知道……", 37, 9401063, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNewEffects(17, [1000, 2000, 2000, 1050, 0]);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                          cm.inGameDirectionEvent_AskAnswerTime(2000);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#b啊，那些孩子们……！", 57, 0, false, true);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                            } else {
                                              if (status === V++) {
                                                cm.npc_SetForceMove("oid=2616633", -1, 10, 100);
                                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                              } else {
                                                if (status === V++) {
                                                  cm.npc_SetForceMove("oid=2616636", -1, 10, 100);
                                                  cm.npc_SetForceMove("oid=2616634", -1, 10, 100);
                                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                                } else {
                                                  if (status === V++) {
                                                    cm.npc_SetForceMove("oid=2616635", -1, 10, 100);
                                                    cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=2616636"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                    cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=2616634"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                    cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.npc_SetForceMove("oid=2616638", -1, 10, 100);
                                                      cm.sendNewEffects(17, [500, 2000, 2000, 500, 300]);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=2616640"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                        cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=2616642"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                        cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=2616641"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                        cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=2616644"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                        cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=2616643"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.npc_setForceFlip("oid=2616640", 1);
                                                          cm.npc_setForceFlip("oid=2616642", 1);
                                                          cm.npc_setForceFlip("oid=2616641", 1);
                                                          cm.npc_setForceFlip("oid=2616644", 1);
                                                          cm.npc_setForceFlip("oid=2616643", 1);
                                                          cm.npc_SetForceMove("oid=2616644", -1, 20, 100);
                                                          cm.npc_SetForceMove("oid=2616641", -1, 40, 70);
                                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.npc_SetForceMove("oid=2616643", -1, 10, 100);
                                                            cm.npc_SetForceMove("oid=2616642", -1, 30, 100);
                                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.npc_SetForceMove("oid=2616640", -1, 80, 70);
                                                              cm.inGameDirectionEvent_AskAnswerTime(500);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.npc_SetForceMove("oid=2616642", -1, 30, 100);
                                                                  cm.npc_SetForceMove("oid=2616641", -1, 60, 70);
                                                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNewEffects(17, [1000, 2000, 2000, 1050, 80]);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk_Bottom("#face0#等等，孩子们！！别跑啊！！", 37, 9400920, false, true);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.sendNormalTalk_Bottom("#face0#呃……呃呃……", 37, 9401061, true, true);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.sendNormalTalk_Bottom("#face0#孩子们，等等，我有话和你们说！", 37, 9400921, true, true);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=2616638"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.npc_SetForceMove("oid=2616638", -1, 500, 200);
                                                                                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.sendNewEffects(17, [1000, 2000, 2000, 350, 300]);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.sendNormalTalk_Bottom("#face1#不是，孩子们！\r\n路易、俊、雪莉……伦纳斯……米娜也来了呢！", 37, 9400922, false, true);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.npc_SetForceMove("oid=2616640", 1, 120, 200);
                                                                                        cm.npc_SetForceMove("oid=2616642", 1, 110, 200);
                                                                                        cm.npc_SetForceMove("oid=2616641", 1, 120, 200);
                                                                                        cm.npc_SetForceMove("oid=2616644", 1, 50, 200);
                                                                                        cm.npc_SetForceMove("oid=2616643", 1, 30, 200);
                                                                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.sendNormalTalk_Bottom("#face0#… 凯尼斯大叔，新年快乐。", 37, 9401065, false, true);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.sendNormalTalk_Bottom("#face0#新年快乐！", 37, 9401066, true, true);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.sendNormalTalk_Bottom("#face0#凯尼斯大叔，新年快乐！", 37, 9401067, true, true);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.sendNormalTalk_Bottom("#face0#凯尼斯大叔，好久不见。真的很感激你。祝你新年快乐。", 37, 9401068, true, true);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.sendNormalTalk_Bottom("#face0#凯尼斯大叔，新年快乐！一定要永远健康啊。", 37, 9401069, true, true);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.sendNormalTalk_Bottom("#face1#孩子们，谢谢你们……\r\n你们是特意来这里的吗？父母身体还好吗？", 37, 9400922, true, true);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.sendNormalTalk_Bottom("#face3#这究竟是什么情况？", 37, 9400920, true, true);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.sendNormalTalk_Bottom("#face0#凯尼斯大叔，那些孩子……该不会……", 37, 9400921, true, true);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 2000, 0);
                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.npc_LeaveField("oid=2616636");
                                                                                                            cm.npc_LeaveField("oid=2616636");
                                                                                                            cm.npc_LeaveField("oid=2616634");
                                                                                                            cm.npc_LeaveField("oid=2616634");
                                                                                                            cm.npc_LeaveField("oid=2616638");
                                                                                                            cm.npc_LeaveField("oid=2616638");
                                                                                                            cm.npc_LeaveField("oid=2616637");
                                                                                                            cm.npc_LeaveField("oid=2616637");
                                                                                                            cm.npc_LeaveField("oid=2616639");
                                                                                                            cm.npc_LeaveField("oid=2616639");
                                                                                                            cm.npc_LeaveField("oid=2616635");
                                                                                                            cm.npc_LeaveField("oid=2616635");
                                                                                                            cm.npc_LeaveField("oid=2616633");
                                                                                                            cm.npc_LeaveField("oid=2616633");
                                                                                                            cm.sendNewEffects(17, [0, 1500, 1500, 1100, 70]);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.npc_ChangeController(9400928, "oid=2619893", 850, 80, 52, 800, 900, 0, true, 0, false);
                                                                                                              cm.npc_SetSpecialAction("oid=2619893", 'summon', 0, 0);
                                                                                                              cm.npc_SetSpecialAction("oid=2619893", "stand", -1, 0);
                                                                                                              cm.npc_ChangeController(9400929, "oid=2619894", 900, 80, 52, 850, 950, 0, true, 0, false);
                                                                                                              cm.npc_SetSpecialAction("oid=2619894", "summon", 0, 0);
                                                                                                              cm.npc_SetSpecialAction("oid=2619894", 'stand', -1, 0);
                                                                                                              cm.npc_ChangeController(9400932, "oid=2619895", 900, -70, 39, 850, 950, 0, true, 0, false);
                                                                                                              cm.npc_SetSpecialAction("oid=2619895", "summon", 0, 0);
                                                                                                              cm.npc_SetSpecialAction("oid=2619895", "stand", -1, 0);
                                                                                                              cm.npc_ChangeController(9400933, "oid=2619896", 1130, -70, 39, 1080, 1180, 1, true, 0, false);
                                                                                                              cm.npc_SetSpecialAction("oid=2619896", 'summon', 0, 0);
                                                                                                              cm.npc_SetSpecialAction("oid=2619896", "stand", -1, 0);
                                                                                                              cm.npc_ChangeController(9400936, "oid=2619897", 1170, -70, 39, 1120, 1220, 1, true, 0, false);
                                                                                                              cm.npc_SetSpecialAction("oid=2619897", 'summon', 0, 0);
                                                                                                              cm.npc_SetSpecialAction("oid=2619897", 'stand', -1, 0);
                                                                                                              cm.npc_ChangeController(9400935, "oid=2619898", 1200, -70, 39, 1150, 1250, 1, true, 0, false);
                                                                                                              cm.npc_SetSpecialAction("oid=2619898", "summon", 0, 0);
                                                                                                              cm.npc_SetSpecialAction("oid=2619898", "stand", -1, 0);
                                                                                                              cm.npc_ChangeController(9401065, "oid=2619899", 950, 60, 52, 900, 1000, 0, true, 0, false);
                                                                                                              cm.npc_SetSpecialAction("oid=2619899", "summon", 0, 0);
                                                                                                              cm.npc_SetSpecialAction("oid=2619899", 'stand', -1, 0);
                                                                                                              cm.npc_ChangeController(9401069, "oid=2619900", 990, 60, 52, 940, 1040, 0, true, 0, false);
                                                                                                              cm.npc_SetSpecialAction("oid=2619900", "summon", 0, 0);
                                                                                                              cm.npc_SetSpecialAction("oid=2619900", "stand", -1, 0);
                                                                                                              cm.npc_ChangeController(9401066, "oid=2619901", 1110, 50, 52, 1060, 1160, 1, true, 0, false);
                                                                                                              cm.npc_SetSpecialAction("oid=2619901", "summon", 0, 0);
                                                                                                              cm.npc_SetSpecialAction("oid=2619901", "stand", -1, 0);
                                                                                                              cm.npc_ChangeController(9401068, "oid=2619902", 1140, 70, 52, 1090, 1190, 1, true, 0, false);
                                                                                                              cm.npc_SetSpecialAction("oid=2619902", "summon", 0, 0);
                                                                                                              cm.npc_SetSpecialAction("oid=2619902", "stand", -1, 0);
                                                                                                              cm.npc_ChangeController(9401067, "oid=2619903", 1075, 0, 40, 1025, 1125, 1, true, 0, false);
                                                                                                              cm.npc_SetSpecialAction("oid=2619903", 'summon', 0, 0);
                                                                                                              cm.npc_ChangeController(9400931, "oid=2619904", 1050, 50, 42, 1000, 1100, 1, true, 0, false);
                                                                                                              cm.npc_SetSpecialAction("oid=2619904", "summon", 0, 0);
                                                                                                              cm.npc_SetSpecialAction("oid=2619904", "stand", -1, 0);
                                                                                                              cm.onTeleport(0, 3, cm.getPlayer().getId(), 1200, 0);
                                                                                                              cm.inGameDirectionEvent_同时移动镜头和人(1, 10);
                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(5000);
                                                                                                            } else {
                                                                                                              if (status === V++) {
                                                                                                                cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 2000, 0);
                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                                                              } else {
                                                                                                                if (status === V++) {
                                                                                                                  cm.sendNormalTalk_Bottom("#face1#真没想到……凯尼斯大叔竟做了一件那么伟大的事情……", 37, 9400924, false, true);
                                                                                                                } else {
                                                                                                                  if (status === V++) {
                                                                                                                    cm.sendNormalTalk_Bottom("#face1#这样啊。你来照顾村子里无家可归的孤儿……", 37, 9400921, true, true);
                                                                                                                  } else {
                                                                                                                    if (status === V++) {
                                                                                                                      cm.sendNormalTalk_Bottom("#face0#没什么大不了的……这些孩子也有找回家庭幸福的权利，。\r\n我只是暂时照顾了他们一下。", 37, 9400922, true, true);
                                                                                                                    } else {
                                                                                                                      if (status === V++) {
                                                                                                                        cm.sendNormalTalk_Bottom("#face1#不仅像亲生儿子抚养，还为他寻找新的父母……\r\n这可是人们想都不敢想的巨大的善举！", 37, 9400920, true, true);
                                                                                                                      } else {
                                                                                                                        if (status === V++) {
                                                                                                                          cm.sendNormalTalk_Bottom("#face1#那些孩子们又来问好了……我真是太感动了！(泪眼婆娑)", 37, 9400923, true, true);
                                                                                                                        } else {
                                                                                                                          if (status === V++) {
                                                                                                                            cm.sendNormalTalk_Bottom("#face0#凯尼斯大叔就像我的爸爸一样。", 37, 9401067, true, true);
                                                                                                                          } else {
                                                                                                                            if (status === V++) {
                                                                                                                              cm.sendNormalTalk_Bottom("#face0#在我们无依无靠的时候，是凯尼斯大叔一直照顾我们。这种恩情，我们永世难忘。", 37, 9401068, true, true);
                                                                                                                            } else {
                                                                                                                              if (status === V++) {
                                                                                                                                cm.sendNormalTalk_Bottom("#face1#竟这么为我这把老骨头着想……真的很感谢你……\r\n大家都一下子长得这么高了……", 37, 9400922, true, true);
                                                                                                                              } else {
                                                                                                                                if (status === V++) {
                                                                                                                                  cm.sendNormalTalk_Bottom("#face0#喔……？凯尼斯大叔……你怎么哭了？\r\n身体不舒服吗？", 37, 9400926, true, true);
                                                                                                                                } else {
                                                                                                                                  if (status === V++) {
                                                                                                                                    cm.sendNormalTalk_Bottom("#face2#特鲁迪，不是的，凯尼斯叔叔现在非常非常高兴。", 37, 9400921, true, true);
                                                                                                                                  } else {
                                                                                                                                    if (status === V++) {
                                                                                                                                      cm.sendNormalTalk_Bottom("#face1#哎哟，哎呦……这大喜日子，我可是主心骨呢。\r\n谁哭了啊？大叔我没哭~", 37, 9400922, true, true);
                                                                                                                                    } else {
                                                                                                                                      if (status === V++) {
                                                                                                                                        cm.sendNormalTalk_Bottom("#face1#大叔哭了呢……没哭？\r\n大叔不要哭，特鲁迪来亲亲你~！", 37, 9400926, true, true);
                                                                                                                                      } else {
                                                                                                                                        if (status === V++) {
                                                                                                                                          cm.sendNormalTalk_Bottom("#face1#哈哈哈！我们特鲁迪亲我一口的话，我所有的烦恼都会烟消云散的！", 37, 9400923, true, true);
                                                                                                                                        } else {
                                                                                                                                          if (status === V++) {
                                                                                                                                            cm.sendNormalTalk_Bottom("#b不远万里前来互诉相思……一起分享愉悦，回忆过往……\r\n虽然血脉不通，但聚到这里的我们，可以称得上是真正的一家人！", 57, 0, true, true);
                                                                                                                                          } else {
                                                                                                                                            if (status === V++) {
                                                                                                                                              cm.sendNormalTalk_Bottom("#face2#有人说，新年便是怪物到来的时候。原来不是怪物要来，而是贵客将至啊！", 37, 9400920, true, true);
                                                                                                                                            } else {
                                                                                                                                              if (status === V++) {
                                                                                                                                                cm.sendNormalTalk_Bottom("#b没错，那位幸会的客人，也是我们想念的珍贵的家人！", 57, 0, true, true);
                                                                                                                                              } else {
                                                                                                                                                if (status === V++) {
                                                                                                                                                  cm.sendNormalTalk_Bottom("#face0#这让人脸红的台词……#h0#，你倒有两把刷子呢。", 37, 9400924, true, true);
                                                                                                                                                } else {
                                                                                                                                                  if (status === V++) {
                                                                                                                                                    cm.sendNormalTalk_Bottom("#b是吗……(哈哈)", 57, 0, true, true);
                                                                                                                                                  } else {
                                                                                                                                                    if (status === V++) {
                                                                                                                                                      cm.sendNormalTalk_Bottom("#face1#我觉得这也不是很糟糕。", 37, 9400924, true, true);
                                                                                                                                                    } else {
                                                                                                                                                      if (status === V++) {
                                                                                                                                                        cm.sendNormalTalk_Bottom("#b哈哈哈……", 57, 0, true, true);
                                                                                                                                                      } else {
                                                                                                                                                        if (status === V++) {
                                                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                        } else {
                                                                                                                                                          if (status === V++) {
                                                                                                                                                            cm.sendNormalTalk_Bottom("#face0#不是，为什么每次看到我们就逃跑呢！\r\n总是逃走的话，差点就误会他们是奇怪的孩子了！", 37, 9400920, false, true);
                                                                                                                                                          } else {
                                                                                                                                                            if (status === V++) {
                                                                                                                                                              cm.sendNormalTalk_Bottom("#face0#是啊……为什么老避着我们呢？", 37, 9400921, true, true);
                                                                                                                                                            } else {
                                                                                                                                                              if (status === V++) {
                                                                                                                                                                cm.sendNormalTalk_Bottom("#face0#那个……我们把爆竹都放光了……", 37, 9401065, true, true);
                                                                                                                                                              } else {
                                                                                                                                                                if (status === V++) {
                                                                                                                                                                  cm.sendNormalTalk_Bottom("#face0#我还以为他们是想收爆竹的钱，才追来的呢……", 37, 9401069, true, true);
                                                                                                                                                                } else {
                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                    cm.sendNormalTalk_Bottom("#face0#早知道你是凯尼斯大叔的邻居，我就不逃走了！", 37, 9401066, true, true);
                                                                                                                                                                  } else {
                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                      cm.sendNormalTalk_Bottom("#face0#啊哈，这样啊……误会了……", 37, 9400921, true, true);
                                                                                                                                                                    } else {
                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                        cm.sendNormalTalk_Bottom("#face4#…。\r\n你收到爆竹的定价了吗？", 37, 9400920, true, true);
                                                                                                                                                                      } else {
                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                          cm.sendNormalTalk_Bottom('#face0#嘿嘿！', 37, 9401065, true, true);
                                                                                                                                                                        } else {
                                                                                                                                                                          if (status === V++) {
                                                                                                                                                                            cm.sendNormalTalk_Bottom('#face4#艾米！', 37, 9400921, true, true);
                                                                                                                                                                          } else {
                                                                                                                                                                            if (status === V++) {
                                                                                                                                                                              cm.sendNormalTalk_Bottom("#face3#哎呦！我开玩笑的！欧巴，你怎么连玩笑都不让人开啊！", 37, 9400920, true, true);
                                                                                                                                                                            } else {
                                                                                                                                                                              if (status === V++) {
                                                                                                                                                                                cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/ddam"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                                              } else {
                                                                                                                                                                                if (status === V++) {
                                                                                                                                                                                  cm.sendNormalTalk_Bottom("#b#b(真的是开玩笑吗……)#k", 57, 0, false, true);
                                                                                                                                                                                } else {
                                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                                                  } else {
                                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                                      cm.sendNormalTalk_Bottom("#face1#好了！反正今天是大喜之日！抛开一切，久违地和家人一起欢度佳节吧！", 37, 9400923, false, true);
                                                                                                                                                                                    } else {
                                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                                        cm.setNpcSpecialActionReset("oid=2619895");
                                                                                                                                                                                        cm.setNpcSpecialActionReset("oid=2619901");
                                                                                                                                                                                        cm.setNpcSpecialActionReset("oid=2619902");
                                                                                                                                                                                        cm.setNpcSpecialActionReset("oid=2619900");
                                                                                                                                                                                        cm.setNpcSpecialActionReset("oid=2619903");
                                                                                                                                                                                        cm.setNpcSpecialActionReset("oid=2619899");
                                                                                                                                                                                        cm.npc_SetSpecialAction("oid=2619895", "action", -1, 0);
                                                                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                                                                      } else {
                                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                                          cm.fieldEffect_PlayFieldSound("Sound/PL_Sound.img/myHome/furniture_2671071", 100);
                                                                                                                                                                                          cm.onSetMapTagedObjectVisible(1, 'f3', 0);
                                                                                                                                                                                          cm.onSetMapTagedObjectVisible(1, 'f4', 0);
                                                                                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                                                                                                        } else {
                                                                                                                                                                                          if (status === V++) {
                                                                                                                                                                                            cm.fieldEffect_PlayFieldSound("Sound/PL_Sound.img/myHome/furniture_2671071", 100);
                                                                                                                                                                                            cm.onSetMapTagedObjectVisible(1, 'f2', 0);
                                                                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                                                                          } else {
                                                                                                                                                                                            if (status === V++) {
                                                                                                                                                                                              cm.fieldEffect_PlayFieldSound("Sound/PL_Sound.img/myHome/furniture_2671071", 100);
                                                                                                                                                                                              cm.onSetMapTagedObjectVisible(1, 'f1', 0);
                                                                                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                                                                            } else {
                                                                                                                                                                                              if (status === V++) {
                                                                                                                                                                                                cm.inGameDirectionEvent_OneTimeAction(5, 0);
                                                                                                                                                                                                cm.fieldEffect_PlayFieldSound("Sound/PL_Sound.img/myHome/furniture_2671071", 100);
                                                                                                                                                                                                cm.onSetMapTagedObjectVisible(1, 'f5', 0);
                                                                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                                                                              } else {
                                                                                                                                                                                                if (status === V++) {
                                                                                                                                                                                                  cm.sendNormalTalk_Bottom("#face2#啊，爆竹！我这次真的不会再输了！我要比任何人都玩得开心！", 37, 9400920, false, true);
                                                                                                                                                                                                } else {
                                                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                                                    cm.sendNormalTalk_Bottom("#face2#艾米，一直以来，你是怎么忍住的？\r\n#h0#也来一起玩呀！", 37, 9400921, true, true);
                                                                                                                                                                                                  } else {
                                                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                                                      cm.forceCompleteQuest(64907);
                                                                                                                                                                                                      cm.updateInfoQuest(500927, "end=0;name=但行好事哈;CID=13834533");
                                                                                                                                                                                                      cm.sendNewEffects(16, [20000, -500, 0, 0, 0]);
                                                                                                                                                                                                    } else {
                                                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                                                                                                                      } else {
                                                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                                                          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 2000, 0);
                                                                                                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                                                                                                                        } else {
                                                                                                                                                                                                          if (status === V++) {
                                                                                                                                                                                                            cm.sendNewEffects(14, [0, 2000, 1000, 0, 0]);
                                                                                                                                                                                                          } else {
                                                                                                                                                                                                            if (status === V++) {
                                                                                                                                                                                                              cm.sendNewEffects(19, [0]);
                                                                                                                                                                                                            } else {
                                                                                                                                                                                                              if (status === V++) {
                                                                                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                                                                                                                              } else if (status === V++) {
                                                                                                                                                                                                                cm.eventSKill(0);
                                                                                                                                                                                                                cm.setInGameDirectionMode(false, true, false);
                                                                                                                                                                                                                cm.npc_LeaveField("oid=2616640");
                                                                                                                                                                                                                cm.npc_LeaveField("oid=2616640");
                                                                                                                                                                                                                cm.npc_LeaveField("oid=2616641");
                                                                                                                                                                                                                cm.npc_LeaveField("oid=2616641");
                                                                                                                                                                                                                cm.npc_LeaveField("oid=2616642");
                                                                                                                                                                                                                cm.npc_LeaveField("oid=2616642");
                                                                                                                                                                                                                cm.npc_LeaveField("oid=2616643");
                                                                                                                                                                                                                cm.npc_LeaveField("oid=2616643");
                                                                                                                                                                                                                cm.npc_LeaveField("oid=2616644");
                                                                                                                                                                                                                cm.npc_LeaveField("oid=2616644");
                                                                                                                                                                                                                cm.npc_LeaveField("oid=2619893");
                                                                                                                                                                                                                cm.npc_LeaveField("oid=2619893");
                                                                                                                                                                                                                cm.npc_LeaveField("oid=2619894");
                                                                                                                                                                                                                cm.npc_LeaveField("oid=2619894");
                                                                                                                                                                                                                cm.npc_LeaveField("oid=2619895");
                                                                                                                                                                                                                cm.npc_LeaveField("oid=2619895");
                                                                                                                                                                                                                cm.npc_LeaveField("oid=2619896");
                                                                                                                                                                                                                cm.npc_LeaveField("oid=2619896");
                                                                                                                                                                                                                cm.npc_LeaveField("oid=2619897");
                                                                                                                                                                                                                cm.npc_LeaveField("oid=2619897");
                                                                                                                                                                                                                cm.npc_LeaveField("oid=2619898");
                                                                                                                                                                                                                cm.npc_LeaveField("oid=2619898");
                                                                                                                                                                                                                cm.npc_LeaveField("oid=2619899");
                                                                                                                                                                                                                cm.npc_LeaveField("oid=2619899");
                                                                                                                                                                                                                cm.npc_LeaveField("oid=2619900");
                                                                                                                                                                                                                cm.npc_LeaveField("oid=2619900");
                                                                                                                                                                                                                cm.npc_LeaveField("oid=2619901");
                                                                                                                                                                                                                cm.npc_LeaveField("oid=2619901");
                                                                                                                                                                                                                cm.npc_LeaveField("oid=2619902");
                                                                                                                                                                                                                cm.npc_LeaveField("oid=2619902");
                                                                                                                                                                                                                cm.npc_LeaveField("oid=2619903");
                                                                                                                                                                                                                cm.npc_LeaveField("oid=2619903");
                                                                                                                                                                                                                cm.npc_LeaveField("oid=2619904");
                                                                                                                                                                                                                cm.npc_LeaveField("oid=2619904");
                                                                                                                                                                                                                cm.dispose();
                                                                                                                                                                                                                cm.warp(871000001, 0, false);
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