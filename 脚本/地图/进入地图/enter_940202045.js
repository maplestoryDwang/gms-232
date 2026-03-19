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
      cm.setInGameDirectionMode(true, false, false);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
      cm.inGameDirectionEvent_ForcedFlip(1);
      cm.npc_ChangeController(3001300, "oid=670583", -230, 60, 3, -280, -180, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=670583", 'summon', 0, 0);
      cm.npc_ChangeController(3001312, "oid=670584", 158, 60, 4, 108, 208, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=670584", "summon", 0, 0);
      cm.npc_ChangeController(3001310, "oid=670585", 10, 60, 4, -40, 60, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=670585", "summon", 0, 0);
      cm.npc_ChangeController(3001311, 'oid=670586', 70, 60, 4, 20, 120, 1, true, 0, false);
      cm.npc_SetSpecialAction('oid=670586', "summon", 0, 0);
      cm.npc_ChangeController(3001307, "oid=670587", -300, 60, 3, -350, -250, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=670587", 'summon', 0, 0);
      cm.npc_ChangeController(3001308, "oid=670588", -370, 60, 3, -420, -320, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=670588", "summon", 0, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 700, 0, 0, -400);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_AskAnswerTime(500);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_PushScaleInfo(4000, 0, 1000, 4000, 0, -45);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(5000);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face0#大家最近没听说过有关古代神之圣所或是水晶门的传闻吗？", 37, 3001354, false, true, 1);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face0#我最近正跟唐云主厨学习料理！听说冒险岛上有好多美食！最好去问问在冒险岛四处航海的诺特勒斯号船员……可惜还没去问。", 37, 3001310, true, true, 1);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face0#我迷上了收集玩具城的玩具！无论是小巧可爱，还是怪异奇特，我都喜欢！偶尔还会去旁边的梦幻主题公园，开心极了！", 37, 3001307, true, true, 1);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face0#我担心出事，就到童话村和地球防御本部走了一趟，果然也没人见过水晶门~", 37, 3001307, true, true, 1);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face4#呼……真让人寒心。我没时间像你们一样闲晃。这次可是要去武陵道院地区修炼的。拜托你们好好干活吧？", 37, 3001311, true, true, 1);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face0#其实我最近遇到过见过水晶门的人。", 37, 3001308, true, true, 1);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/whatl"], [0, 10, 0, 1, 0, 0, 0, 0, 0]);
                          cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/whatl", "oid=670583"], [0, 10, -30, 1, 0, 1, 0, 0, 0]);
                          cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/what", 'oid=670585'], [0, 10, 0, 1, 0, 1, 0, 0, 0]);
                          cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/what", "oid=670586"], [0, 10, 0, 1, 0, 1, 0, 0, 0]);
                          cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/what", "oid=670584"], [0, 10, -30, 1, 0, 1, 0, 0, 0]);
                          cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/whatl", "oid=670587"], [0, 10, 0, 1, 0, 1, 0, 0, 0]);
                          cm.inGameDirectionEvent_AskAnswerTime(500);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face3#这么重要的情报怎么现在才说？", 37, 3001311, false, true, 1);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face0#我不是好奇大家都在做什么嘛？", 37, 3001308, true, true, 1);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face0#水晶门又没有逃走，怎么会这么乱糟糟的？希娜?", 37, 3001308, true, true, 1);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face0#你发现门的地方在哪啊？", 37, 3001354, true, true, 1);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face0#我最近结交了不少水下世界动物园里的朋友们。他们说在深海见过某个发光的东西。", 37, 3001308, true, true, 1);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face0#哇~卡尼里恩还喜欢交朋友。", 37, 3001307, true, true, 1);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face1#你说深海！我还没去过呢！应该有好多美味的海鲜吧……！？", 37, 3001310, true, true, 1);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face0#现在立即出发吗？", 37, 3001300, true, true, 1);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face1#啊！利奥和玛奇要是跑到海里去，那不是死定了？", 37, 3001307, true, true, 1);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face0#呵呵……真有趣。赶快实验吧！", 37, 3001307, true, true, 1);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#face0#……", 37, 3001300, true, true, 1);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face0#接下来前往水下世界深海区域。", 37, 3001300, true, true, 1);
                                                } else {
                                                  if (status === V++) {
                                                    cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                                    cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 2147483647, 2147483647, 2147483647);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.inGameDirectionEvent_AskAnswerTime(300);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                                          cm.updateInfoQuest(34842, "045=1");
                                                          cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                        } else if (status === V++) {
                                                          cm.npc_LeaveField('oid=670583');
                                                          cm.npc_LeaveField("oid=670584");
                                                          cm.npc_LeaveField("oid=670585");
                                                          cm.npc_LeaveField("oid=670586");
                                                          cm.npc_LeaveField('oid=670587');
                                                          cm.npc_LeaveField('oid=670588');
                                                          cm.dispose();
                                                          cm.warp(940202046, 0, true);
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