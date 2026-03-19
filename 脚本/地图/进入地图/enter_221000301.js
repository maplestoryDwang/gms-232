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
      cm.npc_ChangeController(2052006, "oid=11693", -176, 11, 31, -226, -126, 0, false, false);
      cm.npc_ChangeController(2052007, "oid=11694", -250, 11, 31, -300, -200, 4, true, false);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.onTeleport(0, 3, cm.getPlayer().getId(), 110, -31);
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.npc_ChangeController(2052000, "oid=37940228", -80, -43, 31, -130, -30, 1, true, false);
      cm.npc_SetSpecialAction("oid=37940228", 'summon', 0, 0);
      cm.npc_ChangeController(2052001, "oid=37940229", -20, -43, 31, -70, 30, 1, true, false);
      cm.npc_SetSpecialAction("oid=37940229", 'summon', 0, 0);
      cm.npc_ChangeController(2052002, "oid=37940230", 40, -43, 31, -10, 90, 1, true, false);
      cm.npc_SetSpecialAction("oid=37940230", 'summon', 0, 0);
      cm.npc_ChangeController(2052003, "oid=37940231", 100, -43, 31, 50, 150, 1, true, false);
      cm.npc_SetSpecialAction("oid=37940231", 'summon', 0, 0);
      cm.npc_ChangeController(2052004, "oid=37940232", 160, -43, 31, 110, 210, 1, true, false);
      cm.npc_SetSpecialAction("oid=37940232", "summon", 0, 0);
      cm.npc_ChangeController(2052005, "oid=37940233", 220, -43, 31, 170, 270, 1, true, false);
      cm.npc_SetSpecialAction("oid=37940233", 'summon', 0, 0);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1200);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1400);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("#face2#大家都到了，你们都聚在一起可不多见啊。", 37, 2052006, false, true);
        } else {
          if (status === V++) {
            cm.askMenu_Bottom("#face2#好~今天会议的主题就是节省经费，来，举个例子！\r\n#b#L0#1。\t一次使用一边火箭拳#l\r\n#L1#2。\t出击1次时只能使用1次闪光火炮#l\r\n#L2#3。\t徒步前往作战地点#l", 37, 2052006);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face2#1……1号？", 37, 2052004, false, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face0#是4号，博士。\r\n为了让我能够开发出更加强劲有力的助威姿势，帮我买个跳舞机器人吧。", 37, 2052000, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face3#博士！给操纵室装个空调吧！\r\n实在是太热了，我真是大汗淋漓呢！", 37, 2052003, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face0#引进新西装怎么样，现在的设计实在是太过老套了，\r\n所以才没法引领潮流嘛。", 37, 2052001, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face2#你们……确定自己知道什么叫节省经费吗？", 37, 2052006, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face0#与其做这些事，倒不如增加点基本补给嘛！\r\n阿亮总是抢我的零食吃，搞得我都不够吃。", 37, 2052002, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face3#你说什么？你有证据吗？", 37, 2052005, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face0#让我瞧瞧，监视器拍下的资料画面……", 37, 2052002, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face1#你这个小气鬼！所以你才会在靴子里塞鞋垫的！\r\n瞧瞧！现在也一点点在变矮嘛！", 37, 2052005, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face1#你说什么？！你这个没点存在感的家伙！真希望你的存在感能彻底消失！！\r\n就像灰尘那么大！", 37, 2052002, true, true);
                              } else {
                                if (status === V++) {
                                  cm.npcSetSize("oid=37940233", 50, 5000);
                                  cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/droping2", 100);
                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                } else {
                                  if (status === V++) {
                                    cm.npcSetSize("oid=37940230", 50, 5000);
                                    cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/droping2", 100);
                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face2#额啊啊啊？这家伙好像真的变矮了啊？！", 37, 2052005, false, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face2#不对！我们都在变矮！", 37, 2052002, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.npcSetSize("oid=37940228", 50, 3000);
                                          cm.npcSetSize("oid=37940229", 50, 3000);
                                          cm.npcSetSize("oid=37940231", 50, 3000);
                                          cm.npcSetSize("oid=37940232", 50, 3000);
                                          cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/droping2", 100);
                                          cm.sendNormalTalk_Bottom("#face2#我们也是一样！", 37, 2052003, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.forceStartQuest(3477, '');
                                            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                          } else if (status === V++) {
                                            cm.dispose();
                                            cm.warp(221000300, 2);
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;