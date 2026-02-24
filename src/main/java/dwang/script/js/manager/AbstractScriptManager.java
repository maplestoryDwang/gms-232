package dwang.script.js.manager;

import com.sun.tools.xjc.reader.xmlschema.ErrorReporter;
import dwang.script.js.action.AbstractPlayerInteraction;
import net.swordie.ms.client.Account;
import net.swordie.ms.client.character.Char;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.python.apache.commons.io.FileUtils;

import javax.script.Invocable;
import javax.script.ScriptEngine;
import javax.script.ScriptEngineManager;
import java.io.*;
import java.nio.charset.StandardCharsets;
import java.util.HashMap;
import java.util.Map;
import java.util.WeakHashMap;
import java.util.concurrent.atomic.AtomicInteger;

/**
 * @author dwang
 * @version 1.0.0
 * @Title
 * @ClassName AbstractScriptManager.java
 * @Description 控制脚本执行引擎，所有脚本都在这里执行
 * @createTime 2026-02-21 13:55
 */

public abstract class AbstractScriptManager {

    private static final Logger log = LogManager.getLogger(AbstractScriptManager.class);

    /**
     * 脚本引擎
     */
    private final ScriptEngineManager scriptEngineManager = new ScriptEngineManager();

    /**
     * 说话记录
     */
    private Map<Char, AtomicInteger> accountAtomicIntegerMap = new HashMap<>();

    /**
     * 子manager决定什么时候调用
     * @param Account
     * @param scriptPathFile
     * @param templateFile
     * @param ScriptType
     * @param scriptDesc
     * @param var6
     * @param var7
     * @param interaction
     * @param scriptFunName
     * @param param
     * @return
     */
    protected Invocable invokeFun(Account Account, String scriptPathFile, String templateFile, String ScriptType, String scriptDesc, String[] var6, String[] var7, AbstractPlayerInteraction interaction, String scriptFunName, Object... param) {
        Invocable invocable = this.findInvocableByPath(scriptPathFile, Account);
        return this.runScript(Account, invocable, ScriptType, scriptDesc, interaction, scriptFunName, param);

    }

    Invocable runScript(Account client, Invocable invocable, String scriptType, String scriptDesc, AbstractPlayerInteraction interaction, String funName, Object... param) {
        try {

            ScriptEngine var8 = (ScriptEngine)invocable;
            var8.put("im", interaction);
            var8.put("cm", interaction);
            var8.put("ms", interaction);
            var8.put("rm", interaction);
            var8.put("pi", interaction);
            var8.put("qm", interaction);
            invocable.invokeFunction(funName, param);
            return invocable;
        } catch (Throwable var9) {
            this.pringLog(client, var9, scriptType, scriptDesc);
            return null;
        }
    }


    Invocable findInvocableByPath(String path, Account var2) {
        try {
            ScriptEngine scriptEngine = null;
            if (var2 != null) {
                scriptEngine = var2.getScriptEngine(path);
            }

            if (scriptEngine == null) {
                File jsFile = new File(path);

                scriptEngine = this.scriptEngineManager.getEngineByName("nashorn");
                if (var2 != null) {
                    var2.setScriptEngine(path, scriptEngine);
                }

                String var8 = FileUtils.readFileToString(jsFile, StandardCharsets.UTF_8);

                // 解析脚本文件
                scriptEngine.eval(var8);
            }

            return (Invocable)scriptEngine;
        } catch (Throwable var7) {
            this.pringLog(var2, var7, "加载", (new StringBuilder()).insert(0, "路径：").append(path).toString());
            if (var2 != null) {
                var2.removeScriptEngine(path);
            }

            return null;
        }
    }


    void pringLog(Account var1, Throwable var2, String var3, String var4) {
        String errorLog = new StringBuilder().insert(0, var3).append("脚本异常，").append(var4).toString();
        log.error(errorLog);
    }

    public Map<Char, AtomicInteger> getAccountAtomicIntegerMap() {
        return accountAtomicIntegerMap;
    }
}
