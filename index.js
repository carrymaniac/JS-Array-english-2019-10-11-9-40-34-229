// The writer determines whether the following variables are of type array.
var a = '[a, b, c, d]';
var b = [1, 2, 3, 4];
//TODO
console.log("variables a :"+(a instanceof Array))
console.log("variables b :"+(b instanceof Array))



// Write a program that multiplies each entry in the following array by 2。
var a = [1, 2, 3, 4, 5];
// TODO should output [2,4,6,8,10]
function multiplies(num){
    return num*2
}
console.log(a.map(multiplies))

// Write the program, according to the following requirements output results.
var colors = ["Red", "Green", "White", "Black"];
//TODO case 1 output: 'Red Green White Black'
// case 2 output: 'Red+Green+White+Black'
// case 3 output: 'Red,Green,White,Black'
console.log(colors.join(" "))
console.log(colors.join("+"))
console.log(colors.join(","))



// Write a program to sort the Numbers in the following array from largest to smallest.
var a = [5, 1, 8, 10, 4];
//TODO should output: [10,8,5,4,1]
a = a.sort(function(a,b){
    if(a>b){
        return -1
    }else if (a==b){
        return 0
    }else{
        return 1
    }
})
console.log(a)


// Program to find the most frequent element in the following array.
var a = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
//TODO should output: 'a'
a = a.sort()
//结果元素
var result = ""
//结果元素的最大值
var max = 0
//当前元素的数量 
var now = 0
//当前元素
var t = a[0]

for(let j = 0;j<a.length;j++){
    //若遍历的值和当前元素相同，当前元素的数量++即可
    if(a[j]==t){
        now++;
    }else{
        //不相同，和当前的最大值进行比较
        console.log("第"+j+"次循环，此时到达元素"+a[j]+",result值为"+result+"max值为"+max)
        result = now>max?t:result
        max = now>max?now:max
        //重置t和now
        t = a[j]
        now = 1
    }
}
//检查一下最后一次的值
result = now>max?t:result
max = now>max?now:max
console.log(result)