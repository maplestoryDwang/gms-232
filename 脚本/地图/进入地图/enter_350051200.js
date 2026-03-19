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
      cm.npc_ChangeController(1540718, "oid=37036", 1615, 61, 10, 1565, 1665, 1, false, 0, false);
      cm.npc_ChangeController(1540752, 'oid=37037', 2186, 61, 8, 2136, 2236, 1, false, 0, false);
      cm.updateInfoQuest(33213, "area=D1_Z05;x=2;y=0");
      cm.updateInfoQuest(33214, 'ul=207');
      cm.openUI(254);
      cm.onSetBackEffect("bh_1200_1", 1, 0, 0, 0);
      cm.地图特效_开关落脚点([25], [1]);
      cm.onSetBackEffect("bh_1200_2", 1, 0, 0, 0);
      cm.地图特效_开关落脚点([27], [1]);
      cm.onSetBackEffect("bh_1200_3", 1, 0, 0, 0);
      cm.地图特效_开关落脚点([26], [1]);
      cm.onSetBackEffect("bh_1200_4", 1, 0, 0, 0);
      cm.地图特效_开关落脚点([28], [1]);
      cm.setPartner(1, 1540732, 80001601, 0);
      cm.setPartner(1, 1540733, 80001594, 0);
      cm.setPartner(1, 1540734, 80001595, 0);
      cm.setPartner(1, 1540735, 80001596, 0);
      cm.setPartner(1, 1540736, 80001602, 0);
      cm.setPartner(1, 1540737, 80001635, 0);
      cm.setPartner(1, 1540738, 80001615, 0);
      cm.setPartner(1, 1540739, 80001616, 0);
      if (cm.getQuestStatus(33226) > 0) {
        cm.dispose();
        return;
      }
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_AskAnswerTime(1500);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Bottom("我查看了你刚刚搜集到的芯片，由于受损严重，好像都无法使用了。", 37, 1540451, false, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("如果你再帮忙搜集30个芯片，我将感激不尽。希望你这次能小心翼翼地处理芯片。", 37, 1540451, true, true);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(1500);
          } else if (status === V++) {
            cm.setInGameDirectionMode(false, true, false);
            cm.forceStartQuest(33226, '');
            cm.dispose();
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