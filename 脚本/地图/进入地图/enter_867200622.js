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
      cm.npc_ChangeController(9400679, "oid=4235351", -73, 450, 6, -123, -23, 0, true, false);
      cm.npc_SetSpecialAction("oid=4235351", "summon", 0, 0);
      cm.npc_ChangeController(9400589, "oid=4235352", 220, 450, 4, 170, 270, 0, true, false);
      cm.npc_SetSpecialAction("oid=4235352", 'summon', 0, 0);
      cm.npc_ChangeController(9400619, "oid=4235353", 350, 450, 5, 300, 400, 0, true, false);
      cm.npc_SetSpecialAction("oid=4235353", "summon", 0, 0);
      cm.npc_ChangeController(9400591, "oid=4235354", 400, 450, 2, 350, 450, 0, true, false);
      cm.npc_SetSpecialAction("oid=4235354", "summon", 0, 0);
      cm.npc_ChangeController(9400678, "oid=4235355", 530, 450, 1, 480, 580, 0, true, false);
      cm.npc_SetSpecialAction("oid=4235355", "summon", 0, 0);
      cm.npc_ChangeController(9400677, "oid=4235356", 760, 450, 17, 710, 810, 0, true, false);
      cm.npc_SetSpecialAction("oid=4235356", 'summon', 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(250);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.npc_SetForceMove("oid=4235356", 1, 3000, 70);
        cm.npc_SetForceMove("oid=4235355", 1, 3000, 70);
        cm.npc_SetForceMove("oid=4235354", 1, 3000, 70);
        cm.npc_SetForceMove("oid=4235353", 1, 3000, 70);
        cm.inGameDirectionEvent_同时移动镜头和人(2, 1000);
        cm.npc_SetForceMove("oid=4235352", 1, 1000, 70);
        cm.npc_SetForceMove("oid=4235351", 1, 3000, 70);
        cm.sendNormalTalk_Bottom("#b你说她还没放弃，是什么意思？", 57, 0, false, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("#face0#那位老婆婆名叫莎娜安，正如信中所说，她和孙女两人住在森林里。", 37, 9400589, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#face0#估计你也有听说，半年前，在整片阿布鲁地区发生了可怕的失踪事件。那件事过后没多久，莎娜安就来到了卡夫塔佩。", 37, 9400589, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face0#她说她在找孙女。", 37, 9400589, true, true);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_同时移动镜头和人(2, 1000);
                cm.npc_SetForceMove("oid=4235352", 1, 1000, 100);
                cm.sendNormalTalk_Bottom("#face0#说来惋惜……她的孙女似乎也是在事件当时一起消失的。", 37, 9400589, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face0#信中还提到了怪物暴走事件，应该最近才写的。看来她直到现在还在到处找她的孙女。", 37, 9400589, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#b你不知道她现在在哪儿吧？", 57, 0, true, true);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_同时移动镜头和人(2, 1000);
                      cm.npc_SetForceMove("oid=4235352", 1, 1000, 100);
                      cm.sendNormalTalk_Bottom("#face0#不知道。我最后听到的，是她说打算去其他村子寻找孙女。", 37, 9400589, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face0#但那已经是半年前了……有可能她早就回小屋去了。愿沉睡森林的气息保护她……", 37, 9400589, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#b原来如此。", 57, 0, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face0#等去到下个村子，你再跟当地的村民打听打听。", 37, 9400589, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#b好，谢谢你。", 57, 0, true, true);
                            } else {
                              if (status === V++) {
                                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                cm.inGameDirectionEvent_AskAnswerTime(500);
                              } else if (status === V++) {
                                cm.setNumberForQuestInfo(64006, 'Ec', 9);
                                cm.warp(867200500, 8);
                                cm.setInGameDirectionMode(false, true, false);
                                cm.npc_LeaveField("oid=4235351");
                                cm.npc_LeaveField("oid=4235351");
                                cm.npc_LeaveField("oid=4235352");
                                cm.npc_LeaveField("oid=4235352");
                                cm.npc_LeaveField("oid=4235353");
                                cm.npc_LeaveField("oid=4235353");
                                cm.npc_LeaveField("oid=4235354");
                                cm.npc_LeaveField("oid=4235354");
                                cm.npc_LeaveField("oid=4235355");
                                cm.npc_LeaveField("oid=4235355");
                                cm.npc_LeaveField("oid=4235356");
                                cm.npc_LeaveField("oid=4235356");
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;