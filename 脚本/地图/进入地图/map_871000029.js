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
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 600, 0);
      cm.inGameDirectionEvent_AskAnswerTime(2000);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.sendNewEffects(17, [0, 2000, 2000, 20, 330]);
      } else {
        if (status === V++) {
          cm.npc_ChangeController(9400936, "oid=2623718", -30, 250, 1, -80, 20, 0, true, 0, false);
          cm.npc_SetSpecialAction("oid=2623718", 'summon', 0, 0);
          cm.npc_SetSpecialAction("oid=2623718", "stand", -1, 0);
          cm.npc_ChangeController(9400935, "oid=2623719", -70, 250, 1, -120, -20, 0, true, 0, false);
          cm.npc_SetSpecialAction("oid=2623719", "summon", 0, 0);
          cm.npc_SetSpecialAction("oid=2623719", 'stand', -1, 0);
          cm.npc_ChangeController(9400928, "oid=2623720", -115, 250, 1, -165, -65, 0, true, 0, false);
          cm.npc_SetSpecialAction("oid=2623720", 'summon', 0, 0);
          cm.npc_SetSpecialAction("oid=2623720", "stand", -1, 0);
          cm.npc_ChangeController(9400929, "oid=2623721", -170, 250, 1, -220, -120, 0, true, 0, false);
          cm.npc_SetSpecialAction("oid=2623721", "summon", 0, 0);
          cm.npc_SetSpecialAction("oid=2623721", 'stand', -1, 0);
          cm.npc_ChangeController(9400931, "oid=2623722", 120, 250, 1, 70, 170, 1, true, 0, false);
          cm.npc_SetSpecialAction("oid=2623722", 'summon', 0, 0);
          cm.npc_SetSpecialAction("oid=2623722", "stand", -1, 0);
          cm.npc_ChangeController(9400932, "oid=2623723", 180, 250, 1, 130, 230, 1, true, 0, false);
          cm.npc_SetSpecialAction("oid=2623723", "summon", 0, 0);
          cm.npc_SetSpecialAction("oid=2623723", "stand", -1, 0);
          cm.npc_ChangeController(9400933, "oid=2623724", 220, 250, 1, 170, 270, 1, true, 0, false);
          cm.npc_SetSpecialAction("oid=2623724", "summon", 0, 0);
          cm.npc_SetSpecialAction("oid=2623724", "stand", -1, 0);
          cm.onTeleport(0, 3, cm.getPlayer().getId(), 0, 250);
          cm.inGameDirectionEvent_同时移动镜头和人(2, 10);
          cm.inGameDirectionEvent_AskAnswerTime(1000);
        } else {
          if (status === V++) {
            cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 3000, 0);
            cm.sendNormalTalk_Bottom("#face1#真是个愉快的新年早晨。放爆竹很开心，森林庭院也很漂亮呢。\r\n对，艾米的特制料理也很好吃呢！", 37, 9400921, false, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face1#哎，这是谁做的？\r\n话说回来，那些孩子们真的很能吃呢。早知道这么多人来，我就多做点了！", 37, 9400920, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face0#虽然如今大家都回去了，但我想，她们一定会重新回到凯兰西亚的。", 37, 9400923, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face0#新年伊始就有客人来呢。\r\n#h0#，自从你来凯兰西亚找我后，我身上就发生了很多有意义且幸福的事情。", 37, 9400922, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face0#你要是觉得那个主意不错的话，要不要看看这个#b荷塘庭院瓦屋房图样#k？\r\n还是你亲自管理比较好一点。", 37, 9400922, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#b我？但这可是凯尼斯大叔为迎接新年精心制作的图样啊…… ", 57, 0, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face1#我这把老骨头极其不擅长管理。\r\n它只会成为我的负担，最好由你这样勤奋的主人来管理。", 37, 9400922, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face1#不要担心，#h0#，我和埃尔宾欧巴会像对待自己家一样认真管理的！\r\n要不你直接交给我们兄妹也行！", 37, 9400920, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face4#艾米！", 37, 9400921, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face1#我开玩笑的！\r\n啊，但说要当作自己家一样好好管理是真的！", 37, 9400920, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#b凯尼斯大叔，谢谢你。我会慎重使用的。", 57, 0, true, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face0#森林庭院……我好像有灵感了。\r\n请期待我下回的杰作吧。", 37, 9400924, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face1#好吧，好吧，不要太过期待哦！\r\n凯兰西亚最优秀的木匠—艾丹也要发愤图强了呢！等着吧，我会用很酷的家具填满森林庭院的！", 37, 9400923, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face1#貌似买很多新家具回来比较好！\r\n村子里充满新年庆典的气氛时，应该可以找到很多独特的家具！", 37, 9400920, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face2#大家都干劲十足呢！庆典还没结束，我们一起来迎接新年的到来吧！", 37, 9400921, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.updateInfoQuest(64908, 'finish=1');
                                          cm.forceCompleteQuest(64908);
                                          cm.updateInfoQuest(500927, "end=1;name=但行好事哈;CID=13834533");
                                          cm.playerMessage(-1, "可购买东洋风家具/建筑！");
                                          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 600, 0);
                                          cm.inGameDirectionEvent_AskAnswerTime(2000);
                                          cm.gainItem(2631436, 1);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNewEffects(14, [0, 2000, 1000, 0, 0]);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNewEffects(19, [0]);
                                            } else if (status === V++) {
                                              cm.fieldEffect_PlayFieldSound("Sound/Game.img/QuestClear", 100);
                                              cm.eventSKill(0);
                                              cm.warp(871000028, 0, false);
                                              cm.setInGameDirectionMode(false, true, false);
                                              cm.effect_OnUserEff("Effect/BasicEff.img/QuestClear");
                                              cm.npc_LeaveField("oid=2623718");
                                              cm.npc_LeaveField("oid=2623718");
                                              cm.npc_LeaveField("oid=2623719");
                                              cm.npc_LeaveField("oid=2623719");
                                              cm.npc_LeaveField("oid=2623720");
                                              cm.npc_LeaveField("oid=2623720");
                                              cm.npc_LeaveField("oid=2623721");
                                              cm.npc_LeaveField("oid=2623721");
                                              cm.npc_LeaveField("oid=2623722");
                                              cm.npc_LeaveField("oid=2623722");
                                              cm.npc_LeaveField("oid=2623723");
                                              cm.npc_LeaveField("oid=2623723");
                                              cm.npc_LeaveField("oid=2623724");
                                              cm.npc_LeaveField("oid=2623724");
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