var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
function action(f, E, e) {
  var V = cm.getJob();
  if (status == 0 && f == 0) {
    cm.dispose();
    return;
  }
  status++;
  selectionLog[status] = e;
  var O = -1;
  if (status <= O++) {
    cm.dispose();
  } else {
    if (status === O++) {
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_ForcedFlip(-1);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, -2592, -252);
      cm.curNodeEventEnd(true);
    } else {
      if (status === O++) {
        cm.npc_ChangeController(3004151, "oid=1972355", -2564, -325, 6, -2614, -2514, 1, true, 0, false);
        cm.npc_SetSpecialAction("oid=1972355", "summon", 0, 0);
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1200);
      } else {
        if (status === O++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 2000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(2500);
        } else {
          if (status === O++) {
            cm.fieldEffect_PlayBGM("Bgm18/QueensGarden", 0, 0);
            cm.inGameDirectionEvent_AskAnswerTime(4000);
            cm.effect_Text(["#fn黑体##fs18#稍后，圣地"], [100, 1000, 6, -50, -50, 1, 4, 0, 0, 0, 0]);
          } else {
            if (status === O++) {
              cm.sendNormalTalk_Bottom("#face0#本以为当时那场战斗已经是最后的决战了，没想到过去没多久，如今又出现了新的威胁。", 37, 3003750, false, true);
            } else {
              if (status === O++) {
                cm.npc_setForceFlip("oid=1972355", 1);
                cm.inGameDirectionEvent_AskAnswerTime(2000);
              } else {
                if (status === O++) {
                  cm.sendNormalTalk_Bottom("#face0##h0#，你知道吗？\r\n次元封印解除后，分散在各地的古代遗迹和遗物便开始散发微弱光芒了。", 37, 3003750, false, true);
                } else {
                  if (status === O++) {
                    cm.sendNormalTalk_Bottom("#face0##r沉睡的古代神#k正在苏醒。", 37, 3003750, true, true);
                  } else {
                    if (status === O++) {
                      cm.sendNormalTalk_Bottom("古代神？", 57, 0, true, true);
                    } else {
                      if (status === O++) {
                        cm.sendNormalTalk_Bottom("#face0#目前我们只有一个办法可以对付#r超越者#k，那便是#b带着封印石的对抗者#k，只能靠你了。", 37, 3003750, true, true);
                      } else {
                        if (status === O++) {
                          cm.sendNormalTalk_Bottom("#face0#既然如此，总有一天我们要将重任托付于你。", 37, 3003750, true, true);
                        } else {
                          if (status === O++) {
                            cm.sendNormalTalk_Bottom("#face1#但是，如果能借助苏醒的古代神的力量，那战斗的局面定会不同于当初与黑魔法师交手的时候。", 37, 3003750, true, true);
                          } else {
                            if (status === O++) {
                              cm.sendNormalTalk_Bottom("#face0#塞尔提乌这里侍奉着好几位古代神。\r\n这正是#r确认古代神力量#k的绝佳机会。", 37, 3003750, true, true);
                            } else {
                              if (status === O++) {
                                cm.sendNormalTalk_Bottom("最终还是决定要派遣#b援军#k啊。", 57, 0, true, true);
                              } else {
                                if (status === O++) {
                                  cm.sendNormalTalk_Bottom("#face0#对，没错。", 37, 3003750, true, true);
                                } else {
                                  if (status === O++) {
                                    cm.sendNormalTalk_Bottom("#face0##h0#。\r\n你还愿意再次为了冒险岛世界，不，为了现在#b这个合并的世界#k，贡献自己的力量吗？", 37, 3003750, true, true);
                                  } else {
                                    if (status === O++) {
                                      cm.askMenu_Bottom("（该怎么办？）#b\r\n#L0#允许#l\r\n#L1#拒绝（将返回前哨基地）#l", 56, 0);
                                    } else {
                                      if (status === O++) {
                                        switch (e) {
                                          case 0:
                                            cm.inGameDirectionEvent_AskAnswerTime(2000);
                                            break;
                                          case 1:
                                            cm.sendNormalTalk_Bottom("#face6##h0#，是这样的吗？", 37, 3003750, true, true);
                                            break;
                                        }
                                      } else {
                                        if (status === O++) {
                                          switch (selectionLog[O - 2]) {
                                            case 0:
                                              cm.sendNormalTalk_Bottom("#face10##h0#。谢谢你。", 37, 3003750, false, true);
                                              break;
                                            case 1:
                                              cm.sendNormalTalk_Bottom("#face10#也好。我不该勉强你的。", 37, 3003750, true, true);
                                              break;
                                          }
                                        } else {
                                          if (status === O++) {
                                            switch (selectionLog[O - 3]) {
                                              case 0:
                                                switch (Math.floor(V / 100)) {
                                                  case 23:
                                                    cm.sendNormalTalk_Bottom("还有……关于路西德的事情，我真心向你表示感谢。", 57, 0, true, true);
                                                    break;
                                                  case 25:
                                                    cm.sendNormalTalk_Bottom("（但是在此之前，必须去一个地方。）", 57, 0, true, true);
                                                    break;
                                                  default:
                                                    cm.inGameDirectionEvent_AskAnswerTime(100);
                                                    break;
                                                }
                                                break;
                                              case 1:
                                                cm.inGameDirectionEvent_AskAnswerTime(100);
                                                break;
                                            }
                                          } else {
                                            if (status === O++) {
                                              switch (selectionLog[O - 4]) {
                                                case 0:
                                                  switch (Math.floor(V / 100)) {
                                                    case 23:
                                                      cm.sendNormalTalk_Bottom("#face10#不用客气。", 37, 3003750, true, true);
                                                      break;
                                                    case 25:
                                                      cm.sendNormalTalk_Bottom("（既然格兰蒂斯和冒险岛世界的封印已经被打破）", 57, 0, true, true);
                                                      break;
                                                    default:
                                                      cm.inGameDirectionEvent_AskAnswerTime(100);
                                                      break;
                                                  }
                                                  break;
                                                case 1:
                                                  cm.inGameDirectionEvent_AskAnswerTime(100);
                                                  break;
                                              }
                                            } else {
                                              if (status === O++) {
                                                switch (selectionLog[O - 5]) {
                                                  case 0:
                                                    switch (Math.floor(V / 100)) {
                                                      case 25:
                                                        cm.sendNormalTalk_Bottom("（如果两者真的合并在了一起……）", 57, 0, true, true);
                                                        break;
                                                      default:
                                                        cm.inGameDirectionEvent_AskAnswerTime(100);
                                                        break;
                                                    }
                                                    break;
                                                  case 1:
                                                    cm.inGameDirectionEvent_AskAnswerTime(100);
                                                    break;
                                                }
                                              } else {
                                                if (status === O++) {
                                                  switch (selectionLog[O - 6]) {
                                                    case 0:
                                                      switch (Math.floor(V / 100)) {
                                                        case 25:
                                                          cm.sendNormalTalk_Bottom("（我是不是正在慢慢摆脱魔咒呢？）", 57, 0, true, true);
                                                          break;
                                                        default:
                                                          cm.inGameDirectionEvent_AskAnswerTime(100);
                                                          break;
                                                      }
                                                      break;
                                                    case 1:
                                                      cm.inGameDirectionEvent_AskAnswerTime(100);
                                                      break;
                                                  }
                                                } else {
                                                  if (status === O++) {
                                                    switch (selectionLog[O - 7]) {
                                                      case 0:
                                                        switch (Math.floor(V / 100)) {
                                                          case 25:
                                                            cm.sendNormalTalk_Bottom("（虽然回到格兰蒂斯是最好的选择……）", 57, 0, true, true);
                                                            break;
                                                          default:
                                                            cm.inGameDirectionEvent_AskAnswerTime(100);
                                                            break;
                                                        }
                                                        break;
                                                      case 1:
                                                        cm.inGameDirectionEvent_AskAnswerTime(100);
                                                        break;
                                                    }
                                                  } else {
                                                    if (status === O++) {
                                                      switch (selectionLog[O - 8]) {
                                                        case 0:
                                                          switch (Math.floor(V / 100)) {
                                                            case 25:
                                                              cm.sendNormalTalk_Bottom("（但还是要以眼前的事务为重，相信到时候这边的情况也会有所好转）", 57, 0, true, true);
                                                              break;
                                                            default:
                                                              cm.inGameDirectionEvent_AskAnswerTime(100);
                                                              break;
                                                          }
                                                          break;
                                                        case 1:
                                                          cm.inGameDirectionEvent_AskAnswerTime(100);
                                                          break;
                                                      }
                                                    } else {
                                                      if (status === O++) {
                                                        cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                      } else {
                                                        if (status === O++) {
                                                          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                                        } else {
                                                          if (status === O++) {
                                                            switch (selectionLog[O - 11]) {
                                                              case 0:
                                                                switch (Math.floor(V / 100)) {
                                                                  case 23:
                                                                    cm.warp(993141024, 0, false);
                                                                    break;
                                                                  case 25:
                                                                    cm.warp(993110757, 0, false);
                                                                    break;
                                                                  default:
                                                                    cm.warp(993141003, 0, false);
                                                                    break;
                                                                }
                                                                break;
                                                              case 1:
                                                                cm.warp(993120000, 0, false);
                                                                cm.setInGameDirectionMode(false, true, false);
                                                                cm.setStandAloneMode(false);
                                                                break;
                                                            }
                                                            cm.npc_LeaveField("oid=1972355");
                                                            cm.npc_LeaveField("oid=1972355");
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