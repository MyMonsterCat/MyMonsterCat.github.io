const e=JSON.parse('{"key":"v-7a44e826","path":"/sql/mysql/lock/deadlock.html","title":"MySQL 死锁了，怎么办？","lang":"zh-CN","frontmatter":{"description":"说个很早之前自己遇到过数据库死锁问题。 有个业务主要逻辑就是新增订单、修改订单、查询订单等操作。然后因为订单是不能重复的，所以当时在新增订单的时候做了幂等性校验，做法就是在新增订单记录之前，先通过 select ... for update 语句查询订单是否存在，如果不存在才插入订单记录。 而正是因为这样的操作，当业务量很大的时候，就可能会出现死锁。 ...","head":[["meta",{"property":"og:url","content":"https://monstercat.cn/sql/mysql/lock/deadlock.html"}],["meta",{"property":"og:site_name","content":"MonsterCat"}],["meta",{"property":"og:title","content":"MySQL 死锁了，怎么办？"}],["meta",{"property":"og:description","content":"说个很早之前自己遇到过数据库死锁问题。 有个业务主要逻辑就是新增订单、修改订单、查询订单等操作。然后因为订单是不能重复的，所以当时在新增订单的时候做了幂等性校验，做法就是在新增订单记录之前，先通过 select ... for update 语句查询订单是否存在，如果不存在才插入订单记录。 而正是因为这样的操作，当业务量很大的时候，就可能会出现死锁。 ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-07-04T08:37:54.000Z"}],["meta",{"property":"article:author","content":"Monster"}],["meta",{"property":"article:modified_time","content":"2023-07-04T08:37:54.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"MySQL 死锁了，怎么办？\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-07-04T08:37:54.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Monster\\",\\"url\\":\\"https://monstercat.cn\\",\\"email\\":\\"1264833435@qq.com\\"}]}"]]},"headers":[{"level":2,"title":"死锁的发生","slug":"死锁的发生","link":"#死锁的发生","children":[]},{"level":2,"title":"为什么会产生死锁？","slug":"为什么会产生死锁","link":"#为什么会产生死锁","children":[]},{"level":2,"title":"Insert 语句是怎么加行级锁的？","slug":"insert-语句是怎么加行级锁的","link":"#insert-语句是怎么加行级锁的","children":[{"level":3,"title":"1、记录之间加有间隙锁","slug":"_1、记录之间加有间隙锁","link":"#_1、记录之间加有间隙锁","children":[]},{"level":3,"title":"2、遇到唯一键冲突","slug":"_2、遇到唯一键冲突","link":"#_2、遇到唯一键冲突","children":[]}]},{"level":2,"title":"如何避免死锁？","slug":"如何避免死锁","link":"#如何避免死锁","children":[]}],"git":{"createdTime":1688459874000,"updatedTime":1688459874000,"contributors":[{"name":"Monster","email":"1264833435@qq.com","commits":1}]},"readingTime":{"minutes":19.49,"words":5846},"filePathRelative":"sql/mysql/lock/deadlock.md","localizedDate":"2023年7月4日","autoDesc":true,"excerpt":""}');export{e as data};
