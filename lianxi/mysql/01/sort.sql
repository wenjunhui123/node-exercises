SELECT * from book ORDER BY viewcount DESC LIMIT 0,20;
-- 查找阅读量前十的书籍，实际上是从大到小，limit后面跟查找的起始位置，获取多少条数据
SELECT * from book ORDER BY viewcount DESC LIMIT 0,10;
-- 将分类里的最大阅读量进行排序
SELECT MAX(viewcount) , cataory from book GROUP BY cataory ORDER BY MAX(viewcount) DESC;
-- 查找阅读量倒数前十的书籍，实际上是正着书从小到大
SELECT * from book ORDER BY viewcount ASC LIMIT 0,10;
-- 通过分值进行分类，计算不同分值的书本数量
SELECT count(*) , score from book GROUP BY score ORDER BY count(*) desc;
-- 不同类别数据得分的平均值并排序
SELECT AVG(score),cataory from book GROUP BY cataory ORDER BY AVG(score) DESC;
-- 不同类别书籍得分的平均值并排序，并取前面3条数据
SELECT AVG(score),cataory from book GROUP BY cataory ORDER BY AVG(score) desc limit 0,3;
-- 找出出版书籍前十的出版社
SELECT count(*),pubcompany from book WHERE pubcompany != '' GROUP BY pubcompany ORDER BY COUNT(*) desc LIMIT 0,10;