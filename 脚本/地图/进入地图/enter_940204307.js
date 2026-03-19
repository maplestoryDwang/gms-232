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
      if (cm.isQuestFinished(34240)) {
        cm.dispose();
        return;
      }
      cm.npc_ChangeController(3003472, "oid=205326", -2395, -264, 22, -2395, -2345, 1, false, false);
      cm.updateInfoQuest(34240, 'first=1');
      cm.sendNormalTalk_Bottom("哎呀……痕迹好像中断了。", 57, 0, false, true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Bottom("#face13#即使痕迹消失了，也一定会留下记忆……我们来调查一下留在这里的记忆吧。", 37, 3003480, true, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("#face13#从#b这里的怪物#k身上，寻找她留下的记忆吧。", 36, 3003480, false, true);
        } else {
          if (status === V++) {
            cm.askAcceptDecline_Bottom("#face0#你去帮我搜集一些#i4036338:#  #r#t4036338:##k。如果对那个进行调查，应该就能知道她去了哪儿。", 36, 3003480);
          } else {
            if (status === V++) {
              cm.forceStartQuest(34240, '');
              cm.sendNormalTalk_Bottom("#face0##i4036338:#  #r#t4036338:##k可以从#b这里的怪物#k身上获得。大概有#r30个#k就足够了。", 36, 3003480, false, true);
            } else if (status === V++) {
              cm.sendNormalTalk_Bottom("#face0#如果想离开这里，就跟我说。要想再到这里来，就到#b研究室#k去重新和我对话。", 37, 3003480, true, true);
              cm.dispose();
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