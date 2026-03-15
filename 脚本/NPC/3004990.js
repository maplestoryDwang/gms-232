var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
function action(f, W, U) {
  if (status == 0 && f == 0) {
    cm.dispose();
    return;
  }
  status++;
  selectionLog[status] = U;
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.sendNormalTalk_Bottom("#face0#我叫提尔拉姆，\r\n运营来往于荒蛮终点站和图仑城的船只。", 36, 3004990, false, true, 1);
    } else {
      if (status === V++) {
        if (cm.getMapId() == 402000123) {
          cm.askAcceptDecline_Bottom("#face0#要上船吗？\r\n\r\n#b(※前往图仑城。)", 36, 3004990, 1);
        } else {
          cm.askAcceptDecline_Bottom("#face0#要上船吗？\r\n\r\n#b（※前往荒蛮终点站。）", 36, 3004990, 1);
        }
      } else if (status === V++) {
        cm.dispose();
        if (f > 0) {
          if (cm.getMapId() == 402000123) {
            cm.warp(410000419, 1, false);
          } else {
            cm.warp(402000123, 1, false);
          }
        }
      }
    }
  }
}