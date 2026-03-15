var status = -1;
var selectionLog = [];
function start() {
    action(1, 0, 0);
}
function action(d, c, b) {
    if (status == 0 && d == 0) {
        cm.dispose();
        return;
    }
    d == 1 ? status++ : status--;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose();
    } else {
        if (status === a++) {
            if (cm.isQuestFinished(34218)) {
                cm.askYesNo_Bottom('#b穆托#k…我现在吃饱了…#b需要我动动吗#k…？\r\n\r\n（如果穆托让路，就能沿着神秘河畔，前往下一地区了。）#k', 0, 3003165);
            } else {
                cm.getTopMsgFont('完成<啾啾岛>后才可以继续。', 3, 20, 20, 0);
                cm.dispose();
            }
        } else {
            if (status === a++) {
				if(cm.getLevel()<220){
					cm.getTopMsgFont('等级不足220无法继续前行。', 3, 20, 20, 0);
					cm.warp(450002000, 0);
					cm.dispose();
					
				}
                if (!cm.isQuestFinished(34331)) {
                    cm.dispose();
                    cm.warp(450003700, 0);
                } else {
                    cm.dispose();
                    cm.warp(450003000, 0);
                }
            } else {
                cm.dispose();
            }
        }
    }
}