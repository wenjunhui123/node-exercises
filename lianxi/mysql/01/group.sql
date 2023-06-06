-- 计算出经济管理类的书籍总共有多少本
SELECT COUNT(*) as "经济管理总数" from book where cataory = '经济管理';
-- 找出阅读量最大的值
SELECT MAX(viewcount) from book;
-- 找出阅读量最小的值
SELECT MIN(viewcount) from book;
-- 查看网站总的阅读量
SELECT SUM(viewcount) from book;
-- 查看网站的平均阅读量
SELECT AVG(viewcount) from book;
-- 查看每个分类的书籍数量
SELECT count(*) ,cataory from book GROUP BY cataory;
-- 查看每个分类下书籍的总阅读量
SELECT SUM(viewcount) ,cataory from book GROUP BY cataory;
-- 查看每个分类下的书籍的平均阅读量
SELECT AVG(viewcount) , cataory from book Group by cataory;
-- 每个分类里书籍的最大阅读量
SELECT MAX(viewcount) , cataory from book Group by cataory;
-- 每个分类里书籍的最大阅读量，经济管理的最大阅读量是多少
SELECT MAX(viewcount) , cataory from book GROUP BY cataory HAVING cataory = "经济管理";
SELECT * from book where viewcount = 19603;

-- 查找
SELECT * from room where username = "李艳芳"
SELECT * from room where username = "吴玉峰"

SELECT count(*) from room where username = "陈鹏"
SELECT * from room where Address = "日本"

select count(*) , gender from room  GROUP BY gender;
