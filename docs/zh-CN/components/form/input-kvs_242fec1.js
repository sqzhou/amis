amis.define('docs/zh-CN/components/form/input-kvs.md', function(require, exports, module, define) {

  module.exports = {
    "title": "InputKVS 键值对象",
    "description": null,
    "type": 0,
    "group": null,
    "menuName": "InputKVS",
    "icon": null,
    "order": 15,
    "html": "<div class=\"markdown-body\"><blockquote>\n<p>2.1.0 及以上版本</p>\n</blockquote>\n<p>这个组件的功能和 <code>input-kv</code> 类似，<code>input-kv</code> 的 value 值只支持一个对象，<code>input-kvs</code> 的最大不同就是 value 支持对象和数组，可以用来支持深层结构编辑</p>\n<h2><a class=\"anchor\" name=\"%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95\" href=\"#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>基本用法</h2></div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n    \"type\": \"form\",\n    \"api\": \"https://3xsw4ap8wah59.cfc-execute.bj.baidubce.com/api/amis-mock/mock2/form/saveForm\",\n    \"debug\": true,\n    \"body\": [\n        {\n            \"type\": \"input-kvs\",\n            \"name\": \"field\",\n            \"addButtonText\": \"新增字段\",\n            \"keyItem\": {\n              \"label\": \"字段名\"\n            },\n            \"valueItems\": [\n                {\n                  \"type\": \"switch\",\n                  \"name\": \"primary\",\n                  \"label\": \"是否是主键\"\n                },\n                {\n                  \"type\": \"select\",\n                  \"name\": \"type\",\n                  \"label\": \"字段类型\",\n                  \"options\": [\n                    \"text\",\n                    \"int\",\n                    \"float\"\n                  ]\n                }\n            ]\n        }\n    ]\n}\n</script></div><div class=\"markdown-body\">\n<p>其中 <code>keyItem</code> 可以用来修改 key 值控件，比如可以改成下拉框</p>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n    \"type\": \"form\",\n    \"api\": \"https://3xsw4ap8wah59.cfc-execute.bj.baidubce.com/api/amis-mock/mock2/form/saveForm\",\n    \"debug\": true,\n    \"body\": [\n        {\n            \"type\": \"input-kvs\",\n            \"name\": \"field\",\n            \"addButtonText\": \"新增字段\",\n            \"keyItem\": {\n              \"label\": \"字段名\",\n              \"type\": \"select\",\n              \"options\": [\n                  \"id\",\n                  \"title\",\n                  \"content\"\n              ]\n            },\n            \"valueItems\": [\n                {\n                  \"type\": \"switch\",\n                  \"name\": \"primary\",\n                  \"label\": \"是否是主键\"\n                },\n                {\n                  \"type\": \"select\",\n                  \"name\": \"type\",\n                  \"label\": \"字段类型\",\n                  \"options\": [\n                    \"text\",\n                    \"int\",\n                    \"float\"\n                  ]\n                }\n            ]\n        }\n    ]\n}\n</script></div><div class=\"markdown-body\">\n<p>而 <code>valueItems</code> 是用来控制值的控件，这里的配置和 combo 的 items 一样，唯一限制是不允许有 <code>&quot;name&quot;: &quot;_key&quot;</code> 值的情况，因为这个值被当成对象 key 了。</p>\n<h2><a class=\"anchor\" name=\"%E6%B0%B4%E5%B9%B3%E6%A8%A1%E5%BC%8F\" href=\"#%E6%B0%B4%E5%B9%B3%E6%A8%A1%E5%BC%8F\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>水平模式</h2><p>通过 <code>&quot;mode&quot;: &quot;horizontal&quot;</code> 设置，需要分别在 <code>keyItem</code> 和 <code>valueItems</code> 里设置</p>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n    \"type\": \"form\",\n    \"api\": \"https://3xsw4ap8wah59.cfc-execute.bj.baidubce.com/api/amis-mock/mock2/form/saveForm\",\n    \"debug\": true,\n    \"body\": [\n        {\n            \"type\": \"input-kvs\",\n            \"name\": \"field\",\n            \"addButtonText\": \"新增字段\",\n            \"keyItem\": {\n              \"label\": \"字段名\",\n              \"mode\": \"horizontal\"\n            },\n            \"valueItems\": [\n                {\n                  \"type\": \"switch\",\n                  \"name\": \"primary\",\n                  \"mode\": \"horizontal\",\n                  \"label\": \"是否是主键\"\n                },\n                {\n                  \"type\": \"select\",\n                  \"name\": \"type\",\n                  \"label\": \"字段类型\",\n                  \"mode\": \"horizontal\",\n                  \"options\": [\n                    \"text\",\n                    \"int\",\n                    \"float\"\n                  ]\n                }\n            ]\n        }\n    ]\n}\n</script></div><div class=\"markdown-body\">\n<h2><a class=\"anchor\" name=\"%E5%B5%8C%E5%A5%97%E7%9A%84%E5%9C%BA%E6%99%AF\" href=\"#%E5%B5%8C%E5%A5%97%E7%9A%84%E5%9C%BA%E6%99%AF\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>嵌套的场景</h2><p><code>valueItems</code> 可以进一步嵌套，比如里面又嵌一个 <code>input-kvs</code> 实现深层结构编辑</p>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n    \"type\": \"form\",\n    \"api\": \"https://3xsw4ap8wah59.cfc-execute.bj.baidubce.com/api/amis-mock/mock2/form/saveForm\",\n    \"debug\": true,\n    \"body\": [\n        {\n            \"type\": \"input-kvs\",\n            \"name\": \"dataModel\",\n            \"addButtonText\": \"新增表\",\n            \"keyItem\": {\n              \"label\": \"表名\",\n              \"mode\": \"horizontal\",\n               \"type\": \"select\",\n              \"options\": [\n                  \"table1\",\n                  \"table2\",\n                  \"table3\"\n              ]\n            },\n            \"valueItems\": [\n                {\n                  \"type\": \"input-kvs\",\n                  \"addButtonText\": \"新增字段\",\n                  \"name\": \"column\",\n                  \"keyItem\": {\n                    \"label\": \"字段名\",\n                    \"mode\": \"horizontal\",\n                    \"type\": \"select\",\n                    \"options\": [\n                        \"id\",\n                        \"title\",\n                        \"content\"\n                    ]\n                  },\n                  \"valueItems\": [\n                      {\n                        \"type\": \"switch\",\n                        \"name\": \"primary\",\n                        \"mode\": \"horizontal\",\n                        \"label\": \"是否是主键\"\n                      },\n                      {\n                        \"type\": \"select\",\n                        \"name\": \"type\",\n                        \"label\": \"字段类型\",\n                        \"mode\": \"horizontal\",\n                        \"options\": [\n                          \"text\",\n                          \"int\",\n                          \"float\"\n                        ]\n                      }\n                  ]\n              }\n            ]\n        }\n    ]\n}\n</script></div><div class=\"markdown-body\">\n<p>前面的嵌套会多一个层级，如果想去掉这个层级 <code>column</code>，可以将 <code>&quot;name&quot;: &quot;column&quot;</code> 改成 <code>&quot;name&quot;: &quot;_value&quot;</code>，这时值就会直接放入</p>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n    \"type\": \"form\",\n    \"api\": \"https://3xsw4ap8wah59.cfc-execute.bj.baidubce.com/api/amis-mock/mock2/form/saveForm\",\n    \"debug\": true,\n    \"body\": [\n        {\n            \"type\": \"input-kvs\",\n            \"name\": \"dataModel\",\n            \"addButtonText\": \"新增表\",\n            \"keyItem\": {\n              \"label\": \"表名\",\n              \"mode\": \"horizontal\",\n               \"type\": \"select\",\n              \"options\": [\n                  \"table1\",\n                  \"table2\",\n                  \"table3\"\n              ]\n            },\n            \"valueItems\": [\n                {\n                  \"type\": \"input-kvs\",\n                  \"addButtonText\": \"新增字段\",\n                  \"name\": \"_value\",\n                  \"keyItem\": {\n                    \"label\": \"字段名\",\n                    \"mode\": \"horizontal\",\n                    \"type\": \"select\",\n                    \"options\": [\n                        \"id\",\n                        \"title\",\n                        \"content\"\n                    ]\n                  },\n                  \"valueItems\": [\n                      {\n                        \"type\": \"switch\",\n                        \"name\": \"primary\",\n                        \"mode\": \"horizontal\",\n                        \"label\": \"是否是主键\"\n                      },\n                      {\n                        \"type\": \"select\",\n                        \"name\": \"type\",\n                        \"label\": \"字段类型\",\n                        \"mode\": \"horizontal\",\n                        \"options\": [\n                          \"text\",\n                          \"int\",\n                          \"float\"\n                        ]\n                      }\n                  ]\n              }\n            ]\n        }\n    ]\n}\n</script></div><div class=\"markdown-body\">\n<p>除了前面的对象，值也可以是数组，需要配置一下 <code>valueIsArray</code></p>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n    \"type\": \"form\",\n    \"api\": \"https://3xsw4ap8wah59.cfc-execute.bj.baidubce.com/api/amis-mock/mock2/form/saveForm\",\n    \"debug\": true,\n    \"body\": [\n        {\n            \"type\": \"input-kvs\",\n            \"name\": \"dataModel\",\n            \"addButtonText\": \"新增表\",\n            \"valueIsArray\": true,\n            \"keyItem\": {\n              \"label\": \"表名\",\n              \"mode\": \"horizontal\",\n              \"type\": \"select\",\n              \"options\": [\n                  \"table1\",\n                  \"table2\",\n                  \"table3\"\n              ]\n            },\n            \"valueItems\": [\n              {\n                type: 'checkboxes',\n                name: '_value',\n                joinValues: false,\n                extractValue: true,\n                options: [\n                  {\n                    label: '查询',\n                    value: 'select'\n                  },\n                  {\n                    label: '写入',\n                    value: 'insert'\n                  },\n                  {\n                    label: '更新',\n                    value: 'update'\n                  },\n                  {\n                    label: '删除',\n                    value: 'delete'\n                  }\n                ]\n              }\n\n            ]\n        }\n    ]\n}\n</script></div><div class=\"markdown-body\">\n</div>",
    "toc": {
      "label": "目录",
      "type": "toc",
      "children": [
        {
          "label": "基本用法",
          "fragment": "%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95",
          "fullPath": "#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95",
          "level": 2
        },
        {
          "label": "水平模式",
          "fragment": "%E6%B0%B4%E5%B9%B3%E6%A8%A1%E5%BC%8F",
          "fullPath": "#%E6%B0%B4%E5%B9%B3%E6%A8%A1%E5%BC%8F",
          "level": 2
        },
        {
          "label": "嵌套的场景",
          "fragment": "%E5%B5%8C%E5%A5%97%E7%9A%84%E5%9C%BA%E6%99%AF",
          "fullPath": "#%E5%B5%8C%E5%A5%97%E7%9A%84%E5%9C%BA%E6%99%AF",
          "level": 2
        }
      ],
      "level": 0
    }
  };

});