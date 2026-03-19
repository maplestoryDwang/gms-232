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
      cm.inGameDirectionEvent_AskAnswerTime(1000);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.npc_ChangeController(1530050, "oid=21289097", 187, 20, 34, 137, 237, 0, true, false);
        cm.npc_SetSpecialAction("oid=21289097", "summon", 0, 0);
        cm.npc_ChangeController(1530520, "oid=21289098", 547, 20, 30, 497, 597, 1, true, false);
        cm.npc_SetSpecialAction("oid=21289098", "summon", 0, 0);
        cm.npc_ChangeController(1530230, "oid=21289099", 447, 20, 36, 397, 497, 0, true, false);
        cm.npc_SetSpecialAction("oid=21289099", 'summon', 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(2000);
        cm.effect_NormalSpeechBalloon(".....", 1, 0, 1, 1500, 1530050, cm.getPlayer().getId());
        cm.effect_NormalSpeechBalloon(".....", 1, 0, 1, 1500, 1530520, cm.getPlayer().getId());
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("妈妈……我只想当个平凡的学生。和别人一样交朋友……", 37, 1530230, false, true);
          cm.effect_Voice("Voice2.img/Friends/CH1_01/1", 100);
        } else {
          if (status === V++) {
            cm.fieldEffect_PlayBGM("Bgm38.img/LifeIsComedy", 0, 0);
            cm.sendNormalTalk_Bottom("住嘴！", 37, 1530520, true, true);
            cm.effect_Voice("Voice2.img/Friends/CH1_01/2", 100);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("呃……妈妈？", 37, 1530230, true, true);
              cm.effect_Voice("Voice2.img/Friends/CH1_01/3", 100);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("看来我这个儿子是白养了，白养了啊！你这个没出息的家伙，对得起你这张脸蛋吗！", 37, 1530520, true, true);
                cm.effect_Voice("Voice2.img/Friends/CH1_01/4", 100);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("……又不是长得帅就事事都能做好啊。", 37, 1530230, true, true);
                  cm.effect_Voice("Voice2.img/Friends/CH1_01/5", 100);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("吵死了！你就打算这么跟我顶嘴吗？", 37, 1530520, true, true);
                    cm.effect_Voice("Voice2.img/Friends/CH1_01/6", 100);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("我从贫困的乡下起家，嗯？好不容易爬到今天这个位置，嗯？看着各种各样的脸色，才爬到今天这个位置，嗯？可你这个没出息的家伙呢？你能帮上什么忙？就连妈妈的话都不愿听？", 37, 1530520, true, true);
                      cm.effect_Voice("Voice2.img/Friends/CH1_01/7", 100);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("可是……我并不是妈妈的傀儡啊！", 37, 1530230, true, true);
                        cm.effect_Voice("Voice2.img/Friends/CH1_01/9", 100);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom('什么？傀。儡~？', 37, 1530520, true, true);
                          cm.effect_Voice("Voice2.img/Friends/CH1_01/10", 100);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("那么，你连我儿子也不要当好了，嗯？你就随心所欲地过你想过的生活吧！正好把户口也从我这儿移走吧！把咱们之间的关系断得干干净净的！", 37, 1530520, true, true);
                            cm.effect_Voice("Voice2.img/Friends/CH1_01/15", 100);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("呃……呃啊……妈妈，好可怕~~！！", 37, 1530230, true, true);
                              cm.effect_Voice("Voice2.img/Friends/CH1_01/16", 100);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("够了！你滚吧！！", 37, 1530520, true, true);
                                cm.effect_Voice("Voice2.img/Friends/CH1_01/17", 100);
                              } else {
                                if (status === V++) {
                                  cm.npc_SetForceMove("oid=21289099", -1, 1000, 300);
                                  cm.inGameDirectionEvent_AskAnswerTime(2500);
                                } else {
                                  if (status === V++) {
                                    cm.npc_LeaveField("oid=21289099");
                                    cm.npc_LeaveField("oid=21289099");
                                    cm.fieldEffect_PlayBGM("Bgm02.img/EvilEyes", 0, 0);
                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("哦，我的天啊……哦，我的天啊！", 37, 1530520, false, true);
                                      cm.effect_Voice("Voice2.img/Friends/CH1_01/18", 100);
                                    } else {
                                      if (status === V++) {
                                        cm.npc_SetSpecialAction("oid=21289098", "blackening", -1, 1);
                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                      } else {
                                        if (status === V++) {
                                          cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 1300, 0);
                                          cm.inGameDirectionEvent_AskAnswerTime(1600);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("不管谁说什么，神兽集团都是我的……我的……任何人都不可能把它从我手中抢走！", 37, 1530520, false, true);
                                            cm.effect_Voice("Voice2.img/Friends/CH1_01/19", 100);
                                          } else {
                                            if (status === V++) {
                                              cm.fieldEffect_InsertCanvas(1, 255, 245, 245, 245, 2000, 0);
                                              cm.inGameDirectionEvent_AskAnswerTime(2000);
                                            } else {
                                              if (status === V++) {
                                                cm.npc_SetSpecialAction("oid=21289098", "blackOut", -1, 1);
                                                cm.fieldEffect_PlayBGM("Bgm09.img/TimeAttack", 0, 0);
                                                cm.inGameDirectionEvent_AskAnswerTime(300);
                                              } else {
                                                if (status === V++) {
                                                  cm.npc_ChangeController(1530531, "oid=21296348", 547, 20, 30, 497, 597, 1, true, false);
                                                  cm.npc_SetSpecialAction("oid=21296348", "summon", 0, 0);
                                                  cm.forceStartQuest(32753, '');
                                                  cm.forceStartQuest(33036, '');
                                                  cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 3000, 0);
                                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                                } else {
                                                  if (status === V++) {
                                                    cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                    cm.effect_NormalSpeechBalloon("!!!!", 1, 0, 1, 1500, 0, cm.getPlayer().getId());
                                                  } else {
                                                    if (status === V++) {
                                                      cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                      cm.effect_Text(["#r#fn黑体##fs26#贪婪的闹事者！#k"], [100, 4000, 5, 80, 0, 1, 4, 0, 0, 0]);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.inGameDirectionEvent_AskAnswerTime(5000);
                                                        cm.effect_Text(["#fn黑体##fs16#对钱财的无限贪婪而造就的闹事者. "], [100, 1500, 5, 80, 50, 1, 4, 0, 0, 0]);
                                                        cm.effect_Voice("Voice2.img/Friends/Narration_01/2", 100);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("#h0#！董事长由于邪恶内心爆发，已经变成闹事者了！在被别人注意到之前必须尽快把它消灭才行。", 37, 1530050, false, true);
                                                        } else if (status === V++) {
                                                          cm.dispose();
                                                          cm.warp(330001900, 1);
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;