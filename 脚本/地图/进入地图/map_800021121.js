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
      cm.forceCompleteQuest(58816);
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.inGameDirectionEvent_AskAnswerTime(1000);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.npc_ChangeController(9111006, "oid=8466977", -90, 79, 79, -140, -40, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=8466977", 'summon', 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1000);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("蘑菇神社第一美女是谁呢？\r\n请大家在各自认可的美女名字前面贴上红心吧。", 37, 9112054, false, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#p9112037# : #i3800452# #i3800452#\r\n#p9112031# : #i3800452# #i3800452# #i3800452# #i3800452#\r\n#p9111000# : \r\n#p9112039# : #i3800452#", 37, 9112054, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face0#糟糕！！这是怎么搞的！！是谁给竹野子投了那么多……", 37, 9111006, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face0#这样不行啊……泉奈应该要得冠军才行啊……呜呜……", 37, 9111006, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("………………好像只有咱俩投了泉奈的票额……", 57, 0, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face0#唉，既然这样，我只能对结果造假了。", 37, 9111006, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#p9112037# : #i3800452##i3800452##i3800452##i3800452##i3800452##i3800452#\r\n#p9112031# : #i3800452##i3800452##i3800452##i3800452#\r\n#p9111000# : \r\n#p9112039# : #i3800452#", 37, 9112054, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face0#你瞧，怎么样！现在泉奈是冠军了哦！", 37, 9111006, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("这造假造得也太明显了吧……", 57, 0, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face2#你这没素质的狐妖！在神社瞎搞什么！", 37, 9111000, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face0#呜………………咿…………不……好……意思……", 37, 9111006, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face2#这是什么！……选美投票……？…………………………", 37, 9111000, true, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("（糟糕……木野子一票都没得……）", 57, 0, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face2#………………这么无聊的东西就交给我拿去丢了吧。", 37, 9111000, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face0#呜呜呜……这下子我没东西送给泉奈了。", 37, 9111006, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("现在不是考虑这个的时候好不好！！！！", 57, 0, true, true);
                                      } else if (status === V++) {
                                        cm.warp(800000000, 5, false);
                                        cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                        cm.eventSKill(0);
                                        cm.setInGameDirectionMode(false, true, false);
                                        cm.npc_LeaveField("oid=8466977");
                                        cm.npc_LeaveField("oid=8466977");
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