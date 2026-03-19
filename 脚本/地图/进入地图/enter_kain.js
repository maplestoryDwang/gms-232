var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
function action(f, E, e) {
  var V = new Date();
  if (status == 0 && f == 0) {
    cm.dispose();
    return;
  }
  status++;
  selectionLog[status] = e;
  var O = -1;
  if (status <= O++) {
    cm.dispose();
  } else {
    if (status === O++) {
      if (cm.getMapId() == 410000401) {
        cm.Hidden_background("kain_lighton", 1, 1, 0, 0);
        cm.Hidden_background("kain_lightoff", 1, 0, 0, 0);
        if (cm.getJob() == 6300 || cm.getJob() == 6310 || cm.getJob() == 6311 || cm.getJob() == 6312) {
          if (!cm.isQuestFinished(39401) && V.getTime() < 1626156693047) {
            cm.startQuestScript(0, 39401);
          }
        }
      } else {
        if (cm.getMapId() == 410000403) {
          cm.Hidden_background("kain_lighton", 1, 0, 0, 0);
          cm.Hidden_background("kain_lightoff", 1, 1, 0, 0);
        } else {
          if (cm.getMapId() == 410000419) {
            cm.Hidden_background("kain_lighton", 1, 1, 0, 0);
            cm.Hidden_background("kain_lightoff", 1, 0, 0, 0);
            cm.Hidden_background("kain_boaton", 1, 1, 0, 0);
            cm.Hidden_background("kain_boatoff", 1, 0, 0, 0);
          } else {
            if (cm.getMapId() == 410000404) {
              cm.Hidden_background("kain_lighton", 1, 1, 0, 0);
              cm.Hidden_background("kain_lightoff", 1, 0, 0, 0);
              cm.Hidden_background("kain_dooron", 1, 0, 0, 0);
              cm.Hidden_background("kain_dooroff", 1, 1, 0, 0);
            } else {
              if (cm.getMapId() == 410000406) {
                cm.Hidden_background("kain_lighton", 1, 1, 0, 0);
                cm.Hidden_background("kain_lightoff", 1, 0, 0, 0);
                cm.Hidden_background("kain_dooron", 1, 0, 0, 0);
                cm.Hidden_background("kain_dooroff", 1, 1, 0, 0);
              } else {
                if (cm.getMapId() == 410000419) {
                  cm.Hidden_background("kain_lighton", 1, 1, 0, 0);
                  cm.Hidden_background("kain_lightoff", 1, 0, 0, 0);
                  cm.Hidden_background("kain_boaton", 1, 1, 0, 0);
                  cm.Hidden_background("kain_boatoff", 1, 0, 0, 0);
                } else {
                  if (cm.getMapId() == 410000423) {
                    cm.Hidden_background("kain_lighton", 1, 1, 0, 0);
                    cm.Hidden_background("kain_lightoff", 1, 0, 0, 0);
                    cm.Hidden_background('kain_body', 1, 1, 0, 0);
                  } else if (cm.getMapId() == 410000414) {
                    cm.Hidden_background("kain_lighton", 1, 0, 0, 0);
                    cm.Hidden_background("kain_lightoff", 1, 1, 0, 0);
                    cm.Hidden_background("kain_boss", 1, 1, 0, 0);
                  }
                }
              }
            }
          }
        }
      }
      cm.dispose();
    }
  }
}