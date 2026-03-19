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
      cm.setInGameDirectionMode(true, true, true);
      cm.inGameDirectionEvent_MoveAction(0);
      cm.npc_ChangeController(3002001, "oid=110545325", 300, 89, 236, 250, 350, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=110545325", 'summon', 0, 0);
      cm.npc_ChangeController(3002002, "oid=110545326", -175, 0, 233, -225, -125, 0, false, 0, false);
      cm.npc_SetSpecialAction("oid=110545326", 'summon', 0, 0);
      cm.npc_ChangeController(3002003, "oid=110545327", 360, 103, 236, 310, 410, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=110545327", "summon", 0, 0);
      cm.npc_ChangeController(3002004, "oid=110545328", -238, -33, 232, -288, -188, 0, false, 0, false);
      cm.npc_SetSpecialAction("oid=110545328", "summon", 0, 0);
      cm.npc_ChangeController(3002005, "oid=110545329", 84, 37, 236, 34, 134, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=110545329", "summon", 0, 0);
      cm.npc_ChangeController(3002006, "oid=110545330", 174, 55, 236, 124, 224, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=110545330", "summon", 0, 0);
      cm.npc_ChangeController(3002007, "oid=110545331", -128, 51, 173, -178, -78, 0, false, 0, false);
      cm.npc_SetSpecialAction("oid=110545331", 'summon', 0, 0);
      cm.npc_ChangeController(3002008, "oid=110545332", -190, 77, 172, -240, -140, 0, false, 0, false);
      cm.npc_SetSpecialAction("oid=110545332", "summon", 0, 0);
      cm.npc_ChangeController(3002009, "oid=110545333", 241, 72, 236, 191, 291, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=110545333", "summon", 0, 0);
      cm.npc_ChangeController(3002105, "oid=110545334", -61, 41, 174, -111, -11, 0, false, 0, false);
      cm.npc_SetSpecialAction("oid=110545334", 'summon', 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(2000);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.sendNormalTalk("我还以为现在已经稍微有了一点感情，没想到你却要走了。真让人遗憾。", 1, 3002007, false, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk("别忘了要按时吃饭。狐狸本来就是以食为天的。", 1, 3002008, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("虽然离开了村子，但千万不要忘记，你是我们尖耳狐狸的一员。不管去了哪里，都不要失去狐狸的骄傲。觉得累了的时候，你可以随时回来。我们会在这里等着你。", 5, 3002005, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk("这段时间真的非常感谢。我绝对……绝对不会忘记你们的。", 17, 3002008, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk("你说什么呢，隐月！说得就像是要永远离开一样。事情办完之后，就快点回来！多买点好吃的带回来！", 1, 3002004, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk("呜呜，年纪大了之后，总是时常流眼泪。阿琅一直待在房间里不肯出来。一定是不愿意看着你走。雨一直下个不停，看来她好像很悲伤。", 5, 3002005, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk('…………', 17, 3002004, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk("本来我想说过几天和你一起出发。不过既然有急事，那就没办法了。好了，这是可以直接移动到万神殿的回城卷。你去万神殿找一个名叫#r卡塔利安#k的人。就说是我介绍你去的，他会好好招待你的。", 1, 3002010, true, true);
                    } else if (status === V++) {
                      cm.updateInfoQuest(38028, '');
                      cm.forceStartQuest(38028, '');
                      cm.npc_LeaveField("oid=110545325");
                      cm.npc_LeaveField("oid=110545325");
                      cm.npc_LeaveField("oid=110545326");
                      cm.npc_LeaveField("oid=110545326");
                      cm.npc_LeaveField("oid=110545327");
                      cm.npc_LeaveField("oid=110545327");
                      cm.npc_LeaveField("oid=110545328");
                      cm.npc_LeaveField("oid=110545328");
                      cm.npc_LeaveField("oid=110545329");
                      cm.npc_LeaveField("oid=110545329");
                      cm.npc_LeaveField("oid=110545330");
                      cm.npc_LeaveField("oid=110545330");
                      cm.npc_LeaveField("oid=110545331");
                      cm.npc_LeaveField("oid=110545331");
                      cm.npc_LeaveField("oid=110545332");
                      cm.npc_LeaveField("oid=110545332");
                      cm.npc_LeaveField("oid=110545333");
                      cm.npc_LeaveField("oid=110545333");
                      cm.npc_LeaveField("oid=110545334");
                      cm.npc_LeaveField("oid=110545334");
                      cm.setInGameDirectionMode(false, true, false);
                      cm.gainItem(2432316, 1);
                      cm.dispose();
                      cm.warp(410000000, 6, false);
                    } else {
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;