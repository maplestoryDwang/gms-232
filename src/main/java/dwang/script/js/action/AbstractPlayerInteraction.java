package dwang.script.js.action;

import dwang.script.js.api.NpcAPI;
import dwang.script.js.action.npc.NpcController;
import net.swordie.ms.client.Account;
import net.swordie.ms.client.character.Char;


/**
 * @author dwang
 * @date 2026/2/21
 * @description 传入脚本的JAVA对象。
 */
public abstract class AbstractPlayerInteraction implements NpcAPI {
    protected final int questId;
    private static final NpcController controller = new NpcController();
    protected final Account mapleClient;
    protected final int npcId;
    protected final String script;

    public AbstractPlayerInteraction(Account account, String scriptPath) {
        this.mapleClient = account;
        this.script = scriptPath;
        this.npcId = 0;
        this.questId = 0;
    }



   public AbstractPlayerInteraction(Account client, String script, int npcId, int questId) {
        this.mapleClient = client;
        this.script = script;
        this.npcId = npcId;
        this.questId = questId;
    }

    @Override
    public Account getClient() {
        return mapleClient;
    }

    @Override
    public int getNpc() {
        return npcId;
    }

    @Override
    public NpcController getNpcController() {
        return controller;
    }

    @Override
    public int getQuest() {
        return questId;
    }

    @Override
    public String getScript() {
        return script;
    }

    @Override
    public Char getPlayer() {
        return mapleClient.getCurrentChr();
    }

}
