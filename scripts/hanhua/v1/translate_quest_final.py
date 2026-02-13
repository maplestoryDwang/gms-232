import os
import re
import json
from pathlib import Path
import ast


# ==================== 步骤1: 提取任务文件夹下所有JS文件的中文内容 ====================

def extract_function_body(content, func_name):
    """
    提取指定函数的内容,处理嵌套大括号
    """
    # 查找函数开始位置
    pattern = rf'function\s+{func_name}\s*\([^)]*\)\s*\{{'
    match = re.search(pattern, content)
    if not match:
        return None

    start_pos = match.end()

    # 找到函数结束位置
    brace_count = 0
    i = start_pos - 1  # 从第一个{开始
    while i < len(content):
        if content[i] == '{':
            brace_count += 1
        elif content[i] == '}':
            brace_count -= 1
            if brace_count == 0:
                return content[start_pos:i]
        i += 1

    return None


def extract_js_strings(folder_path):
    chinese_dict = {}

    for filename in os.listdir(folder_path):
        if not filename.endswith('.js'):
            continue

        quest_id = filename.replace('.js', '')
        filepath = os.path.join(folder_path, filename)

        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()

        texts = []

        for m in JS_DIALOG_PATTERN.finditer(content):
            text = m.group(2)

            # 反转义
            text = (
                text.replace('\\n', '\n')
                .replace('\\r', '\r')
                .replace('\\t', '\t')
                .replace('\\"', '"')
                .replace("\\'", "'")
            )

            if not text.strip():
                continue

            if is_chinese_text(text):
                texts.append(text)

        if texts:
            chinese_dict[quest_id] = {
                'start': texts,  # status 任务统一塞 start
                'end': []
            }

    return chinese_dict


def extract_js_strings(folder_path):
    """
    提取任务文件夹下所有JS文件的双引号和单引号内容,保留顺序
    只提取start和end函数的内容,跳过stage0等辅助函数
    过滤掉空字符串
    返回格式: {任务ID: {'start': [内容列表], 'end': [内容列表]}}
    """
    chinese_dict = {}

    # 匹配双引号内容
    double_quote_pattern = re.compile(r'"([^"\\]*(?:\\.[^"\\]*)*)"')
    # 匹配单引号内容
    single_quote_pattern = re.compile(r"'([^'\\]*(?:\\.[^'\\]*)*)'")

    for filename in os.listdir(folder_path):
        if not filename.endswith('.js'):
            continue

        filepath = os.path.join(folder_path, filename)
        quest_id = filename.replace('.js', '')

        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()

            # 提取start和end函数
            start_body = extract_function_body(content, 'start')
            end_body = extract_function_body(content, 'end')

            start_texts = []
            end_texts = []

            # 提取start函数中的字符串
            if start_body:
                double_matches = double_quote_pattern.findall(start_body)
                single_matches = single_quote_pattern.findall(start_body)
                matches = double_matches + single_matches

                for text in matches:
                    # 去除转义字符
                    text = text.replace('\\n', '\n').replace('\\r', '\r').replace('\\t', '\t').replace('\\"',
                                                                                                       '"').replace(
                        "\\'", "'")

                    # 跳过空字符串或只含空白的字符串
                    if not text.strip():
                        continue

                    # 检查是否是中文文本
                    if is_chinese_text(text):
                        start_texts.append(text)

            # 提取end函数中的字符串
            if end_body:
                double_matches = double_quote_pattern.findall(end_body)
                single_matches = single_quote_pattern.findall(end_body)
                matches = double_matches + single_matches

                for text in matches:
                    # 去除转义字符
                    text = text.replace('\\n', '\n').replace('\\r', '\r').replace('\\t', '\t').replace('\\"',
                                                                                                       '"').replace(
                        "\\'", "'")

                    # 跳过空字符串或只含空白的字符串
                    if not text.strip():
                        continue

                    # 检查是否是中文文本
                    if is_chinese_text(text):
                        end_texts.append(text)

            if start_texts or end_texts:
                chinese_dict[quest_id] = {
                    'start': start_texts,
                    'end': end_texts
                }

    return chinese_dict


def is_chinese_text(text):
    """
    剧情脚本专用中文判断（Maple 安全版）
    """

    clean = text

    # 1️⃣ 移除颜色 / 样式码（只有 #b #k #r #e 本身）
    clean = re.sub(r'#([brke])', '', clean)

    # 2️⃣ 移除带参数的对象码（#p123# #m123# #t123# 等）
    clean = re.sub(r'#([pmot])\d+#', '', clean)

    # 3️⃣ 移除菜单控制符
    clean = re.sub(r'#L\d+#', '', clean)
    clean = re.sub(r'#l', '', clean)

    clean = clean.strip()
    if not clean:
        return False

    # 4️⃣ 只要 ≥2 个中文字符，直接认定是中文剧情
    chinese_chars = re.findall(r'[\u4e00-\u9fff]', clean)
    return len(chinese_chars) >= 2


def is_chinese_text_old(text):
    """
    判断文本是否主要是中文
    """
    # 去除格式代码 - 只匹配完整的格式代码,如 #b#, #r#, #k#, #p123#, #m123#, #o123#, #t123#, #L123#, #e 等
    # 格式代码格式: # + (单个字母或数字组合) + #
    clean_text = re.sub(r'#[brke][^#]*#', '', text)  # #b#, #r#, #k#, #e# (可能带有参数)
    clean_text = re.sub(r'#[pmot][0-9]+#', '', clean_text)  # #p123#, #m123#, #o123#, #t123#
    clean_text = re.sub(r'#[L][0-9]+#', '', clean_text)  # #L123#
    clean_text = re.sub(r'#l', '', clean_text)  # #l

    # 如果文本太短或为空,跳过
    if len(clean_text.strip()) < 2:
        return False

    # 检查中文比例
    chinese_chars = len(re.findall(r'[\u4e00-\u9fff]', clean_text))
    total_chars = len(clean_text.strip())

    if total_chars == 0:
        return False

    chinese_ratio = chinese_chars / total_chars

    # # 中文比例>50%认为是中文文本
    # return chinese_ratio > 0.5
    # 只要 ≥2 个中文，直接认为是中文
    return chinese_chars >= 2


# ==================== 步骤2: 提取quest文件夹下所有Python文件的双引号内容 ====================

def extract_py_strings(folder_path):
    py_strings = {}

    valid_methods = {'sendNext', 'sendOk', 'sendSay', 'sendSayOkay', 'sendAskYesNo', 'sayNext', 'sayOk',
                     'askYesNo', 'askAccept', 'askMenu', 'askAvatar', 'sayImage',
                     'askText', 'askSlider', 'askNumber', 'askQuiz', 'askBoxText',
                     'askAction', 'chatScript', 'sendAskAccept'}

    for filename in os.listdir(folder_path):
        if not filename.endswith('.py') or filename == '__init__.py':
            continue

        filepath = os.path.join(folder_path, filename)
        with open(filepath, 'r', encoding='utf-8') as f:
            source = f.read()

        try:
            tree = ast.parse(source)
        except SyntaxError:
            continue

        matches = []

        class Visitor(ast.NodeVisitor):
            def visit_Call(self, node):
                if (
                        isinstance(node.func, ast.Attribute)
                        and isinstance(node.func.value, ast.Name)
                        and node.func.value.id == 'sm'
                        and node.func.attr in valid_methods
                        and node.args
                ):
                    text = eval_string_node(node.args[0])
                    if text.strip():
                        segment = ast.get_source_segment(source, node)
                        if segment:
                            matches.append({
                                'method': node.func.attr,
                                'text': text,
                                'node': node,
                                'segment': segment
                            })
                self.generic_visit(node)

        Visitor().visit(tree)

        if matches:
            py_strings[filename] = matches

    return py_strings


# 旧版，当前是第三版
def extract_py_strings_v2(folder_path):
    py_strings = {}

    valid_methods = {'sendNext', 'sendOk', 'sendSay', 'sayNext', 'sayOk',
                     'askYesNo', 'askAccept', 'askMenu', 'askAvatar', 'sayImage',
                     'askText', 'askSlider', 'askNumber', 'askQuiz', 'askBoxText',
                     'askAction', 'chatScript', 'sendAskAccept'}

    for filename in os.listdir(folder_path):
        if not filename.endswith('.py') or filename == '__init__.py':
            continue

        filepath = os.path.join(folder_path, filename)
        with open(filepath, 'r', encoding='utf-8') as f:
            source = f.read()

        try:
            tree = ast.parse(source)
        except SyntaxError:
            continue

        matches = []

        class Visitor(ast.NodeVisitor):
            def visit_Call(self, node):
                if (
                        isinstance(node.func, ast.Attribute)
                        and isinstance(node.func.value, ast.Name)
                        and node.func.value.id == 'sm'
                        and node.func.attr in valid_methods
                        and node.args
                ):
                    text = eval_string_node(node.args[0])
                    if text:
                        matches.append((node.func.attr, text))
                self.generic_visit(node)

        Visitor().visit(tree)

        if matches:
            py_strings[filename] = matches

    return py_strings


def eval_string_node(node):
    """
    安全解析 Python 字符串表达式：
    - "a" "b"
    - "a" + "b"
    - "a" + str(x) + "b"  -> 只保留字符串部分
    """
    if isinstance(node, ast.Constant) and isinstance(node.value, str):
        return node.value

    if isinstance(node, ast.BinOp) and isinstance(node.op, ast.Add):
        left = eval_string_node(node.left)
        right = eval_string_node(node.right)
        return (left or '') + (right or '')

    return ''


# ==================== 步骤3: 简化的顺序匹配策略 ====================

def get_quest_id_from_py_filename(filename):
    """
    从Python文件名提取任务ID和类型
    例如: q1401s.py -> (1401, 's')
    """
    name = filename.replace('q', '').replace('.py', '')
    quest_type = 'start'
    if name.endswith('s'):
        name = name[:-1]
        quest_type = 'start'
    elif name.endswith('e'):
        name = name[:-1]
        quest_type = 'end'
    return name, quest_type


def match_and_replace(py_strings, chinese_dict, quest_folder, output_folder):
    output_path = Path(output_folder)
    output_path.mkdir(parents=True, exist_ok=True)

    results = []
    mismatched_files = []

    for filename, matches in py_strings.items():
        quest_id, quest_type = get_quest_id_from_py_filename(filename)

        if quest_id not in chinese_dict:
            continue

        chinese_texts = chinese_dict[quest_id].get(quest_type, [])

        if len(matches) != len(chinese_texts):
            mismatched_files.append({
                'file': filename,
                'quest_id': quest_id,
                'quest_type': quest_type,
                'py_count': len(matches),
                'chinese_count': len(chinese_texts)
            })

        max_replace = min(len(matches), len(chinese_texts))

        input_path = os.path.join(quest_folder, filename)
        with open(input_path, 'r', encoding='utf-8') as f:
            content = f.read()

        new_content = content

        for i in range(max_replace):
            item = matches[i]
            chinese = chinese_texts[i]

            # 转义为 Python 字符串形式
            chinese_escaped = (
                chinese
                .replace('\\', '\\\\')
                .replace('"', '\\"')
                .replace('\r\n', '\\r\\n')
                .replace('\n', '\\n')
                .replace('\r', '\\r')
            )

            old_call = item['segment']

            # 找到 call 中的第一个参数源码
            arg_src = ast.get_source_segment(content, item['node'].args[0])
            if not arg_src:
                continue

            new_call = old_call.replace(
                arg_src,
                f'"{chinese_escaped}"',
                1
            )

            if old_call in new_content:
                new_content = new_content.replace(old_call, new_call, 1)

                results.append({
                    'file': filename,
                    'method': item['method'],
                    'original': item['text'],
                    'translated': chinese,
                    'index': i
                })

        if new_content != content:
            out_path = os.path.join(output_folder, filename)
            with open(out_path, 'w', encoding='utf-8') as f:
                f.write(new_content)

    return results, mismatched_files


def match_and_replace_v2(py_strings, chinese_dict, quest_folder, output_folder):
    """
    执行匹配和替换
    规则：
    - Python 条数 > 中文条数：不替换，只记录 mismatch
    - Python 条数 <= 中文条数：按顺序替换
    """
    output_path = Path(output_folder)
    output_path.mkdir(parents=True, exist_ok=True)

    results = []
    mismatched_files = []

    for filename, matches in py_strings.items():
        quest_id, quest_type = get_quest_id_from_py_filename(filename)

        if quest_id not in chinese_dict:
            continue

        chinese_texts = chinese_dict[quest_id].get(quest_type, [])

        py_count = len(matches)
        cn_count = len(chinese_texts)

        # 数量不一致，记录
        if py_count != cn_count:
            mismatched_files.append({
                'file': filename,
                'quest_id': quest_id,
                'quest_type': quest_type,
                'py_count': py_count,
                'chinese_count': cn_count
            })

        # ✅ Python 多于中文：直接跳过，不替换
        if py_count > cn_count:
            continue

        # 开始替换（py_count <= cn_count）
        input_filepath = os.path.join(quest_folder, filename)
        with open(input_filepath, 'r', encoding='utf-8') as f:
            content = f.read()

        replaced = False

        for i in range(py_count):
            method, py_text = matches[i]
            chinese_text = chinese_texts[i]

            chinese_text_escaped = (
                chinese_text
                .replace('\\', '\\\\')
                .replace('\r\n', '\\r\\n')
                .replace('\n', '\\n')
                .replace('\r', '\\r')
                .replace('"', '\\"')
            )

            # ⚠️ AST 没有 full_line，只能用“字符串内容替换”
            if py_text in content:
                content = content.replace(
                    f'"{py_text}"',
                    f'"{chinese_text_escaped}"',
                    1
                )
                replaced = True

                results.append({
                    'file': filename,
                    'method': method,
                    'original': py_text,
                    'translated': chinese_text,
                    'chinese_index': i
                })

        if replaced:
            output_filepath = os.path.join(output_folder, filename)
            with open(output_filepath, 'w', encoding='utf-8') as f:
                f.write(content)

    return results, mismatched_files


# ==================== 主函数 ====================

def main():
    quest_folder = r'e:\oldmxd\gms232\swordie-232\scripts\quest'
    quest_out_folder = r'e:\oldmxd\gms232\swordie-232\scripts\quest'
    # quest_out_folder = r'e:\oldmxd\gms232\swordie-232\scripts\quest_out'
    task_folder = r'e:\oldmxd\gms232\swordie-232\scripts\任务'
    output_file = r'/chinese_reference_dict.json'
    result_file = r'/translation_results.json'
    mismatch_file = r'/mismatched_files.json'

    print("=" * 60)
    print("步骤1: 提取任务文件夹下所有JS文件的中文内容...")
    print("=" * 60)

    chinese_dict = extract_js_strings(task_folder)

    total_texts = sum(len(texts) for texts in chinese_dict.values())
    print(f"共提取到 {len(chinese_dict)} 个任务, {total_texts} 条中文内容")

    # 保存到文件
    with open(output_file, 'w', encoding='utf-8') as f:
        json.dump(chinese_dict, f, ensure_ascii=False, indent=2)

    print(f"已保存到: {output_file}")

    print("\n" + "=" * 60)
    print("步骤2: 提取quest文件夹下所有Python文件的双引号内容...")
    print("=" * 60)

    py_strings = extract_py_strings(quest_folder)

    total_py_texts = sum(len(matches) for matches in py_strings.values())
    print(f"共提取到 {len(py_strings)} 个文件, {total_py_texts} 条待翻译内容")

    print("\n" + "=" * 60)
    print("步骤3: 执行匹配和替换,输出到quest_out文件夹...")
    print("=" * 60)

    results, mismatched_files = match_and_replace(py_strings, chinese_dict, quest_folder, quest_out_folder)

    print(f"共替换 {len(results)} 条内容")
    print(f"已输出到: {quest_out_folder}")
    print(f"共有 {len(mismatched_files)} 个文件数量不匹配,需要手动处理")

    # 保存结果
    with open(result_file, 'w', encoding='utf-8') as f:
        json.dump(results, f, ensure_ascii=False, indent=2)

    with open(mismatch_file, 'w', encoding='utf-8') as f:
        json.dump(mismatched_files, f, ensure_ascii=False, indent=2)

    print(f"结果已保存到: {result_file}")
    print(f"不匹配文件列表已保存到: {mismatch_file}")

    print("\n替换示例(前20条):")
    for i, r in enumerate(results[:20]):
        print(f"\n[{i + 1}] 文件: {r['file']}, 中文索引: {r['index']}")
        print(f"    方法: {r['method']}")
        print(f"    原文: {r['original'][:80]}{'...' if len(r['original']) > 80 else ''}")
        print(f"    译文: {r['translated'][:80]}{'...' if len(r['translated']) > 80 else ''}")

    # 统计各文件替换数量
    if results:
        file_counts = {}
        for r in results:
            file_counts[r['file']] = file_counts.get(r['file'], 0) + 1
        print(f"\n替换最多的10个文件:")
        for file, count in sorted(file_counts.items(), key=lambda x: x[1], reverse=True)[:10]:
            print(f"  {file}: {count} 条")

    # 显示不匹配的文件
    if mismatched_files:
        print(f"\n数量不匹配的文件(前20个):")
        for i, m in enumerate(mismatched_files[:20]):
            print(f"  {i + 1}. {m['file']}: Python有{m['py_count']}条, 中文有{m['chinese_count']}条")

    print("\n" + "=" * 60)
    print("完成!")
    print("=" * 60)


if __name__ == '__main__':
    main()
