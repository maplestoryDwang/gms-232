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
      cm.npc_ChangeController(9131000, "oid=3789319", -100, 85, 4, -150, -50, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=3789319", "summon", 0, 0);
      cm.npc_ChangeController(9130072, "oid=3789320", 120, 85, 7, 70, 170, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=3789320", "summon", 0, 0);
      cm.sendNormalTalk_Bottom('！！！', 57, 0, false, true);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.onActionBarResult(6, -1);
        cm.sendNormalTalk_Bottom("#face0#嗯？我们……是不是曾在本能寺见过一面啊？", 37, 9131000, true, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("明智光秀！！看来和黑色之翼联手，让魔物变得这么狂暴的人就是你啊！把事情闹得这么大，你究竟是何目的？", 57, 0, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#face0#呵……这还用说吗？当然是为了在这个冒险岛内……引发动乱了。", 37, 9131000, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("引发……动乱？", 57, 0, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face0#正是。我希望你们彼此之间能够彻底失去信任，变得相互憎恨，如此一来便可引发动乱。然后，等你们每个人都变得孤立无援之时……就是我正式展开行动的时候了。呵呵呵……", 37, 9131000, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("信长居然堕落到这种地步了！？难道他已经完全不以自身的力量为荣了吗！", 57, 0, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face0#看来你是误会了什么啊。我已经和信长没有任何关系了。不过是为了加剧动乱，才一直擅自打着信长的名号而已。", 37, 9131000, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("也就是说……这一连串的事情都和织田军没有丝毫的关系，完全是你一个人的阴谋了？", 57, 0, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face0#正是如此！无论是信长、你所属的联合军，还是黑色之翼……一切都不过是受我操控的牵线人偶而已，但你们却没有丝毫的察觉。", 37, 9131000, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face0#呵呵呵……一切的计划都已经实施完毕。剩下要做的就是最后的准备了。好了，那我就先走一步了。", 37, 9131000, true, true);
                        } else {
                          if (status === V++) {
                            cm.npc_LeaveField("oid=3789319");
                            cm.npc_LeaveField("oid=3789319");
                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                          } else {
                            if (status === V++) {
                              if (cm.isQuestActive(57149)) {
                                cm.sendNormalTalk_Bottom("等一下，兰丸！", 57, 0, false, true);
                              } else if (cm.isQuestActive(57445)) {
                                cm.sendNormalTalk_Bottom('给我站住！光秀！！', 57, 0, false, true);
                              }
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face0#给我站住。你这家伙真是太不懂礼貌了。擅自闯入人家的领域不说，居然都不知道和主人打一声招呼就想要离开……", 37, 9130072, true, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face0#就让我神仙妖怪来亲自教教你什么叫礼仪吧！", 37, 9130072, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.npc_LeaveField("oid=3789320");
                                    cm.npc_LeaveField("oid=3789320");
                                    if (cm.isQuestActive(57149)) {
                                      cm.forceStartQuest(57149, "001");
                                    } else if (cm.isQuestActive(57445)) {
                                      cm.forceStartQuest(57445, "001");
                                    }
                                    cm.gainExp(24980);
                                    cm.dispose();
                                    cm.warp(250000000, 0, false);
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