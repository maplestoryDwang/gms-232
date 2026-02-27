package dwang.script;

import dwang.script.py.api.PyCharacterStatAPI;
import net.swordie.ms.client.character.Char;
import net.swordie.ms.life.Life;
import net.swordie.ms.life.npc.Npc;
import net.swordie.ms.scripts.ScriptInfo;
import net.swordie.ms.scripts.ScriptMemory;
import net.swordie.ms.scripts.ScriptType;
import net.swordie.ms.util.Util;
import net.swordie.ms.world.field.Field;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

/**
 * @author dwang
 * @date 2026/2/27
 * @description 获取基本信息，其他脚本接口需要使用的方法
 */
public interface DwangScriptBaseApi {


    Logger log = LogManager.getLogger(DwangScriptBaseApi.class);

    /**
     * 显示日志
     * @param text
     */
    void chat(String text);
    ScriptInitData getInitData();
    ScriptMemory getMemory();
    ScriptType getLastActiveScriptType();
    ScriptInfo getScriptInfoByType(ScriptType scriptType);
    public int getObjectIDByScriptType(ScriptType scriptType);

    public void stop(ScriptType scriptType);

    Char getChr();
    Field getField();
    int getFieldID();
    int getParentID();
    ScriptType getScriptType();
    int getObjID();


    /**
     * 其他API需要用。API之间不要继承
     */

    default Object invoke(Object invokeOn, String methodName, Object... args) {
        List<Class<?>> classList = Arrays.stream(args).map(Object::getClass).collect(Collectors.toList());
        Class<?>[] classes = classList.stream().map(Util::convertBoxedToPrimitiveClass).toArray(Class<?>[]::new);
        Method func;
        try {
            func = getClass().getMethod(methodName, classes);
            return func.invoke(invokeOn, args);
        } catch (NoSuchMethodException | IllegalAccessException | InvocationTargetException e) {
            e.printStackTrace();
        }
        return null;
    }




}
