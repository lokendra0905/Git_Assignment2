// checl if 9 is prime number or not
let count=0;
let arr=[1,2,3,4,5,6,7,8,9,]
for (i=1;i<=arr.length;i++){
    if(arr[arr.length-1]%arr[arr.length-1]==0&&arr[arr.length-1]%1==0)
    count++;
}if(count==2){
    console.log("Prime");
}else {
    console.log("Not Prime");
}