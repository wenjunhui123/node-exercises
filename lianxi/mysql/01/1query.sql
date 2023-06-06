-- 查询11000 - 10000阅读量
SELECT * from book where viewcount > 10000 and viewcount < 11000;
-- 查询50000-55000的阅读量
SELECT * from book where viewcount between 50000 and 55000;
-- 查询分类为经济管理的书籍
SELECT * from book where cataory = '经济管理';
-- 查询出版社不等于空字符串的内容
SELECT * from book WHERE pubcompany != '';
SELECT * from book where pubcompany = "";
-- 查询猫腻和唐家三少的书籍
SELECT * from book where author = '猫腻' or author = '唐家三少';
SELECT * from book where author in ('猫腻','唐家三少');
-- 书名和股票相关的
SELECT * from book where bookname like '%股票%';

-- 知道总共5个字符书名，前面2个是股票
SELECT * from book where bookname like '股票__';
-- 找出5分以下的书籍
SELECT * from book where score < 6;
SELECT * from book where score between 0 and 5;

-- 查找邮箱为空的内容
SELECT * from user where mail is NULL;
-- 查找邮箱为非空的内容
SELECT * from user where mail is not NULL;