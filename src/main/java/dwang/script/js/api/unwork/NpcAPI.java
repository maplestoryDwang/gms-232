package dwang.script.js.api.unwork;

import dwang.script.DwangScriptBaseApi;
import net.swordie.ms.connection.packet.NpcPool;
import net.swordie.ms.life.Life;
import net.swordie.ms.life.npc.Npc;
import net.swordie.ms.loaders.NpcData;
import net.swordie.ms.util.Position;
import net.swordie.ms.world.field.Field;
import net.swordie.ms.world.field.Foothold;

import java.awt.*;

public interface NpcAPI extends DwangScriptBaseApi {

    /**
     * @出自类 NpcAPI
     */
    default void disableNPC(Object ids) {
    }


    /**
     * 给当前地图隐藏指定NPC
     *
     * @param npcId
     * @出自类 NpcAPI
     */
    default void hideNpc(int npcId) {
    }


    /**
     * @出自类 NpcAPI
     */
    default void npc_ChangeController(int npcid, int x, int y) {
        this.npc_ChangeController(npcid, (String) null, x, y, 0);
    }


    /**
     * @出自类 NpcAPI
     */
    default void npc_ChangeController(int npcid, int x, int y, int faceLeft) {
        this.npc_ChangeController(npcid, (String) null, x, y, faceLeft, true, false);

    }


    /**
     * @出自类 NpcAPI
     */
    default void npc_ChangeController(int npcid, String npcTag, int x, int y, int faceLeft) {
        this.npc_ChangeController(npcid, npcTag, x, y, faceLeft, true, false);
    }


    /**
     * @出自类 NpcAPI
     */
    default void npc_ChangeController(int npcid, String npcTag, int x, int y, int faceLeft, boolean canMove) {
        this.npc_ChangeController(npcid, npcTag, x, y, faceLeft, true, false);
    }


    /**
     * @出自类 NpcAPI
     */
    default void npc_ChangeController(int npcid, String npcTag, int x, int y, int faceLeft, boolean canMove, boolean forceSpawnNew) {

        Foothold fh = getField().findFootHoldBelow(new Position(x, y));
        short foothold = (short) fh.getId();


        this.npc_ChangeController(npcid, npcTag, x, y, foothold, (short) (x - 50), (short) (x + 50), faceLeft, canMove, (short) 0, forceSpawnNew);
    }


    /**
     * @出自类 NpcAPI
     */
    default void npc_ChangeController(int npcid, String npcTag, int x, int y, int faceLeft, boolean canMove, boolean forceSpawnNew, Object avatar) {
    }


    /**
     * @出自类 NpcAPI
     */
    default void npc_ChangeController(int npcid, String npcTag, int x, int y, short fh, short rx0, short rx1, int faceLeft, boolean canMove, boolean forceSpawnNew) {
        npc_ChangeController(npcid, npcTag, x, y, fh, rx0, rx1, faceLeft, canMove, (short) 0, forceSpawnNew);
    }


    /**
     * 召唤
     *
     * @出自类 NpcAPI
     */
    default void npc_ChangeController(int npcId, String npcTag, int x, int y, short fh, short rx0, short rx1, int faceLeft, boolean canMove, short fadeInTime, boolean forceSpawnNew) {
        Npc npc = NpcData.getNpcDeepCopyById(npcId);

        if (npc != null) {
            npc.setPosition(new Position(x, y));
            npc.setCy(y);
            npc.setMove(canMove);
            npc.setRx0(rx0);
            npc.setRx1(rx1);
            npc.setFlip(faceLeft == 0);
            npc.setFh(fh);
            npc.setObjectId(NpcData.getCount());
            npc.setNotRespawnable(true);
            npc.setCustomTag(npcTag);

            getField().spawnLife(npc, getChr());


        }
    }


    /**
     * 取得NPC控制权，或者创建一个虚假NPC
     *
     * @param npcid         NPC的ID，不存在则不会召唤
     * @param npcTag        NPC的标签，用于区分多个相同ID。如果不为 null 则一定会创建新虚假NPC。如果为 null
     *                      则会检查是否已有相同NPC，有则获取其控制权。
     *                      <p>
     *                      <p>
     *                      为了避免混淆，请不要使用数字标签。
     * @param x             坐标
     * @param y             坐标
     * @param fh            落脚平台
     * @param rx0           可移动X坐标左边界
     * @param rx1           可移动X坐标右边界
     * @param faceLeft      朝向
     * @param canMove       是否可以移动
     * @param fadeInTime    出现时的淡入时间
     * @param forceSpawnNew 是否总是创建新NPC
     * @param avatar        自定义外观组件
     * @出自类 NpcAPI
     */
    default void npc_ChangeController(int npcid, String npcTag, int x, int y, int fh, int rx0, int rx1, int faceLeft, int canMove, int fadeInTime, int forceSpawnNew, Object avatar) {

    }


    /**
     * NPC淡出
     *
     * @param npcTag
     * @param value0
     * @param value1
     * @出自类 NpcAPI
     */
    default void Npc_Fadeout(String npcTag, int value0, int value1) {
    }


    /**
     * 移除由 npc_ChangeController() 控制的NPC
     *
     * @param npcTag NPC的标签，用于区分多个相同ID。
     * @出自类 NpcAPI
     * @see #npc_ChangeController(int npcid, String npcTag, int x, int y, int f)
     */
    default void npc_LeaveField(String npcTag) {
        Field field = getField();
        Life npc = field.getLifeByCustomTag(npcTag);

        if (npc instanceof Npc) {
            getField().removeLife(npc);
        }
    }


    /**
     * NPC翻转
     *
     * @param npcTag
     * @param value
     * @出自类 NpcAPI
     */
    default void npc_setForceFlip(String npcTag, int value) {
    }


    /**
     * 命令由 npc_ChangeController() 控制的NPC进行移动
     *
     * @param npcTag    NPC的标签，用于区分多个相同ID。
     * @param direction 方向，1=右，-1=左
     * @param distance  移动距离
     * @param speed     移动速度
     * @出自类 NpcAPI
     */
    default void npc_SetForceMove(String npcTag, int direction, int distance, int speed) {
        Field field = getField();
        Life life = field.getLifeByCustomTag(npcTag);
        // 1 = right movement,  -1 = left movement
        boolean left = direction == -1;

        getChr().write(NpcPool.npcSetForceMove(life.getObjectId(), left, distance, speed));


    }


    /**
     * @出自类 NpcAPI
     */
    default void npc_SetSpecialAction(int npcid, String action) {
        this.npc_SetSpecialAction(Integer.toString(npcid), action, 0, (byte) 0);

    }


    /**
     * @出自类 NpcAPI
     */
    default void npc_SetSpecialAction(String npcTag, String action, byte i) {
        this.npc_SetSpecialAction(npcTag, action, 0, i);

    }

    default void npc_SetSpecialAction(int npcTag, String action, byte i) {
        this.npc_SetSpecialAction(Integer.toString(npcTag), action, 0, i);
    }


    /**
     * 改变由 npc_ChangeController() 控制的NPC的状态
     *
     * @param npcTag  NPC的标签，用于区分多个相同ID。
     * @param action  动作，默认为 summon，具体的要看wz里的设置。
     * @param time    持续时间，单位 ms -1=永久
     * @param special 0=播放1次 1=循环播放
     * @出自类 NpcAPI
     */
    default void npc_SetSpecialAction(String npcTag, String action, int time, byte special) {


        Field field = getField();
        Life life = field.getLifeByCustomTag(npcTag);
        if (!(life instanceof Npc)) {
            log.error(String.format("[showNpcSpecialActionByTemplateId] npc %s is null or not an instance of Npc", npcTag));
            return;
        }
        getChr().write(NpcPool.npcSetSpecialAction2(life.getObjectId(), action, time, special));
    }


    /**
     * 强制移动NPC位置，无视任意落脚点，出现于好友故事音乐比赛、塞尔提乌等
     *
     * @param npc
     * @param x    相对变动X坐标
     * @param y    相对变动Y坐标
     * @param 移动时间 0=不变 其他=移动到指定地点耗时
     * @出自类 NpcAPI
     */
    default void npcMove(int npc, int x, int y, int 移动时间) {
    }


    /**
     * NPC体型变化
     *
     * @param npcTag
     * @param value0
     * @param value1
     * @出自类 NpcAPI
     */
    default void npcSetSize(String npcTag, int value0, int value1) {
    }


    /**
     * 设置Npc脚本
     *
     * @param npcTag
     * @param b1
     * @param scripts
     * @param params
     * @出自类 NpcAPI
     */
    default void onSetNpcScript(String npcTag, int b1, Object scripts, Object params) {
    }


    /**
     * @出自类 NpcAPI
     */
    default void onViewOrHide(String npcTag, int bView, int bViewNameTag) {
    }


    /**
     * 给玩家触发指定的对话脚本
     * <p>
     * <p>
     * NPCID=0，模式=0
     *
     * @param filename 加载 特殊/[filename].js
     * @出自类 NpcAPI
     */
    default void openNpc(String filename) {
    }


    /**
     * 给玩家触发指定NPC的对话脚本
     *
     * @param npc  NPC的ID
     * @param mode 数值型子脚本，拼接成 npc_mode 的完整脚本
     * @出自类 NpcAPI
     */
    default void openNpc(int npc, int mode) {
    }


    /**
     * @出自类 NpcAPI
     */
    default void openNpc(Object client, int npc, int mode, String filename) {
    }


    /**
     * 打开商店
     *
     * @出自类 NpcAPI
     */
    default void openShop(int id) {
    }


    /**
     * @出自类 NpcAPI
     */
    default void openShopNPC(int id) {
    }


    /**
     * 跟NPC有关的未知操作，出现于蘑菇城 -----更新 165
     *
     * @param id NPC ID
     * @return
     * @出自类 NpcAPI
     */
    default void playNpcEff(int id) {
    }


    /**
     * 移除当前地图的指定NPC。会在地图重置、重载后重新出现。
     *
     * @param npcId
     * @出自类 NpcAPI
     */
    default void removeNpc(int npcId) {
    }


    /**
     * 移除指定地图的指定NPC。会在地图重置、重载后重新出现。
     *
     * @param mapId 地图
     * @param npcId
     * @出自类 NpcAPI
     */
    default void removeNpc(int mapId, int npcId) {
    }


    /**
     * 打开仓库
     *
     * @出自类 NpcAPI
     */
    default void sendStorage() {
    }


    /**
     * NPC淡入
     *
     * @param fadeIn
     * @出自类 NpcAPI
     */
    default void setNPC_Fadein(int npcId, int fadeIn) {
    }


    /**
     * @出自类 NpcAPI
     */
    default void setNPCNoticeBoardInfo(String npcTag, int nNoticeBoardType, int nNoticeBoardValue) {
    }


    /**
     * NPC动作重置
     *
     * @param npcTag
     * @出自类 NpcAPI
     */
    default void setNpcSpecialActionReset(String npcTag) {
    }


    /**
     * 召唤NPC，位于当前位置
     *
     * @param npcId
     * @出自类 NpcAPI
     */
    default void spawnNpc(int npcId) {
    }


    /**
     * 召唤NPC
     *
     * @param npcId
     * @param pos   坐标
     * @出自类 NpcAPI
     */
    default void spawnNpc(int npcId, Object pos) {
    }


    /**
     * 召唤NPC
     *
     * @param npcId
     * @param x
     * @param y
     * @出自类 NpcAPI
     */
    default void spawnNpc(int npcId, int x, int y) {
    }


}
