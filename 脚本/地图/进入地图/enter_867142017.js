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
      cm.setStandAloneMode(true);
      cm.npc_ChangeController(9401071, "oid=7763719", 1000, -280, 6, 950, 1050, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=7763719", 'summon', 0, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 3000, 500, 920, -220);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_同时移动镜头和人(2, 300);
        cm.inGameDirectionEvent_AskAnswerTime(4200);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("杰斯，你现在感觉怎么样？", 56, 0, 0, 1);
        } else {
          if (status === V++) {
            cm.npc_setForceFlip("oid=7763719", -1);
            cm.inGameDirectionEvent_AskAnswerTime(1200);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face4#现在还是有点疼有点晕……但我很开心！\r\n因为我获得了#b新生#k！", 36, 9401071, 0, 1);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face4##h0#，现在总算明白拟真机器人们被救出去后，是什么样的心情了。", 36, 9401071, 1, 1);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("你能活过来，我也很开心。", 56, 0, 1, 1);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face4#如果不是#h0#……也许这一切不会这么顺利解决。\r\n我真的不胜感激……", 36, 9401071, 1, 1);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face3#趁这次机会，我思考了一下。\r\n区分#b人类#k和#b机器#k的到底是什么……#b像人类#k究竟是什么……", 36, 9401071, 1, 1);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face3#我这一生几乎都在围绕制作#b像人类一样的#k#b机器#k……#h0#，我在想这又有什么用处。", 36, 9401071, 1, 1);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face3#克拉尼亚的自私和贪欲……那种丑陋的内心真的是人类应该追求的吗？", 36, 9401071, 1, 1);
                        } else {
                          if (status === V++) {
                            cm.npc_setForceFlip("oid=7763719", 1);
                            cm.inGameDirectionEvent_PushScaleInfo(3000, 0, 1000, 3000, 1200, -450);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_AskAnswerTime(4200);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face3#无数拟真机器人甘愿为我贡献自己身体……他们这种无私的牺牲精神难道只是作为被人类制造的机器的义务吗？", 36, 9401071, 0, 1);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face3#还有……现在的我……是人类，还是机器呢？", 36, 9401071, 1, 1);
                                } else {
                                  if (status === V++) {
                                    cm.npc_setForceFlip("oid=7763719", -1);
                                    cm.inGameDirectionEvent_AskAnswerTime(1200);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face3##b类人体#k存在。\r\n#h0#，我上次看到了那个。", 36, 9401071, 0, 1);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("杰斯，你以后也要这样生活吗？", 56, 0, 1, 1);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face4#我吗？我可是起死回生的人。", 36, 9401071, 1, 1);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("没错。", 56, 0, 1, 1);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face3#在这世界上，陷入失去朋友或家人之痛中的人不胜枚举。\r\n如果能#b帮他们找回珍爱之人#k的话……", 36, 9401071, 1, 1);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#face3#如果那些一定要离开所爱的人，可以像我一样#b重生的话#k……！", 36, 9401071, 1, 1);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face3#虽然没有流着热血，没有柔软肌肤。\r\n但如果可以这样再次看到蓝天。", 36, 9401071, 1, 1);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("那个……才是#b美好的世界#k。", 56, 0, 1, 1);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("#face4#我和匹比一定要试试，#h0#！\r\n为了机器、人类都不会痛苦的世界！", 36, 9401071, 1, 1);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("杰斯，我会为你加油的。\r\n你和匹比一定会成功的。", 56, 0, 1, 1);
                                                      } else if (status === V++) {
                                                        cm.setStandAloneMode(false);
                                                        cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                        cm.eventSKill(0);
                                                        cm.warp(867142000, 0, false);
                                                        cm.setInGameDirectionMode(false, true, false);
                                                        cm.forceCompleteQuest(64932);
                                                        cm.getPlayer().getTopMsgByItem(3700618, "获得了[类人体]称号！");
                                                        cm.getPlayer().getTopMsgByItem(4310284, "获得了 阿特利埃存储芯片！");
                                                        cm.gainExp(Math.pow(cm.getLevel(), 3) * 2);
                                                        cm.updateInfoQuest(64947, "s3=clear");
                                                        cm.updateInfoQuest(63495, "shop3=1");
                                                        cm.updateInfoQuest(63495, "shop3=1;shopall=1");
                                                        cm.forceCompleteQuest(64932);
                                                        cm.gainItem(4310284, 400);
                                                        cm.gainItem(3700618, 1);
                                                        cm.npc_LeaveField("oid=7763719");
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
  }
}