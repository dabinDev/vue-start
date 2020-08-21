const app=new Vue({
    el:"#app",
    data:{
         books:[
             {
                 id:1,
                 name:"《算法导论》",
                 date:"2006-09",
                 price:85.00,
                 count:1
             },
             {
                id:2,
                name:"《unix编程艺术》",
                date:"2000-08",
                price:127.00,
                count:1
            }, {
                id:3,
                name:"《编程珠玑》",
                date:"2010-03",
                price:95.00,
                count:1
            }, {
                id:4,
                name:"《代码大全》",
                date:"2011-12",
                price:117.00,
                count:1
            }, {
                id:5,
                name:"《计算机原理》",
                date:"2003-05",
                price:99.00,
                count:1
            },
         ] 
    },
    methods: {
        increament(index)
        {
            this.books[index].count++;
        },
        decreament(index)
        {
            let count= this.books[index].count;
            if(count<=1)
            {
                alert("已经减少到最少啦");
                return;
            }
            this.books[index].count--;
        },
        remove(index)
        {
            this.books.splice(index,1);
        }
    },
    computed: {
        totalPrice()
        {
            let totalPrice=0;
            // 数组操作方式
            // 1.普通  for i 循环  for循环
            // for (let index = 0; index < this.books.length; index++) {
            //     let item=this.books[index];
            //     totalPrice+=(item.count*item.price);
            // }

            //2. for in   index 循环 for in循环
            // for (let index in this.books) {
            // let item=this.books[index];
            // totalPrice+=(item.count*item.price);
            // }
            // 3.for of  item循环  for item
            for (const item of this.books) {
             totalPrice+=(item.count*item.price);
            }
            return totalPrice;
        }
    },
})