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
      cm.npc_ChangeController(1530140, "oid=20958358", 341, 58, 1, 291, 391, 1, true, false);
      cm.npc_SetSpecialAction("oid=20958358", 'summon', 0, 0);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, true, true);
      cm.inGameDirectionEvent_AskAnswerTime(1000);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Bottom("终于下课了……这里的学生每天都要忍受这样的上课时间吗？真了不起。", 57, 0, false, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("哈哈，朋友。你不打算参加爱好者俱乐部，也就是同好会吗？反正你放学后也没什么事可做，不是吗？", 37, 1530140, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("不行，我今天和希纳斯约好了。", 57, 0, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face0#什么，希纳斯？你是不是精神不正常了？那个人……不对，是那位小姐根本就和我们平民不是一个世界的人！", 37, 1530140, true, true);
            } else {
              if (status === V++) {
                cm.updateInfoQuest(32720, "sms=21");
                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                cm.inGameDirectionEvent_AskAnswerTime(2000);
              } else if (status === V++) {
                cm.forceCompleteQuest(32738);
                cm.getTopMsgFont("已经和希纳斯约好了. 到学校正门去吧. ", 3, 20, 20, 0);
                cm.dispose();
                cm.warp(330000100, 0);
                cm.setInGameDirectionMode(false, true, false);
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