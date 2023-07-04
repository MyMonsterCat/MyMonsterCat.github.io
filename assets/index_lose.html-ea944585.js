const e=JSON.parse('{"key":"v-57acc7f3","path":"/sql/mysql/index/index_lose.html","title":"索引失效有哪些？","lang":"zh-CN","frontmatter":{"description":"在工作中，如果我们想提高一条语句查询速度，通常都会想对字段建立索引。 但是索引并不是万能的。建立了索引，并不意味着任何查询语句都能走索引扫描。 稍不注意，可能你写的查询语句是会导致索引失效，从而走了全表扫描，虽然查询的结果没问题，但是查询的性能大大降低。 今天就来跟大家盘一盘，常见的 6 种会发生索引失效的场景。 不仅会用实验案例给大家说明，也会清楚每...","head":[["meta",{"property":"og:url","content":"https://monstercat.cn/sql/mysql/index/index_lose.html"}],["meta",{"property":"og:site_name","content":"MonsterCat"}],["meta",{"property":"og:title","content":"索引失效有哪些？"}],["meta",{"property":"og:description","content":"在工作中，如果我们想提高一条语句查询速度，通常都会想对字段建立索引。 但是索引并不是万能的。建立了索引，并不意味着任何查询语句都能走索引扫描。 稍不注意，可能你写的查询语句是会导致索引失效，从而走了全表扫描，虽然查询的结果没问题，但是查询的性能大大降低。 今天就来跟大家盘一盘，常见的 6 种会发生索引失效的场景。 不仅会用实验案例给大家说明，也会清楚每..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-07-04T08:37:54.000Z"}],["meta",{"property":"article:author","content":"Monster"}],["meta",{"property":"article:modified_time","content":"2023-07-04T08:37:54.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"索引失效有哪些？\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-07-04T08:37:54.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Monster\\",\\"url\\":\\"https://monstercat.cn\\",\\"email\\":\\"1264833435@qq.com\\"}]}"]]},"headers":[{"level":2,"title":"索引存储结构长什么样？","slug":"索引存储结构长什么样","link":"#索引存储结构长什么样","children":[]},{"level":2,"title":"对索引使用左或者左右模糊匹配","slug":"对索引使用左或者左右模糊匹配","link":"#对索引使用左或者左右模糊匹配","children":[]},{"level":2,"title":"对索引使用函数","slug":"对索引使用函数","link":"#对索引使用函数","children":[]},{"level":2,"title":"对索引进行表达式计算","slug":"对索引进行表达式计算","link":"#对索引进行表达式计算","children":[]},{"level":2,"title":"对索引隐式类型转换","slug":"对索引隐式类型转换","link":"#对索引隐式类型转换","children":[]},{"level":2,"title":"联合索引非最左匹配","slug":"联合索引非最左匹配","link":"#联合索引非最左匹配","children":[]},{"level":2,"title":"WHERE 子句中的 OR","slug":"where-子句中的-or","link":"#where-子句中的-or","children":[]},{"level":2,"title":"总结","slug":"总结","link":"#总结","children":[]}],"git":{"createdTime":1688459874000,"updatedTime":1688459874000,"contributors":[{"name":"Monster","email":"1264833435@qq.com","commits":1}]},"readingTime":{"minutes":16.03,"words":4809},"filePathRelative":"sql/mysql/index/index_lose.md","localizedDate":"2023年7月4日","autoDesc":true,"excerpt":""}');export{e as data};
