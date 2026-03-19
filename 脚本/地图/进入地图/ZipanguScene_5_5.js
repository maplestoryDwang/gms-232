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
      cm.forceStartQuest(58773, '');
      cm.updateInfoQuest(58773, "stage=0");
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.sendNormalTalk_Bottom("#face0#这是第二个试炼。\r\n试炼内容是检验你的眼力和洞察力。", 37, 9111018, false, true);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Bottom("#face0#叔叔你只要在你认识的人中找出略有差异的对象即可。", 37, 9111018, true, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("#face0#等你做好心理准备，就重新跟我对话。", 37, 9111018, true, true);
        } else if (status === V++) {
          cm.eventSKill(0);
          cm.setInGameDirectionMode(false, true, false);
          cm.dispose();
        }
      }
    }
  }
}