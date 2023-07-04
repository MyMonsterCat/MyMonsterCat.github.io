const e=JSON.parse('{"key":"v-7b048594","path":"/sql/mysql/lock/how_to_lock.html","title":"MySQL 是怎么加锁的？","lang":"zh-CN","frontmatter":{"description":"是不是很多人都对 MySQL 加行级锁的规则搞的迷迷糊糊，对记录一会加的是 next-key 锁，一会加是间隙锁，一会又是记录锁。 坦白说，确实还挺复杂的，但是好在我找点了点规律，也知道如何如何用命令分析加了什么类型的行级锁。 之前我写过一篇关于「MySQL 是怎么加行级锁的？」的文章，随着我写 MySQL 锁相关的文章越来越多时，后来发现当时的文章写...","head":[["meta",{"property":"og:url","content":"https://monstercat.cn/sql/mysql/lock/how_to_lock.html"}],["meta",{"property":"og:site_name","content":"MonsterCat"}],["meta",{"property":"og:title","content":"MySQL 是怎么加锁的？"}],["meta",{"property":"og:description","content":"是不是很多人都对 MySQL 加行级锁的规则搞的迷迷糊糊，对记录一会加的是 next-key 锁，一会加是间隙锁，一会又是记录锁。 坦白说，确实还挺复杂的，但是好在我找点了点规律，也知道如何如何用命令分析加了什么类型的行级锁。 之前我写过一篇关于「MySQL 是怎么加行级锁的？」的文章，随着我写 MySQL 锁相关的文章越来越多时，后来发现当时的文章写..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-07-04T08:37:54.000Z"}],["meta",{"property":"article:author","content":"Monster"}],["meta",{"property":"article:modified_time","content":"2023-07-04T08:37:54.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"MySQL 是怎么加锁的？\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-07-04T08:37:54.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Monster\\",\\"url\\":\\"https://monstercat.cn\\",\\"email\\":\\"1264833435@qq.com\\"}]}"]]},"headers":[{"level":2,"title":"什么 SQL 语句会加行级锁？","slug":"什么-sql-语句会加行级锁","link":"#什么-sql-语句会加行级锁","children":[]},{"level":2,"title":"行级锁有哪些种类？","slug":"行级锁有哪些种类","link":"#行级锁有哪些种类","children":[{"level":3,"title":"Record Lock","slug":"record-lock","link":"#record-lock","children":[]},{"level":3,"title":"Gap Lock","slug":"gap-lock","link":"#gap-lock","children":[]},{"level":3,"title":"Next-Key Lock","slug":"next-key-lock","link":"#next-key-lock","children":[]}]},{"level":2,"title":"MySQL 是怎么加行级锁的？","slug":"mysql-是怎么加行级锁的","link":"#mysql-是怎么加行级锁的","children":[{"level":3,"title":"唯一索引等值查询","slug":"唯一索引等值查询","link":"#唯一索引等值查询","children":[]},{"level":3,"title":"唯一索引范围查询","slug":"唯一索引范围查询","link":"#唯一索引范围查询","children":[]},{"level":3,"title":"非唯一索引等值查询","slug":"非唯一索引等值查询","link":"#非唯一索引等值查询","children":[]},{"level":3,"title":"非唯一索引范围查询","slug":"非唯一索引范围查询","link":"#非唯一索引范围查询","children":[]},{"level":3,"title":"没有加索引的查询","slug":"没有加索引的查询","link":"#没有加索引的查询","children":[]}]},{"level":2,"title":"总结","slug":"总结","link":"#总结","children":[]}],"git":{"createdTime":1688459874000,"updatedTime":1688459874000,"contributors":[{"name":"Monster","email":"1264833435@qq.com","commits":1}]},"readingTime":{"minutes":45.42,"words":13627},"filePathRelative":"sql/mysql/lock/how_to_lock.md","localizedDate":"2023年7月4日","autoDesc":true,"excerpt":""}');export{e as data};
