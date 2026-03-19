var status = -1;
var selectionLog = [];
function start() {
  status = -1;
  action(1, 0, 0);
}
;
function action(f, E, e) {
  if (status == 0 && f == 0) {
    cm.dispose();
    return;
  }
  if (cm.getInfoQuest(34813) != "529=1;d=1;m=0;item2=1;exp=1;d2=1") {
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
      cm.Hidden_background("crystal", 1, 0, 0, 0);
      cm.sendNormalTalk_Bottom("#face0#嗯，记得！这次天神祭我可不是看热闹的了！我打算全力以赴，释放我的光芒！", 37, 3001351, false, true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Bottom("#face0#不如继续做造型物吧？如果想做得更大，好像还需要更多金属材料。", 36, 3001351, false, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("#face0#若想找到#i4036169##b#t4036169##k，必须先前往#m402000510#吧？\r\n这次差不多需要#b10个#k左右。", 36, 3001351, true, true);
        } else {
          if (status === V++) {
            cm.askAcceptDecline_Bottom("#face0#决定立即前往#r#o2400404##k所在地吗？\r\n#b（接受时将自动移动。）", 37, 3001300);
          } else if (status === V++) {
            cm.updateInfoQuest(34813, "529=1;d=1;m=0;item2=1;exp=1;031=1;d2=1");
            cm.forceStartQuest(34814, '');
            cm.dispose();
            cm.warp(402000506, 0);
          }
        }
      }
    }
  }
}