package dwang.script;

import net.swordie.ms.client.character.Char;
import net.swordie.ms.life.Life;
import net.swordie.ms.life.npc.NpcMessageType;
import net.swordie.ms.scripts.ScriptInfo;
import net.swordie.ms.scripts.ScriptType;
import net.swordie.ms.world.field.Field;

import javax.script.Bindings;
import javax.script.CompiledScript;
import javax.script.ScriptException;
import java.util.Map;

/**
 * @author 橘子
 * @date 2026/2/26
 * @description 脚本包装器
 */
public interface IScriptEngineWrap {


    /**
     * 获取脚本路径
     *
     * @return
     */
    String genScriptDirAndEngine(Char chr, Map<String, CompiledScript> scriptCache, ScriptInfo si);

    /**
     * 构建脚本
     *
     * @param scriptCache
     * @param dir
     * @return
     */
    String buildScriptStr(Map<String, CompiledScript> scriptCache, String dir);

    /**
     * 构建参数绑定
     * @return
     */
    Bindings buildScriptBindings(Bindings oldBinding, ScriptType scriptType, Char chr, Field scriptFiled, ScriptInfo si, Life scriptReactor, boolean scriptQuestTag, Map<String, Object> customBindings);

    /**
     * 执行脚本
     *
     */
    void evalAndRunStart(Map<String, CompiledScript> scriptCache, String scriptStr, ScriptInfo si) throws ScriptException;

    /**
     * 执行脚本后续方法
     * @param si
     * @param lastType
     * @param response
     * @param answer
     * @param text
     */
    void runAction(ScriptInfo si, NpcMessageType lastType, byte response, int answer, String text);


    /**
     * 停止
     * @param scriptType
     */
    void stop(ScriptType scriptType);

}
