import{_,X as i,Y as a,$ as l,a0 as t,Z as n,a2 as e,D as s}from"./framework-0ece11a6.js";const d={},m=l("h1",{id:"mysql介绍",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#mysql介绍","aria-hidden":"true"},"#"),t(" MySQL介绍")],-1),c={href:"https://xiaolincoding.com/mysql/",target:"_blank",rel:"noopener noreferrer"},h=l("p",null,"目前已经更新好的文章：",-1),r=l("p",null,[l("strong",null,"基础篇"),t("👇")],-1),q=l("p",null,[l("strong",null,"索引篇"),t(" 👇")],-1),f=l("p",null,[l("strong",null,"事务篇"),t(" 👇")],-1),y=l("p",null,[l("strong",null,"锁篇"),t(" 👇")],-1),p=l("p",null,[l("strong",null,"日志篇"),t(" 👇")],-1),x=l("p",null,[l("strong",null,"内存篇"),t(" 👇")],-1),k=l("hr",null,null,-1);function L(g,Q){const u=s("ExternalLinkIcon"),o=s("RouterLink");return i(),a("div",null,[m,l("p",null,[t("本文非原创，转自"),l("a",c,[t("小林Coding-《图解MySQL》"),n(u)]),t("，部分地方结合自己的理解与网上的资料可能有所更改，不做另行说明！")]),h,l("ul",null,[l("li",null,[r,l("ul",null,[l("li",null,[n(o,{to:"/sql/mysql/base/how_select.html"},{default:e(()=>[t("执行一条 SQL 查询语句，期间发生了什么？")]),_:1})]),l("li",null,[n(o,{to:"/sql/mysql/base/row_format.html"},{default:e(()=>[t("MySQL 一行记录是怎么存储的？")]),_:1})])])]),l("li",null,[q,l("ul",null,[l("li",null,[n(o,{to:"/sql/mysql/index/index_interview.html"},{default:e(()=>[t("索引常见面试题")]),_:1})]),l("li",null,[n(o,{to:"/sql/mysql/index/page.html"},{default:e(()=>[t("从数据页的角度看 B+ 树")]),_:1})]),l("li",null,[n(o,{to:"/sql/mysql/index/why_index_chose_bpuls_tree.html"},{default:e(()=>[t("为什么 MySQL 采用 B+ 树作为索引？")]),_:1})]),l("li",null,[n(o,{to:"/sql/mysql/index/2000w.html"},{default:e(()=>[t("MySQL 单表不要超过 2000W 行，靠谱吗？")]),_:1})]),l("li",null,[n(o,{to:"/sql/mysql/index/index_lose.html"},{default:e(()=>[t("索引失效有哪些？")]),_:1})]),l("li",null,[n(o,{to:"/sql/mysql/index/index_issue.html"},{default:e(()=>[t("MySQL 使用 like “%x“，索引一定会失效吗？")]),_:1})]),l("li",null,[n(o,{to:"/sql/mysql/index/count.html"},{default:e(()=>[t("count(*) 和 count(1) 有什么区别？哪个性能最好？")]),_:1})])])]),l("li",null,[f,l("ul",null,[l("li",null,[n(o,{to:"/sql/mysql/transaction/mvcc.html"},{default:e(()=>[t("事务隔离级别是怎么实现的？")]),_:1})]),l("li",null,[n(o,{to:"/sql/mysql/transaction/phantom.html"},{default:e(()=>[t("MySQL 可重复读隔离级别，完全解决幻读了吗？")]),_:1})])])]),l("li",null,[y,l("ul",null,[l("li",null,[n(o,{to:"/sql/mysql/lock/mysql_lock.html"},{default:e(()=>[t("MySQL 有哪些锁？")]),_:1})]),l("li",null,[n(o,{to:"/sql/mysql/lock/how_to_lock.html"},{default:e(()=>[t("MySQL 是怎么加锁的？")]),_:1})]),l("li",null,[n(o,{to:"/sql/mysql/lock/update_index.html"},{default:e(()=>[t("update 没加索引会锁全表?")]),_:1})]),l("li",null,[n(o,{to:"/sql/mysql/lock/lock_phantom.html"},{default:e(()=>[t("MySQL 记录锁+间隙锁可以防止删除操作而导致的幻读吗？")]),_:1})]),l("li",null,[n(o,{to:"/sql/mysql/lock/deadlock.html"},{default:e(()=>[t("MySQL 死锁了，怎么办？")]),_:1})]),l("li",null,[n(o,{to:"/sql/mysql/lock/show_lock.html"},{default:e(()=>[t("字节面试：加了什么锁，导致死锁的？")]),_:1})])])]),l("li",null,[p,l("ul",null,[l("li",null,[n(o,{to:"/sql/mysql/log/how_update.html"},{default:e(()=>[t("undo log、redo log、binlog 有什么用？")]),_:1})])])]),l("li",null,[x,l("ul",null,[l("li",null,[n(o,{to:"/sql/mysql/buffer_pool/buffer_pool.html"},{default:e(()=>[t("揭开 Buffer_Pool 的面纱")]),_:1})])]),k])])])}const M=_(d,[["render",L],["__file","index.html.vue"]]);export{M as default};
