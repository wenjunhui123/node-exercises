-- 查所有学生的语文成绩
SELECT score.id,student.studentname,score.score,project FROM score
 INNER JOIN student on student.id = score.stuid 
 INNER JOIN project on project.id = score.projectid 
 WHERE project.project = "语文"

 -- 自关联查询
-- id，area，parentAreaId
-- 1 , 广东省，0
-- 2 , 广州市，1
-- 3 , 梅州市，1
-- 4 , 白云区，2
-- 5 ，天河区，2
-- 广东省，广州市，天河区

-- 找出广东省里的所有市
SELECT * from region where name = "广东省";
-- 1将2张表关联（同一张表）
SELECT r1.id,r1.name as "省份",r2.name as "市区" from region as r1
INNER JOIN region as r2
on r1.id = r2.pid
where r1.name = "广东省";

-- 注意：上下级关系包含，公司的层级关系，游戏里帮派层级关系

-- 找出年龄小于20岁的学生成绩
SELECT studentname from student where studentage < 20;


-- 如果有学生大于50岁才将老师查找出来,EXISTS条件查找，存在exists后面的查询内容，才执行前面的查找。
SELECT * from teacher where EXISTS (SELECT studentname from student where studentage > 50)
