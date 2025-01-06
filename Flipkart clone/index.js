let arr=[{img_src:'grocery.webp',
title:'Grocery'},
{
    img_src:"mobile.webp",title:'Mobile'
},
{
    img_src:"fashion.webp",title:'Fashion'
},
{
    img_src:"electronics.webp",title:'Electronics'
},
{
    img_src:"home&furniture.webp",title:'Home&Furniture',
    href:"",
},
{
    img_src:"appliances.webp",title:'Appliances'
},
{
    img_src:"travel.webp",title:'Travel'
},
{
    img_src:"beauty toy&more.webp",title:'Mobile,Toys &More'
},
{
    img_src:"two wheelers.webp",title:'Two Wheelers'
}
]
arr.map((element)=>{
    let image=document.createElement('img');
    image.src=element.img_src;
    let title=document.createElement('p');
    title.innerHTML=element.title;
    let box=document.createElement('div');
    box.append(image,title);
    document.getElementById('categories').append(box);

})



