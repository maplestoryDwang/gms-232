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
      if (cm.isQuestFinished(64902)) {
        cm.npc_ChangeController(9401091, "oid=2562540", -500, 250, 103, -550, -450, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=2562540", "summon", 0, 0);
        cm.npc_ChangeController(9401092, "oid=2562541", -550, 250, 102, -600, -500, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=2562541", "summon", 0, 0);
        cm.dispose();
        if (cm.getQuestStatus(64904) > 0 && !cm.isQuestFinished(64905)) {
          cm.npc_ChangeController(9401094, "oid=2581778", -112, 300, 103, -162, -62, 1, true, 0, false);
          cm.npc_SetSpecialAction("oid=2581778", 'summon', 0, 0);
        }
        return;
      }
      cm.npc_ChangeController(9401093, 'oid=208661', -193, 301, 103, -243, -143, 5, true, 0, false);
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.sendNewEffects(17, [0, 2000, 2000, -400, 300]);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.npc_ChangeController(9400928, "oid=2540974", -760, 250, 102, -810, -710, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=2540974", "summon", 0, 0);
        cm.npc_SetSpecialAction("oid=2540974", 'stand', -1, 0);
        cm.npc_ChangeController(9400929, "oid=2540975", -900, 250, 102, -950, -850, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=2540975", "summon", 0, 0);
        cm.npc_SetSpecialAction("oid=2540975", "stand", -1, 0);
        cm.onTeleport(0, 3, cm.getPlayer().getId(), -900, 250);
        cm.inGameDirectionEvent_AskAnswerTime(500);
      } else {
        if (status === V++) {
          cm.fieldEffect_PlayFieldSound("Sound/PL_Sound.img/myHome/slam_near", 128);
          cm.npc_SetForceMove("oid=2540974", 1, 280, 300);
          cm.inGameDirectionEvent_AskAnswerTime(500);
        } else {
          if (status === V++) {
            cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 3000, 0);
            cm.sendNormalTalk_Bottom("#face2#凯尼斯大叔~~~！！", 37, 9400920, false, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face0#哦吼，艾米！你来这儿有什么事吗？", 37, 9400922, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face1#凯尼斯大叔在这里干嘛呢？又在建新家吗？", 37, 9400920, true, true);
              } else {
                if (status === V++) {
                  cm.npc_SetForceMove("oid=2540975", 1, 360, 100);
                  cm.inGameDirectionEvent_同时移动镜头和人(2, 260);
                  cm.fieldEffect_PlayFieldSound("Sound/PL_Sound.img/myHome/slam_near", 128);
                  cm.sendNormalTalk_Bottom("#face0#哎呦，艾米。你这样一个人在树林里乱跑很危险的！", 37, 9400921, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face4#埃尔宾欧巴缺乏运动！身子骨这么弱，怎么打败怪物啊？", 37, 9400920, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face3#所以说那个怪物顺口溜……", 37, 9400921, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#b凯尼斯，你好。我今天在森林中见过你。你正在森林里建造别墅吗？", 57, 0, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face1#吼吼，#h0#也来了呢。这里是不是有点乱啊？\r\n为了迎接新年，我打算研究一种新型建筑风格。", 37, 9400922, true, true);
                        } else {
                          if (status === V++) {
                            cm.fieldEffect_PlayFieldSound("Sound/PL_Sound.img/myHome/slam_near", 128);
                            cm.sendNormalTalk_Bottom("#face0#这次我要打造一个与众不同的庭院，还打算挖一个荷塘出来。我把地点选在了离村庄稍远的地方，那里的景致也非常不错。\r\n因为要挖一个深坑，施工的声音恐怕会很吵，所以还是在安静的地方开工更合适。", 37, 9400922, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#b这样啊……\r\n那个，你有没有见到进入森林深处的一群小孩啊？", 57, 0, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face0#孩子们？这个嘛……\r\n没见过呢……这样的孩子吗？", 37, 9400922, true, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face0#不是很年轻，和我们同龄？貌似……\r\n喂，那些孩子把埃尔宾欧巴准备的爆竹都拿走了！我一定要教训他们！", 37, 9400920, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face3#艾米说她想拿着玩……", 37, 9400921, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face4#你不是答应让我随意玩吗！", 37, 9400920, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#b如果孩子们在树林里迷路怎么办？", 57, 0, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face1#呵呵……这附近不是很危险。如果不是很小的孩子，就不必过于担心。", 37, 9400922, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.forceCompleteQuest(64902);
                                            cm.updateInfoQuest(64902, "dir2=1");
                                            cm.fieldEffect_PlayFieldSound("Sound/Game.img/QuestClear", 100);
                                            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 600, 0);
                                            cm.inGameDirectionEvent_AskAnswerTime(2000);
                                          } else {
                                            if (status === V++) {
                                              cm.npc_LeaveField("oid=2540974");
                                              cm.npc_LeaveField("oid=2540974");
                                              cm.npc_LeaveField("oid=2540975");
                                              cm.npc_LeaveField("oid=2540975");
                                              cm.sendNewEffects(14, [0, 2000, 1000, 0, 0]);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNewEffects(19, [0]);
                                              } else {
                                                if (status === V++) {
                                                  cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 600, 0);
                                                  cm.inGameDirectionEvent_AskAnswerTime(600);
                                                } else if (status === V++) {
                                                  cm.eventSKill(0);
                                                  cm.setInGameDirectionMode(false, true, false);
                                                  cm.npc_ChangeController(9401091, "oid=2562540", -500, 250, 103, -550, -450, 0, true, 0, false);
                                                  cm.npc_SetSpecialAction("oid=2562540", "summon", 0, 0);
                                                  cm.npc_ChangeController(9401092, "oid=2562541", -550, 250, 102, -600, -500, 0, true, 0, false);
                                                  cm.npc_SetSpecialAction("oid=2562541", "summon", 0, 0);
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