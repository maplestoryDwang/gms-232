function start() {
    if (cm.isQuestFinished(3141)) {
        cm.warp(211060800, 1)
    } else {
        cm.playerMessage(5, "这里的封印力量还很强大，暂时进不去。得先找鲁丹解除封印才行。")
    }
    return true
};