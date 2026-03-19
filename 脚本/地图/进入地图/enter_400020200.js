var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
function action(f, E, e) {
  if (cm.isQuestActive(34952)) {
    action1(f, E, e);
  } else {
    cm.dispose();
  }
}
function action1(f, E, e) {
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
      cm.updateInfoQuest(34995, "00=h1;01=h0;10=h0;02=h0;11=h0;20=h0;12=h0;04=h0;13=h0;50=h0;05=h0;14=h0;23=h0;51=h1;06=h0;15=h0;24=h0;07=h0;16=h0;17=h0;09=h0;18=h0;19=h0");
      cm.npc_ChangeController(3001540, "oid=147915405", 1493, 15, 7, 1443, 1543, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=147915405", "summon", 0, 0);
      cm.npc_ChangeController(3001539, "oid=147915407", 1366, 22, 14, 1316, 1416, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=147915407", "summon", 0, 0);
      cm.npc_ChangeController(3001538, "oid=147915408", 1241, 22, 4, 1191, 1291, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=147915408", "summon", 0, 0);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1200);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1400);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("#face0#（现在……感觉好多了。刚才那种感觉是怎么回事？筋疲力尽……莫名其妙就没有了力气……）", 37, 3001500 + cm.getPlayer().getGender(), 0, 1);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#face0#啊，你终于清醒了。", 37, 3001551, 1, 1);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face2#（啊，那些人是谁？这里的人好像对我也很戒备。情况又不太对……）", 37, 3001500 + cm.getPlayer().getGender(), 1, 1);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face0#那种尖尖的耳朵是翼人的象征……但是没有魔法之翼，看上去又不太像……", 37, 3001539, 1, 1);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face0#呃……你和上次进攻万神殿的那些家伙有什么关系……不，村子为什么会发生这种变故……", 37, 3001539, 1, 1);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face0#手臂上的那个纹样应该是幽灵。还有，会受到保护膜的影响而变弱……", 37, 3001538, 1, 1);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face0#你和麦格纳斯有什么关系吗？", 37, 3001538, 1, 1);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face0#如果是那样，他就不会不知道保护膜的存在。", 37, 3001551, 1, 1);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face0#狂龙战士说得没错。", 37, 3001540, 1, 1);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face0#他好像清醒了，最好听他亲口说说。我问你。你是谁？来自哪里？", 37, 3001540, 1, 1);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face5#我叫亚克……曾经是高等翼人的军人……但是现在成了他们的死对头。", 37, 3001500 + cm.getPlayer().getGender(), 1, 1);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face0#（说自己因为背叛而遭到处罚，经过了漫长的岁月之后刚刚醒来，因此对外面的事情一无所知。）", 37, 3001500 + cm.getPlayer().getGender(), 1, 1);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face5#信不信是你们的自由。拥有高等翼人之血的原罪，我会用一生的时间来洗刷。", 37, 3001500 + cm.getPlayer().getGender(), 1, 1);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face5#现在的我……正在寻找阻止高等翼人的方法。来到这里，也是因为这个原因……", 37, 3001500 + cm.getPlayer().getGender(), 1, 1);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face0#……听说有其他次元开启的消息之后，我觉得很奇怪。所以想来这里调查一下，结果在这里……", 37, 3001500 + cm.getPlayer().getGender(), 1, 1);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face0#呃……你长着那样的耳朵和手臂，还想让我们相信你吗！？哼，应该马上杀了他！", 37, 3001539, 1, 1);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face0#……他不像是在说谎。", 37, 3001540, 1, 1);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face0#狼牙！？", 37, 3001539, 1, 1);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face0#他的气息异常平静，而且眼睛中透露出善良的意志……看上去好像没有敌意。", 37, 3001540, 1, 1);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#face0#他只不过穿过了次元传送口，又不是什么危险的事。反正在保护膜里面他什么都干不了。", 37, 3001538, 1, 1);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face0#让他继续留在这里反而会让人更加不安。各位意下如何？", 37, 3001538, 1, 1);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("#face0#呃……这个人……真的可以相信吗？", 37, 3001539, 1, 1);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("#face0#如果出了什么事，到时我……就只能尽守护者的义务了。", 37, 3001551, 1, 1);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("#face0#既然连狂龙战士都这么说……", 37, 3001539, 1, 1);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("#face0#决定了。好了，大家回到各自的岗位上去吧。狂龙战士，你给那个叫亚克的人带一下路。", 37, 3001540, 1, 1);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("#face0#是，狼牙。", 37, 3001551, 1, 1);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("#face0#哼，虽然这样做很不妥当……但这次就算了。不过记住，我贝尔德一定会盯着你的。", 37, 3001539, 1, 1);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("#face0#我只是允许你通过次元传送口。要是你以为这样就得到了诺巴族的信任，那就大错特错了。", 37, 3001539, 1, 1);
                                                              } else if (status === V++) {
                                                                cm.npc_LeaveField("oid=147915405");
                                                                cm.npc_LeaveField("oid=147915407");
                                                                cm.npc_LeaveField("oid=147915408");
                                                                cm.updateInfoQuest(34952, "see1=1;see2=1");
                                                                cm.setStandAloneMode(false);
                                                                cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                                cm.eventSKill(0);
                                                                cm.setInGameDirectionMode(false, true, false);
                                                                cm.forceCompleteQuest(34952);
                                                                cm.gainExp(8889);
                                                                cm.updateInfoQuest(34952, "exp=1;see1=1;see2=1");
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
      }
    }
  }
}