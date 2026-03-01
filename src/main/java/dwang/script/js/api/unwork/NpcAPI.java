package dwang.script.js.api.unwork;

import dwang.script.DwangScriptBaseApi;

public interface NpcAPI extends DwangScriptBaseApi {

    default void onViewOrHide(String npcTag, int bView, int bViewNameTag) { }

    default void playNpcEff(int id) { }

    default void onSetNpcScript(String npcTag, int b1, Object scripts, Object params) { }

    default void npc_SetSpecialAction(int npcid, String action) { }

    default void disableNPC(Object ids) { }

    default void sendStorage() { }

    default void npcSetSize(String npcTag, int value0, int value1) { }

    default void removeNpc(int mapId, int npcId) { }

    default void npc_SetSpecialAction(String npcTag, String action, int time, int special) { }

    default void spawnNpc(int npcId) { }

    default void openNpc(int npc, int mode) { }

    default void npc_LeaveField(String npcTag) { }

    default void npc_ChangeController(int npcid, String npcTag, int x, int y, int faceLeft, int canMove, int forceSpawnNew) { }

    default void openNpc(String filename) { }

    default void npc_ChangeController(int npcid, int x, int y) { }

    default void openNpc(Object client, int npc, int mode, String filename) { }

    default void npc_ChangeController(int npcid, String npcTag, int x, int y, int fh, int rx0, int rx1, int faceLeft, int canMove, int fadeInTime, int forceSpawnNew, Object avatar) { }

    default void removeNpc(int npcId) { }

    default void spawnNpc(int npcId, int x, int y) { }

    default void npc_setForceFlip(String npcTag, int value) { }

    default void spawnNpc(int npcId, Object pos) { }

    default void npc_ChangeController(int npcid, String npcTag, int x, int y, int faceLeft, int canMove) { }

    default void npc_ChangeController(int npcid, String npcTag, int x, int y, int faceLeft) { }

    default void npc_ChangeController(int npcid, String npcTag, int x, int y, int fh, int rx0, int rx1, int faceLeft, int canMove, int forceSpawnNew) { }

    default void npc_ChangeController(int npcid, String npcTag, int x, int y, int fh, int rx0, int rx1, int faceLeft, int canMove, int fadeInTime, int forceSpawnNew) { }

    default void npcMove(int npc, int x, int y, int 移动时间) { }

    default void npc_ChangeController(int npcid, int x, int y, int faceLeft) { }

    default void openShop(int id) { }

    default void hideNpc(int npcId) { }

    default void setNPC_Fadein(int npcId, int fadeIn) { }

    default void npc_ChangeController(int npcid, String npcTag, int x, int y, int faceLeft, int canMove, int forceSpawnNew, Object avatar) { }

    default void npc_SetForceMove(String npcTag, int direction, int distance, int speed) { }

    default void openShopNPC(int id) { }

    default void npc_SetSpecialAction(String npcTag, String action, int i) { }

    default void Npc_Fadeout(String npcTag, int value0, int value1) { }

    default void setNPCNoticeBoardInfo(String npcTag, int nNoticeBoardType, int nNoticeBoardValue) { }

    default void setNpcSpecialActionReset(String npcTag) { }

}
