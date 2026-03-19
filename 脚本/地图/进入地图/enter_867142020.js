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
      cm.npc_ChangeController(9401071, 'oid=200620', 678, -265, 24, 628, 728, 5, true, 0, false);
      cm.npc_ChangeController(9401072, "oid=200621", 761, -265, 24, 711, 811, 5, true, 0, false);
      cm.npc_ChangeController(9401073, "oid=200622", 833, -265, 24, 783, 833, 1, false, 0, false);
      cm.npc_ChangeController(9400434, "oid=200623", 94, -265, 19, 44, 144, 0, false, 0, false);
      cm.npc_ChangeController(9401074, "oid=200624", 1004, -265, 23, 954, 1054, 1, false, 0, false);
      cm.npc_ChangeController(9401075, "oid=200625", 212, -323, 5, 162, 262, 0, false, 0, false);
      cm.npc_ChangeController(9401076, "oid=200626", 1010, -438, 13, 960, 1058, 1, false, 0, false);
      cm.npc_ChangeController(9401077, "oid=200627", 436, -265, 20, 386, 468, 0, false, 0, false);
      cm.npc_ChangeController(9401078, "oid=200628", 154, -502, 2, 104, 204, 0, false, 0, false);
      cm.npc_ChangeController(9401079, "oid=200629", 278, -362, 4, 228, 328, 0, false, 0, false);
      cm.npc_ChangeController(9401080, "oid=200630", 961, -353, 11, 911, 1011, 1, false, 0, false);
      cm.npc_ChangeController(9401081, 'oid=200631', 284, -491, 1, 234, 334, 0, false, 0, false);
      cm.npc_ChangeController(9401084, 'oid=200632', 287, -265, 20, 237, 337, 0, false, 0, false);
      cm.npc_ChangeController(9401082, "oid=200633", 1079, -265, 23, 1029, 1129, 1, false, 0, false);
      cm.npc_ChangeController(9401083, 'oid=200634', 1144, -265, 23, 1094, 1194, 1, false, 0, false);
      cm.npc_ChangeController(9401086, "oid=200635", -754, -265, 18, -804, -704, 0, false, 0, false);
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_AskAnswerTime(2200);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 1300, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1600);
        cm.setAccountQuestInfo(226, "count=7933;T=20200514221759");
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_AskAnswerTime(1200);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_Monologue("被拯救的拟真机器人们亲自拍摄、揭露阿特利埃真相的录像成了一大热门话题", 0);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_Monologue("阿特利埃宣告破产。CEO克拉尼亚下落不明，没人知道她去了哪里。", 0);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_Monologue("目前，拟真机器人们在自己的藏身处幸福度日，并准备独立生活。", 0);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_Monologue("#fs28#\r\n - 在第三季故事中继续……", 0);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(1200);
                  } else if (status === V++) {
                    cm.updateInfoQuest(64946, "prev=1");
                    cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                    cm.eventSKill(0);
                    cm.dispose();
                    cm.warp(867142022, 0, false);
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