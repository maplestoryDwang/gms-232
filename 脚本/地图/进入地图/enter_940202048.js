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
      cm.npc_ChangeController(1540442, "oid=255856", -1218, 88, 18, -1268, -1168, 1, false, 0, false);
      cm.npc_ChangeController(1540458, 'oid=255857', -1565, 88, 12, -1615, -1515, 0, true, 0, false);
      cm.npc_ChangeController(1540458, "oid=255858", -1806, 88, 3, -1856, -1756, 0, true, 0, false);
      cm.npc_ChangeController(1540459, 'oid=255859', -595, 88, 1, -645, -545, 1, true, 0, false);
      cm.npc_ChangeController(1540459, "oid=255860", -518, 88, 23, -568, -468, 1, true, 0, false);
      cm.npc_ChangeController(1540444, "oid=255861", -569, -111, 45, -619, -519, 1, false, 0, false);
      cm.npc_ChangeController(1540412, 'oid=255862', -1534, -313, 57, -1584, -1484, 0, false, 0, false);
      cm.npc_ChangeController(1540414, "oid=255863", -1771, -321, 59, -1821, -1721, 0, false, 0, false);
      cm.npc_ChangeController(1540416, 'oid=255864', -1464, -313, 57, -1514, -1414, 0, false, 0, false);
      cm.npc_ChangeController(1540415, "oid=255865", -1613, -313, 58, -1663, -1563, 0, false, 0, false);
      cm.npc_ChangeController(1540413, "oid=255866", -1693, -314, 59, -1743, -1643, 0, true, 0, false);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
      cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 0, -320, 19);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_AskAnswerTime(1500);
      } else {
        if (status === V++) {
          cm.npc_ChangeController(3001300, "oid=277866944", -280, 65, 25, -330, -230, 1, true, 0, false);
          cm.npc_SetSpecialAction("oid=277866944", "summon", 0, 0);
          cm.npc_ChangeController(3001312, "oid=277866945", -450, 65, 24, -500, -400, 0, false, 0, false);
          cm.npc_SetSpecialAction("oid=277866945", "summon", 0, 0);
          cm.inGameDirectionEvent_头顶图片(["Effect/BasicEff.img/Teleport", "oid=277866944"], [0, 0, 0, 1, 0, 1, 0, 0]);
          cm.inGameDirectionEvent_头顶图片(["Effect/BasicEff.img/Teleport", "oid=277866945"], [0, 0, 0, 1, 0, 1, 0, 0]);
          cm.inGameDirectionEvent_AskAnswerTime(500);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#face0#利奥、玛奇那，你们准备好了吗？", 37, 3001354, false, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face0#所有系统准备完毕。", 37, 3001300, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face0#哇！这还用问！我都迫不及待了！快走吧！", 37, 3001312, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face0#伊利温！", 37, 3001310, true, true);
                } else {
                  if (status === V++) {
                    cm.npc_ChangeController(3001310, "oid=277871373", 200, 65, 31, 150, 250, 1, true, 500, false);
                    cm.npc_SetSpecialAction("oid=277871373", 'summon', 0, 0);
                    cm.npc_ChangeController(3001307, "oid=277871374", 260, 60, 31, 210, 310, 0, true, 500, false);
                    cm.npc_SetSpecialAction("oid=277871374", 'summon', 0, 0);
                    cm.npc_ChangeController(3001308, "oid=277871375", 320, 60, 35, 270, 370, 0, true, 500, false);
                    cm.npc_SetSpecialAction("oid=277871375", "summon", 0, 0);
                    cm.npc_SetForceMove("oid=277871373", -1, 340, 170);
                    cm.npc_SetForceMove("oid=277871374", -1, 340, 170);
                    cm.npc_SetForceMove("oid=277871375", -1, 340, 170);
                    cm.inGameDirectionEvent_AskAnswerTime(1500);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face0#我本想悄悄离开的，你怎么跟过来的！", 37, 3001354, false, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face0#我怎么会不知道呢！你此行多保重，伊利温！", 37, 3001308, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face0#你竟然为了跟格兰蒂斯毫无瓜葛的冒险岛，加入了战争……", 37, 3001307, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face5#目前联盟需要帮助，我们绝不能坐视不管。今后我们也有需要别人帮助的时候，所以总要做些力所能及的事。", 37, 3001354, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face0#希望通过这次经历，能让主人的魔法实力更上一层楼。", 37, 3001300, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face0#哇！别闲聊了，快走吧！", 37, 3001312, true, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face2#伊利温！多保重啊！", 37, 3001308, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face1#记得给我带礼物哦！", 37, 3001307, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face1#下次来记得给我买好吃的哦！", 37, 3001310, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face0#好。这期间如果找到古代神之圣所，记得马上联系我！", 37, 3001354, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face0#你暂时先别管这里了，集中精力处理那边的事情吧！", 37, 3001308, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face0#嗯！再见！", 37, 3001354, true, true);
                                          } else if (status === V++) {
                                            cm.setStandAloneMode(false);
                                            cm.dispose();
                                            cm.warp(350020023, 0, true);
                                            cm.setInGameDirectionMode(false, true, false);
                                            cm.npc_LeaveField("oid=277866944");
                                            cm.npc_LeaveField("oid=277866944");
                                            cm.npc_LeaveField("oid=277866945");
                                            cm.npc_LeaveField("oid=277866945");
                                            cm.npc_LeaveField("oid=277871373");
                                            cm.npc_LeaveField("oid=277871373");
                                            cm.npc_LeaveField("oid=277871374");
                                            cm.npc_LeaveField("oid=277871374");
                                            cm.npc_LeaveField("oid=277871375");
                                            cm.npc_LeaveField("oid=277871375");
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