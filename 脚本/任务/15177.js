var status = -1;
var selectionLog = [];

function start(d, c, b) {
    if (status == 0 && d == 0) {
        cm.dispose();
        return
    }
    status++;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status === a++) {
            cm.sendNormalTalk("你好啊？我是#b休彼德蔓#k，呵呵。", 4, 9071000, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("最近#b怪物公园#k变得有些无聊呢，\r\n借此机会，我用全新的主题进行了全新包装！\n名字就叫#b<怪物公园REBORN(重生)>！！#k哈哈哈！", 4, 9071000, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("怎么样？光听名字是不是就觉得超有趣的？\r\n如果你想知道详细的情况，可以随时来#b怪物公园#k找我~！", 4, 9071000, true, true)
                } else {
                    if (status === a++) {
                        cm.forceCompleteQuest(15177);
                        cm.dispose()
                    }
                }
            }
        }
    }
};