var Config = [{
    "label": "每页显示个数",
    "setting": "menu/page_size",
    "description": "每页显示候选词的个数",
    "type": "number"
}, {
    "label": "字体设定",
    "setting": "style/font_face",
    "description": "设定显示界面的字体样式",
    "type": "text"
}, {
    "label": "字号设定",
    "setting": "style/font_point",
    "description": "设定显示界面的字体大小",
    "type": "number"
}, {
    "label": "候选标签的字体设定",
    "setting": "style/label_font_face",
    "description": " 设定候选界面中标签的字体样式",
    "type": "text",
}, {
    "label": "候选标签的字号设定",
    "setting": "style/label_font_point",
    "description": " 设定候选界面中标签的字体大小",
    "type": "number",
}, {
    "label": "显示方式",
    "setting": "style/horizontal",
    "description": "设定候选栏显示方式",
    "type": "select",
    "selection": { "true": "候选横排", "false": "候选直排" }
}, {
    "label": "候选词间行距",
    "setting": "style/line_spacing",
    "description": " 设定候选词间行距",
    "type": "number",
}, {
    "label": "内嵌编码显示",
    "setting": "style/inline_preedit",
    "description": "<待验证> 是否显示内嵌编码（仅支持TSF）",
    "type": "select",
    "selection": { "true": "显示", "false": "不显示" }
}, {
    "label": "托盘图标",
    "setting": "style/display_tray_icon",
    "description": " 是否显示托盘图标",
    "type": "select",
    "selection": { "true": "显示", "false": "不显示" }
}, {
    "label": "选项菜单的文字",
    "setting": "switcher/caption",
    "description": "按快捷键F4时，出现选项菜单的标题",
    "type": "text",
}, {
    "label": "Caps Lock切换的功能",
    "setting": "ascii_composer/good_old_caps_lock",
    "description": "用法见https://gist.github.com/lotem/2981316",
    "type": "select",
    "selection": { "true": "true", "false": "false" }
}, {
    "label": "Caps Lock键的功能",
    "setting": "ascii_composer/switch_key/Caps_Lock",
    "description": "用法见https://gist.github.com/lotem/2981316",
    "type": "select",
    "selection": {
        "inline_ascii": "inline_ascii",
        "commit_text": "已输入的候选文字上屏并切换至西文输入模式",
        "commit_code": "已输入的编码字符上屏并切换至西文输入模式",
        "noop": "屏蔽该切换键 ",
    },
}];
